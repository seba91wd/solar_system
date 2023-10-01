// Cette fonction crée une div contenant les coordonnées tridimensionnelles de la caméra par rapport au centre de l'objet observé.
// Le style est définit dans le fichier "public/visualisation_3d/style.css".
// La fonction est importée dans le fichier main.js puis appelée dans la fonction animate().

import * as THREE from 'three';

export function cam_position(camera) {
    if (camera.position) {
        if (document.querySelector("#cam_pos")) { // Utilisez "cam_pos" au lieu de "cam_position"

            const x = camera.position.x;
            const y = camera.position.y;
            const z = camera.position.z;

            let unit;
            let formated_x;
            let formated_y;
            let formated_z;

            // Si les valeurs XYZ sont inférieures à 1 000 000 de km 
            if (x < 1 && y < 1 && z < 1) {
                // Unité de mesure de distance en kilomètre
                unit = "km";
                formated_x = (camera.position.x * 1000000).toFixed(3);
                formated_y = (camera.position.y * 1000000).toFixed(3);
                formated_z = (camera.position.z * 1000000).toFixed(3);
            }
            else {
                // Unité de mesure de distance en million de kilomètres
                unit = "M km";
                formated_x = camera.position.x.toFixed(3);
                formated_y = camera.position.y.toFixed(3);
                formated_z = camera.position.z.toFixed(3);
            }

            // Mise à jour des valeurs des coordonnées
            const cam_position_x = document.querySelector("#cam_pos_x");
            const cam_position_y = document.querySelector("#cam_pos_y");
            const cam_position_z = document.querySelector("#cam_pos_z");

            cam_position_x.textContent = `X : ${formated_x} ${unit}`;
            cam_position_y.textContent = `Y : ${formated_y} ${unit}`;
            cam_position_z.textContent = `Z : ${formated_z} ${unit}`;

        }
        else {
            // Création de la div conteneur
            const div_cam_pos = document.createElement("div");
            div_cam_pos.className = "border";
            div_cam_pos.id = "cam_pos";

            // Titre de la barre
            const h2 = document.createElement('h2');
            const h2_texte = document.createTextNode(`Coordonnées`);
            h2.append(h2_texte);
            div_cam_pos.append(h2);

            // Bouton Afficher / Masquer les axes XYZ
            const btn = document.createElement("button");
            btn.id = "btn_axes";
            btn.textContent = "Afficher les Axes";

            // Paragraphes des coordonnées
            const cam_position_x = document.createElement('p');
            cam_position_x.id = "cam_pos_x";

            const cam_position_y = document.createElement('p');
            cam_position_y.id = "cam_pos_y";

            const cam_position_z = document.createElement('p');
            cam_position_z.id = "cam_pos_z";

            div_cam_pos.append(btn)
            div_cam_pos.append(cam_position_x);
            div_cam_pos.append(cam_position_y);
            div_cam_pos.append(cam_position_z); // Vous avez un léger typo ici : div_cam_position au lieu de div_cam_pos

            document.querySelector("#main").appendChild(div_cam_pos);

            // Evènement du btn_axes
            btn_hidden_axe(camera);
        };
    };
};

// Evènement du bouton "Affiche les axes"
function btn_hidden_axe(camera) {
    const btn_axes = document.querySelector("#btn_axes")
    btn_axes.addEventListener("click", () => {
        
        const object = camera.parent;
        const axes_helper = new THREE.AxesHelper(100); // Affiche les axes X Y Z au centrre de la scène

        // Vérification de l'existance d'un objet type "AxesHelper"
        const hasAxesHelper = object.children.some((object_3d) => object_3d instanceof THREE.AxesHelper);

        if (hasAxesHelper) {
            // Supprimer l'AxesHelper s'il existe déjà
            btn_axes.textContent = "Afficher les Axes";
            const axesHelperToRemove = object.children.find((object_3d) => object_3d instanceof THREE.AxesHelper);
            object.remove(axesHelperToRemove);
        } 
        else {
            // Ajouter l'AxesHelper s'il n'existe pas encore
            btn_axes.textContent = "Masquer les Axes";
            object.add(axes_helper);
        };
    });
};