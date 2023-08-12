const express = require('express');
const path = require('path');

const app = express.Router();

module.exports = (app) => {
    app.get('/exploration_api', (req, res) => {
        console.log("exploration_api");
        res.sendFile(path.join(__dirname, '../../../public/exploration_api/exploration_api.html'));
    })
}