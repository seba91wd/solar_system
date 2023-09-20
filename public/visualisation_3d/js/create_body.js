import * as THREE from 'three';
import { get_celestial_bodies } from './req_bodies.js';

// Echelle 1 / 1 000 000
// Cette échelle ne modifie pas l'aspect du système solaire mais permet de diminuer "astronomiquement" les dimmension de la scène
const scale = 1 / 1000000;

const all_group = new THREE.Group();
let celestial_body_incomplete = [];

export function create_body(scene) {
    // Envoi de la requête
    return new Promise((resolve, reject) => {
        get_celestial_bodies().then(data => {
            // Réception de la réponse
            data.forEach(body => {
                if (body.body_type !== "Moon") {
                    // Variable contenant le corps céleste à traiter

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
                        const celestial_body = new THREE.Mesh(geometry, material);
                        // Vitesse de rotation
                        celestial_body.rotation.speed = 0.01;
                        // Ajout d'un nom (utile pour le débogage)
                        celestial_body.name = body.english_name;
                        all_group.add(celestial_body);
                    }
                    else if (
                        body.body_type === "Asteroid" ||
                        body.body_type === "Comet" ||
                        // body.body_type === "Gas giant" ||
                        body.body_type === "Dwarf planet") {
                        // ne rien faire
                    }
                    // Pour le traitement des autres corps céleste on fait appelle a la fonction add_orbite_and_body()
                    else {
                        // Verification des valeurs
                        if (body.aphelion === 0 || body.perihelion === 0) {
                            // Ajout du nom du corps dans la liste des objets incomplet
                            celestial_body_incomplete.push(body.name);
                        }
                        else {
                            // Atribution d'une couleur
                            body.color = get_body_color(body);
                            // Création de ligne d'orbite
                            const { orbit_line, pos } = createOrbit(body);
                            // Création du corps
                            const celestial_body = createCelestialBody(body, pos)

                            // Création et nommage d'un groupe
                            const group = new THREE.Group();
                            group.name = body.english_name + "_group"

                            // Ajout de l'orbite et du corps dans le groupe
                            group.add(orbit_line)
                            group.add(celestial_body)

                            // Gestion de lunes
                            if (body.moons) {
                                // Création de l'orbite et du corps de la lune
                                const moon_group = add_moons_and_orbits(body, data, celestial_body);
                                // Nommage du groupe
                                moon_group.name = body.english_name +  "_moons_group"
                                // Ajout de l'orbite et du corps des lunes dans un groupe
                                group.add(moon_group)
                            }
                            all_group.add(group);
                        }
                    }
                    console.log("Body processing : " + body.english_name);
                }
            });
            console.log("Tableau des corps aux données incomplètes");
            console.log(celestial_body_incomplete);
            resolve(all_group);
        }).catch(error => {
            console.log(error);
        });
    });
};

