export function btn_cam_follow() {
    if (!document.querySelector("#div_btn")) {
        // Création des boutons
        const div_btn = document.createElement('div')
        div_btn.id = "div_btn";
        div_btn.style = "position: absolute; top: 100px; right: 0; background-color: yellow; padding: 2px;"

        const btn_back = document.createElement('button')
        btn_back.id = "btn_back";
        btn_back.innerHTML = "←"

        const btn_follow_body = document.createElement('button')
        btn_follow_body.id = "btn_follow_body";
        btn_follow_body.innerHTML = "Sun";

        const btn_next = document.createElement('button')
        btn_next.id = "btn_next";
        btn_next.innerHTML = "→"

        div_btn.append(btn_back, btn_follow_body, btn_next)

        document.querySelector("#main").append(div_btn);
    }
}

let current_follow_index = 0; // Variable pour stocker l'index du corps actuellement suivi

export function scroll_follow_body(direction, element_list) {
    current_follow_index += direction;
    if (current_follow_index < 0) {
        current_follow_index = element_list.length - 1;
    }
    else if (current_follow_index >= element_list.length) {
        current_follow_index = 0;
    }

    const current_follow_body = element_list[current_follow_index];
    btn_follow_body.innerHTML = current_follow_body.name;
}

export function follow_body(tracking, element_list_pos, target_name, controls) {
    if (tracking === true) {
        element_list_pos.forEach(element => {
            if (element.name === target_name) {
                const radius = element.children[1].position.x; // Rayon de l'orbite du corps cible
                const angle = -element.rotation.y; // Angle de rotation actuel du corps cible
                
                // Coordonnées du point à suivre sur l'orbite du corps cible
                const x_target = radius * Math.cos(angle);
                const y_target = element.children[1].position.y;
                const z_target = radius * Math.sin(angle);
                
                controls.target.set(x_target, y_target, z_target);
                controls.update();
            }
        })
    };
}