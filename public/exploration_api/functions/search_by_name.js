export async function search_by_name() {
    // Valeur de la recherche par nom
    const search_value = document.querySelector('#search').value;
    // Valeur de la limite de résultats
    const limit_value = document.querySelector('#limit').value;
    // Lien vers la cherche dans l'API
    const api_link = document.querySelector('#api_link');

    if (search_value.trim() !== '') {
        try {
            // Envoi de la requête
            const response = await fetch(`/api/bodies?name=${search_value}&limit=${limit_value}`);
            // Réception de la réponse
            const data = await response.json();
            console.log(data);
            // Implémentation du "lien de la recherche"
            api_link.href = `/api/bodies?name=${search_value}`;
            api_link.textContent = `http://localhost:3001/api/bodies?name=${search_value}&limit=${limit_value}`;

            // Renvoi des données de la réponse
            return data;
        }
        catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        };
    };
};