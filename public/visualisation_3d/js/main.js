import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cam_position } from './cam_position.js'
import { plight_pos } from './scene_helper.js'
import { create_body } from './create_body.js';

// Affichage des FPS
var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
stats.begin();

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const fov = 75;
const aspect = (window.innerWidth / 2) / (window.innerHeight / 2);
const near = 0.001;
const far = 1000000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// Position de la caméra au rafraîchissement de la page
camera.position.x = 0;
camera.position.y = 1500;
camera.position.z = 0;

// Ajout de la caméra parmi les enfants de la scène
scene.add(camera)

// Création du rendu
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)
document.querySelector('#main').appendChild(renderer.domElement);

// Lumière ambiante du soleil (effet abat-jour sur le soleil)
const ambient = new THREE.AmbientLight(0x222222); // https://sbcode.net/threejs/ambient-light/
scene.add(ambient);

// Lumière émise par le soleil dans toutes les directions
const plight = new THREE.PointLight(0xffffff, 1); // https://sbcode.net/threejs/point-light/
scene.add(plight);
plight_pos(plight, scene); // DEBUG

// OrbitControls: rotation (clic gauche), zoom de la caméra (scroll), déplacement (clic droit)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;         // Activer le zoom
controls.enablePan = true;          // Vue panoramique
controls.enableRotate = true;       // Rotation activée
controls.maxDistance = 20000        // Zoom min
controls.minDistance = 0.001        // Zoom max
controls.enableDamping = false;     // Désactiver l'amortissement
controls.zoomSpeed = 1;             // Vitesse du zoom

// Configuration des boutons de la souris
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: null,
    RIGHT: THREE.MOUSE.DOLLY,
};

controls.update();
console.log(controls); // DEBUG

// Créer la texture du background
const background_texture = new THREE.CubeTextureLoader().load([
    './visualisation_3d/js/textures/milky_way/px.jpg',
    './visualisation_3d/js/textures/milky_way/nx.jpg',
    './visualisation_3d/js/textures/milky_way/py.jpg',
    './visualisation_3d/js/textures/milky_way/ny.jpg',
    './visualisation_3d/js/textures/milky_way/pz.jpg',
    './visualisation_3d/js/textures/milky_way/nz.jpg',
]);
// Ajout du background dans la scène
scene.background = background_texture;

// Tableau des objets ajoutés dans la scène, exporté vers ./interface.js
export const all_group = [];
// Création des objets (orbites, corps, lunes)
create_body().then(celestial_body => {
    all_group.push(celestial_body.all_group);
    // Ajout du groupe contenant les objets THREE dans la scène
    scene.add(celestial_body.all_group);
}).catch(error => {
    console.log(error);
})

////////////////////////////////////////////////////////
// ------------ Fonctions évènement ----------------- //
////////////////////////////////////////////////////////

// Cette fonction est reliée à un évènement dans le fichier "list_corps.js".
// Elle permet d'activer / désactiver le suivi dynamique du corps sélectionné.
let tracking; // Interrupteur du suivi des corps
let tracking_group; // Groupe du corps suivi
export function tracking_interuptor(orbiter_group) {
    if (tracking_group === orbiter_group) {
        // Si le groupe sélectionné est le même que précédemment alors on désactive le tracking.
        if (tracking === true) {
            tracking_group = null;
            // La caméra retourne dans le groupe parent (scène)
            scene.add(camera);
            // Le tracking est arrêté
            tracking = false;
        }
        else {
            tracking_group = orbiter_group;
            // La caméra est ajoutée dans le groupe du corps suivi
            orbiter_group.add(camera);
            // Le tracking est activé
            tracking = true;
        }
    }
    else {
        // Le groupe selectionnée est different que précédemment
        // Changement du groupe suivi
        tracking_group = orbiter_group;
        // La caméra est changé de groupe
        orbiter_group.add(camera);
        // Le tracking reste activé
        tracking = true;
    };
    controls.update();
};

