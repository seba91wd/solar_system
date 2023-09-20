// Importation de la bar de navigation
import { nav_bar } from "../nav_bar.js";

// Importation de la fonction de recherche par nom / type / ID / limite 
import { search_bodies } from "./functions/search_bodies.js";

// Importation de la fonction de remplissage du tableau des données
import { tbody_update } from "./functions/tbody_update.js";

// Importation de la fonction copier le lien de la recherche dans le presse-papier
import { copy_link } from "./functions/copy_link.js";

// Importation de la fonction filtrage des corps du tableau
import { tbody_filter } from "./functions/tbody_filter.js";

// Importation de la fonction de récupération du token de l'utilisateur
import { get_token_from_cookies } from "./functions/get_token_from_cookies.js";

// Importation de la fonction jouter un corps céleste
import { add_bodie } from "./functions/add_bodie.js";

// Importation de la fonction de pré-remplissage du formulaire de modification d'un corps céleste
import { populate_update_form } from "./functions/populate_update_form.js";

// Importation de la fonction de mise a jour des corps
import { update_bodie } from "./functions/update_bodie.js";

// Importation de la fonction de suppresion des corps
import { delete_bodie } from "./functions/delete_bodie.js";

import { message_for_user } from "./functions/message_for_user.js";

// Stock je jeton jwt de l'utilisateur, ou NULL si l'utilisateur n'est pas authentifié
const auth_token_present = get_token_from_cookies();

// Bouton "Connexion" en haut a droite
const connexion = document.querySelector('#connexion');

// Div "Edition des données"
const container_data_edit = document.querySelector('#container_data_edit');

// Lien vers la cherche dans l'API
const api_link = document.querySelector('#api_link');

// Champ de recherche par nom
const form_search_by_name = document.querySelector('#form_search_by_name');

// Checkboxes des filtres par type de corps céleste
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Bouton "Copie"
const div_btn_copy = document.querySelector('#div_btn_copy');
const btn_copy = document.querySelector('#btn_copy');

// Bouton Ajouter, Modifier, Supprimer, un corps
const btn_add_data = document.querySelector('#btn_add_data');
const btn_update_data = document.querySelector('#btn_update_data');
const btn_del_data = document.querySelector('#btn_del_data');

// Div (⬅ Choisissez une une tache)
const div_choose = document.querySelector('#div_choose');

// Div Ajouter, Modifier, Supprimer, un corps
const div_add_data = document.querySelector('#div_add_data');
const div_update_data = document.querySelector('#div_update_data');
const div_del_data = document.querySelector('#div_del_data');

// Formulaires
const add_form = document.querySelector("#add_form");
const update_form = document.querySelector('#update_form');
const delete_form = document.querySelector('#delete_form');

// Champs de recherche "ID du corps" (Modifier & Supprimer un corps céleste)
const form_search_id_bodie_update = document.querySelector('#form_search_id_bodie_update');
const form_search_id_bodie_delete = document.querySelector('#form_search_id_bodie_delete');

// Champs de confirmation de suppresion d'un corps
const div_delete_confirmation = document.querySelector('#div_delete_confirmation');

// Ajout de la bare de navigation
nav_bar();

// Si l'utilisateur est authentifié, on autorise l'affichage des fonctions réservées
if (auth_token_present) {

    // Lien "Connexion / Déconnexion"
    connexion.textContent = "Déconnexion";
    connexion.href = "";

    // Div "Edition des données"
    container_data_edit.classList.remove("hidden");

    // Evenement déconnexion de l'utilisateur
    connexion.addEventListener('click', () => {
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}
else {
    // Lien "Connexion / Déconnexion"
    connexion.textContent = "Connexion";
    connexion.href = "/connexion";

    // Div "Edition des données"
    container_data_edit.classList.add("hidden");
};

// Recherche par nom
form_search_by_name.addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire

    // Valeur de la recherche par nom
    const name_value = document.querySelector('#search_by_name').value || null;
    // Valeur du filtre de recherche par type
    const type_value = document.querySelector('#search_by_type').value || null;
    // Valeur de la limite de résultats
    const limit_value = document.querySelector('#search_limit').value;

    const options = {name: name_value, id: null, type: type_value, limit: limit_value};
    const {response, link} = await search_bodies(options);

    if (response !== false) {
        // Implémentation du "lien de la recherche"
        api_link.href = link;
        api_link.textContent = link;
        // Mise a jour du tableau de donnée
        tbody_update(response);
    };
});

// Application des filtres sur le tableau
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
        tbody_filter(checkboxes[i]);
    });
};

// Changement d'état du bouton btn_copy
div_btn_copy.addEventListener('mouseenter', () => {
    btn_copy.textContent = "Copier le lien :";
});
div_btn_copy.addEventListener('mouseleave', () => {
    btn_copy.textContent = "Lien de la recherche :";
});

