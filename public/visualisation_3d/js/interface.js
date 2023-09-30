import { all_group } from "./main.js";
import { tracking_interuptor } from "./main.js";

// Balises <ul> de la div #list_corps
const list_star = document.querySelector("#list_star");
const list_telluric = document.querySelector("#list_telluric");
const list_gaz = document.querySelector("#list_gaz");
const list_dwarf = document.querySelector("#list_dwarf");
const list_comet = document.querySelector("#list_comet");
const list_asteroid = document.querySelector("#list_asteroid");

// Balises <h3> type de corps
const h3_list_type = document.querySelectorAll(".h3_list_type");

// Vérification de la disponibilité de la liste des corps
function check_all_group() {
    return new Promise((resolve) => {
        const check = () => {
            if (all_group.length > 0 && all_group[0].children[1].children[0]) {
                let check_value = true
                for (let i = 0; i < all_group[0].children.length; i++) {
                    const group = all_group[0].children[i];
                    if (!group.children[0].name) {
                        check_value = false;
                    }
                }
                if (check_value === true) {
                    resolve(all_group);
                }
                else {
                    setTimeout(check, 500); // Vérifie toutes les 500 millisecondes
                }
            }
            else {
                setTimeout(check, 500);
            }
        };
        check();
    });
};

// Attendre que le tableau all_group soit prêt
check_all_group().then((all_group) => {

    // --- Implémentation de la liste des corps célestes ---
    generate_li_elements(all_group).then(() => {
        // Maintenant que les balises <li> sont générées et ajoutées au DOM,

        // --- Évènement: Déplier / Replier les fenêtres des listes de corps ---
        for (let i = 0; i < h3_list_type.length; i++) {
            const ul = h3_list_type[i];
            ul.addEventListener('click', () => {
                if (ul.nextElementSibling.classList.contains("list_active")) {
                    ul.nextElementSibling.classList.remove("list_active");
                }
                else {
                    ul.nextElementSibling.classList.add("list_active");
                };
            });
        };

        // --- Évènement: Sélection (click) d'un corps dans la liste ---
        const corps = document.querySelectorAll(".corps");
        for (let i = 0; i < corps.length; i++) {
            const li = corps[i];
            li.addEventListener('click', () => {
                const target_name = li.id;
                console.log("target_name : " + target_name);

                for (let y = 0; y < all_group[0].children.length; y++) {

                    const orbiter_group = all_group[0].children[y].children[0];
                    if (orbiter_group.isGroup === true) {
                        
                        if (target_name === orbiter_group.children[0].data.english_name) {
                            console.log(orbiter_group);
                            tracking_interuptor(orbiter_group)
                            break;
                        }
                    }
                }
            });
        };
    });
});

function generate_li_elements(all_group) {
    return new Promise((resolve) => {
        for (let i = 0; i < all_group[0].children.length; i++) {
            // Sélection de l'objet THREE Mesh correspondant a un corps de la scène..
            let mesh
            if (i === 0) {
                // Cas spécifique du soleil
                mesh = all_group[0].children[i].children[0];
            }
            else {
                // Pour tout les autre groups de corps
                mesh = all_group[0].children[i].children[0].children[0];
            };

            // Création d'une balise <li>
            const li = document.createElement("li");
            li.classList.add("corps");
            li.id = mesh.data.english_name;
            li.textContent = mesh.data.name;

            // Ajout des corps dans la liste correspondante
            if (mesh.data.body_type === "Star") {
                list_star.prepend(li);
            }
            else if (mesh.data.body_type === "Telluric planet") {
                list_telluric.prepend(li);
            }
            else if (mesh.data.body_type === "Gas giant") {
                list_gaz.prepend(li);
            }
            else if (mesh.data.body_type === "Dwarf planet") {
                list_dwarf.prepend(li);
            }
            else if (mesh.data.body_type === "Comet") {
                list_comet.prepend(li);
            }
            else if (mesh.data.body_type === "Asteroid") {
                list_asteroid.prepend(li);
            }
        };
        resolve(); // Résoudre la promesse une fois que les balises sont ajoutées.
    });
}