export function copy_link(element) {

    if (navigator.clipboard) {
        const copy = element.textContent;

        // Utilisation de l'API Clipboard pour copier le texte
        navigator.clipboard.writeText(copy)
            .then(() => {
                console.log("Texte copié avec succès !");
                return true;
            })
            .catch(error => {
                console.error("Erreur lors de la copie du texte : ", error);
                return false;
            });
    }
    else {
        // Secours pour les navigateurs ne prenant pas en charge l'API Clipboard (non testé !)
        // Sélectionner le contenu du textarea
        element.textContent.select();
        // Copier le contenu dans le presse-papiers
        document.execCommand("copy");
        console.log("Le navigateur ne prend pas en charge l'API Clipboard !");
        return true;
    };
}