const express = require('express');
const path = require('path');

const app = express.Router();

module.exports = (app) => {
    app.get('/map', (req, res) => {
        console.log("map");
        res.sendFile(path.join(__dirname, '../../../public/visualisation_3d/index.html'));
    })
}