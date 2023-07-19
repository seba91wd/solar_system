import * as THREE from 'three';
import { get_celestial_bodies } from './req_bodies.js';

// Echelle 1 / 1 000 000
const scale = 1 / 1000000;

let celestial_body;

// Contient les planètes possédant une ou des lunes
let bodies = [];

export function create_body() {
    // Envoi de la requête
    return new Promise((resolve, reject) => {
        get_celestial_bodies().then(data => {
            data.forEach(body => {
                if (body.body_type !== "Moon") {
                    // Traitement du soleil
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

function add_orbite_and_body(body, data) {
    // Calcul de la moyenne du rayon de l'orbite du corps
    body.orbit_radius = ((body.aphelion + body.perihelion) / 2) * scale;

    // Retourne un angle aléatoire en radians
    body.orbit_angle = Math.random() * Math.PI * 2;

    // Positionnement de l'orbite
    body.position = new THREE.Vector3((body.orbit_radius * scale) * Math.cos(body.orbit_angle), 0, (body.orbit_radius * scale) * Math.sin(body.orbit_angle));

    const orbit_geometry = new THREE.BufferGeometry();
    const segments = 100;
    const angleStep = (Math.PI * 2) / segments;
    const positions = [];

    // Construction du corps céleste
    const debug_scale = 100;
    const corp_geometry = new THREE.SphereGeometry((body.mean_radius * scale) * debug_scale, 32, 32);
    const corp_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const corp_mesh = new THREE.Mesh(corp_geometry, corp_material);
    corp_mesh.name = "corps_" + body.english_name;

    for (let i = 0; i <= segments; i++) {
        // Orbite
        const angle = angleStep * i;
        const x_orbite = body.orbit_radius * Math.cos(angle);
        const y_orbite = 0;
        const z_orbite = body.orbit_radius * Math.sin(angle);
        positions.push(x_orbite, y_orbite, z_orbite);

        // Corps céleste
        const x_corps = body.orbit_radius * Math.cos(angle);
        const y_corps = 0;
        const z_corps = body.orbit_radius * Math.sin(angle);
        corp_mesh.position.set(x_corps, y_corps, z_corps);

        // Création de l'orbite des lunes (si elles existent)
        if (body.body_type === "Moon") {
            const parentBody = data.find(parent => parent.name.toLowerCase() === body.around_planet.toLowerCase());
            const moon_orbit_radius = parentBody.orbit_radius * scale;
            const x_moon_orbite = moon_orbit_radius * Math.cos(angle) + parentBody.position.x + 0.1;
            const y_moon_orbite = parentBody.position.y;
            const z_moon_orbite = moon_orbit_radius * Math.sin(angle) + parentBody.position.z + 0.1;
            positions.push(x_moon_orbite, y_moon_orbite, z_moon_orbite);
        } else {
            positions.push(x_orbite, y_orbite, z_orbite);
        }
    }

    orbit_geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const orbit_material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const orbit_line = new THREE.Line(orbit_geometry, orbit_material);
    orbit_line.name = "orbite_" + body.english_name;

    // Vitesse de rotation de l'orbite
    orbit_line.rotation.speed = (2 * Math.PI / body.sideral_orbit);

    const celestial_body = new THREE.Group();
    celestial_body.name = "group_" + body.english_name;
    celestial_body.add(orbit_line);
    celestial_body.add(corp_mesh);

    // Création des lunes (si elles existent)
    if (body.moons) {
        body.moons.forEach(element => {
            const moon_name = element.moon;
            const moon_data = data.find(data => data.name === moon_name);
            const moon_celestial_body = add_orbite_and_body(moon_data, data);

            console.log("Processing moon : " + moon_data.english_name + " to " + body.english_name);

            // Ajuster la position des lunes par rapport à leur orbite et leur planète parente
            const moon_orbit_radius = element.orbit * scale; // Utiliser le rayon d'orbite fourni pour la lune
            const x_moon_orbite = moon_orbit_radius * Math.cos(body.orbit_angle) + body.position.x;
            const y_moon_orbite = body.position.y;
            const z_moon_orbite = moon_orbit_radius * Math.sin(body.orbit_angle) + body.position.z;
            moon_celestial_body.position.set(x_moon_orbite, y_moon_orbite, z_moon_orbite);

            celestial_body.add(moon_celestial_body);
        });
    }
    return celestial_body;
}