const { bodie } = require('../../db/sequelize');
const { Op } = require('sequelize');
// const auth = require('../auth/auth');

module.exports = (app) => {
    app.get('/api/bodies', (req, res) => {
        console.log("find_all_bodies");

        if (req.query.name) {
            const name = req.query.name;
            
            if (name.length <2) {
                const message = "Le therme de recherce doit contenir au moin 2 caractère";
                return res.status(400).json({message})
            }
            const limit = parseInt(req.query.limit) || 5
            return bodie.findAndCountAll({
                where: {
                    name:{
                        [Op.like]: `%${name}%`
                    }
                },
                order: ['name'],
                limit: limit
            })
            .then(({count, rows}) => {
                let message = "";
                if (count === 1){
                    // Au singulier
                    message = `Il y a ${count} corps céleste qui correspond au therme ${name}.`;
                }
                else {
                    // Au pluriel
                    message = `Il y a ${count} corps célestes qui correspondent au therme ${name}.`;
                }
                res.json({ message, data: rows });
            })
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