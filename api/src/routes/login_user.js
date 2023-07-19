const { user } = require('../db/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const private_key = require('../auth/private_key');

module.exports = (app) => {
    app.post('/api/login', (req, res) => {
        console.log("login");
        user.findOne({ where: { username: req.body.username } }).then(user => {
            if (! user) {
                const message = "L'utilisateur demandé n'existe pas.";
                return res.status(404).json({ message });
            }

            bcrypt.compare(req.body.password, user.password).then(password_valid => {
                if (! password_valid) {
                    const message = "Le mot de passe est incorrect";
                    return res.status(401).json({ message })
                }

                // JWT
                const token = jwt.sign(
                    {user_id: user.id},
                    private_key,
                    {expiresIn: "1h"}
                )

                const message = "L'utilisateur a été connecté avec succès";
                return res.json({ message, data: user, token })
            })
        })
        .catch(error => {
            const message = "L'utilisateur n'a pas pu étre connecté. Réessayez dans quelques instants.";
            return res.json({ message, data: error })
        })
    })
}