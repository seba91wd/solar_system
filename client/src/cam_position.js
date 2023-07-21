export function cam_position(camera, scene) {

    if (document.querySelector("#cam_position")) {
        let cam_position = document.querySelector("#cam_position")
        cam_position.innerHTML = `
            X: ${camera.position.x}<br>
            Y: ${camera.position.y}<br>
            Z: ${camera.position.z}
            `;
    }
    else {        
        const div = document.createElement("div");
        div.style = "position: absolute; top: 0; right: 0; background-color: yellow; padding: 2px;"
    
        // Titre de la barre
        const paragraphe1 = document.createElement('p');
        const p1 = document.createTextNode(`Position Caméra`);
        paragraphe1.append(p1);

        // Bouton
        const div_btn = document.createElement('div')

        const btn_back = document.createElement('button')
        btn_back.innerHTML = "←"
        
        const btn_follow_body = document.createElement('button')
        btn_follow_body.innerHTML = "Sun";

        const btn_next = document.createElement('button')
        btn_next.innerHTML = "→"
        
        div_btn.append(btn_back, btn_follow_body, btn_next)
    
        const cam_position = document.createElement('p');
        cam_position.id = "cam_position";
    
        div.append(paragraphe1);
        div.append(div_btn);
        div.append(cam_position);
    
        document.querySelector("#main").append(div);
    }
    document.onkeydown = function(e) {
        // console.log(e);
        if (e.key === "ArrowRight") {
            camera.position.x += 1;
        }
        if (e.key === "ArrowLeft") {
            camera.position.x += -1;
        }
        if (e.key === "ArrowDown") {
            camera.position.z += 1;
        }
        if (e.key === "ArrowUp") {
            camera.position.z += -1;
        }
    }
}