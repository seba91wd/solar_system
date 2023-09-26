export function cam_position(camera) {

    if (document.querySelector("#cam_position")) {
        let cam_position = document.querySelector("#cam_position")
        cam_position.innerHTML = `
            X: ${camera.position.x}<br>
            Y: ${camera.position.y}<br>
            Z: ${camera.position.z}<br>
            `;
    }
    else {        
        const div = document.createElement("div");
        div.style = "position: absolute; top: 0; right: 0; background-color: yellow; padding: 2px; color: black;"
    
        // Titre de la barre
        const paragraphe1 = document.createElement('p');
        const p1 = document.createTextNode(`Position Caméra`);
        paragraphe1.append(p1);

        // Coordonnées de la caméra
        const cam_position = document.createElement('p');
        cam_position.id = "cam_position";
    
        div.append(paragraphe1);
        div.append(cam_position);
    
        document.querySelector("#main").append(div);
    }
}