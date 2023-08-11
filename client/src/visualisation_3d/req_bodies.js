const port = 3001;
const hostname = "localhost";

export function get_celestial_bodies() {
    return fetch(`http://${hostname}:${port}/api/bodies/`)
    .then(response => response.json())
    .then(data => {
        // Vérifier si les données sont valides
        if (!Array.isArray(data.data)) {
            throw new Error('Les données retournées ne sont pas valides.');
        }
        const system_data = data.data;

        // Classement des corps dans l'ordre parents -> enfants
        const sorted_data = [];

        // Ajouter les étoiles
        const stars = system_data.filter(body => body.body_type === 'Star');
        sorted_data.push(...stars);

        // Ajouter les planètes telluriques
        const telluric_planets = system_data.filter(body => body.body_type === 'Telluric planet');
        sorted_data.push(...telluric_planets);

        // Ajouter les géantes gazeuses
        const gas_giants = system_data.filter(body => body.body_type === 'Gas giant');
        sorted_data.push(...gas_giants);

        // Ajouter les planètes naines
        const dwarf_planets = system_data.filter(body => body.body_type === 'Dwarf planet');
        sorted_data.push(...dwarf_planets);

        // Ajouter les lunes
        const moons = system_data.filter(body => body.body_type === 'Moon');
        sorted_data.push(...moons);

        // Ajouter les astéroïdes
        const asteroids = system_data.filter(body => body.body_type === 'Asteroid');
        sorted_data.push(...asteroids);

        // Ajouter les comètes
        const comets = system_data.filter(body => body.body_type === 'Comet');
        sorted_data.push(...comets);

        return sorted_data;
    })
}