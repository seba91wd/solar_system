export async function add_bodie(event, auth_token) {
    const form_data = new FormData(event.target);

    const body_data = {
        name: form_data.get('name'),
        english_name: form_data.get('english_name'),
        body_type: form_data.get('body_type'),
        mass: {
            mass_value: form_data.get('mass_value'),
            mass_exponent: form_data.get('mass_exponent'),
        },
        density: form_data.get('density'),
        gravity: form_data.get('gravity'),
        axial_tilt: form_data.get('axial_tilt'),
        equa_radius: form_data.get('equa_radius'),
        mean_radius: form_data.get('mean_radius'),
        polar_radius: form_data.get('polar_radius'),
        flattening: form_data.get('flattening'),
        inclination: form_data.get('inclination'),
        around_planet: form_data.get('around_planet'),
        eccentricity: form_data.get('eccentricity'),
        aphelion: form_data.get('aphelion'),
        perihelion: form_data.get('perihelion'),
        arg_periapsis: form_data.get('arg_periapsis'),
        sideral_rotation: form_data.get('sideral_rotation'),
        sideral_orbit: form_data.get('sideral_orbit'),
        picture: form_data.get('picture'),
    };

    try {
        const response = await fetch('/api/bodies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Utilisez le bon en-tête pour JSON
                'Authorization': `Bearer ${auth_token}`
            },
            body: JSON.stringify(body_data) // Utilisez JSON.stringify pour envoyer les données au format JSON
        });

        if (response.ok) {
            return await response.json();
        } else {
            const error_data = await response.json();
            console.error('Erreur lors de l\'envoi de la requête:', error_data);
            return error_data;
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
}
