// Importation de la nav bar
import { nav_bar } from "../nav_bar.js";
nav_bar();

// Champ de recherche
const search = document.querySelector('#search');
const btn_empty_field = document.querySelector('#empty_field');
const btn_launch_search = document.querySelector('#launch_search');

// Tableau de données
const tbody = document.querySelector('tbody');

// Lien vers la cherche dans l'API
const api_link = document.querySelector('#api_link');

// Vider le champs de recherche
btn_empty_field.addEventListener('click', (event) => {
    search.value = "";
    event.preventDefault();
});

search.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
});


// Ne doit pas etre fait avec addEventListener
// la recherche doit etre traité coté serveur

// Executer la recherche
btn_launch_search.addEventListener('click', (event) => {
    console.log(search.value);
    // Envoi de la requete
    name_req(search.value)
    event.preventDefault();
});




function name_req(name, limit) {
    let url_req = "http://localhost:3001/api/bodies";
    if (name) {
        url_req += `?name=${name}`;
    };
    if (limit) {
        if (name) {
            url_req += `&limit=${limit}`;
        }
        else {
            url_req += `?limit=${limit}`;
        };
    };
    return fetch(url_req)
        .then(response => response.json())
        .then(data => {
            // Vérifier si les données sont valides
            if (!Array.isArray(data.data)) {
                throw new Error('Les données retournées ne sont pas valides.');
            }
            // Traitement du lien vers la recherche dans l'API
            api_link.innerHTML = url_req;
            api_link.href = url_req;

            const system_data = data.data;
            console.log(system_data);
        })
}

console.log("Chargement de la page exploration de l'API");