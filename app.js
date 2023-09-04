const express = require('express');
const path = require('path');
const body_parse = require('body-parser'); // Middlewares body-parser
const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST || "localhost";

// module.exports = {
//     hostname: hostname,
//     port: port
// };

const sequelize = require('./api/db/sequelize');

// Application du Midlewares express.static sert des fichiers statiques tels que des images, des fichiers CSS, des fichiers JavaScript, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Application du Midlewares body_parse sur tout les points de terminaison
app.use(body_parse.json());

// Création des tables de la BDD 
// sequelize.initDb();

// Redirection vers l'accueil
app.get('/', (req, res) => {
    res.redirect('/accueil');
})

// Petites explications du fonctionnement des requêtes possibles
app.get('/api', (req, res) => {
    const welcome = `
    <h1>Welcome to API zone</h1><br>
    <p>Liste des corps célestes : <a href="/api/bodies">/api/bodies</a></p>
    <p>Liste des comètes : <a href="/api/bodies?type=Comet">/api/bodies?type=Comet</a></p>
    <p>Liste des astéroïdes : <a href="/api/bodies?type=Asteroid">/api/bodies?type=Asteroid</a></p>
    <p>Liste des lunes avec limite de résultat : <a href="/api/bodies?type=Moon&limit=10">/api/bodies?type=Moon&limit=10</a></p>
    <p>Recherche par nom : <a href="/api/bodies?name=mars">/api/bodies?name=mars</a></p>
    <p>Recherche par ID : <a href="/api/bodies?id=240">/api/bodies?id=240</a></p>
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

// Middleware pour gérer les erreurs 404
// Ce Midlewares DOIT être placé après les routes pour fonctionner correctement
app.use((req, res) => {
    // Afficher la page d'erreur personnalisée
    res.status(404).sendFile(path.join(__dirname, '/public/page_404/404.html'));
});

app.listen(port, hostname, () => {
    console.log(`Application démarée sur http://${hostname}:${port}/api`);
});