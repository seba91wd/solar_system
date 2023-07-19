const express = require('express');
const path = require('path');

const app = express.Router();

// Configurer la route pour servir la page avec le cube de Three.js
module.exports = (app) => {
    app.get('/map', (req, res) => {
        console.log("map");
        res.sendFile(path.join(__dirname, '../../../client/public/index.html'));
    })
}