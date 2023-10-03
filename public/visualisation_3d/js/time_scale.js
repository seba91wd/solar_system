import { anim_controls } from "./main.js";

// Crée le composant de l'échelle des temps
function create_time_scale_component() {
    return new Promise((resolve) => {
        
        const time_scale_div = document.createElement("div");
        time_scale_div.classList.add("border");
        time_scale_div.id = "time_scale";
    
        const h2 = document.createElement("h2");
        h2.textContent = "Échelle des temps";
    
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.id = "legend";
        legend.textContent = "1 min réel = 1 an";
    
        const input_range = document.createElement("input");
        input_range.type = "range";
        input_range.name = "time_range";
        input_range.id = "time_range";
        input_range.step = "20";
        input_range.value = "30";
    
        const play_img = document.createElement("img");
        play_img.src = "./visualisation_3d/js/icons/play.png";
        play_img.id = "btn_play"
        play_img.className = "active_time"
        play_img.alt = "Lecture";
    
        const stop_img = document.createElement("img");
        stop_img.src = "./visualisation_3d/js/icons/stop.png";
        stop_img.id = "btn_stop";
        stop_img.alt = "Stop";
    
        const speed_down_img = document.createElement("img");
        speed_down_img.src = "./visualisation_3d/js/icons/speed_down.png";
        speed_down_img.id = "btn_speed_down";
        speed_down_img.alt = "Ralentir";
    
        const speed_up_img = document.createElement("img");
        speed_up_img.src = "./visualisation_3d/js/icons/speed_up.png";
        speed_up_img.id = "btn_speed_up";
        speed_up_img.alt = "Accélérer";
    
        fieldset.appendChild(legend);
        fieldset.appendChild(input_range);
    
        time_scale_div.appendChild(h2);
        time_scale_div.appendChild(fieldset);
        time_scale_div.appendChild(play_img);
        time_scale_div.appendChild(stop_img);
        time_scale_div.appendChild(speed_down_img);
        time_scale_div.appendChild(speed_up_img);
    
        document.querySelector("#main").appendChild(time_scale_div);

        resolve();
    })
}

// Evènements du composant de l'échelle des temps
function event_time_scale_component() {
    return new Promise((resolve) => {
        
        // Sélection des éléments du composant
        const legend = document.querySelector("#legend");
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
                legend.textContent = "1 min réel = 1 min";
                time_scale = time_scale_multipliers.scale_1;
            } else if (value >= 20 && value <= 39) {
                legend.textContent = "1 min réel = 24 heures";
                time_scale = time_scale_multipliers.scale_2;
            } else if (value >= 40 && value <= 59) {
                legend.textContent = "1 min réel = 1 an";
                time_scale = time_scale_multipliers.scale_3;
            } else if (value >= 60 && value <= 79) {
                legend.textContent = "1 min réel = 10 ans";
                time_scale = time_scale_multipliers.scale_4;
            } else if (value >= 80 && value <= 94) {
                legend.textContent = "1 min réel = 25 ans";
                time_scale = time_scale_multipliers.scale_5;
            } else if (value >= 95 && value <= 100) {
                legend.textContent = "1 min réel = 50 ans";
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

create_time_scale_component().then(() => {
    event_time_scale_component()
})
