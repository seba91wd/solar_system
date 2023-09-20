import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cam_position } from './cam_position.js'
import { btn_cam_follow, scroll_follow_body, follow_body } from './cam_follow.js'
import { scene_axe, plight_pos } from './scene_helper.js'
import { create_body } from './create_body.js';

// Affichage des FPS
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );
stats.begin();

// Création de la scène
const scene = new THREE.Scene();
console.log(scene); // DEBUG
scene_axe(scene); // DEBUG

// Création de la caméra
const fov = 75;
const aspect = (window.innerWidth / 2) / (window.innerHeight / 2);
const near = 0.1;
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
const backGroundTexture = new THREE.CubeTextureLoader().load([
    './visualisation_3d/js/textures/milky_way/px.jpg',
    './visualisation_3d/js/textures/milky_way/nx.jpg',
    './visualisation_3d/js/textures/milky_way/py.jpg',
    './visualisation_3d/js/textures/milky_way/ny.jpg',
    './visualisation_3d/js/textures/milky_way/pz.jpg',
    './visualisation_3d/js/textures/milky_way/nz.jpg',
]);
scene.background = backGroundTexture;

const element_list = []
const element_list_pos = [];
// Création des objets (orbites, corps, lunes)
create_body(scene).then(celestial_body => {
    element_list.push(celestial_body)
    // Ajout du groupe contenant les objets THREE dans la scène
    console.log("Groupe des objets ajoutés");
    console.log(celestial_body);
    scene.add(celestial_body)
}).catch(error => {
    console.log(error);
})

// La fonction follow_body() permet de poursuivre visuellement un corps céleste
let tracking; // Interrupteur de suivi des corps par la caméra
let target_name; // Nom du corps suivi
btn_cam_follow(); // Ajout des boutons pour le choix du corps

// Evenement btn_back, btn_next, btn_follow_body
document.querySelector('#btn_back').addEventListener('click', () => {
    scroll_follow_body(-1, element_list); // Défiler vers le corps précédent
});

document.querySelector('#btn_next').addEventListener('click', () => {
    scroll_follow_body(1, element_list); // Défiler vers le corps suivant
});

document.querySelector('#btn_follow_body').addEventListener('click', (e) => {
    if (tracking === true) {
        tracking = false;
        console.log("tracking = " + tracking);
    }
    else {
        target_name = e.target.textContent;
        tracking = true;
        console.log("tracking = " + tracking);
        console.log("target_name = " + target_name);
    };
});

// Animation
animate();
function animate() {
    requestAnimationFrame(animate);

    // mise a jour de l'affichage des FPS
    stats.update();

    // Affichage de la position de la caméra
    cam_position(camera);

    // Determiner la durée d'une année, puis l'utiliser pour adapter la vitesse de rotation des corps sur leur axe
    
    if (element_list[0]) {
        for (let i = 0; i < element_list[0].children.length; i++) {
            const element = element_list[0].children[i];
            if (element.name === "Sun") {
                // console.log(element.rotation.y);
                element.rotation.y += 0.01;
            }
            else if (element.isMesh === true) {
                // console.log(element.rotation.y);
                element.rotation.y += element.rotation.speed / 100;
            }
            else if (element.isGroup === true) {
                element_list_pos.push(element);
                for (let y = 0; y < element.children.length; y++) {
                    const children_elem = element.children[y];
                    if (children_elem.isMesh === true) {
                        // console.log(children_elem);
                        children_elem.rotation.y += children_elem.rotation.speed / 100;
                    }
                }
            }
        };
    }

    // // Reset du tableau de la position des objets
    // element_list_pos = [];
    // // potentiometre vitesse de rotation
    // const speed_rotate = 100;

    // for (let i = 0; i < element_list.length; i++) {
    //     if (element_list[i]) {

    //         if (element_list[i].type === "Mesh") {
    //             element_list[i].rotation.y += element_list[i].rotation.speed;
    //         }
    //         else {
    //             element_list[i].rotation.y += (element_list[i].rotation.speed / speed_rotate);
    //             if (element_list[i].children) {
    //                 element_list[i].children.forEach(child => {
    //                     if (child.type === "Group") {
    //                         child.rotation.y += (child.rotation.speed / speed_rotate);
    //                     };
    //                 });
    //             };
    //             element_list_pos.push(element_list[i]);
    //         };
    //     };
    // };

    follow_body(tracking, element_list_pos, target_name, controls);

    // Rendu de la scène avec la caméra
    renderer.render(scene, camera);
}