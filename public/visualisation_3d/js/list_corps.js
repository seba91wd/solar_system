import { all_group } from "./main.js";
import { tracking_interuptor } from "./main.js";

function create_component() {
    return new Promise((resolve) => {
        // Création du conteneur principal
        const listCorps = document.createElement("div");
        listCorps.classList.add("border", "scrollbar");
        listCorps.id = "list_corps";

        // Titre principal
        const h2 = document.createElement("h2");
        h2.textContent = "liste des corps célestes";

        // Création des sections et de leurs éléments internes
        const sections = [
            { title: "Étoile", id: "list_star" },
            { title: "Planètes telluriques", id: "list_telluric" },
            { title: "Géantes gazeuses", id: "list_gaz" },
            { title: "Planètes naines", id: "list_dwarf" },
            { title: "Comètes", id: "list_comet" },
            { title: "Astéroïdes", id: "list_asteroid" },
        ];

        sections.forEach((sectionInfo) => {
            const sectionDiv = document.createElement("div");
            const h3 = document.createElement("h3");
            h3.classList.add("h3_list_type");
            h3.textContent = sectionInfo.title;

            if (sectionInfo.title !== "Étoile") {
                const btn_orbits_view = document.createElement("img");
                btn_orbits_view.src = "./visualisation_3d/js/icons/orbit.png";
                btn_orbits_view.alt = "Schéma corps en orbite";
                btn_orbits_view.id = sectionInfo.id + "_orbit";
                btn_orbits_view.className = "btn_orbits_view";
                sectionDiv.appendChild(btn_orbits_view);
            }

            const ul = document.createElement("ul");
            ul.classList.add("list_corps_ul");
            ul.id = sectionInfo.id;

            sectionDiv.appendChild(h3);
            sectionDiv.appendChild(ul);

            listCorps.appendChild(sectionDiv);
        });

        // Ajout du composant au DOM
        document.querySelector("#main").appendChild(listCorps);

        resolve();
    });
};

function check_all_group() {
    return new Promise((resolve) => {
        const check = () => {
            let check_value = true;
            // Test de disponibilitée de l'objet "all_group"
            if (all_group.length > 0 && all_group[0].children[1].children[0]) {
                // for (let i = 0; i < all_group[0].children.length; i++) {
                //     const group = all_group[0].children[i];
                //     if (!group.children[0].name) {
                //         check_value = false;
                //     }
                // }

                // Remplace la boucle for ci dessus grace a la méthode "every" pour vérifier si tous les groupes répondent à une condition donnée
                check_value = all_group[0].children.every((group) => !!group.children[0].name);
            }
            else {
                check_value = false
            }
            
            // Vérification des tests
            if (check_value !== false) {
                resolve(all_group);
            }
            else {
                setTimeout(check, 500); // Vérifie toutes les 500 millisecondes
            }
        };
        check();
    });
};

function generate_li_elements() {
    return new Promise((resolve) => {

        // Balises <ul> de la div #list_corps
        const list_star = document.querySelector("#list_star");
        const list_telluric = document.querySelector("#list_telluric");
        const list_gaz = document.querySelector("#list_gaz");
        const list_dwarf = document.querySelector("#list_dwarf");
        const list_comet = document.querySelector("#list_comet");
        const list_asteroid = document.querySelector("#list_asteroid");

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

function event_listener() {
    return new Promise((resolve) => {
        
        // --- Évènement: Afficher / Masquer les ligne des orbites ---
        const btn_orbits_view = document.querySelectorAll(".btn_orbits_view");
        for (let i = 0; i < btn_orbits_view.length; i++) {
            const btn = btn_orbits_view[i];
            btn.addEventListener("click", () => {
                console.log(btn);
                const orbit_type = btn.id.split("_")[1];
                console.log(orbit_type);

                const line_array = {
                    telluric: [],
                    gaz: [],
                    dwarf: [],
                    comet: [],
                    asteroid: []
                };

                for (let j = 1; j < all_group[0].children.length; j++) {
                    const mesh = all_group[0].children[j].children[0].children[0];
                    const line = all_group[0].children[j].children[1];
                    // console.log(mesh);
                    // console.log(line);
                
                    if (mesh.data.body_type === "Telluric planet") {
                        line_array.telluric.push(line)
                    }
                    else if (mesh.data.body_type === "Gas giant") {
                        line_array.gaz.push(line);
                    }
                    else if (mesh.data.body_type === "Dwarf planet") {
                        line_array.dwarf.push(line);
                    }
                    else if (mesh.data.body_type === "Comet") {
                        line_array.comet.push(line);
                    }
                    else if (mesh.data.body_type === "Asteroid") {
                        line_array.asteroid.push(line);
                    }
                };

                if (orbit_type === "telluric") {
                    // Obtenir la liste des orbites telluriques et les masquer
                    console.log(line_array);
                    line_array.telluric.forEach((line) => {
                        switch_view(line, btn);
                    });
                }
                else if (orbit_type === "gaz") {
                    line_array.gaz.forEach((line) => {
                        switch_view(line, btn);
                    });
                }
                else if (orbit_type === "dwarf") {
                    line_array.dwarf.forEach((line) => {
                        switch_view(line, btn);
                    });
                }
                else if (orbit_type === "comet") {
                    line_array.comet.forEach((line) => {
                        switch_view(line, btn);
                    });
                }
                else if (orbit_type === "asteroid") {
                    line_array.asteroid.forEach((line) => {
                        switch_view(line, btn);
                    });
                }
                
            });
        };

        function switch_view(line, btn) {
            if (line.visible === true) {
                btn.src = "./visualisation_3d/js/icons/orbit_close.png"
                line.visible = false;
            }
            else {
                btn.src = "./visualisation_3d/js/icons/orbit.png";
                line.visible = true;
            }
        }
        
        // --- Évènement: Déplier / Replier les fenêtres des listes de corps ---
        const h3_list_type = document.querySelectorAll(".h3_list_type");
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

                if (target_name === "Sun") {
                    // Traitement du cas spécifique du soleil 
                    const sun_group = all_group[0];
                    tracking_interuptor(sun_group);
                }
                else {
                    // Recherche d'une corespondance entre le "target_name" et le nom des objets de la scene
                    for (let y = 0; y < all_group[0].children.length; y++) {
                        const orbiter_group = all_group[0].children[y].children[0];
                        if (orbiter_group.isGroup === true) {
                            if (target_name === orbiter_group.children[0].data.english_name) {
                                tracking_interuptor(orbiter_group);
                                break;
                            };
                        };
                    };
                };
            });
        };
    });
};

create_component().then(() => {
    check_all_group().then(() => {
        generate_li_elements().then(() => {
            event_listener();
        })
    })
});

