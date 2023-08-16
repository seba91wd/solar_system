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

// Bouton "Copie"
const btn_copy = document.querySelector('#btn_copy')
// Lien vers la cherche dans l'API
const api_link = document.querySelector('#api_link');

// Tableau des valeurs (colonnes)
const table_headers = [
    "id", "name", "english_name", "body_type", "mass", "density", "gravity",
    "axial_tilt", "equa_radius", "mean_radius", "polar_radius", "flattening",
    "inclination", "around_planet", "eccentricity", "aphelion", "perihelion",
    "arg_periapsis", "sideral_rotation", "sideral_orbit", "picture", "moons"
];

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

console.log("Chargement de la page exploration de l'API");