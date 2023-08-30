export async function delete_bodie(delete_bodie_id, auth_token_present) {
    try {
        const response = await fetch(`/api/bodies/${delete_bodie_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', // Utilisez le bon en-tête pour JSON
                'Authorization': `Bearer ${auth_token_present}`
            }
        });

        if (response.ok) {
            return await response.json();
        } else {
            const error_data = await response.json();
            console.error('Erreur lors de l\'envoi de la requête:', error_data);
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }

}