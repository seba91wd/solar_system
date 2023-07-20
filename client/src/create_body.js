import * as THREE from 'three';
import { get_celestial_bodies } from './req_bodies.js';

// Echelle 1 / 1 000 000
const scale = 1 / 1000000;

let bodies = [];

export function create_body() {
    // Envoi de la requête
    return new Promise((resolve, reject) => {
        get_celestial_bodies().then(data => {
            data.forEach(body => {
                if (body.body_type !== "Moon") {
                    // Traitement du soleil
                    let celestial_body;
                    if (body.body_type === "Star") {
                        body.orbit_radius = 0;
                        body.orbit_angle = 0;
                        body.position = new THREE.Vector3(0, 0, 0);

                        // Texture du soleil
                        const textureLoader = new THREE.TextureLoader();
                        const texture = textureLoader.load('../public/textures/sun.jpg');
                        texture.mapping = THREE.EquirectangularReflectionMapping;

                        const geometry = new THREE.SphereGeometry(body.mean_radius * scale, 32, 32);
                        const material = new THREE.MeshBasicMaterial({ map: texture });
                        celestial_body = new THREE.Mesh(geometry, material);
                        // Ajout d'un type 
                        celestial_body.body_type = body.body_type;
                        // Ajout d'un nom
                        celestial_body.name = body.english_name;
                        bodies.push(celestial_body);
                    } else {
                        celestial_body = add_orbite_and_body(body, data);
                        bodies.push(celestial_body);
                    }
                    console.log("Processing body : " + body.english_name);
                }
            });
            resolve(bodies);
        }).catch(error => {
            reject(error);
        });
    });
};

function add_orbite_and_body(body) {

    // Calcul de la moyenne du rayon de l'orbite du corps
    body.orbit_radius = ((body.aphelion + body.perihelion) / 2) * scale;
    // Retourne un angle aléatoir en radians
    body.orbit_angle = Math.random() * Math.PI * 2;
    // Positionnement de l'orbite
    body.position = new THREE.Vector3((body.orbit_radius / scale) * Math.cos(body.orbit_angle), 0, (body.orbit_radius / scale) * Math.sin(body.orbit_angle));

    // Construction de l'orbite
    const orbit_geometry = new THREE.BufferGeometry();
    const segments = 100; // Nombre de segments pour représenter l'orbite
    const angle_step = (Math.PI * 2) / segments;
    const positions = [];

    // Construction du corps
    const debug_scale = 10;
    const corp_geometry = new THREE.SphereGeometry((body.mean_radius * scale) * debug_scale, 32, 32); // Géométrie du corps
    const corp_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Matériau du corps
    const corp_mesh = new THREE.Mesh(corp_geometry, corp_material); // Maillage du corps
    corp_mesh.name = body.name; // Nommage du corps

    for (let i = 0; i <= segments; i++) {
        // plan des orbites ici sur les axes XZ
        const angle = angle_step * i;
        const x_orbite = body.orbit_radius * Math.cos(angle);
        const y_orbite = 0;
        const z_orbite = body.orbit_radius * Math.sin(angle);
        positions.push(x_orbite, y_orbite, z_orbite);

        // Plan des planètes
        const x_corps = body.orbit_radius * Math.cos(angle);
        const y_corps = 0;
        const z_corps = body.orbit_radius * Math.sin(angle)
        corp_mesh.position.set(x_corps, y_corps, z_corps);
    }
    orbit_geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const orbit_material = new THREE.LineBasicMaterial(body.color);
    const orbit_line = new THREE.Line(orbit_geometry, orbit_material);

    // Aouter ici la vitesse de rotation
    orbit_line.rotation.speed = (2 * Math.PI / body.sideral_orbit);

    // Création d'un group
    const group = new THREE.Group();
    group.name = "group_" + body.english_name;
    group.add(orbit_line);
    group.add(corp_mesh);
    return group;
}