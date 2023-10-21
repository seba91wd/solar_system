import { all_group } from "./main.js";
import { tracking_interuptor } from "./main.js";
import { anim_controls } from "./main.js";


check_all_group().then(() => {
    generate_nav_bar().then(() => {
        generate_li_elements().then(() => {
            event_tracking_corps();
            event_orbit_view();
            event_time_scale_component();
            event_coord_views();
            event_fps_views();
            event_nav_bar();
        })
    })
})

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

function generate_nav_bar() {
    return new Promise((resolve) => {

        // Crée l'élément div#nav
        const nav = document.createElement('div');
        nav.id = 'nav';

        // Crée l'élément div#div_btn_nav_view
        const div_btn_nav_view = document.createElement('div');
        div_btn_nav_view.id = 'div_btn_nav_view';

        // Crée l'élément img#burger_action
        const burger_action = document.createElement('img');
        burger_action.id = 'burger_action';
        burger_action.src = '../visualisation_3d/js/icons/open_nav.png';
        burger_action.alt = 'Menu burger';

        // Ajoute img#burger_action à div#div_btn_nav_view
        div_btn_nav_view.appendChild(burger_action);

        // Crée l'élément h1
        const h1 = document.createElement('h1');
        h1.textContent = 'Carte Stellaire';

        // Crée l'élément div#nav_container
        const nav_container = document.createElement('div');
        nav_container.id = 'nav_container';

        // Crée l'élément div#corps_list
        const corps_list = document.createElement('div');
        corps_list.id = 'corps_list';
        corps_list.className = 'div_tab';

        // Crée l'élément h2
        const h2_liste_corps = document.createElement('h2');
        h2_liste_corps.textContent = 'Liste des corps';

        // Crée l'élément div#star
        const div_star = createTab('star', 'Étoile', 0);

        // Crée l'élément div#telluric
        const div_telluric = createTab('telluric', 'Planètes Telluriques', 0);

        // Crée l'élément div#gaz
        const div_gaz = createTab('gaz', 'Planètes Gazeuses', 0);

        // Crée l'élément div#dwarf
        const div_dwarf = createTab('dwarf', 'Planètes Naines', 0);

        // Crée l'élément div#asteroid
        const div_asteroid = createTab('asteroid', 'Astéroïdes', 0);

        // Crée l'élément div#comet
        const div_comet = createTab('comet', 'Comètes', 0);

        // Fonction pour créer les onglets avec leur contenu
        function createTab(id, title, ulHeight) {
            const div_tab = document.createElement('div');
            div_tab.id = id;

            const h3 = document.createElement('h3');
            h3.textContent = title;

            const ul = document.createElement('ul');
            ul.id = 'list_' + id;
            ul.className = 'tab';
            if (id === "asteroid") {
                ul.classList.add("scrollbar");
            };
            ul.style.height = ulHeight + 'px';

            div_tab.appendChild(h3);
            div_tab.appendChild(ul);

            return div_tab;
        }

        // Ajoute les onglets à div#corps_list
        corps_list.appendChild(h2_liste_corps);
        corps_list.appendChild(div_star);
        corps_list.appendChild(div_telluric);
        corps_list.appendChild(div_gaz);
        corps_list.appendChild(div_dwarf);
        corps_list.appendChild(div_asteroid);
        corps_list.appendChild(div_comet);

        // Crée l'élément div#chrono
        const chrono = document.createElement('div');
        chrono.id = 'chrono';
        chrono.className = 'div_tab';

        // Crée l'élément h2
        const h2_echelle_temps = document.createElement('h2');
        h2_echelle_temps.textContent = 'Échelle de temps';

        // Crée le fieldset pour l'échelle de temps
        const fieldset = document.createElement('fieldset');

        // Crée la légende
        const legend_range_value = document.createElement('legend');
        legend_range_value.id = 'range_value';
        legend_range_value.textContent = '1 min réel = 1 an';

        // Crée l'input range
        const input_time_range = document.createElement('input');
        input_time_range.type = 'range';
        input_time_range.name = 'time_range';
        input_time_range.id = 'time_range';
        input_time_range.step = '20';

        // Crée la div pour les icônes de temps
        const div_time_icons = document.createElement('div');
        div_time_icons.id = 'time_icons';

        // Crée les icônes de temps
        const img_btn_play = createIcon('play', 'btn_play', 'active_time', 'Lecture');
        const img_btn_stop = createIcon('stop', 'btn_stop', '', 'Stop');
        const img_btn_speed_down = createIcon('speed_down', 'btn_speed_down', '', 'Ralentir');
        const img_btn_speed_up = createIcon('speed_up', 'btn_speed_up', '', 'Accélérer');

        // Fonction pour créer les icônes de temps
        function createIcon(src, id, className, alt) {
            const img = document.createElement('img');
            img.src = `./visualisation_3d/js/icons/${src}.png`;
            img.id = id;
            img.className = className;
            img.alt = alt;
            return img;
        }

        // Ajoute les icônes au div div_time_icons
        div_time_icons.appendChild(img_btn_play);
        div_time_icons.appendChild(img_btn_stop);
        div_time_icons.appendChild(img_btn_speed_down);
        div_time_icons.appendChild(img_btn_speed_up);

        // Ajoute les éléments d'échelle de temps au fieldset
        fieldset.appendChild(legend_range_value);
        fieldset.appendChild(input_time_range);
        fieldset.appendChild(div_time_icons);

        // Ajoute les éléments d'échelle de temps à div#chrono
        chrono.appendChild(h2_echelle_temps);
        chrono.appendChild(fieldset);

        // Crée l'élément div#option
        const option = document.createElement('div');
        option.id = 'option';
        option.className = 'div_tab';

        // Crée l'élément h2
        const h2_option = document.createElement('h2');
        h2_option.textContent = 'Option';

        // Crée les fieldsets pour les options
        const fieldset_orbits = create_fieldset('Affichage des orbites', [
            { id: 'telluric_orbit', text: 'Planètes Telluriques' },
            { id: 'gaz_orbit', text: 'Planètes Gazeuses' },
            { id: 'dwarf_orbit', text: 'Planètes Naines' },
            { id: 'moon_orbit', text: 'Lunes' },
            { id: 'asteroid_orbit', text: 'Astéroïdes' },
            { id: 'comet_orbit', text: 'Comètes' }
        ], 'btn_orbits_view');

        const fieldset_tags = create_fieldset('Affichage des repères', [
            { id: 'telluric_tag', text: 'Planètes Telluriques' },
            { id: 'gaz_tag', text: 'Planètes Gazeuses' },
            { id: 'dwarf_tag', text: 'Planètes Naines' },
            { id: 'moon_orbit', text: 'Lunes' },
            { id: 'asteroid_tag', text: 'Astéroïdes' },
            { id: 'comet_tag', text: 'Comètes' }
        ], 'btn_tag_view');

        // const fieldset_coordinates = create_fieldset('Affichage des coordonnées', ['On / Off']);
        const fieldset_coordinates = create_fieldset('Affichage des coordonnées', [
            { id: 'coord_views', text: 'On / Off' }
        ]);
        
        // const fieldset_fps = create_fieldset('Affichage des FPS', ['On / Off']);
        const fieldset_fps = create_fieldset('Affichage des FPS', [
            { id: 'fps_views', text: 'On / Off' }
        ]);

        // Fonction pour créer les fieldsets d'options
        function create_fieldset(legendText, items, className) {
            const fieldset = document.createElement('fieldset');
            const legend = document.createElement('legend');
            legend.textContent = legendText;
            const ul = document.createElement('ul');
            items.forEach(itemData => {
                const li = document.createElement('li');
                li.id = itemData.id || ''; // Utilisez l'ID s'il est défini, sinon laissez-le vide
                li.textContent = itemData.text || 'On / Off'; // Utilisez le texte s'il est défini, sinon mettez "On / Off"
                if (className) {
                    li.className = className;
                }
                ul.appendChild(li);
            });
            fieldset.appendChild(legend);
            fieldset.appendChild(ul);
            return fieldset;
        }

        // Ajoute les fieldsets d'options à div#option
        option.appendChild(h2_option);
        option.appendChild(fieldset_orbits);
        option.appendChild(fieldset_tags);
        option.appendChild(fieldset_coordinates);
        option.appendChild(fieldset_fps);

        // Ajoute div#corps_list, div#chrono et div#option à div#nav_container
        nav_container.appendChild(corps_list);
        nav_container.appendChild(chrono);
        nav_container.appendChild(option);

        // Ajoute div#div_btn_nav_view, h1 et div#nav_container à div#nav
        nav.appendChild(div_btn_nav_view);
        nav.appendChild(h1);
        nav.appendChild(nav_container);

        // Ajoute div#nav à body
        document.querySelector("#main").appendChild(nav);
        resolve();
    })
}

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

