const { bodie } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/bodies',auth, (req, res) => {
        console.log("create_bodie");
        bodie.create(req.body)
        .then(corp => {
            const message = `Le corp céleste ${req.body.name} a bien été crée.`;
            res.json({ message, data: corp });
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
            const message = "La planète n'a pas pu étre ajouté. Réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
    });
};