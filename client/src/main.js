import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cam_position } from './cam_position.js'
import { scene_axe } from './scene_axe.js'

import { create_body } from './create_body.js';


// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const aspectRatio = window.innerWidth / window.innerHeight;
const zoom = 200;
// OrthographicCamera : caméra sans perspective (mode CAD)
const camera = new THREE.OrthographicCamera(-zoom * aspectRatio, zoom * aspectRatio, zoom, -zoom, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 560;
camera.position.z = 0;

// Création du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#main').appendChild(renderer.domElement);

// OrbitControls: rotation (click gauche) et zoom de la caméra (scroll)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true; // Activer la fonction de zoom
controls.enableRotate = true; // Activer la fonction de rotation

// DELETE ME
debug()

// Tableau des objets à animer
let element_list = [];

create_body().then(celestial_body => {
    celestial_body.forEach(element => {
        console.log("Add body : " + element.name);
        element_list.push(element)
        scene.add(element)
    });
});
animate()

// Animation
function animate() {
    requestAnimationFrame(animate);

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
                        }
                    });
                }
            }
        }
    }

    // Rotation du cube
    // cube.rotation.y += 0.01;

    cam_position(camera, scene);

    // Rendu de la scène avec la caméra
    renderer.render(scene, camera);
}

function debug() {
    const axe_display = true;
    const cube_display = false;
    if (axe_display) {
        // DEBUG : Affiche les axes X Y Z
        scene_axe(scene);
    };
    if (cube_display) {
        // DEBUG : Création du cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    };
};