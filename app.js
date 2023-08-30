const express = require('express');
const path = require('path');
const body_parse = require('body-parser'); // Middlewares body-parser
const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST || "localhost";

module.exports = {
    hostname: hostname,
    port: port
};

const sequelize = require('./api/db/sequelize');

// Application du Midlewares express.static sert des fichiers statiques tels que des images, des fichiers CSS, des fichiers JavaScript, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Application du Midlewares body_parse sur tout les points de terminaison
app.use(body_parse.json());

// Application du Midlewares de traiter les données provenant des requêtes POST (formulaire)
app.use(express.urlencoded({ extended: true }));

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

// Route API
require('./api/routes/api/create_user')(app);
require('./api/routes/api/login_user')(app);
require('./api/routes/api/find_all_bodies')(app);
require('./api/routes/api/create_bodie')(app);
require('./api/routes/api/update_bodie')(app);
require('./api/routes/api/delete_bodie')(app);

// Route client
require('./api/routes/client/accueil')(app);
require('./api/routes/client/connexion')(app);
require('./api/routes/client/exploration')(app);
require('./api/routes/client/map')(app);

app.listen(port, hostname, () => {
    console.log(`Application démarée sur http://${hostname}:${port}/api`);
});