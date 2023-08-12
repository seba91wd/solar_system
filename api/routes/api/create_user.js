const { user } = require('../../db/sequelize')
const bcrypt = require('bcrypt');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const authorization = "my_authorization_pass"

module.exports = (app) => {
    app.post('/api/user', (req, res) => {
        console.log("create_user");

        if (! req.headers.authorization) {
            const message = `L'utilisateur doit fournir une autorisation pour accéder à cette ressource. Contactez Seba91120 et dites '401'`;
            return res.status(401).json({ message });
        }
        if (req.headers.authorization !== authorization) {
            const message = "L'utilisateur n'a pas fourni une clé valide.";
            return res.status(401).json({ message });
        }
        if (! req.body.username || ! req.body.password ) {
            const message = "L'utilisateur n'a pas fourni de nom et/ou de mot de passe.";
            return res.status(401).json({ message });
        }
        if (req.body.username == "" || req.body.password == "") {
            const message = "L'utilisateur n'a pas fourni de nom et/ou de mot de passe.";
            return res.status(401).json({ message });
        }

        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            user.create({
                username: req.body.username,
                password: hash
            })
            .then(new_user => {
                const message = `L'utilisateur ${req.body.username} a bien été crée.`;
                res.json({ message, data: new_user });
            })
            .catch(error => {
                if (error.name === "SequelizeValidationError") {
                    console.log('ValidationError: type incorrect');
                    return res.status(400).json({ message: error.message, data: error });
                };
                if (error.name === "SequelizeUniqueConstraintError") {
                    console.log('UniqueConstraintError: name incorrect');
                    return res.status(400).json({ message: error.message, data: error });
                };
                const message = "L'utilisateur n'a pas pu étre ajouté. Réessayer dans quelques instants.";
                res.status(500).json({ message, data: error });
            });
    
        })
    });
};