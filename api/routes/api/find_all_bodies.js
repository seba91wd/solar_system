const { bodie } = require('../../db/sequelize');
const { Op } = require('sequelize');
// const auth = require('../auth/auth');

const valide_types = ["Star", "Telluric planet", "Gas giant", "Dwarf planet", "Moon", "Asteroid", "Comet"];

module.exports = (app) => {
    app.get('/api/bodies', (req, res) => {
        console.log("find_all_bodies");

        if (req.query.name) {
            const name = req.query.name;
            
            if (name.length <2) {
                const message = "Le therme de recherce doit contenir au moin 2 caractère";
                return res.status(400).json({message})
            }
            const limit = parseInt(req.query.limit) || 8
            return bodie.findAndCountAll({
                where: where_clause,
                order: ['id'],
                limit: limit
            }).then(({ count, rows }) => {
                let message = "";
                if (count === 1) {
                    // Au singulier
                    if (name !== null) {
                        message = `Il y a ${count} corps céleste qui correspond au terme ${name}.`;
                    }
                    else {
                        message = `Il y a ${count} corps céleste qui correspond au type ${type}.`;
                    }
                } else {
                    // Au pluriel
                    if (name !== null) {
                        message = `Il y a ${count} corps célestes qui correspondent au terme ${name}.`;
                    }
                    else {
                        message = `Il y a ${count} corps célestes qui correspondent au type ${type}.`;
                    }
                }
                res.json({ message, data: rows });
            });
        } 
        else {
            // Récupération de la liste complète des corps célestes
            bodie.findAndCountAll({order: ['id']})
            .then(({count, rows}) => {
                const message = `La liste des corps célestes a bien été récupérée, ${count} objets trouvés`;
                res.json({ message, data: rows });
            })
            .catch(error => {
                const message = "La liste des corps célestes n'a pas pu être récupérée. Réessayer dans quelques instants.";
                res.status(500).json({message, data: error});
            });
        };
    });
};