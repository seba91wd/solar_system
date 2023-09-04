const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const bodie_model = require('../models/bodies');
const user_model = require('../models/user');
const db_bodies = require('./db_bodies');

const base_name = "solar_system";
const user_name = "root";
const password = "";

// Création d'une instance sequelize pour le développement
const sequelize = new Sequelize(
    base_name, /* Nom de la BDD */
    user_name, /* Identifiant */
    password,  /* Mot de passe */
    {
        host: 'localhost', /* Emplacement de la BDD sur le serveur */
        dialect: 'mariadb', /* Nom du driver utilisée par sequelize */
        dialectOptions: {
            timezone: 'Etc/GMT-2' /* Fuseau horaire du serveur */
        },
        logging: false /* Affiche les messages d'interaction avec la BDD */
    }
);

const bodie = bodie_model(sequelize, DataTypes)
const user = user_model(sequelize, DataTypes)

const initDb = () => {
    // console.log(db_bodies);
    return sequelize.sync({ force: true })
        .then(_ => {
            console.log('La base de donnée a été synchronisée.')
            db_bodies.map(corp => {
                bodie.create({
                    name: corp.name,
                    english_name: corp.english_name,
                    body_type: corp.body_type,
                    mass: corp.mass,
                    density: corp.density,
                    gravity: corp.gravity,
                    axial_tilt: corp.axial_tilt,
                    equa_radius: corp.equa_radius,
                    mean_radius: corp.mean_radius,
                    polar_radius: corp.polar_radius,
                    flattening: corp.flattening,
                    inclination: corp.inclination,
                    around_planet: corp.around_planet,
                    eccentricity: corp.eccentricity,
                    aphelion: corp.aphelion,
                    perihelion: corp.perihelion,
                    arg_periapsis: corp.arg_periapsis,
                    sideral_rotation: corp.sideral_rotation,
                    sideral_orbit: corp.sideral_orbit,
                    picture: corp.picture,
                    moons: corp.moons
                })
                .then(corp => console.log(corp.toJSON()))
            })
            bcrypt.hash("admin_password", 10)
                .then(hash => {
                    user.create({
                        username: "admin",
                        password: hash
                    })
                })
        });
}
module.exports = {
    initDb, bodie, user
}