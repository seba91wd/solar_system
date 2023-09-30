import * as THREE from 'three';

export function scene_axe(scene) {
    const axes_helper = new THREE.AxesHelper(500); // Affiche les axes X Y Z au centrre de la scène
    scene.add(axes_helper);
}

export function plight_pos(plight, scene) {
    const plight_helper = new THREE.PointLightHelper(plight) // Affichage d'un repère autour de la source de lumière "plight"
    scene.add(plight_helper)
}

export function name(spotLight, scene) {
    const spot_light_helper = new THREE.SpotLightHelper( spotLight );
    scene.add( spot_light_helper );
}

export function box_helper(element) {
    const box = new THREE.BoxHelper( element, 0xffff00 );
    return box;
}