// Revoir cette fonction pour l'utiliser dans le form update et delete

export async function search_by_id(search_id_value) {
    // Modifier un corps céleste
    // const search_id_value = document.querySelector('#search_id_up').value;
    if (search_id_value.trim() !== '') {
        try {
            // Envoi de la requête
            const response = await fetch(`/api/bodies?id=${search_id_value}`);
            if (response.ok) {
                // Réception de la réponse
                const data = await response.json();
    
                // Renvoi des données de la réponse
                return data;
            }
            else {
                // Gestion des erreurs d'authentification (afficher un message d'erreur)
                const error_data = await response.json();
                // Accéder à la propriété "message" de l'objet
                const error_message = error_data.message; 
                // Afficher le message d'erreur dans le navigateur
                return error_message;
            }
        }
        catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        };
    };
};
