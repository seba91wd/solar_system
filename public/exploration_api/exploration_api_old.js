// Importation de la bar de navigation
import { nav_bar } from "../nav_bar.js";
nav_bar();

// Champ de recherche
const search_form = document.querySelector('#search_form');
const search_input = document.querySelector('#search');

// Checkboxes des filtres par type de corps céleste
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Tableau de donnée
const tbody = document.querySelector('tbody');

// Tableau des valeurs (colonnes)
const table_headers = [
    "id", "name", "english_name", "body_type", "mass", "density", "gravity",
    "axial_tilt", "equa_radius", "mean_radius", "polar_radius", "flattening",
    "inclination", "around_planet", "eccentricity", "aphelion", "perihelion",
    "arg_periapsis", "sideral_rotation", "sideral_orbit", "picture", "moons"
];

// Bouton "Copie"
const btn_copy = document.querySelector('#btn_copy')
// Lien vers la cherche dans l'API
const api_link = document.querySelector('#api_link');

// Lien "Connexion"
const connexion = document.querySelector('#connexion');

// Div des formulaires
const update_bodie_form = document.querySelector('#update_bodie_form');
const add_bodie_form = document.querySelector('#add_bodie_form');

// Formulaires
const update_form = document.querySelector('#update_form');

// Cette constante permet de vérifier si l'utilisateur est connecté, et le cas échéant délivre son jeton JWT
const auth_token_present = get_token_from_cookies();

// Champs de recherche "ID du corps" (Modifier un corps céleste)
const form_search_id = document.querySelector('#form_search_id');

// Formulaire de mise à jour des corps masqués par défaut.
update_form.style.display = "none";

// Écoutez l'événement de soumission du formulaire
search_form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const search_value = search_input.value;
    const limit_value = document.querySelector('#limit').value;

    if (search_value.trim() !== '') {
        tbody.innerHTML = "";
        try {
            const response = await fetch(`/api/bodies?name=${search_value}&limit=${limit_value}`);
            const res_data = await response.json();
            console.log(res_data);

            api_link.href = `/api/bodies?name=${search_value}`;
            api_link.textContent = `http://localhost:3001/api/bodies?name=${search_value}&limit=${limit_value}`;

            // Parcours de tous les objets dans le tableau 'data'
            res_data.data.forEach(item => {
                const row = document.createElement('tr');
                const typeClass = item.body_type.replace(/\s+/g, '_'); // Remplace les espaces par des underscores
                row.classList.add(typeClass.toLowerCase()); // Ajoute la classe du type de corps céleste à la ligne

                // Parcours des en-têtes de colonne pour maintenir l'ordre
                table_headers.forEach(header => {
                    const cell = document.createElement('td');
                    // Traitement des lunes
                    if (header === "moons") {
                        // Si l'objet possède une lune
                        if (item.moons && Array.isArray(item.moons)) {
                            // On récupère les noms des lunes
                            const moonNames = item.moons.map(moon => moon.moon).join(", ");
                            cell.textContent = moonNames;
                        } else {
                            cell.textContent = "";
                        }
                    } else {
                        // Pour les autres colonnes, utilisez simplement la valeur de la propriété
                        cell.textContent = item[header];
                    }
                    row.appendChild(cell);
                });

                // Ajout de la ligne au tableau
                tbody.appendChild(row);
            });

        }
        catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }
    };
});

btn_copy.addEventListener('click', () => {
    if (navigator.clipboard) {
        const copy = api_link.textContent;
        const textToCopy = "Texte à copier dans le presse-papiers";

        // Utilisation de l'API Clipboard pour copier le texte
        navigator.clipboard.writeText(copy)
            .then(() => {
                console.log("Texte copié avec succès !");
            })
            .catch(error => {
                console.error("Erreur lors de la copie du texte : ", error);
            });
    }
    else {
        // Secours pour les navigateurs ne prenant pas en charge l'API Clipboard (jamais testé !)
        // Sélectionner le contenu du textarea
        api_link.textContent.select();
        // Copier le contenu dans le presse-papiers
        document.execCommand("copy");
        console.log("Le navigateur ne prend pas en charge l'API Clipboard !");
    };
});

