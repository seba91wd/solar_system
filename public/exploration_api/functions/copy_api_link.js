export function copy_api_link() {
    const api_link = document.querySelector('#api_link');

    if (navigator.clipboard) {
        const copy = api_link.textContent;

        // Utilisation de l'API Clipboard pour copier le texte
        navigator.clipboard.writeText(copy)
            .then(() => {
                console.log("Texte copié avec succès !");
            })
            .catch(error => {
                console.error("Erreur lors de la copie du texte : ", error);
            });
    }
    else {
        // Secours pour les navigateurs ne prenant pas en charge l'API Clipboard (jamais testé !)
        // Sélectionner le contenu du textarea
        api_link.textContent.select();
        // Copier le contenu dans le presse-papiers
        document.execCommand("copy");
        console.log("Le navigateur ne prend pas en charge l'API Clipboard !");
    };
}