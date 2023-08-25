const { bodie } = require('../../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../../auth/auth');

module.exports = (app) => {
    app.put('/api/update/:id', auth, (req, res) => {
        console.log("update: id " + req.params.id);
        const id = req.params.id;
        bodie.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            return bodie.findByPk(id).then(corps => {
                if (corps === null) {
                    const message = "Le corps céleste demandé n'existe pas, réessayer avec un autre identifiant";
                    return res.status(404).json({ message });
                }
                const message = `Le corps céleste ${corps.name} a bien été modifié.`;
                res.json({ message, data: corps });
            })
        })
        .catch(error => {
            console.log(error);
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({message: error.message, data: error});
            };
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({message: error.message, data: error});
            };
            const message = "La liste des corps célestes n'a pas pu être modifié. Réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
    });
};