// auth.js
// Ce midleware vérifie la validité des jeton JWT

const jwt = require('jsonwebtoken');
const private_key = require('../auth/private_key');

module.exports = (req, res, next) => {
    // L'entête "authorization" contient le jeton JWT envoyé par l'utilisateur
    const authorization_header = req.headers.authorization;

    if (! authorization_header) {
        const message = "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.";
        return res.status(401).json({ message });
    };

    const token = authorization_header.split(' ')[1];
    const decoded_token = jwt.verify(token, private_key, (error, decoded_token) => {
        if (error) {
            const message = "L'utilisateur n'est pas autorisé à accèder à cette ressource.";
            return res.status(401).json({ message, data: error });
        };

        const user_id = decoded_token.user_id;
        // On vérifie si le token appartient au bon utilisateur
        if (req.body.user_id && req.body.user_id !== user_id) {
            // Si req.body.user_id existe et qu'il ne correspond pas à decoded_token.user_id
            const message = "L'identifiant de l'utilisateur est invalide.";
            res.status(401).json({ message });
        } else {
            // Sinon on autorise la requete
            next();
        };
    });
};