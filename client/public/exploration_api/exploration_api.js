// Importation de la nav bar
import { nav_bar } from "../../src/nav_bar.js";
nav_bar();
console.log("Chargement de la page exploration de l'API");

const port = 3001;
const hostname = "localhost";

// Champ de recherche
const search = document.querySelector('#search');
const btn_empty_field = document.querySelector('#empty_field');
const btn_launch_search = document.querySelector('#launch_search');

// Tableau de données
const tbody = document.querySelector('tbody');

// Vider le champs de recherche
btn_empty_field.addEventListener('click', (event) => {
    search.value = "";
    event.preventDefault();
});

// Executer la recherche
btn_launch_search.addEventListener('click', (event) => {
    if (search.value !== "") {
        console.log(search.value);
        name_req(search.value)
        event.preventDefault();
    }
});



function name_req(name) {
    return fetch(`http://${hostname}:${port}/api/bodies?name=${name}`)
    .then(response => response.json())
    .then(data => {
        // Vérifier si les données sont valides
        if (!Array.isArray(data.data)) {
            throw new Error('Les données retournées ne sont pas valides.');
        }
        const system_data = data.data;
        console.log(system_data);
        // tbody
    })
}