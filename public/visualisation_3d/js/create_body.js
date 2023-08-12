import * as THREE from 'three';
import { get_celestial_bodies } from './req_bodies.js';

// Echelle 1 / 1 000 000
// Cette échelle ne modifie pas l'aspect du système solaire mais permet de diminuer "astronomiquement" les dimmension de la scène
const scale = 1 / 1000000;

let bodies = [];

export function create_body() {
    // Envoi de la requête
    return new Promise((resolve, reject) => {
        get_celestial_bodies().then(data => {
            // Réception de la réponse
            data.forEach(body => {
                if (body.body_type !== "Moon") {
                    // Variable contenant le corps céleste à traiter
                    let celestial_body;

                    // Traitement du soleil
                    if (body.body_type === "Star") {

                        // Position au centre de la scène
                        body.position = new THREE.Vector3(0, 0, 0);

                        // Forme et texture du soleil
                        const textureLoader = new THREE.TextureLoader();
                        const texture = textureLoader.load('./visualisation_3d/js/textures/sun.jpg');
                        texture.mapping = THREE.EquirectangularReflectionMapping;
                        const geometry = new THREE.SphereGeometry(body.mean_radius * scale, 32, 32);
                        const material = new THREE.MeshBasicMaterial({ map: texture });
                        celestial_body = new THREE.Mesh(geometry, material);
                        // Vitesse de rotation
                        celestial_body.rotation.speed = 0.01;
                        // Ajout d'un nom (utile pour le débogage)
                        celestial_body.name = body.english_name;
                        bodies.push(celestial_body);
                    } 
                    // Pour le traitement des autres corps céleste on fait appelle a la fonction add_orbite_and_body()
                    else {
                        celestial_body = add_orbite_and_body(body, data);
                        bodies.push(celestial_body);
                    }
                    console.log("Body processing : " + body.english_name);
                }
            });
            resolve(bodies);
        }).catch(error => {
            reject(error);
        });
    });
};

function add_orbite_and_body(body, data) {

    // Attribution d'une couleur
    body.color = get_body_color(body);
    // Calcul de la moyenne du rayon de l'orbite du corps
    body.orbit_radius = ((body.aphelion + body.perihelion) / 2) * scale;
    // Retourne un angle aléatoir en radians
    body.orbit_angle = 0;
    // Positionnement de l'orbite
    body.position = new THREE.Vector3((body.orbit_radius / scale) * Math.cos(body.orbit_angle), 0, (body.orbit_radius / scale) * Math.sin(body.orbit_angle));

    // Construction de l'orbite
    const orbit_geometry = new THREE.BufferGeometry();
    const segments = 100; // Nombre de segments pour représenter l'orbite
    const angle_step = (Math.PI * 2) / segments;
    const positions = [];

    // Construction du corps
    const corp_geometry = new THREE.SphereGeometry((body.mean_radius * scale), 32, 32); // Géométrie du corps
    let corp_material = {};
    corp_material = new THREE.MeshBasicMaterial({ color: body.color }); // Matériau du corps
    const corp_mesh = new THREE.Mesh(corp_geometry, corp_material); // Maillage du corps
    corp_mesh.name = "body_" + body.english_name; // Nommage du corps

    for (let i = 0; i <= segments; i++) {
        const angle = angle_step * i;
        const x = body.orbit_radius * Math.cos(angle);
        const y = 0;
        const z = body.orbit_radius * Math.sin(angle)
        // Axes du corp
        corp_mesh.position.set(x, y, z);
        // Axes du l'orbite
        positions.push(x, y, z);
    }
    orbit_geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const orbit_material = new THREE.LineBasicMaterial({ color: body.color });
    const orbit_line = new THREE.Line(orbit_geometry, orbit_material);
    orbit_line.name = "orbit_" + body.english_name;

    // Création d'un group
    const group = new THREE.Group();
    group.name = "group_" + body.english_name;

    // Aouter ici la vitesse de rotation
    group.rotation.speed = (2 * Math.PI / body.sideral_orbit);

    group.add(orbit_line);
    group.add(corp_mesh);

    // Création des lunes (si elles existent)
    if (body.moons) {
        body.moons.forEach(element => {
            const moon_name = element.moon;
            const moon_data = data.find(data => data.name === moon_name);
            const moon_celestial_body = add_orbite_and_body(moon_data, data);

            // Ajuster la position des lunes par rapport à leur orbite et leur planète parente
            const moon_orbit_radius = ((moon_data.aphelion + moon_data.perihelion) / 2) * scale;
            const x_moon_orbite = moon_orbit_radius * Math.cos(body.orbit_angle) + (body.position.x * scale) - moon_orbit_radius;
            const y_moon_orbite = body.position.y;
            const z_moon_orbite = moon_orbit_radius * Math.sin(body.orbit_angle) + (body.position.z * scale);
            moon_celestial_body.position.set(x_moon_orbite, y_moon_orbite, z_moon_orbite);

            // Ajouter la lune au groupe parent
            group.add(moon_celestial_body);
            console.log("Moon processing of " + body.english_name + " : " + moon_name);
        });
    }
    return group;
}

// Fonction pour obtenir la couleur en fonction du corps céleste
function get_body_color(body) {
    let color;
    if (body.body_type === "Star") {
        color = 0xffff00; // Jaune
    }
    else if (body.body_type === "Telluric planet") {
        color = 0x0000ff; // Bleu
    }
    else if (body.body_type === "Gas giant") {
        color = 0xff0000; // Rouge
    }
    else if (body.body_type === "Dwarf planet") {
        color = 0x00ff00; // Vert
    }
    else if (body.body_type === "Moon") {
        color = 0xff00ff; // Magenta
    }
    else if (body.body_type === "Asteroid") {
        color = 0xffa500; // Orange
    }
    else if (body.body_type === "Comet") {
        color = 0x808080; // Gris
    }
    else {
        color = 0xffffff; // Blanc par défaut
    }
    return color;
}