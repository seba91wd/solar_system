const { bodie } = require('../db/sequelize');
const { Op } = require('sequelize');
// const auth = require('../auth/auth');
const valide_types = ["Star", "Telluric planet", "Gas giant", "Dwarf planet", "Moon", "Asteroid", "Comet"];

module.exports = (app) => {
    app.get('/api/bodies/:req_body_type', (req, res) => {
        console.log("find_by_type");
        const limit = parseInt(req.query.limit) || null;
        const name = req.query.name || null;
        if (req.params.req_body_type) {
            const req_body_type = req.params.req_body_type;
            if (valide_types.includes(req_body_type)) {
                if (name) {
                    if (name.length < 2) {
                        const message = "Le therme de recherce doit contenir au moin 2 caractère";
                        return res.status(400).json({ message })
                    }
                    return bodie.findAndCountAll({
                        where: {
                            body_type: req_body_type,
                            name: {
                                [Op.like]: `%${name}%`
                            }
                        },
                        order: ['id'],
                        limit: limit
                    })
                        .then(({ count, rows }) => {
                            let message = "";
                            if (count === 1) {
                                // Au singulier
                                message = `Il y a ${count} corp céleste qui correspond au type ${req_body_type} et au therme ${name}.`;
                            }
                            else {
                                // Au pluriel
                                message = `Il y a ${count} corps célestes qui correspondent au type ${req_body_type} et au therme ${name}.`;
                            }
                            res.json({ message, data: rows });
                        })
                }
                else {
                    return bodie.findAndCountAll({
                        where: { body_type: req_body_type },
                        order: ['id'],
                        limit: limit
                    })
                        .then(({ count, rows }) => {
                            let message = "";
                            if (count === 1) {
                                // Au singulier
                                message = `Il y a ${count} corp céleste qui correspond au type ${req_body_type}.`;
                            }
                            else {
                                // Au pluriel
                                message = `Il y a ${count} corps célestes qui correspondent au type ${req_body_type}.`;
                            }
                            res.json({ message, data: rows });
                        })
                }
            }
            else {
                const message = `Les thermes de recherce disponible sont ${valide_types}.`
                return res.status(404).json({ message })
            }
        }
    })
}