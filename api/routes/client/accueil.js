const express = require('express');
const path = require('path');

const app = express.Router();

module.exports = (app) => {
    app.get('/accueil', (req, res) => {
        console.log("accueil");
        res.sendFile(path.join(__dirname, '../../../public/accueil/accueil.html'));
    })
}