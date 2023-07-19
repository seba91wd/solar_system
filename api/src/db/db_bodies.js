// const link = "http://localhost:3000/";
const { hostname, port } = require("../../app");
const link = `http://${hostname}:${port}/api/bodies?name=`;
const bodies = [
    {
        "name": "Le Soleil",
        "english_name": "Sun",
        "body_type": "Star",
        "mass": {
            "mass_value": 1.989,
            "mass_exponent": 30
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 7.25,
        "equa_radius": 696342,
        "mean_radius": 695508,
        "polar_radius": 0,
        "flattening": 0.00009,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "Terre",
        "english_name": "Earth",
        "body_type": "Telluric planet",
        "mass": {
            "mass_value": 5.97237,
            "mass_exponent": 24
        },
        "density": 5.5136,
        "gravity": 9.8,
        "axial_tilt": 23.4393,
        "equa_radius": 6378.1366,
        "mean_radius": 6371.0084,
        "polar_radius": 6356.8,
        "flattening": 0.00335,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.0167,
        "aphelion": 152100000,
        "perihelion": 147095000,
        "arg_periapsis": 85.901,
        "sideral_rotation": 23.9345,
        "sideral_orbit": 365.256,
        "picture": null,
        "moons": [
            {
                "moon": "La Lune",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/lune"
            }
        ]
    },
    {
        "name": "La Lune",
        "english_name": "Moon",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.346,
            "mass_exponent": 22
        },
        "density": 3.344,
        "gravity": 1.62,
        "axial_tilt": 6.68,
        "equa_radius": 1738.1,
        "mean_radius": 1737,
        "polar_radius": 1736,
        "flattening": 0.0012,
        "inclination": 5.145,
        "around_planet": {
            "planet": "terre",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/terre"
        },
        "eccentricity": 0.0549,
        "aphelion": 405500,
        "perihelion": 363300,
        "arg_periapsis": 0,
        "sideral_rotation": 655.728,
        "sideral_orbit": 27.3217,
        "picture": null,
        "moons": null
    },
    {
        "name": "Vénus",
        "english_name": "Venus",
        "body_type": "Telluric planet",
        "mass": {
            "mass_value": 4.86747,
            "mass_exponent": 24
        },
        "density": 5.243,
        "gravity": 8.87,
        "axial_tilt": 177.36,
        "equa_radius": 6051.8,
        "mean_radius": 6051.8,
        "polar_radius": 6051.8,
        "flattening": 0,
        "inclination": 3.39,
        "around_planet": null,
        "eccentricity": 0.0067,
        "aphelion": 108939000,
        "perihelion": 107477000,
        "arg_periapsis": 54.78,
        "sideral_rotation": -5832.5,
        "sideral_orbit": 224.701,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mercure",
        "english_name": "Mercury",
        "body_type": "Telluric planet",
        "mass": {
            "mass_value": 3.30114,
            "mass_exponent": 23
        },
        "density": 5.4291,
        "gravity": 3.7,
        "axial_tilt": 0.0352,
        "equa_radius": 2440.53,
        "mean_radius": 2439.4,
        "polar_radius": 2439.7,
        "flattening": 0,
        "inclination": 7,
        "around_planet": null,
        "eccentricity": 0.2056,
        "aphelion": 69816900,
        "perihelion": 46001200,
        "arg_periapsis": 29.022,
        "sideral_rotation": 1407.6,
        "sideral_orbit": 87.969,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mars",
        "english_name": "Mars",
        "body_type": "Telluric planet",
        "mass": {
            "mass_value": 6.41712,
            "mass_exponent": 23
        },
        "density": 3.9341,
        "gravity": 3.71,
        "axial_tilt": 25.19,
        "equa_radius": 3396.19,
        "mean_radius": 3389.5,
        "polar_radius": 3376.2,
        "flattening": 0.00589,
        "inclination": 1.85,
        "around_planet": null,
        "eccentricity": 0.0935,
        "aphelion": 249200000,
        "perihelion": 206700000,
        "arg_periapsis": 286.231,
        "sideral_rotation": 24.6229,
        "sideral_orbit": 686.98,
        "picture": null,
        "moons": [
            {
                "moon": "Phobos",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/phobos"
            },
            {
                "moon": "Deïmos",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/deimos"
            }
        ]
    },
    {
        "name": "Phobos",
        "english_name": "Phobos",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.06,
            "mass_exponent": 16
        },
        "density": 1.9,
        "gravity": 0.0057,
        "axial_tilt": 0,
        "equa_radius": 13,
        "mean_radius": 11.1,
        "polar_radius": 9.1,
        "flattening": 0,
        "inclination": 1.075,
        "around_planet": {
            "planet": "mars",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/mars"
        },
        "eccentricity": 0.0151,
        "aphelion": 9518,
        "perihelion": 9234,
        "arg_periapsis": 0,
        "sideral_rotation": 0.7653,
        "sideral_orbit": 0.31891,
        "picture": null,
        "moons": null
    },
    {
        "name": "Deïmos",
        "english_name": "Deimos",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.4762,
            "mass_exponent": 15
        },
        "density": 1.75,
        "gravity": 0.003,
        "axial_tilt": 0,
        "equa_radius": 7.8,
        "mean_radius": 6.2,
        "polar_radius": 5.1,
        "flattening": 0,
        "inclination": 1.075,
        "around_planet": {
            "planet": "mars",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/mars"
        },
        "eccentricity": 0.0002,
        "aphelion": 23471,
        "perihelion": 23456,
        "arg_periapsis": 0,
        "sideral_rotation": 30.29856,
        "sideral_orbit": 1.26244,
        "picture": null,
        "moons": null
    }

]

module.exports = bodies