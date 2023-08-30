const express = require('express');
const path = require('path');

const app = express.Router();

module.exports = (app) => {
    app.get('/exploration', (req, res) => {
        console.log("exploration_api");
        res.sendFile(path.join(__dirname, '../../../public/exploration/exploration.html'));
    })
}