function createOrbit(body) {
    // Convertir l'inclinaison en radians
    const inclination = (body.inclination * Math.PI) / 180;

    // Calcul de l'excentricité de l'orbite
    const eccentricity = (body.aphelion - body.perihelion) / (body.aphelion + body.perihelion);

    // Nombre de segments pour représenter l'orbite
    const segments = 100;

    // Vérifier si la mean anomaly est disponible et non nulle
    let mean_anomaly_rad;
    if (body.main_anomaly !== 0) {
        // Convertir la mean anomaly de degrés en radians
        mean_anomaly_rad = (body.main_anomaly * Math.PI) / 180;
    }
    else {
        // Calculer la période orbitale en jours (en utilisant le paramètre sideral_orbit en années)
        const orbitalPeriodDays = body.sideral_orbit * 365.25; // Nous utilisons 365.25 jours par an pour prendre en compte les années bissextiles
        // Calculer la mean anomaly en radians en utilisant la période orbitale
        mean_anomaly_rad = (2 * Math.PI * (360 - body.long_asc_node)) / orbitalPeriodDays;
    }

    // Vérification de la valeur de long_asc_node
    if (body.long_asc_node === 0) {
        // Si long_asc_node est égal à 0, générez une valeur aléatoire
        body.long_asc_node = Math.random() * Math.PI * 2;
    }

    // Calcul de l'angle de l'orbite
    const angle_step = (Math.PI * 2) / segments;

    // Contiendra la dernière position XYZ du corps
    const pos = {};

    // Contiendra toutes les positions XYZ du corps
    const positions = [];

    for (let i = 0; i <= segments; i++) {
        const mean_anomaly = mean_anomaly_rad + angle_step * i;

        // Calcul de la distance depuis le centre en fonction de l'anomalie moyenne et de l'excentricité
        const r = (body.perihelion * (1 + eccentricity)) / (1 + eccentricity * Math.cos(mean_anomaly - body.arg_periapsis));

        // Position de l'orbite dans l'espace en fonction de l'inclinaison et de long_asc_node
        pos.x = (r * Math.cos(mean_anomaly + body.long_asc_node)) * scale;
        pos.y = (r * Math.sin(mean_anomaly + body.long_asc_node) * Math.sin(inclination)) * scale;
        pos.z = (r * Math.sin(mean_anomaly + body.long_asc_node) * Math.cos(inclination)) * scale;
        positions.push(pos.x, pos.y, pos.z);
    }
    console.log(body.english_name);
    console.log(positions);

    // Création de la géométrie de l'orbite
    const orbit_geometry = new THREE.BufferGeometry();
    orbit_geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    // Création du matériau de l'orbite
    const orbitMaterial = new THREE.LineBasicMaterial({ color: body.color });
    // Création de l'objet Three.js pour l'orbite
    const orbit_line = new THREE.Line(orbit_geometry, orbitMaterial);

    // Nom du corps céleste (utile pour le débogage)
    orbit_line.name = body.english_name + "_orbit";

    // Ici nous retournons l'objet "orbit_line", mais aussi les valeurs XYZ de la dernière itération de la boucle for,
    // cela permet de positionner les corps sur leur orbites selon l'angle determiner par la valeur de l'anomalie moyen de chaque corps (body.main_anomaly).
    return { orbit_line: orbit_line, pos: pos };
}

function createCelestialBody(body, pos) {
    let celestial_body;
    const debug_scale = 100; // delete me

    // Création de la forme et du matériau du corps céleste
    const geometry = new THREE.SphereGeometry(body.mean_radius * scale * debug_scale, 32, 32);
    const material = add_texture(body);
    celestial_body = new THREE.Mesh(geometry, material);

    // Positionnement du corps céleste sur son orbite en utilisant l'angle initial, l'inclinaison, body.long_asc_node et pos
    const x = pos.x;
    const y = pos.y;
    const z = pos.z;

    // Positionnez le corps céleste
    celestial_body.position.set(x, y, z);

    // Rotation du corps céleste autour de son axe
    // celestial_body.rotation.y = angleInitial;

    // Vitesse de rotation du corps sur son axe
    celestial_body.rotation.speed = (2 * Math.PI / body.sideral_orbit);

    // Nom du corps céleste (utile pour le débogage)
    celestial_body.name = body.english_name + "_body";

    return celestial_body;
}

function add_moons_and_orbits(parent_body, data, parent_object) {
    const moon_group = new THREE.Group();
    moon_group.name = parent_body.english_name + "_group_moon_";

    parent_body.moons.forEach(element => {
        const moon_name = element.moon;
        const moon_data = data.find(data => data.name === moon_name);

        if (moon_data.aphelion === 0 || moon_data.perihelion === 0) {
            // Ajout du nom du corps dans la liste des objets incomplet
            celestial_body_incomplete.push(moon_data.name);
        }
        else {
            moon_data.color = get_body_color(moon_data);
            const { orbit_line, pos } = createOrbit(moon_data); // Crée l'orbite de la lune
            const celestial_body = createCelestialBody(moon_data, pos); // Crée le corps de la lune
    
            // Ajoute l'orbite et le corps de la lune au groupe de la lune
            moon_group.add(orbit_line);
            moon_group.add(celestial_body);
    
            // Ajuste la position de la lune par rapport à sa planète parente en utilisant pos
            const moonOrbitRadius = ((moon_data.aphelion + moon_data.perihelion) / 2) * scale;
            const xMoonOrbit = parent_object.position.x;
            const yMoonOrbit = parent_object.position.y;
            const zMoonOrbit = parent_object.position.z;
            moon_group.position.set(xMoonOrbit, yMoonOrbit, zMoonOrbit);
        }
        console.log("Moon processing of " + parent_body.english_name + " : " + moon_data.english_name);
    });
    return moon_group;
}

