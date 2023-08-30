// Fonction pour effectuer les opérations de recherche
export async function search_bodies(options) {
    const { name, id, type, limit } = options;

    let log = "Recherche par ";

    if (name) {
        log += "nom : " + name;
        
        if (type) {
            log += ", et type : " + type + ", limite : " + limit;
            console.log(log);

            // Recherche par nom et type
            const search_result = await search_by_name(name, type, limit);
            if (search_result.response) {
                return search_result;
            }
            return false;            
        } else {
            log += ", limite : " + limit;
            console.log(log);

            // Recherche par nom seulement
            const search_result = await search_by_name(name, null, limit);
            if (search_result.response) {
                return search_result;
            }
            return false; 
        }
    }
    else if (type) {
        log += "type : " + type + ", limite : " + limit;
        console.log(log);

        // Recherche par type
        try {
            const response = await fetch(`/api/bodies?type=${type}&limit=${limit}`);
            const data = await response.json();
            return { response: data, link: `/api/bodies?type=${type}&limit=${limit}` };
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
            return { response: false, link: false };
        }
    }
    else if (id) {
        log += "ID : " + id
        console.log(log);

        // Recherche par ID
        try {
            const response = await fetch(`/api/bodies?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                return { response: data };
            } else {
                const error_data = await response.json();
                const error_message = error_data.message;
                return { response: error_message };
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
            return { response: false };
        }
    }
    else {
        log = "Recherche de tous les corps, limte : " + limit;
        console.log(log);
        try {
            const response = await fetch(`/api/bodies?limit=${limit}`);
            const data = await response.json();
            return { response: data, link: `/api/bodies?limit=${limit}` };
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
            return { response: false, link: false };
        };
    };
};

// Fonction de recherche par nom avec filtre par type
async function search_by_name(name, type, limit) {
    try {
        let api_url = `/api/bodies?name=${name}`;
        if (type) {
            api_url += `&type=${type}`;
        }
        api_url += `&limit=${limit}`;

        const response = await fetch(api_url);
        const data = await response.json();
        return { response: data, link: api_url };
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        return { response: false, link: false };
    }
}