import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cam_position } from './cam_position.js'
import { scene_axe, plight_pos, box_helper } from './scene_helper.js'
import { create_body } from './create_body.js';

// Affichage des FPS
var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
stats.begin();

// Création de la scène
const scene = new THREE.Scene();
console.log(scene); // DEBUG
scene_axe(scene); // DEBUG

// Création de la caméra
const fov = 75;
const aspect = (window.innerWidth / 2) / (window.innerHeight / 2);
const near = 0.001;
const far = 1000000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.x = 0;
camera.position.y = 1500;
camera.position.z = 0;

// Création du rendu
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)
document.querySelector('#main').appendChild(renderer.domElement);

// Lumière ambiante du soleil (effet abat-jour sur le soleil)
const ambient = new THREE.AmbientLight(0x222222); // https://sbcode.net/threejs/ambient-light/
scene.add(ambient);

// Lumière émise par le soleil dans toutes les directions
const plight = new THREE.PointLight(0xffffff, 2); // https://sbcode.net/threejs/point-light/
scene.add(plight);
plight_pos(plight, scene); // DEBUG

// OrbitControls: rotation (clic gauche), zoom de la caméra (scroll), déplacement (clic droit)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true; // Activer la fonction de zoom
controls.enableRotate = true; // Activer la fonction de rotation
controls.enableDamping = true; // Activer la fonction de translation

// Créer la texture du background
const back_ground_texture = new THREE.CubeTextureLoader().load([
    './visualisation_3d/js/textures/milky_way/px.jpg',
    './visualisation_3d/js/textures/milky_way/nx.jpg',
    './visualisation_3d/js/textures/milky_way/py.jpg',
    './visualisation_3d/js/textures/milky_way/ny.jpg',
    './visualisation_3d/js/textures/milky_way/pz.jpg',
    './visualisation_3d/js/textures/milky_way/nz.jpg',
]);
scene.background = back_ground_texture;

// Tableau des objets ajoutés dans la scène, exporté vers ./interface.js
export const all_group = [];
// Création des objets (orbites, corps, lunes)
create_body(scene).then(celestial_body => {
    all_group.push(celestial_body.all_group);
    // Ajout du groupe contenant les objets THREE dans la scène
    scene.add(celestial_body.all_group);
}).catch(error => {
    console.log(error);
})

let tracking;
let tracking_group;

export function tracking_interuptor(orbiter_group) {
    // Si le groupe est identique sélectionné est le même que précédemment alors on désactive le tracking.
    if (tracking_group === orbiter_group) {
        if (tracking === true) {
            tracking_group = null;
            orbiter_group.remove(camera);
            controls.enableDamping = true;
            tracking = false;
        }
        else {
            tracking_group = orbiter_group;
            orbiter_group.add(camera);
            controls.enableDamping = false;
            tracking = true;
        }
    }
    else {
        if (tracking_group) {
            tracking_group.remove(camera);
        }
        tracking_group = orbiter_group;
        orbiter_group.add(camera);
        controls.enableDamping = false;
        tracking = true;
    }
    controls.update();
};


function follow_body(camera, group) {
    // Pointez la caméra vers le corps suivi
    camera.lookAt(group.position);
}


////////////////////////////////////////////////////////
// ----------------- Animation ---------------------- //
////////////////////////////////////////////////////////

// Création d'une horloge
const clock = new THREE.Clock();

animate();
function animate() {
    requestAnimationFrame(animate);

    // mise a jour de l'affichage des FPS
    stats.update();

    // Affichage de la position de la caméra
    cam_position(camera);

    TWEEN.update();

    // Determiner la durée d'une année, puis l'utiliser pour adapter la vitesse de rotation des corps sur leur axe
    if (all_group[0]) {
        for (let i = 0; i < all_group[0].children.length; i++) {
            const corps_group = all_group[0].children[i];
            // Animation du soleil
            if (corps_group.name === "Sun_group") {
                corps_group.rotation.y += 0.01;
            }
            // Animations des autres corps (en orbite)
            else {
                for (let y = 0; y < corps_group.children.length; y++) {
                    const corps_group_child = corps_group.children[y];

                    if (corps_group_child.isGroup === true) {
                        // Désignation du groupe a faire orbiter
                        const orbiter_group = corps_group_child
                        const mesh = orbiter_group.children[0]
                        if (mesh.data.sideral_orbit) {

                            const elapsed_time = clock.getElapsedTime(); // Temps écoulé en secondes
                            
                            // Calculez la rotation en utilisant un modulo pour assurer une rotation continue
                            const rotation_angle = (2 * Math.PI * elapsed_time) / mesh.data.sideral_rotation;
                            mesh.rotation.y = rotation_angle % (2 * Math.PI);

                            const vitesse_orbite = (2 * Math.PI) / mesh.data.sideral_orbit;
                            // Calculez l'index précédent et suivant dans le tableau des positions
                            let position_index = Math.floor((elapsed_time * vitesse_orbite) * 100) % ((orbiter_group.anim_coord.length / 3) - 1);

                            const prev_index = position_index;
                            const next_index = (position_index + 1) % 303;

                            // Obtenez les coordonnées XYZ correspondantes à partir de "positions"
                            const positions = orbiter_group.anim_coord;
                            const prev_x = positions[prev_index * 3];
                            const prev_y = positions[prev_index * 3 + 1];
                            const prev_z = positions[prev_index * 3 + 2];
                        
                            const next_x = positions[next_index * 3];
                            const next_y = positions[next_index * 3 + 1];
                            const next_z = positions[next_index * 3 + 2];
                        
                            // Calculez le facteur d'interpolation entre les deux positions
                            const t = ((elapsed_time * vitesse_orbite) * 100) % 1; // Utilisez la partie décimale
                        
                            // Interpolation linéaire entre les positions précédente et suivante
                            const x = prev_x + t * (next_x - prev_x);
                            const y = prev_y + t * (next_y - prev_y);
                            const z = prev_z + t * (next_z - prev_z);
                        
                            // Définissez la position du corps céleste
                            orbiter_group.position.set(x, y, z);

                            if (tracking === true) {
                                follow_body(camera, tracking_group);
                            };
                        };
                    };
                };
            };
        };
    };


    // Rendu de la scène avec la caméra
    renderer.render(scene, camera);
};