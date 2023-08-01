import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cam_position } from './cam_position.js'
import { cam_follow, scroll_follow_body } from './cam_follow.js'
import { scene_axe } from './scene_axe.js'
import { create_body } from './create_body.js';

// Création de la scène
const scene = new THREE.Scene();

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

// OrbitControls: rotation (click gauche) et zoom de la caméra (scroll)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true; // Activer la fonction de zoom
controls.enableRotate = true; // Activer la fonction de rotation

// DELETE ME
debug()
// 
cam_follow();

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
animate()

// Animation
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
    // Rotation du cube
    // cube.rotation.y += 0.01;

    // console.log(element_list_pos);

    // Affichage de la position de la caméra
    cam_position(camera);

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

// Evenement btn_back, btn_next
btn_back.addEventListener('click', () => {
    scroll_follow_body(-1, element_list); // Défiler vers le corps précédent
});

btn_next.addEventListener('click', () => {
    scroll_follow_body(1, element_list); // Défiler vers le corps suivant
});

btn_follow_body.addEventListener('click', (e) => {
    const target_name = e.target.textContent;
    follow_body(target_name, camera, "start");

    // element_list_pos.forEach(element => {
    //     if (element.name === target_name) {
    //         // Placer la caméra à la position de l'astre plus un décalage approprié (par exemple, en ajoutant 50 unités sur l'axe y)
    //         camera.position.set(element.children[1].position.x, 560, element.children[1].position.z);
    //         // Orienter la caméra vers l'astre
    //         camera.lookAt(element.children[1].position);
    //         camera.rotation.set(0, element.rotation.y, 0);
    //     }
    // });
});

function updateCamera(element){
    var offset = new THREE.Vector3(element.position.x + 20, element.position.y + 6, element.position.z);
    camera.position.lerp(offset, 0.2);
    camera.lookAt(element.position);
}


function follow_body(target_name, camera, active) {
    if (active === "start") {
        element_list_pos.forEach(element => {
            if (element.name === target_name) {
                console.log(element.name);
                // console.log(element.rotation);
                // console.log(element.children[1].position);

                // Orienter la caméra vers l'astre
                // camera.position.x = element.children[1].position.x
                // camera.position.y = 560;
                // camera.position.z = element.children[1].position.z

                // camera.lookAt(element.children[1].position);
                // camera.position.copy(element.children[1].position);
                // camera.rotation.set(element.children[1].position.x, 560, element.children[1].position.z);

            };
        });
    };
};