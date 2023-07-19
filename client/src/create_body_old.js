import * as THREE from 'three';

// Echele 1 / 1 000 000
const scale = 1 / 1000000

// Contient les planètes possédantes une ou des lunes(s)
let parent_bodies = [];

export function create_body(body, scene) {

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
        const celestialBody = new THREE.Mesh(geometry, material);
        scene.add(celestialBody);
        console.log("Add body : " + body.name);
        return celestialBody;
    }
    else if (body.body_type === "Telluric planet") {
        // Si la planète possède une lune elle est ajoutée dans le tableau "parent bodies"
        const { orbitLine, corp_mesh } = add_orbite_and_body(body, scene);
        if (body.moons) {
            parent_bodies.push(corp_mesh)
        }
        console.log(parent_bodies);
        return orbitLine;
    }
    else if (body.body_type === "Gas giant") {
        // Si la planète possède une lune elle est ajoutée dans le tableau "parent bodies"
        const { orbitLine, corp_mesh } = add_orbite_and_body(body, scene);
        if (body.moons) {
            parent_bodies.push(corp_mesh)
        }
        return orbitLine;
    }
    else if (body.body_type === "Dwarf planet") {
        // Si la planète possède une lune elle est ajoutée dans le tableau "parent bodies"
        const { orbitLine, corp_mesh } = add_orbite_and_body(body, scene);
        if (body.moons) {
            parent_bodies.push(corp_mesh)
        }
        return orbitLine;
    }
    else if (body.body_type === "Moon") {
        // Calcul de la position de la lune par rapport à sa planète mère
        body.orbit_radius = ((body.aphelion + body.perihelion) / 2) * scale;
        body.orbit_angle = Math.random() * Math.PI * 2;
        body.position = new THREE.Vector3((body.orbit_radius / scale) * Math.cos(body.orbit_angle), 0, (body.orbit_radius / scale) * Math.sin(body.orbit_angle));

        const segments = 100; // Nombre de segments pour représenter l'orbite
        // Création de la géométrie et du matériau de la lune
        const corp_geometry = new THREE.SphereGeometry(body.mean_radius * scale, segments, segments);
        const corp_material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        const corp_mesh = new THREE.Mesh(corp_geometry, corp_material);

        console.log(parent_bodies);
        console.log(body.around_planet);
        const parent = parent_bodies.find(corps => corps.name.toLowerCase() === body.around_planet.toLowerCase());
        console.log("parent");
        console.log(parent);

        // Positionnement de la lune par rapport à sa planète mère
        corp_mesh.position.copy(body.position);

        // Ajout de la lune en tant qu'enfant de sa planète mère
        // parent.add(corp_mesh);
        // scene.add(corp_mesh);
    }

    else if (body.body_type === "Asteroid") {

    }
    else if (body.body_type === "Comet") {

    }
    console.log("Add body : " + body.name);
};

function add_orbite_and_body(body, scene) {

    // Cette fonction doit etre revu pour ajouter la / les lunes, 
    // mais au moment ou on traite la planete on a pas encors les info de la lune comment faire ???

    // Calcul de la moyenne du rayon de l'orbite du corps
    body.orbit_radius = ((body.aphelion + body.perihelion) / 2) * scale;
    // Retourne un angle aléatoir en radians
    body.orbit_angle = Math.random() * Math.PI * 2;
    // Positionnement de l'orbite
    body.position = new THREE.Vector3((body.orbit_radius / scale) * Math.cos(body.orbit_angle), 0, (body.orbit_radius / scale) * Math.sin(body.orbit_angle));

    // Construction de l'orbite
    const orbitGeometry = new THREE.BufferGeometry();
    const segments = 100; // Nombre de segments pour représenter l'orbite
    const angleStep = (Math.PI * 2) / segments;
    const positions = [];

    // Construction du corps
    const debug_scale = 10;
    const corp_geometry = new THREE.SphereGeometry((body.mean_radius * scale) * debug_scale, 32, 32); // Géométrie du corps
    const corp_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Matériau du corps
    const corp_mesh = new THREE.Mesh(corp_geometry, corp_material); // Maillage du corps
    corp_mesh.name = body.name; // Nommage du corps
    scene.add(corp_mesh); // Ajouter le corps à la scène

    for (let i = 0; i <= segments; i++) {
        // plan des orbites ici sur les axes XZ
        const angle = angleStep * i;
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
    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const orbitMaterial = new THREE.LineBasicMaterial(body.color);
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    // Aouter ici la vitesse de rotation
    orbitLine.rotation.speed = (2 * Math.PI / body.sideral_orbit);
    // Ajout du corps sur l'orbite
    orbitLine.add(corp_mesh);
    // Ajpout de l'orbite et du corps dans la scène
    scene.add(orbitLine);

    console.log("Add body : " + body.name);
    console.log("speed : " + orbitLine.rotation.speed);
    return { orbitLine, corp_mesh };
}