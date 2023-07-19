const { bodie } = require('../db/sequelize')
const auth = require('../auth/auth');

module.exports = (app) => {
    app.delete('/api/bodies/:id',auth, (req, res) => {
        console.log("delete_bodie");
        bodie.findByPk(req.params.id).then(corp => {

            if (corp === null) {
                const message = "Le corp céleste demandé n'existe pas, réessayer avec un autre identifiant";
                return res.status(404).json({ message });
            }
            const bodie_deleted = corp;
            return corp.destroy({
                where: { id: corp.id }
            })
            .then(_ => {
                const message = `Le corp céleste ${bodie_deleted.name}, ID n°${bodie_deleted.id} a bien été supprimé.`
                res.json({ message, data: bodie_deleted })
            })
        })
        .catch(error => {
            const message = "Le corp céleste n'a pas pu être supprimé. Réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
    })
}