// Cette fonction est reliée à un évènement dans le fichier "time_scale.js".
// Elle permet de contrôler l'animation (play, stop, speed_up, speed_down)
let is_playing = true; // Interrupteur de l'animation
let time_scale = 1; // Facteur d'échelle de temps
export function anim_controls(value) {
    if (value === "play") {
        is_playing = true;
    }
    else if (value === "stop") {
        is_playing = false;
    }
    else if (typeof(value) === "number") {
        time_scale = value;
    }
};

console.log(scene); // DEBUG

////////////////////////////////////////////////////////
// ----------------- Animation ---------------------- //
////////////////////////////////////////////////////////

// Création d'une horloge
const clock = new THREE.Clock();
console.log(clock);

let prev_elapsed_time = 0;
let simulation_time = 0;

animate();
function animate() {
    requestAnimationFrame(animate);

    // Mise à jour de l'affichage des FPS
    stats.update();

    // Affichage de la position de la caméra
    cam_position(camera);

    const elapsed_time = clock.getElapsedTime(); // Temps écoulé en secondes
    
    if (elapsed_time !== prev_elapsed_time) {
        const diff_time = elapsed_time - prev_elapsed_time;
        if (is_playing) {
            simulation_time += diff_time * time_scale;
        }
        prev_elapsed_time += diff_time;

        // console.log(simulation_time);
        // console.log(prev_elapsed_time);
    };

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
                    const orbiter_group = corps_group.children[y];

                    // Animation des corps
                    if (orbiter_group.isGroup === true) {
                        animate_celestial_body(orbiter_group, simulation_time);
                        // console.log(orbiter_group);
                        if (tracking === true) {
                            follow_body(camera, tracking_group);
                        };
                    };

                    // Animation des lunes
                    if (orbiter_group.children[1]) {
                        const body_moon_group = orbiter_group.children[1];
                        for (let l = 0; l < body_moon_group.children.length; l++) {
                            const body_moon_group_child = body_moon_group.children[l];
                            if (body_moon_group_child.type === "Group") {
                                const orbiter_group = body_moon_group_child;
                                animate_celestial_body(orbiter_group, simulation_time);
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

// Cette fonction permet de s'assurer que la caméra garde son orientation vers le corps sélectionné.
function follow_body(camera, group) {
    camera.lookAt(group.position);
};


// Cette fonction permet de faire orbiter les corps et de les faire tourner sur eux-même
function animate_celestial_body(orbiter_group, simulation_time) {

    const mesh = orbiter_group.children[0]
    if (mesh.data.sideral_orbit) {

        // Calcul du nombre de rotations nécessaires sur la durée d'une année terrestre
        const rotations_per_year = 365.25 / mesh.data.sideral_orbit;

        // Calcul de l'angle de rotation en fonction du temps de simulation
        const rotation_angle = (2 * Math.PI * simulation_time * rotations_per_year) % (2 * Math.PI);

        // Appliquer la rotation à l'objet
        mesh.rotation.y = rotation_angle * 24;

        const vitesse_orbite = (2 * Math.PI) / mesh.data.sideral_orbit;
        // Calculez l'index précédent et suivant dans le tableau des positions
        let position_index = Math.floor((simulation_time * vitesse_orbite) * 100) % ((orbiter_group.anim_coord.length / 3) - 1);

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
        const t = ((simulation_time * vitesse_orbite) * 100) % 1; // Utilisez la partie décimale
    
        // Interpolation linéaire entre les positions précédente et suivante
        const x = prev_x + t * (next_x - prev_x);
        const y = prev_y + t * (next_y - prev_y);
        const z = prev_z + t * (next_z - prev_z);
    
        // Définissez la position du corps céleste
        orbiter_group.position.set(x, y, z);
    };

    // Rotation de la couche nuageuse de la planète Terre
    const cloudMesh = orbiter_group.children[1];
    if (cloudMesh) {
        if (cloudMesh.name === "cloud_mesh") {
            cloudMesh.rotation.y = (mesh.rotation.y) * 0.9;
        };
    };
};