// Application des filtres sur le tableau
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
        const type = checkboxes[i].id.replace('checkbox_', '');
        // const rows = document.querySelectorAll(`tbody tr[class="${type}"]`); // Probleme a resoudre ici 
        const rows = document.querySelectorAll("tr") // if tr.classlist.contains(${type})

        if (checkboxes[i].checked === true) {
            rows.forEach(row => {
                if (row.classList.contains("inactive")) {
                    row.classList.remove('inactive');
                }
            });
        }
        else {
            console.log("checked === false");
            rows.forEach(row => {
                if (row.classList.contains(type)) {
                    row.classList.add('inactive');
                }
            });
        };
    });
};

// Si l'utilisateur est authentifié, on autorise l'affichage des fonctions réservées
if (auth_token_present) {
    connexion.textContent = "Déconnexion";
    connexion.href = "";
    // Déconnexion de l'utilisateur
    connexion.addEventListener('click', () => {
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
    add_bodie_form.style.display = "flex";
    update_bodie_form.style.display = "bloc"
}
else {
    connexion.textContent = "Connexion";
    connexion.href = "/connexion";
    add_bodie_form.style.display = "none";
    update_bodie_form.style.display = "none"
}

// Ajouter un corps céleste
add_bodie_form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const add_form_message = document.querySelector('#add_form_message');

    if (auth_token_present) {
        try {
            const response = await fetch_to_api(event, "POST");
            if (response) {
                add_form_message.textContent = response.message;
            }
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    } else {
        console.log("Le token d'authentification n'a pas été trouvé dans les cookies.");
    }
});


// Modifier un corps céleste
let search_id = "";
form_search_id.addEventListener('submit', async (event) => {
    event.preventDefault();

    search_id = document.querySelector('#search_id').value;

    const corps_to_update = await fetch_to_api(event, "GET", search_id);
    console.log(corps_to_update);
    if (corps_to_update.corps) {
        // Affichage du formulaire
        update_form.style.display = "flex";
        // Pré-remplissage du formulaire
        populate_update_form(corps_to_update.corps);
        // Scroll de la fenêtre
        window.scrollTo(0, window.scrollY + 500);
    } else {
        update_form.style.display = "none";
        console.log("Aucun corps céleste trouvé avec l'ID spécifié.");
    }
});

update_form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Mise a jour du corps
    if (auth_token_present) {
        console.log(event.data);
        // fetch_to_api(event, "PUT", search_id);
    }
    else {
        console.log("Le token d'authentification n'a pas été trouvé dans les cookies.");
    };
})

// Fonction pour pré-remplir les champs du formulaire de mise à jour
function populate_update_form(corps) {
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
}


// Fonction de récupération du token dans le cookie 
function get_token_from_cookies() {
    const cookies = document.cookie.split(';');
    let auth_token = null;

    for (const cookie of cookies) {
        const trimmed_cookie = cookie.trim();

        if (trimmed_cookie.startsWith("auth_token=")) {
            const token_parts = trimmed_cookie.split('=');
            if (token_parts.length === 2) {
                auth_token = token_parts[1];
                break;
            };
        };
    };
    return auth_token;
};

async function fetch_to_api(event, meth_type, id) {
    let req_url = "";

    if (meth_type === "POST") {
        req_url = "/api/bodies";
    }
    else if (meth_type === "GET") {
        req_url = "/api/bodies?id=" + id;
    }
    else if (meth_type === "PUT") {
        req_url = "/api/update/" + id;
    }

    const headers = {
        'Authorization': `Bearer ${auth_token_present}` // Ajoutez le token dans l'en-tête
    };

    let fetchOptions = {
        method: meth_type,
        headers: headers,
    };

    if (meth_type === "POST" || meth_type === "PUT") {
        const form_data = new FormData(event.target);
        fetchOptions.body = new URLSearchParams(form_data);
        fetchOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        console.log(form_data);
        const jsonFormData = {
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
        
        fetchOptions.body = JSON.stringify(jsonFormData);
    }

    return fetch(req_url, fetchOptions)
        .then(async response => {
            if (response.ok) {
                return await response.json(); // Utilisez "await" pour lire la réponse JSON
            } 
            else {
                const error_data = await response.json();
                console.error('Erreur lors de l\'envoi de la requête:', error_data);
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi de la requête:', error);
        });
}


console.log("Chargement de la page exploration de l'API");