function event_nav_bar() {
    //////////////////////////////////////////////////////////////////////////
    /////////////////////////// --- CONSTANTES --- ///////////////////////////

    // Constante: Flèche de la barre de navigation et barre de navigation
    const burger_action = document.querySelector("#burger_action");
    const nav = document.querySelector("#nav");

    // Constante: Onglet "Liste des corps"
    const corps_list = document.querySelector("#corps_list");

    const tab_star = document.querySelector("#star");
    const child_tab_star = tab_star.querySelector(".tab");

    const tab_telluric = document.querySelector("#telluric");
    const child_tab_telluric = tab_telluric.querySelector(".tab");

    const tab_gaz = document.querySelector("#gaz");
    const child_tab_gaz = tab_gaz.querySelector(".tab");

    const tab_dwarf = document.querySelector("#dwarf");
    const child_tab_dwarf = tab_dwarf.querySelector(".tab");

    const tab_asteroid = document.querySelector("#asteroid");
    const child_tab_asteroid = tab_asteroid.querySelector(".tab");

    const tab_comet = document.querySelector("#comet");
    const child_tab_comet = tab_comet.querySelector(".tab");

    // Constante: Onglet "Échelle des temps"
    const chrono = document.querySelector("#chrono");

    // Constante: Onglet "Option"
    const option = document.querySelector("#option");


    //////////////////////////////////////////////////////////////////////////
    /////////////////////////// --- ÉVÉNEMENTS --- ///////////////////////////

    // Événements: Afficher / Masquer la bare de navigation
    burger_action.addEventListener("click", nav_views, false);

    // Événements: Afficher / Masquer les onglets (Liste des corps, Échelle de temps, Option)
    corps_list.querySelector("h2").addEventListener("click", () => {
        tab_view(corps_list);
    });
    chrono.querySelector("h2").addEventListener("click", () => {
        tab_view(chrono);
    });
    option.querySelector("h2").addEventListener("click", () => {
        tab_view(option);
    });

    // Événements: Afficher / Masquer les sous onglets (Liste des corps)
    tab_star.querySelector("h3").addEventListener("click", () => {
        child_tab_view(tab_star);
    });
    tab_telluric.querySelector("h3").addEventListener("click", () => {
        child_tab_view(tab_telluric);
    });
    tab_gaz.querySelector("h3").addEventListener("click", () => {
        child_tab_view(tab_gaz);
    });
    tab_dwarf.querySelector("h3").addEventListener("click", () => {
        child_tab_view(tab_dwarf);
    });
    tab_asteroid.querySelector("h3").addEventListener("click", () => {
        child_tab_view(tab_asteroid);
    });
    tab_comet.querySelector("h3").addEventListener("click", () => {
        child_tab_view(tab_comet);
    });


    //////////////////////////////////////////////////////////////////////////
    /////////////////////////// --- FONCTIONS --- ////////////////////////////

    // Fonctions: Afficher / Masquer la bare de navigation
    function nav_views() {
        if (nav.classList.contains("nav_active")) {
            // Fermeture de la nav
            nav.classList.remove("nav_active");
            burger_action.src = "../visualisation_3d/js/icons/open_nav.png";
            nav.style = "left: -305px; background-color: transparent;";

            // Fermeture des onglets (Liste des corps, Échelle de temps, Option)
            tab_view("all_close");
            // Fermeture des sous onglet (type de corps)
            child_tab_view("all_close");
        }
        else {
            // Ouverture de la nav
            nav.classList.add("nav_active");
            burger_action.src = "../visualisation_3d/js/icons/close_nav.png";
            nav.style = "left: 0; background-color: #0000007e;";
        }
    }

    // Fonctions: Afficher / Masquer la bare de navigation
    function tab_view(tab) {

        // Récupèration de la hauteur réelle du contenu en px
        const nav_container = document.querySelector("#nav_container");
        const container_adjust_height = nav_container.scrollHeight - 140 + "px";

        // Reset des scrollbar
        if (corps_list.style.overflowY || chrono.style.overflowY || option.style.overflowY) {
            corps_list.style.overflowY = "clip";
            chrono.style.overflowY = "clip";
            option.style.overflowY = "clip";
        }

        if (tab === "all_close") {
            corps_list.style.height = "28px";
            chrono.style.height = "28px";
            option.style.height = "28px";
        }
        else if (tab.id === "corps_list") {
            corps_list.style.height = container_adjust_height;
            chrono.style.height = "28px";
            option.style.height = "28px";
        }
        else if (tab.id === "chrono") {
            corps_list.style.height = "28px";
            chrono.style.height = container_adjust_height;
            option.style.height = "28px";
        }
        else if (tab.id === "option") {
            corps_list.style.height = "28px";
            chrono.style.height = "28px";
            option.style.height = container_adjust_height;
        }

        scrollbar_display(tab)
    }

    function child_tab_view(tab) {
        // --- Évènement: Afficher / Masquer, les sous onglet de la barre de navigation ---
        // Sous onglets niveau 1

        // Récupèration de la hauteur réelle du contenu en px
        let content_height
        if (typeof tab !== "string") {
            content_height = tab.querySelector(".tab").scrollHeight + 'px';
        };

        if (tab === "all_close") {
            child_tab_star.style.height = "0px";
            child_tab_telluric.style.height = "0px";
            child_tab_gaz.style.height = "0px";
            child_tab_dwarf.style.height = "0px";
            child_tab_asteroid.style.height = "0px";
            child_tab_comet.style.height = "0px";
        }

        else if (tab.id === "star") {
            child_tab_star.style.height = content_height;
            child_tab_telluric.style.height = "0px";
            child_tab_gaz.style.height = "0px";
            child_tab_dwarf.style.height = "0px";
            child_tab_asteroid.style.height = "0px";
            child_tab_comet.style.height = "0px";
        }
        else if (tab.id === "telluric") {
            child_tab_star.style.height = "0px";
            child_tab_telluric.style.height = content_height;
            child_tab_gaz.style.height = "0px";
            child_tab_dwarf.style.height = "0px";
            child_tab_asteroid.style.height = "0px";
            child_tab_comet.style.height = "0px";
        }
        else if (tab.id === "gaz") {
            child_tab_star.style.height = "0px";
            child_tab_telluric.style.height = "0px";
            child_tab_gaz.style.height = content_height;
            child_tab_dwarf.style.height = "0px";
            child_tab_asteroid.style.height = "0px";
            child_tab_comet.style.height = "0px";
        }
        else if (tab.id === "dwarf") {
            child_tab_star.style.height = "0px";
            child_tab_telluric.style.height = "0px";
            child_tab_gaz.style.height = "0px";
            child_tab_dwarf.style.height = content_height;
            child_tab_asteroid.style.height = "0px";
            child_tab_comet.style.height = "0px";
        }
        else if (tab.id === "asteroid") {
            child_tab_star.style.height = "0px";
            child_tab_telluric.style.height = "0px";
            child_tab_gaz.style.height = "0px";
            child_tab_dwarf.style.height = "0px";
            child_tab_asteroid.style.height = content_height;
            child_tab_comet.style.height = "0px";
        }
        else if (tab.id === "comet") {
            child_tab_star.style.height = "0px";
            child_tab_telluric.style.height = "0px";
            child_tab_gaz.style.height = "0px";
            child_tab_dwarf.style.height = "0px";
            child_tab_asteroid.style.height = "0px";
            child_tab_comet.style.height = content_height;
        }

        // Attendre la fin de l'animation pour appeler la fonction scrollbar_display
        setTimeout(() => {
            scrollbar_display(tab.parentNode);
        }, 510);
    }

    function scrollbar_display(tab) {
        // Ajout d'une scrollbar si nécéssaire
        // console.log(`Tab: ${tab.scrollHeight}`);
        // console.log(`Nav: ${nav_container.scrollHeight}`);
        if (tab) {
            if ((tab.scrollHeight + 100) > nav_container.scrollHeight) {
                // console.log("Add scrollbar");
                tab.classList.add("scrollbar")
                tab.style.overflowY = "scroll";
            }
        }
        else {
            corps_list.style.overflowY = "clip";
            chrono.style.overflowY = "clip";
            option.style.overflowY = "clip";
        }
    }

}

