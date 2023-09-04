export function nav_bar() {
    const head = document.querySelector("head");
    const style = document.createElement("style")
    style.textContent = 
    `
    #btn_accueil, #btn_expl, #btn_visu_3d {
        text-decoration: none;
        text-align: center;
        margin: 10px 4px;
        padding: 6px;
        width: 185px;
        color: #ffffff;
        border: 2px solid #d2cdfd;
        border-radius: 10px;
        background: none;
    }
    `
    // Envoi du style de la nav dans la balise head
    head.append(style);

    // Création d'une balise nav
    const nav = document.createElement('nav');
    nav.style = "display: flex; justify-content: center;"

    // Creation du boutton 'Accueil' dans une balise nav
    const btn_accueil = document.createElement("a");
    btn_accueil.id = "btn_accueil";
    btn_accueil.textContent = "Accueil";
    btn_accueil.href = "../accueil";

    // Creation du boutton 'Exploration de l'API' dans une balise nav
    const btn_expl = document.createElement("a");
    btn_expl.id = "btn_expl";
    btn_expl.textContent = "Exploration des données";
    btn_expl.href = "../exploration";

    // Creation du boutton 'Visualisation 3D' dans une balise nav
    const btn_visu_3d = document.createElement("a");
    btn_visu_3d.id = "btn_visu_3d";
    btn_visu_3d.textContent = "Visualisation 3D";
    btn_visu_3d.href = "../map";

    // Envoi des bouton dans la balise nav
    nav.append(btn_accueil);
    nav.append(btn_expl);
    nav.append(btn_visu_3d);

    // Envoi de la balise nav dans le body
    document.body.prepend(nav);
}

