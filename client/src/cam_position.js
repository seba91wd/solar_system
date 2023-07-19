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
        const DIV = document.createElement("div");
        DIV.style = "position: absolute; top: 0; right: 0; background-color: yellow; padding: 2px;"
    
        const PARAGRAPHE1 = document.createElement('p');
        const P1 = document.createTextNode(`Position Caméra`);
    
        const cam_position = document.createElement('p');
        cam_position.id = "cam_position";
    
        PARAGRAPHE1.append(P1);
        DIV.append(PARAGRAPHE1);
        DIV.append(cam_position);
    
        document.querySelector("#main").append(DIV);
    }
}