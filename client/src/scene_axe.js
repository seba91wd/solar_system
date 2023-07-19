import * as THREE from 'three';

export function scene_axe(scene) {
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
}