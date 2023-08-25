// Importation de la bar de navigation
import { nav_bar } from "../nav_bar.js";

// Importation de la fonction "Recherche" par nom
import { search_by_name } from "./functions/search_by_name.js";

// Importation de la fonction de remplissage du tableau des données
import { tbody_update } from "./functions/tbody_update.js";

// Importation de la fonction copier le lien de la recherche dans le presse-papier
import { copy_api_link } from "./functions/copy_api_link.js";

// Importation de la fonction filtrage des corps du tableau
import { tbody_filter } from "./functions/tbody_filter.js";

// Importation de la fonction de récupération du token de l'utilisateur
import { get_token_from_cookies } from "./functions/get_token_from_cookies.js";

// Importation de la fonction jouter un corps céleste
import { add_bodie } from "./functions/add_bodie.js";

// Importation de la fonction recherche par l'ID
import { search_by_id } from "./functions/search_by_id.js";

// Importation de la fonction de pré-remplissage du formulaire de modification d'un corps céleste
import { populate_update_form } from "./functions/populate_update_form.js";

// Importation de la fonction de mise a jour des corps
import { update_bodie } from "./functions/update_bodie.js";

// Importation de la fonction de suppresion des corps
import { delete_bodie } from "./functions/delete_bodie.js";

// Champ de recherche par nom
const search_form = document.querySelector('#search_form');

// Checkboxes des filtres par type de corps céleste
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Bouton "Copie"
const btn_copy = document.querySelector('#btn_copy');

// Bouton "Connexion" en haut a droite
const connexion = document.querySelector('#connexion');

// Div des formulaires
const update_bodie_form = document.querySelector('#update_bodie_form');
const add_bodie_form = document.querySelector('#add_bodie_form');
const delete_bodie_form = document.querySelector('#delete_bodie_form');

// Formulaires
const update_form = document.querySelector('#update_form');
const delete_form = document.querySelector('#delete_form');

// Cette constante permet de vérifier si l'utilisateur est connecté, et le cas échéant délivre son jeton JWT
const auth_token_present = get_token_from_cookies();

// Champs de recherche "ID du corps" (Modifier & Supprimer un corps céleste)
const form_search_id_bodie_update = document.querySelector('#form_search_id_bodie_update');
const form_search_id_bodie_delete = document.querySelector('#form_search_id_bodie_delete');

// Div contenant les boutons "Confirmer" et "Annuler", la suppression d'un corps
const div_delete_confirmation = document.querySelector('#div_delete_confirmation');

// Bar de navigation (accueil, exploration API, Visualisation 3D)
nav_bar();

// Si l'utilisateur est authentifié, on autorise l'affichage des fonctions réservées
if (auth_token_present) {
    connexion.textContent = "Déconnexion";
    connexion.href = "";
    // Déconnexion de l'utilisateur
    connexion.addEventListener('click', () => {
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
    add_bodie_form.style.display = "flex";
    update_bodie_form.style.display = "block";
    delete_bodie_form.style.display = "block"
}
else {
    connexion.textContent = "Connexion";
    connexion.href = "/connexion";
    add_bodie_form.style.display = "none";
    update_bodie_form.style.display = "none";
    delete_bodie_form.style.display = "none"
}

// Recherche par nom
search_form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    const response = await search_by_name();
    tbody_update(response);
});

// Application des filtres sur le tableau
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
        tbody_filter(checkboxes[i]);
    });
};

// Copier le contenu de lien de la recherche
btn_copy.addEventListener('click', copy_api_link);

// Ajouter un corps céleste
add_bodie_form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    const add_form_message = document.querySelector('#add_form_message');

    try {
        const response = await add_bodie(event, auth_token_present);
        add_form_message.textContent = response.message;
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }
});

// Recherche de l'ID du corps a modifier
let update_bodie_id;
form_search_id_bodie_update.addEventListener('submit', async (event) => {
    event.preventDefault();

    const search_id_value = document.querySelector('#search_id_up').value;
    const data = await search_by_id(search_id_value);

    // Balise contenant le message du serveur
    const update_message_form = document.querySelector('#update_message_form');

    if (data.corps) {
        // Pré-remplissage du formulaire avec les valeurs existantes
        populate_update_form(data.corps);
        // Mise a jour de la valeur de update_bodie_id
        update_bodie_id = data.corps.id;
        // Affichage du formulaire
        update_form.style.display = "flex";
        // Scroll de la fenêtre
        window.scrollTo(0, window.scrollY + 500);
        // Message du serveur
        update_message_form.textContent = data.message;
        console.log(data);
    }
    else {
        update_form.style.display = "none";
        // Message d'erreur du serveur
        update_message_form.textContent = data;
        console.log(data);
    };
});

// Modifier un corps céleste
update_form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const update_form_message = document.querySelector('#update_form_message');

    try {
        const response = await update_bodie(event, update_bodie_id, auth_token_present);
        update_form_message.textContent = response.message;
        console.log(response);
    } 
    catch (error) {
        console.error("Une erreur s'est produite :", error);
    };
});

// Recherche de l'ID du corps a supprimer
let delete_bodie_id;
form_search_id_bodie_delete.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const search_id_value = document.querySelector('#search_id_del').value;
    const data = await search_by_id(search_id_value);
    
    // Balise contenant le message du serveur
    const delete_message_form = document.querySelector('#delete_message_form');

    if (data.corps) {
        // Mise a jour de la valeur de update_bodie_id
        delete_bodie_id = data.corps.id;
        // Message du serveur
        delete_message_form.textContent = `Confirmez la suppresion du corps: ${data.corps.name}`;
        div_delete_confirmation.style.display = "block";
        console.log(data);
    }
    else {
        // Message d'erreur du serveur
        delete_message_form.textContent = data;
        console.log(data);
    };
});

// Supprimer un corps céleste
delete_form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const delete_message_form = document.querySelector('#delete_message_form');

    try {
        const response = await delete_bodie(delete_bodie_id, auth_token_present);
        delete_message_form.textContent = response.message;
        div_delete_confirmation.style.display = "none";
        console.log(response);
    } 
    catch (error) {
        console.error("Une erreur s'est produite :", error);
    };
})

console.log("Chargement de la page exploration de l'API");