function event_orbit_view() {
    // --- Évènement: Afficher / Masquer les ligne des orbites ---

    const btn_orbits_view = document.querySelectorAll(".btn_orbits_view");
    for (let i = 0; i < btn_orbits_view.length; i++) {
        const btn = btn_orbits_view[i];
        btn.addEventListener("click", () => {
            const orbit_type = btn.id.split("_")[0];
            // console.log(orbit_type);

            const line_array = {
                telluric: [],
                gaz: [],
                dwarf: [],
                moon: [],
                comet: [],
                asteroid: []
            };

            for (let j = 1; j < all_group[0].children.length; j++) {
                const mesh = all_group[0].children[j].children[0].children[0];
                const line = all_group[0].children[j].children[1];
                const corps_moon_group = all_group[0].children[j].children[0].children[1]

                if (corps_moon_group) {
                    for (let k = 0; k < corps_moon_group.children.length; k++) {
                        const element = corps_moon_group.children[k];
                        if (element.isLine) {
                            line_array.moon.push(element);
                            // console.log(element);
                        }
                    }
                }


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
                // console.log(line_array);
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
            else if (orbit_type === "moon") {
                line_array.moon.forEach((line) => {
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
            btn.style.textDecoration = "line-through";
            line.visible = false;
        }
        else {
            btn.style.textDecoration = "none";
            line.visible = true;
        }
    }

}


function event_tracking_corps() {
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
}


function event_time_scale_component() {
    return new Promise((resolve) => {

        // Sélection des éléments du composant
        const range_value = document.querySelector("#range_value");
        const time_range = document.querySelector("#time_range");
        const btn_play = document.querySelector("#btn_play");
        const btn_stop = document.querySelector("#btn_stop");
        const btn_speed_down = document.querySelector("#btn_speed_down");
        const btn_speed_up = document.querySelector("#btn_speed_up");

        const time_scale_multipliers = {
            scale_1: 1 / 525600,  // Échelle de temps lente (1 min réel = 1 min)
            scale_2: 1 / 1440,    // Échelle de temps très lente (1 min réel = 24 heures)
            scale_3: 1,           // Échelle de temps normale (1 min réel = 1 an)
            scale_4: 10,          // Échelle de temps rapide (1 min réel = 10 ans)
            scale_5: 25,          // Échelle de temps plus rapide (1 min réel = 25 ans)
            scale_6: 50           // Échelle de temps très rapide (1 min réel = 50 ans)
        };
        let time_scale;
        function update_legend(value) {
            if (value >= 0 && value <= 19) {
                range_value.textContent = "1 min réel = 1 min";
                time_scale = time_scale_multipliers.scale_1;
            } else if (value >= 20 && value <= 39) {
                range_value.textContent = "1 min réel = 24 heures";
                time_scale = time_scale_multipliers.scale_2;
            } else if (value >= 40 && value <= 59) {
                range_value.textContent = "1 min réel = 1 an";
                time_scale = time_scale_multipliers.scale_3;
            } else if (value >= 60 && value <= 79) {
                range_value.textContent = "1 min réel = 10 ans";
                time_scale = time_scale_multipliers.scale_4;
            } else if (value >= 80 && value <= 94) {
                range_value.textContent = "1 min réel = 25 ans";
                time_scale = time_scale_multipliers.scale_5;
            } else if (value >= 95 && value <= 100) {
                range_value.textContent = "1 min réel = 50 ans";
                time_scale = time_scale_multipliers.scale_6;
            }
            anim_controls(time_scale);
        };

        btn_play.addEventListener("click", () => {
            btn_play.classList.add("active_time")
            btn_stop.classList.remove("active_time")
            anim_controls("play");
        });

        btn_stop.addEventListener("click", () => {
            btn_stop.classList.add("active_time")
            btn_play.classList.remove("active_time")
            anim_controls("stop");
        });

        btn_speed_up.addEventListener("click", () => {
            // time_range.value doit être converti un nombre entier car sa valeur en chaine de caractère empêche les additions (en JS le "+" égale concentration)
            let current_value = parseInt(time_range.value);
            current_value += 20;
            // Limite la valeur maximale à 100
            if (current_value > 100) {
                current_value = 100;
            }
            // Reconversion de la valeur en chaîne de caractères
            time_range.value = current_value.toString();
            // Mise à jour de la légende
            update_legend(current_value);
        });

        btn_speed_down.addEventListener("click", () => {
            // Pas besoin de convertir en chaine de caratere pour une soustraction (c'est bizarre mais c'est comme ça)
            time_range.value -= 20;
            update_legend(time_range.value);
        });

        time_range.addEventListener('input', () => {
            update_legend(time_range.value);
        })
        resolve();
    });
};


function event_coord_views() {
    const coord_views = document.querySelector("#coord_views");
    const cam_pos = document.querySelector("#cam_pos");

    cam_pos.style.display = "none";
    coord_views.style.textDecoration = "line-through";

    coord_views.addEventListener("click", () => {
        if (cam_pos.classList.contains("cam_active")) {
            cam_pos.classList.remove("cam_active");
            cam_pos.style.display = "none";
            coord_views.style.textDecoration = "line-through";
        }
        else {
            cam_pos.classList.add("cam_active");
            cam_pos.style.display = "block";
            coord_views.style.textDecoration = "none";
        }
    })
}

function event_fps_views() {
    const fps_views = document.querySelector("#fps_views");
    const fps_div = document.querySelector("#main > div");

    fps_div.style.display = "none";
    fps_views.style.textDecoration = "line-through";

    fps_views.addEventListener("click", () => {
        if (fps_div.classList.contains("#fps_active")) {
            fps_div.classList.remove("#fps_active");
            fps_div.style.display = "none";
            fps_views.style.textDecoration = "line-through";
        }
        else {
            fps_div.classList.add("#fps_active");
            fps_div.style.display = "block";
            fps_views.style.textDecoration = "none";
        }
    })

}