// Copier le contenu de lien de la recherche
btn_copy.addEventListener('click', () => {
    try {
        copy_link(api_link);
        // Message de confirmation de la copie
        const api_link_temp = api_link.textContent;
        api_link.textContent = "Succès : Lien copié";
        setTimeout(() => {
            api_link.textContent = api_link_temp;
        }, 2000);
    }
    catch (error) {
        console.log(error);
    };
});

// Bouton Ajouter un corps
btn_add_data.addEventListener('click', () => {
    btn_add_data.style = "border-color: #ffffff; background-color: #080047d7;";
    btn_update_data.style = "border-color: #000000; background-color: transparent;";
    btn_del_data.style = "border-color: #000000; background-color: transparent;";

    div_choose.classList.add("hidden");

    div_add_data.style.display = "block";
    div_update_data.style.display = "none";
    div_del_data.style.display = "none";
});

// Bouton Modifier un corps
btn_update_data.addEventListener('click', () => {
    btn_add_data.style = "border-color: #000000; background-color: transparent;";
    btn_update_data.style = "border-color: #ffffff; background-color: #080047d7;";
    btn_del_data.style = "border-color: #000000; background-color: transparent;";

    div_choose.classList.add("hidden");

    div_add_data.style.display = "none";
    div_update_data.style.display = "block";
    div_del_data.style.display = "none";
});

// Bouton Supprimer un corps
btn_del_data.addEventListener('click', () => {
    btn_add_data.style = "border-color: #000000; background-color: transparent;";
    btn_update_data.style = "border-color: #000000; background-color: transparent;";
    btn_del_data.style = "border-color: #ffffff; background-color: #080047d7;";

    div_choose.classList.add("hidden");

    div_add_data.style.display = "none";
    div_update_data.style.display = "none";
    div_del_data.style.display = "block";
});

// Ajouter un corps céleste
add_form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    try {
        const response = await add_bodie(event, auth_token_present);
        message_for_user(response.message);
        // Nettoyage du formulaire
        add_form.reset()
    } catch (error) {
        message_for_user(error)
        console.error("Une erreur s'est produite :", error);
    }
});

// Recherche de l'ID du corps a modifier
let update_bodie_id;
form_search_id_bodie_update.addEventListener('submit', async (event) => {
    event.preventDefault();

    const id_value = document.querySelector('#search_id_up').value;

    const options = {name: null, id: id_value, type: null, limit: null};
    const {response, link} = await search_bodies(options);

    if (response.corps) {
        // Pré-remplissage du formulaire avec les valeurs existantes
        populate_update_form(response.corps);
        // Mise a jour de la valeur de update_bodie_id
        update_bodie_id = response.corps.id;
        // Affichage du formulaire
        update_form.style.display = "flex";
        // Scroll de la fenêtre
        window.scrollTo(0, window.scrollY + 500);
        // Message du serveur
        message_for_user(response.message);
    }
    else {
        update_form.style.display = "none";
        // Message d'erreur du serveur
        message_for_user(response);
    };
});

// Modifier un corps céleste
update_form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const response = await update_bodie(event, update_bodie_id, auth_token_present);
        message_for_user(response.message);
        update_form.style.display = "none";
        update_form.reset();
    } 
    catch (error) {
        console.error("Une erreur s'est produite :", error);
    };
});

// Recherche de l'ID du corps a supprimer
let delete_bodie_id;
form_search_id_bodie_delete.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const id_value = document.querySelector('#search_id_del').value;

    const options = {name: null, id: id_value, type: null, limit: null};
    const {response, link} = await search_bodies(options);
    
    // Balise contenant le message du serveur
    const delete_message_form = document.querySelector('#delete_message_form');

    if (response.corps) {
        // Mise a jour de la valeur de update_bodie_id
        delete_bodie_id = response.corps.id;
        // Message de confirmation
        delete_message_form.textContent = `Confirmez la suppresion du corps: ${response.corps.name}`;
        div_delete_confirmation.style.display = "block";
    }
    else {
        // Message d'erreur du serveur
        message_for_user(response);
    };
});

// Supprimer un corps céleste
delete_form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const response = await delete_bodie(delete_bodie_id, auth_token_present);
        // Message du serveur
        message_for_user(response.message);
        div_delete_confirmation.style.display = "none";
    } 
    catch (error) {
        console.error("Une erreur s'est produite :", error);
    };
});

const delete_cancel = document.querySelector('#delete_cancel');

delete_cancel.addEventListener('click', () => {
    div_delete_confirmation.style.display = "none";
    form_search_id_bodie_delete.reset();
})

console.log("Chargement de la page exploration des données");