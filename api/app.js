const express = require('express');
const body_parse = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST || "localhost";
const path = require('path');

module.exports = {
    hostname: hostname,
    port: port
};

const sequelize = require('./src/db/sequelize');

// Application du Midlewares express.static sert des fichiers statiques tels que des images, des fichiers CSS, des fichiers JavaScript, etc.
app.use(express.static(path.join(__dirname, '../client')));

// Application du Midlewares body_parse sur tout les points de terminaison
app.use(body_parse.json());

// Creation de la BDD 
// sequelize.initDb();

app.get('/api', (req, res) => {
    const welcome = `
    Welcome to API Planetary system<br>
    <a href="http://${hostname}:${port}/api/bodies">Liste des corps célestes</a><br>
    <a href="http://${hostname}:${port}/api/bodies/Telluric planet">Liste des planètes tellurique</a><br>
    <a href="http://${hostname}:${port}/api/bodies/Moon">Liste des Lunes</a><br>
    <a href="http://${hostname}:${port}/api/bodies/Asteroid">Liste des astéroïdes</a><br>
    <a href="http://${hostname}:${port}/api/bodies/Comet">liste des comètes</a>
    `
    res.send(welcome)
})

require('./src/routes/api/create_user')(app);
require('./src/routes/api/login_user')(app);
require('./src/routes/api/find_all_bodies')(app);
require('./src/routes/api/find_by_type')(app);
require('./src/routes/api/create_bodie')(app);
require('./src/routes/api/update_bodie')(app);
require('./src/routes/api/delete_bodie')(app);

require('./src/routes/client/accueil')(app);
require('./src/routes/client/connexion')(app);
require('./src/routes/client/exploration_api')(app);
require('./src/routes/client/map')(app);

app.listen(port, hostname, () => {
    console.log(`Application démarée sur http://${hostname}:${port}/api`);
});