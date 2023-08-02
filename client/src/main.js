import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cam_position } from './cam_position.js'
import { cam_follow, scroll_follow_body } from './cam_follow.js'
// import { scene_axe } from './scene_axe.js'
import { create_body } from './create_body.js';

// Création de la scène
const scene = new THREE.Scene();
console.log(scene);

// Création de la caméra
const aspectRatio = window.innerWidth / window.innerHeight;
const zoom = 1000;
// OrthographicCamera : caméra sans perspective (mode CAD)
const camera = new THREE.OrthographicCamera(-zoom * aspectRatio, zoom * aspectRatio, zoom, -zoom, -10000, 12000);
camera.position.x = 0;
camera.position.y = 560;
camera.position.z = 0;

// Création du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#main').appendChild(renderer.domElement);

// OrbitControls: rotation (clic gauche), zoom de la caméra (scroll), déplacement (clic droit)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true; // Activer la fonction de zoom
controls.enableRotate = true; // Activer la fonction de rotation

// Tableau des objets à animer
let element_list = [];
// Tableau de la position des objets
let element_list_pos = [];

create_body().then(celestial_body => {
    celestial_body.forEach(element => {
        console.log("Add body : " + element.name);
        element_list.push(element)
        scene.add(element)
    });
});

// La fonction cam_follow() "permettra" de poursuivre visuellement un corps céleste actuelement en beta test
let tracking; // Interrupteur de suivi des corps par la caméra
let target_name; // Nom du corps suivi
cam_follow(element_list);

// Evenement btn_back, btn_next
btn_back.addEventListener('click', () => {
    scroll_follow_body(-1, element_list); // Défiler vers le corps précédent
});

btn_next.addEventListener('click', () => {
    scroll_follow_body(1, element_list); // Défiler vers le corps suivant
});

btn_follow_body.addEventListener('click', (e) => {
    if (tracking === true) {
        tracking = false;
        console.log("tracking = " + tracking);
    }
    else {
        target_name = e.target.textContent;
        tracking = true;
        console.log("tracking = " + tracking);
        console.log("target_name = " + target_name);
    }
});

function follow_body() {
    if (tracking === true) {
        element_list_pos.forEach(element => {
            if (element.name === target_name) {
                const radius = element.children[1].position.x; // Rayon de l'orbite du corps cible
                const angle = -element.rotation.y; // Angle de rotation actuel du corps cible
                
                // Coordonnées du point à suivre sur l'orbite du corps cible
                const x_target = radius * Math.cos(angle);
                const y_target = element.children[1].position.y;
                const z_target = radius * Math.sin(angle);
                
                controls.target.set(x_target, y_target, z_target);
                controls.update();
            }
        })
    };
}

// Animation
animate()
function animate() {
    requestAnimationFrame(animate);

    // Reset du tableau de la position des objets
    element_list_pos = [];
    // potentiometre vitesse de rotation
    const speed_rotate = 100


    for (let i = 0; i < element_list.length; i++) {
        if (element_list[i]) {

            if (element_list[i].type === "Mesh") {
                element_list[i].rotation.y += element_list[i].rotation.speed;
            }
            else {
                element_list[i].rotation.y += (element_list[i].rotation.speed / speed_rotate);
                if (element_list[i].children) {
                    element_list[i].children.forEach(child => {
                        if (child.type === "Group") {
                            child.rotation.y += (child.rotation.speed / speed_rotate);
                        };
                    });
                };
                element_list_pos.push(element_list[i]);
            };
        };
    };

    // Affichage de la position de la caméra
    cam_position(camera);
    follow_body();

    // Rendu de la scène avec la caméra
    renderer.render(scene, camera);
}