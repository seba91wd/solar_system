export async function update_bodie(event, update_bodie_id, auth_token_present) {
    
    const form_data = new FormData(event.target);

    const body_data = {
        name: form_data.get('update_name'),
        english_name: form_data.get('update_english_name'),
        body_type: form_data.get('update_body_type'),
        mass: {
            mass_value: form_data.get('update_mass_value'),
            mass_exponent: form_data.get('update_mass_exponent'),
        },
        density: form_data.get('update_density'),
        gravity: form_data.get('update_gravity'),
        axial_tilt: form_data.get('update_axial_tilt'),
        equa_radius: form_data.get('update_equa_radius'),
        mean_radius: form_data.get('update_mean_radius'),
        polar_radius: form_data.get('update_polar_radius'),
        flattening: form_data.get('update_flattening'),
        inclination: form_data.get('update_inclination'),
        around_planet: form_data.get('update_around_planet'),
        eccentricity: form_data.get('update_eccentricity'),
        aphelion: form_data.get('update_aphelion'),
        perihelion: form_data.get('update_perihelion'),
        arg_periapsis: form_data.get('update_arg_periapsis'),
        sideral_rotation: form_data.get('update_sideral_rotation'),
        sideral_orbit: form_data.get('update_sideral_orbit'),
        picture: form_data.get('update_picture'),
    };

    try {
        const response = await fetch(`/api/update/${update_bodie_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Utilisez le bon en-tête pour JSON
                'Authorization': `Bearer ${auth_token_present}`
            },
            body: JSON.stringify(body_data) // Utilisez JSON.stringify pour envoyer les données au format JSON
        });

        if (response.ok) {
            return await response.json();
        } else {
            const error_data = await response.json();
            console.error('Erreur lors de l\'envoi de la requête:', error_data);
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
}