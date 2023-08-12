const express = require('express');
const path = require('path');

const app = express.Router();

module.exports = (app) => {
    app.get('/connexion', (req, res) => {
        console.log("connexion");
        res.sendFile(path.join(__dirname, '../../../public/connexion/connexion.html'));
    })
}