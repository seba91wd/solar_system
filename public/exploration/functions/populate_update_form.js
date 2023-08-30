// Fonction pour pré-remplir les champs du formulaire de mise à jour
export function populate_update_form(corps) {
    document.querySelector('#update_name').value = corps.name;
    document.querySelector('#update_english_name').value = corps.english_name;
    document.querySelector('#update_body_type').value = corps.body_type;

    const massParts = corps.mass.split(' x 10^');
    if (massParts.length === 2) {
        document.querySelector('#update_mass_value').value = massParts[0];
        document.querySelector('#update_mass_exponent').value = massParts[1].split(' ')[0];
    };

    document.querySelector('#update_density').value = corps.density;
    document.querySelector('#update_gravity').value = corps.gravity;
    document.querySelector('#update_axial_tilt').value = corps.axial_tilt;
    document.querySelector('#update_equa_radius').value = corps.equa_radius;
    document.querySelector('#update_mean_radius').value = corps.mean_radius;
    document.querySelector('#update_polar_radius').value = corps.polar_radius;
    document.querySelector('#update_flattening').value = corps.flattening;
    document.querySelector('#update_inclination').value = corps.inclination;
    document.querySelector('#update_eccentricity').value = corps.eccentricity;
    document.querySelector('#update_aphelion').value = corps.aphelion;
    document.querySelector('#update_perihelion').value = corps.perihelion;
    document.querySelector('#update_arg_periapsis').value = corps.arg_periapsis;
    document.querySelector('#update_sideral_rotation').value = corps.sideral_rotation;
    document.querySelector('#update_sideral_orbit').value = corps.sideral_orbit;
    document.querySelector('#update_picture').value = corps.picture || null;
};
