import * as THREE from 'three';

export function scene_axe(scene) {
    const axes_helper = new THREE.AxesHelper(500); // Affiche les axes X Y Z au centrre de la scène
    scene.add(axes_helper);
}

export function plight_pos(plight, scene) {
    // const plight = new THREE.PointLight( 0x5555ff, 1, 50 );
    // plight.position.set( -2, 4, 2 );
    // scene.add( plight );
    const plight_helper = new THREE.PointLightHelper(plight) // Affichage d'un repère autour de la source de lumière "plight"
    scene.add(plight_helper)
}

export function name(spotLight, scene) {
    // const spotLight = new THREE.SpotLight( 0x0000FF, 4, 30, Math.PI/12 );
    // spotLight.position.set( 5, 10, 5 );
    // scene.add( spotLight );
    const spot_light_helper = new THREE.SpotLightHelper( spotLight );
    scene.add( spot_light_helper );
}

export function box_helper(element) {
    const box = new THREE.BoxHelper( element, 0xffff00 );
    return box;
}