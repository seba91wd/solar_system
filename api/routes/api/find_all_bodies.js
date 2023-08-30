const { bodie } = require('../../db/sequelize');
const { Op } = require('sequelize');
// const auth = require('../auth/auth');

const valide_types = ["Star", "Telluric planet", "Gas giant", "Dwarf planet", "Moon", "Asteroid", "Comet"];

module.exports = (app) => {
    app.get('/api/bodies', (req, res) => {
        console.log("find_all_bodies");

        if (req.query.name || req.query.id || req.query.type) {
            const name = req.query.name || null;
            const type = req.query.type;
            const id = parseInt(req.query.id);

            if (name && name.length < 2) {
                const message = "Le terme de recherche doit contenir au moins 2 caractères";
                return res.status(400).json({ message });
            };

            let where_clause = {};

            if (name) {
                where_clause.name = {
                    [Op.like]: `%${name}%`
                };
            };

            if (type && valide_types.includes(type)) {
                where_clause.body_type = type;
            };

            if (id) {
                return bodie.findByPk(id).then(corps => {
                    if (corps === null) {
                        const message = "Le corps céleste demandé n'existe pas, réessayer avec un autre ID";
                        return res.status(404).json({ message });
                    }
                    const message = `Il y a 1 corps céleste qui correspond à l'ID ${corps.id}.`;
                    res.json({ message, corps });
                });
            };

            const limit = parseInt(req.query.limit) || 10;

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
            const limit = parseInt(req.query.limit) || null; // null = pas de limite de résultat
            bodie.findAndCountAll({ order: ['id'], limit: limit })
                .then(({ count, rows }) => {
                    const message = `La liste des corps célestes a bien été récupérée, ${count} objets trouvés`;
                    res.json({ message, data: rows });
                })
                .catch(error => {
                    const message = "La liste des corps célestes n'a pas pu être récupérée. Réessayer dans quelques instants.";
                    res.status(500).json({ message, data: error });
                });
        };
    });
};