function add_texture(body) {
    if (body.english_name === "Mercury") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/mercury.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }
    else if (body.english_name === "Venus") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/venus.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }
    else if (body.english_name=== "Earth") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/earth_daymap.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    } 
    else if (body.english_name === "Mars") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/mars.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }

    else if (body.english_name === "Jupiter") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/jupiter.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }
    else if (body.english_name === "Saturn") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/saturn.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }
    else if (body.english_name === "Uranus") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/uranus.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }
    else if (body.english_name === "Neptune") {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('./visualisation_3d/js/textures/neptune.jpg');
        return new THREE.MeshPhongMaterial({ map: texture });
    }
    else {
        // Création et retour du matériau du corps céleste en utilisant la couleur par défaut
        return new THREE.MeshPhongMaterial({ color: body.color });
    }
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
        color = 0x808080; // Gris
    }
    else if (body.body_type === "Comet") {
        color = 0xffa500; // Orange
    }
    else {
        color = 0xffffff; // Blanc par défaut
    }
    return color;
}


///////////////////////////////////////////////////////
// function add_orbite_and_body(body, data) {

//     // Attribution d'une couleur
//     body.color = get_body_color(body);
//     // Calcul de la moyenne du rayon de l'orbite du corps
//     body.orbit_radius = ((body.aphelion + body.perihelion) / 2) * scale;
//     // Retourne un angle aléatoir en radians
//     body.orbit_angle = 0;
//     // Positionnement de l'orbite
//     body.position = new THREE.Vector3((body.orbit_radius / scale) * Math.cos(body.orbit_angle), 0, (body.orbit_radius / scale) * Math.sin(body.orbit_angle));

//     // Construction de l'orbite
//     const orbit_geometry = new THREE.BufferGeometry();
//     const segments = 100; // Nombre de segments pour représenter l'orbite
//     const angle_step = (Math.PI * 2) / segments;
//     const positions = [];

//     // Construction du corps
//     const corp_geometry = new THREE.SphereGeometry((body.mean_radius * scale), 32, 32); // Géométrie du corps
//     let corp_material = {};
//     corp_material = new THREE.MeshBasicMaterial({ color: body.color }); // Matériau du corps
//     const corp_mesh = new THREE.Mesh(corp_geometry, corp_material); // Maillage du corps
//     corp_mesh.name = "body_" + body.english_name; // Nommage du corps

//     for (let i = 0; i <= segments; i++) {
//         const angle = angle_step * i;
//         const x = body.orbit_radius * Math.cos(angle);
//         const y = 0;
//         const z = body.orbit_radius * Math.sin(angle)
//         // Axes du corp
//         corp_mesh.position.set(x, y, z);
//         // Axes du l'orbite
//         positions.push(x, y, z);
//     }
//     orbit_geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//     const orbit_material = new THREE.LineBasicMaterial({ color: body.color });
//     const orbit_line = new THREE.Line(orbit_geometry, orbit_material);
//     orbit_line.name = "orbit_" + body.english_name;

//     // Création d'un group
//     const group = new THREE.Group();
//     group.name = "group_" + body.english_name;

//     // Aouter ici la vitesse de rotation
//     group.rotation.speed = (2 * Math.PI / body.sideral_orbit);

//     group.add(orbit_line);
//     group.add(corp_mesh);

//     // Création des lunes (si elles existent)
//     if (body.moons) {
//         body.moons.forEach(element => {
//             const moon_name = element.moon;
//             const moon_data = data.find(data => data.name === moon_name);
//             const moon_celestial_body = add_orbite_and_body(moon_data, data);

//             // Ajuster la position des lunes par rapport à leur orbite et leur planète parente
//             const moon_orbit_radius = ((moon_data.aphelion + moon_data.perihelion) / 2) * scale;
//             const x_moon_orbite = moon_orbit_radius * Math.cos(body.orbit_angle) + (body.position.x * scale) - moon_orbit_radius;
//             const y_moon_orbite = body.position.y;
//             const z_moon_orbite = moon_orbit_radius * Math.sin(body.orbit_angle) + (body.position.z * scale);
//             moon_celestial_body.position.set(x_moon_orbite, y_moon_orbite, z_moon_orbite);

//             // Ajouter la lune au groupe parent
//             group.add(moon_celestial_body);
//             console.log("Moon processing of " + body.english_name + " : " + moon_name);
//         });
//     }
//     return group;
// }

