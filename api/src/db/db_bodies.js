// const link = "http://localhost:3000/";
const { hostname, port } = require("../../app");
const link = `http://${hostname}:${port}/api/bodies?name=`;
const bodies = [
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
    },
    {
        "name": "Io",
        "english_name": "Io",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8.932,
            "mass_exponent": 22
        },
        "density": 3.53,
        "gravity": 1.79,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1821.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.036,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.004,
        "aphelion": 423529,
        "perihelion": 420071,
        "arg_periapsis": 0,
        "sideral_rotation": 42.4593,
        "sideral_orbit": 1.76914,
        "picture": null,
        "moons": null
    },
    {
        "name": "Europe",
        "english_name": "Europa",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.8,
            "mass_exponent": 22
        },
        "density": 3.01,
        "gravity": 1.31,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1560.8,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.466,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.009,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 85.2293,
        "sideral_orbit": 3.55118,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ganymède",
        "english_name": "Ganymede",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.4819,
            "mass_exponent": 23
        },
        "density": 1.94,
        "gravity": 1.428,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2631.2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.177,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 171.7093,
        "sideral_orbit": 7.15455,
        "picture": null,
        "moons": null
    },
    {
        "name": "Callisto",
        "english_name": "Callisto",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.0759,
            "mass_exponent": 23
        },
        "density": 1.83,
        "gravity": 1.235,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2410.3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.192,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.007,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 400.536,
        "sideral_orbit": 16.68902,
        "picture": null,
        "moons": null
    },
    {
        "name": "Amalthée",
        "english_name": "Amalthea",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.5,
            "mass_exponent": 18
        },
        "density": 3.1,
        "gravity": 0.02,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 84,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.38,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.003,
        "aphelion": 182840,
        "perihelion": 181150,
        "arg_periapsis": 0,
        "sideral_rotation": 11.9563,
        "sideral_orbit": 0.49818,
        "picture": null,
        "moons": null
    },
    {
        "name": "Himalia",
        "english_name": "Himalia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9.5,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0.062,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 85,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 27.5,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.162,
        "aphelion": 13082000,
        "perihelion": 9782900,
        "arg_periapsis": 0,
        "sideral_rotation": 7.7808,
        "sideral_orbit": 250.5662,
        "picture": null,
        "moons": null
    },
    {
        "name": "Élara",
        "english_name": "Elara",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.031,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 40,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 26.63,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.217,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 259.6528,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pasiphaé",
        "english_name": "Pasiphae",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.022,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 18,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 151.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.409,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 743.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Sinopé",
        "english_name": "Sinope",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0.014,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 14,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 158.1,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.25,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 758.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Lysithéa",
        "english_name": "Lysithea",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0.013,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 12,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 28.3,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.112,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 259.22,
        "picture": null,
        "moons": null
    },
    {
        "name": "Carmé",
        "english_name": "Carme",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.017,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 15,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.253,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 734.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ananké",
        "english_name": "Ananke",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0.01,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 10,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.244,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 629.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Léda",
        "english_name": "Leda",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.0073,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 27.46,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.164,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 240.92,
        "picture": null,
        "moons": null
    },
    {
        "name": "Thébé",
        "english_name": "Thebe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.02,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 49,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.08,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.018,
        "aphelion": 226000,
        "perihelion": 218000,
        "arg_periapsis": 0,
        "sideral_rotation": 16.188,
        "sideral_orbit": 0.6745,
        "picture": null,
        "moons": null
    },
    {
        "name": "Adrastée",
        "english_name": "Adrastea",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0.002,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 8,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.054,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.002,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0.7158,
        "sideral_orbit": 0.29826,
        "picture": null,
        "moons": null
    },
    {
        "name": "Métis",
        "english_name": "Metis",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.005,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 22,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.019,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.001,
        "aphelion": 128026,
        "perihelion": 127974,
        "arg_periapsis": 0,
        "sideral_rotation": 0.7075,
        "sideral_orbit": 0.29478,
        "picture": null,
        "moons": null
    },
    {
        "name": "Callirrhoé",
        "english_name": "Callirrhoe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8.7,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0.0031,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 147.1,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.283,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 758.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Thémisto",
        "english_name": "Themisto",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6.9,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0.0029,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 43.08,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.242,
        "aphelion": 8874300,
        "perihelion": 5909000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 130.02,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mégaclité",
        "english_name": "Megaclite",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.1,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 152.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.421,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 752.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Taygété",
        "english_name": "Taygete",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.6,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.252,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 732.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Chaldéné",
        "english_name": "Chaldene",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.251,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 723.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Harpalyké",
        "english_name": "Harpalyke",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.2,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.6,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.226,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 623.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Kalyké",
        "english_name": "Kalyke",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.9,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.245,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 743,
        "picture": null,
        "moons": null
    },
    {
        "name": "Iocasté",
        "english_name": "Iocaste",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.9,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 149.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.216,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 631.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Erinomé",
        "english_name": "Erinome",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.266,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 728.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Isonoé",
        "english_name": "Isonoe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.246,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 725.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Praxidyké",
        "english_name": "Praxidike",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 149,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.23,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 625.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Autonoé",
        "english_name": "Autonoe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0015,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 152.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.334,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 715.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "Thyoné",
        "english_name": "Thyone",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0015,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.5,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.229,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 627.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hermippé",
        "english_name": "Hermippe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0015,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 150.7,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.21,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 633.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Aitné",
        "english_name": "Aitne",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0012,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.1,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.264,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 730.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Eurydomé",
        "english_name": "Eurydome",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0012,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 150.3,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.276,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 723.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Euanthé",
        "english_name": "Euanthe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0012,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.232,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 620.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Euporie",
        "english_name": "Euporie",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 145.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.144,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 553.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "Orthosie",
        "english_name": "Orthosie",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.00081,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 145.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.281,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 622.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Spondé",
        "english_name": "Sponde",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.00081,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 151,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.312,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 748.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Calé",
        "english_name": "Kale",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.00081,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.26,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 729.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pasithée",
        "english_name": "Pasithee",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.00081,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.1,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.267,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 716.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hégémone",
        "english_name": "Hegemone",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 155.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.328,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 739.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mnémé",
        "english_name": "Mneme",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.6,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.227,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 620,
        "picture": null,
        "moons": null
    },
    {
        "name": "Aoedé",
        "english_name": "Aoede",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 158.3,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.432,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 761.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Thelxinoé",
        "english_name": "Thelxinoe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 151.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.221,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 628.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "Arché",
        "english_name": "Arche",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.15,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.0012,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.259,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 762.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Callichore",
        "english_name": "Kallichore",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.5,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.264,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 764.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hélicé",
        "english_name": "Helike",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 154.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.156,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 634.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Carpo",
        "english_name": "Carpo",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 51.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.43,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 456.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "Eukéladé",
        "english_name": "Eukelade",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.5,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.272,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 746.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "Cyllène",
        "english_name": "Cyllene",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 149.3,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.319,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 737.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Coré",
        "english_name": "Kore",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 145,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.325,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 779.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hersé",
        "english_name": "Herse",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.2,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 717.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 2",
        "english_name": "S/2003 J 2",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 151.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.38,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 982.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Euphémé",
        "english_name": "Eupheme",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.253,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 504,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 4",
        "english_name": "S/2003 J 4",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 144.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.204,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 723.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Eiréné",
        "english_name": "Eirene",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 163.1,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.22,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 759.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 9",
        "english_name": "S/2003 J 9",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 12
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.5,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.269,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 683,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 10",
        "english_name": "S/2003 J 10",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.1,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.214,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 767,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 12",
        "english_name": "S/2003 J 12",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 12
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 145.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.376,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 533.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Philophrosyne",
        "english_name": "Philophrosyne",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 143.6,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.194,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 668.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 16",
        "english_name": "S/2003 J 16",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.5,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.23,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 595.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 18",
        "english_name": "S/2003 J 18",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 146.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.105,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 606.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 19",
        "english_name": "S/2003 J 19",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 162.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.334,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 701.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 23",
        "english_name": "S/2003 J 23",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0.00081,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 149.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.309,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 759.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mimas",
        "english_name": "Mimas",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.79,
            "mass_exponent": 19
        },
        "density": 1.15,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 396.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.53,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0202,
        "aphelion": 189270,
        "perihelion": 181770,
        "arg_periapsis": 0,
        "sideral_rotation": 22.56,
        "sideral_orbit": 0.94,
        "picture": null,
        "moons": null
    },
    {
        "name": "Encelade",
        "english_name": "Enceladus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.08,
            "mass_exponent": 20
        },
        "density": 1.61,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 504.2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0045,
        "aphelion": 239066,
        "perihelion": 236830,
        "arg_periapsis": 0,
        "sideral_rotation": 32.88,
        "sideral_orbit": 1.37,
        "picture": null,
        "moons": null
    },
    {
        "name": "Téthys",
        "english_name": "Tethys",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6.18,
            "mass_exponent": 20
        },
        "density": 0.985,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1066,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.86,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0001,
        "aphelion": 294648,
        "perihelion": 294589,
        "arg_periapsis": 0,
        "sideral_rotation": 45.312,
        "sideral_orbit": 1.89,
        "picture": null,
        "moons": null
    },
    {
        "name": "Dioné",
        "english_name": "Dione",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.095,
            "mass_exponent": 21
        },
        "density": 1.48,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1123.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.002,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0022,
        "aphelion": 378260,
        "perihelion": 376580,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2.737,
        "picture": null,
        "moons": null
    },
    {
        "name": "Rhéa",
        "english_name": "Rhea",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 21
        },
        "density": 1.24,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1528.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.35,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.001,
        "aphelion": 527597,
        "perihelion": 526543,
        "arg_periapsis": 0,
        "sideral_rotation": 108.432,
        "sideral_orbit": 4.518,
        "picture": null,
        "moons": null
    },
    {
        "name": "Titan",
        "english_name": "Titan",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.3452,
            "mass_exponent": 23
        },
        "density": 1.88,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2575,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.33,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0292,
        "aphelion": 1257060,
        "perihelion": 1186680,
        "arg_periapsis": 0,
        "sideral_rotation": 382.8,
        "sideral_orbit": 15.95,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hypérion",
        "english_name": "Hyperion",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5.6,
            "mass_exponent": 18
        },
        "density": 0.55,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 266,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.43,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.123,
        "aphelion": 1535756,
        "perihelion": 1466112,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 21.28,
        "picture": null,
        "moons": null
    },
    {
        "name": "Japet",
        "english_name": "Iapetus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.805,
            "mass_exponent": 21
        },
        "density": 1.09,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1471.2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 14.72,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0283,
        "aphelion": 3661612,
        "perihelion": 3460068,
        "arg_periapsis": 0,
        "sideral_rotation": 1735.92,
        "sideral_orbit": 79.33,
        "picture": null,
        "moons": null
    },
    {
        "name": "Phœbé",
        "english_name": "Phoebe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8.292,
            "mass_exponent": 18
        },
        "density": 1.64,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 214.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 174.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.164,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 9.2736,
        "sideral_orbit": 548.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Janus",
        "english_name": "Janus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.9,
            "mass_exponent": 18
        },
        "density": 0.63,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 89.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.14,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.007,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Epiméthée",
        "english_name": "Epimetheus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5.3,
            "mass_exponent": 17
        },
        "density": 0.64,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 113.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.34,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.009,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.69,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hélène",
        "english_name": "Helene",
        "body_type": "Moon",
        "mass": null,
        "density": 1.3,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 17.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.199,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0022,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2.736,
        "picture": null,
        "moons": null
    },
    {
        "name": "Télesto",
        "english_name": "Telesto",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 12.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.158,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.89,
        "picture": null,
        "moons": null
    },
    {
        "name": "Calypso",
        "english_name": "Calypso",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6.5,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 10.7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.473,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.89,
        "picture": null,
        "moons": null
    },
    {
        "name": "Atlas",
        "english_name": "Atlas",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7,
            "mass_exponent": 15
        },
        "density": 0.5,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 15.1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.3,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.602,
        "picture": null,
        "moons": null
    },
    {
        "name": "Prométhée",
        "english_name": "Prometheus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.6,
            "mass_exponent": 17
        },
        "density": 0.48,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 43.1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.00204,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.613,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pandore",
        "english_name": "Pandora",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.4,
            "mass_exponent": 17
        },
        "density": 0.49,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 40.7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0042,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.629,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pan",
        "english_name": "Pan",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.95,
            "mass_exponent": 15
        },
        "density": 0.42,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 14.1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.575,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ymir",
        "english_name": "Ymir",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.97,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 167.9,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.187,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1315.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "Paaliaq",
        "english_name": "Paaliaq",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.25,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 10,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 47.2,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.364,
        "aphelion": 23139965,
        "perihelion": 6908035,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 686.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Tarvos",
        "english_name": "Tarvos",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 33.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.531,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 926.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ijiraq",
        "english_name": "Ijiraq",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.18,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 49.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.316,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 451.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "Suttungr",
        "english_name": "Suttungr",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 175.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.114,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1016.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Kiviuq",
        "english_name": "Kiviuq",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.79,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 48.7,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.334,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 449.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mundilfari",
        "english_name": "Mundilfari",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 169.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.21,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 952.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Albiorix",
        "english_name": "Albiorix",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.23,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 13,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 34,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.469,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 13.32,
        "sideral_orbit": 783.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Skathi",
        "english_name": "Skathi",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.5,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.27,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 728.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Erriapo",
        "english_name": "Erriapus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6.8,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 34.6,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.474,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 871.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Siarnaq",
        "english_name": "Siarnaq",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.35,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 16,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 45.6,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.295,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 895.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Thrymr",
        "english_name": "Thrymr",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 175,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.47,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1094.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Narvi",
        "english_name": "Narvi",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 145.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.431,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1003.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Méthone",
        "english_name": "Methone",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0001,
        "aphelion": 194459,
        "perihelion": 194421,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.01,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pallène",
        "english_name": "Pallene",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.004,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.14,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pollux",
        "english_name": "Polydeuces",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.1705,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.018,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2.737,
        "picture": null,
        "moons": null
    },
    {
        "name": "Daphnis",
        "english_name": "Daphnis",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 14
        },
        "density": 0.34,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3.8,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.594,
        "picture": null,
        "moons": null
    },
    {
        "name": "Aegir",
        "english_name": "Aegir",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 166.7,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.252,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1116.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Bebhionn",
        "english_name": "Bebhionn",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 35,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.469,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 834.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Bergelmir",
        "english_name": "Bergelmir",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 158.5,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.142,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1005.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Bestla",
        "english_name": "Bestla",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 145.2,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.521,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1083.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Farbauti",
        "english_name": "Farbauti",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 156.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.206,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1086.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "Fenrir",
        "english_name": "Fenrir",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.9,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.136,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1260.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Fornjot",
        "english_name": "Fornjot",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 170.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.206,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1490.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hati",
        "english_name": "Hati",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.372,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1038.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hyrrokkin",
        "english_name": "Hyrrokkin",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 151.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.333,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 931.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Kari",
        "english_name": "Kari",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 156.3,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.478,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1233.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Loge",
        "english_name": "Loge",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 173.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.335,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1312,
        "picture": null,
        "moons": null
    },
    {
        "name": "Skoll",
        "english_name": "Skoll",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 161.2,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.464,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 878.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Surtur",
        "english_name": "Surtur",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 177.5,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.451,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1297.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Anthé",
        "english_name": "Anthe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5,
            "mass_exponent": 12
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.04,
        "picture": null,
        "moons": null
    },
    {
        "name": "Jarnsaxa",
        "english_name": "Jarnsaxa",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 163.3,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.216,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 964.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Greip",
        "english_name": "Greip",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 179.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.326,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 921.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Tarqeq",
        "english_name": "Tarqeq",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 46.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.16,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 887.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Égéon",
        "english_name": "Aegaeon",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 11
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.001,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.0002,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 19.63,
        "sideral_orbit": 0.808,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 7",
        "english_name": "S/2004 S 7",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.58,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1103,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 12",
        "english_name": "S/2004 S 12",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.401,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1048,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 13",
        "english_name": "S/2004 S 13",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 167.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.273,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 906,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 17",
        "english_name": "S/2004 S 17",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 166.6,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.259,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 986,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2006 S 1",
        "english_name": "S/2006 S 1",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 154.2,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.13,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 970,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2006 S 3",
        "english_name": "S/2006 S 3",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 150.8,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.471,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1142,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2007 S 2",
        "english_name": "S/2007 S 2",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 176.7,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.218,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 800,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2007 S 3",
        "english_name": "S/2007 S 3",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.5,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 177.2,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.13,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1100,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2009 S 1",
        "english_name": "S/2009 S 1",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 11
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.4715,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ariel",
        "english_name": "Ariel",
        "body_type": "Moon",
        "mass": {
            "mass_value": 12.9,
            "mass_exponent": 20
        },
        "density": 1.59,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 581.1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.04,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0012,
        "aphelion": 191130,
        "perihelion": 190670,
        "arg_periapsis": 0,
        "sideral_rotation": 60.4891,
        "sideral_orbit": 2.52038,
        "picture": null,
        "moons": null
    },
    {
        "name": "Umbriel",
        "english_name": "Umbriel",
        "body_type": "Moon",
        "mass": {
            "mass_value": 12.2,
            "mass_exponent": 20
        },
        "density": 1.46,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 584.7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.13,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0039,
        "aphelion": 267500,
        "perihelion": 265100,
        "arg_periapsis": 0,
        "sideral_rotation": 99.499,
        "sideral_orbit": 4.14418,
        "picture": null,
        "moons": null
    },
    {
        "name": "Titania",
        "english_name": "Titania",
        "body_type": "Moon",
        "mass": {
            "mass_value": 34.2,
            "mass_exponent": 20
        },
        "density": 1.66,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 788.9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.08,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0011,
        "aphelion": 436800,
        "perihelion": 435800,
        "arg_periapsis": 0,
        "sideral_rotation": 208.9408,
        "sideral_orbit": 8.70587,
        "picture": null,
        "moons": null
    },
    {
        "name": "Obéron",
        "english_name": "Oberon",
        "body_type": "Moon",
        "mass": {
            "mass_value": 28.8,
            "mass_exponent": 20
        },
        "density": 1.56,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 761.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.07,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0014,
        "aphelion": 584336,
        "perihelion": 582702,
        "arg_periapsis": 0,
        "sideral_rotation": 323.1176,
        "sideral_orbit": 13.46323,
        "picture": null,
        "moons": null
    },
    {
        "name": "Miranda",
        "english_name": "Miranda",
        "body_type": "Moon",
        "mass": {
            "mass_value": 6.6,
            "mass_exponent": 19
        },
        "density": 1.2,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 240,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 4.34,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0013,
        "aphelion": 130041,
        "perihelion": 129703,
        "arg_periapsis": 0,
        "sideral_rotation": 33.9235,
        "sideral_orbit": 1.41348,
        "picture": null,
        "moons": null
    },
    {
        "name": "Cordélia",
        "english_name": "Cordelia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 20,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.08,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0003,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.33503,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ophélie",
        "english_name": "Ophelia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5.4,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 21,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.1,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0099,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.3764,
        "picture": null,
        "moons": null
    },
    {
        "name": "Bianca",
        "english_name": "Bianca",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9.2,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 27,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.19,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0009,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.43458,
        "picture": null,
        "moons": null
    },
    {
        "name": "Cressida",
        "english_name": "Cressida",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.4,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 41,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.01,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0004,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.46357,
        "picture": null,
        "moons": null
    },
    {
        "name": "Desdémone",
        "english_name": "Desdemona",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.8,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 35,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.11,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.47365,
        "picture": null,
        "moons": null
    },
    {
        "name": "Juliette",
        "english_name": "Juliet",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5.6,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 53,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.07,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0007,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.49307,
        "picture": null,
        "moons": null
    },
    {
        "name": "Portia",
        "english_name": "Portia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.7,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 70,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.06,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.5132,
        "picture": null,
        "moons": null
    },
    {
        "name": "Rosalinde",
        "english_name": "Rosalind",
        "body_type": "Moon",
        "mass": {
            "mass_value": 0.25,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 36,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.28,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.55846,
        "picture": null,
        "moons": null
    },
    {
        "name": "Belinda",
        "english_name": "Belinda",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.9,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 45,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.03,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.62353,
        "picture": null,
        "moons": null
    },
    {
        "name": "Puck",
        "english_name": "Puck",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.9,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 81,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.32,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.76183,
        "picture": null,
        "moons": null
    },
    {
        "name": "Caliban",
        "english_name": "Caliban",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.5,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 36,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 141.53,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.1812,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -579.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Sycorax",
        "english_name": "Sycorax",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 75,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 159.42,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.5219,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -1283.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "Prospero",
        "english_name": "Prospero",
        "body_type": "Moon",
        "mass": {
            "mass_value": 8.5,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 25,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 151.83,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.4445,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -1977.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Setebos",
        "english_name": "Setebos",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.5,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 24,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 158.24,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.5908,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -2234.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Stephano",
        "english_name": "Stephano",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.2,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 16,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 143.82,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.2248,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -676.5,
        "picture": null,
        "moons": null
    },
    {
        "name": "Trinculo",
        "english_name": "Trinculo",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.9,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 166.93,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.2194,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -758.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "Francisco",
        "english_name": "Francisco",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.2,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 11,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 147.25,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.1324,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -266.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "Margaret",
        "english_name": "Margaret",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5.4,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 10,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 57.37,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.6772,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1694.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ferdinand",
        "english_name": "Ferdinand",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5.4,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 10,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 169.79,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.3993,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": -2823.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "Perdita",
        "english_name": "Perdita",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.8,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 13,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.47,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0116,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.638,
        "picture": null,
        "moons": null
    },
    {
        "name": "Mab",
        "english_name": "Mab",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 12,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.13,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0025,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.923,
        "picture": null,
        "moons": null
    },
    {
        "name": "Cupid",
        "english_name": "Cupid",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.8,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.1,
        "around_planet": {
            "planet": "uranus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/uranus"
        },
        "eccentricity": 0.0013,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.613,
        "picture": null,
        "moons": null
    },
    {
        "name": "Triton",
        "english_name": "Triton",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2.14,
            "mass_exponent": 22
        },
        "density": 2.05,
        "gravity": 0.78,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1353.4,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 157.345,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.00002,
        "aphelion": 354765,
        "perihelion": 354753,
        "arg_periapsis": 0,
        "sideral_rotation": 141.0444,
        "sideral_orbit": 5.87685,
        "picture": null,
        "moons": null
    },
    {
        "name": "Néreïde",
        "english_name": "Nereid",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0.071,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 170,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 7.23,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.7512,
        "aphelion": 9655000,
        "perihelion": 1372000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 360.13619,
        "picture": null,
        "moons": null
    },
    {
        "name": "Naïade",
        "english_name": "Naiad",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.01,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 33,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 4.74,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.0003,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.2944,
        "picture": null,
        "moons": null
    },
    {
        "name": "Thalassa",
        "english_name": "Thalassa",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.013,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 41,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.21,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.0002,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.31149,
        "picture": null,
        "moons": null
    },
    {
        "name": "Despina",
        "english_name": "Despina",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0.023,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 75,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.07,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.33466,
        "picture": null,
        "moons": null
    },
    {
        "name": "Galatée",
        "english_name": "Galatea",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0.03,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 88,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.05,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.0001,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.42875,
        "picture": null,
        "moons": null
    },
    {
        "name": "Larissa",
        "english_name": "Larissa",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0.034,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 97,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.2,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.0014,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.55465,
        "picture": null,
        "moons": null
    },
    {
        "name": "Protée",
        "english_name": "Proteus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 5,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0.075,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 210,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.04,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.0004,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.12232,
        "picture": null,
        "moons": null
    },
    {
        "name": "Halimède",
        "english_name": "Halimede",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.01,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 30,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 134.1,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.571,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1879.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Psamathée",
        "english_name": "Psamathe",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 20,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 137.4,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.45,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 9115.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Sao",
        "english_name": "Sao",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.01,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 20,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 48.5,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.293,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2914.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "Laomédie",
        "english_name": "Laomedeia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0.01,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 20,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 34.7,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.424,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 3167.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Néso",
        "english_name": "Neso",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 30,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 132.6,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0.495,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 9374,
        "picture": null,
        "moons": null
    },
    {
        "name": "Charon",
        "english_name": "Charon",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.58,
            "mass_exponent": 21
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 606,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.08,
        "around_planet": {
            "planet": "pluton",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/pluton"
        },
        "eccentricity": 0.0002,
        "aphelion": 19595,
        "perihelion": 19587,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 6.387,
        "picture": null,
        "moons": null
    },
    {
        "name": "Nix",
        "english_name": "Nix",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.5,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 44,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.133,
        "around_planet": {
            "planet": "pluton",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/pluton"
        },
        "eccentricity": 0.002,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 24.854,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hydra",
        "english_name": "Hydra",
        "body_type": "Moon",
        "mass": {
            "mass_value": 4.8,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 36,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.242,
        "around_planet": {
            "planet": "pluton",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/pluton"
        },
        "eccentricity": 0.005,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 38.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "Namaka",
        "english_name": "Namaka",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.79,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 85,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 113,
        "around_planet": {
            "planet": "haumea",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/haumea"
        },
        "eccentricity": 0.249,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 18.27,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hi'iaka",
        "english_name": "Hiʻiaka",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.78,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 160,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 126.35,
        "around_planet": {
            "planet": "haumea",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/haumea"
        },
        "eccentricity": 0.0513,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 49.12,
        "picture": null,
        "moons": null
    },
    {
        "name": "Dysnomie",
        "english_name": "Dysnomia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 145,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 350,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 45.49,
        "around_planet": {
            "planet": "eris",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/eris"
        },
        "eccentricity": 0.0062,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 15.785,
        "picture": null,
        "moons": null
    },
    {
        "name": "Dia",
        "english_name": "Dia",
        "body_type": "Moon",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 13
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 28.23,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.211,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 287,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 3",
        "english_name": "S/2004 S 3",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.02,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.62,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 4",
        "english_name": "S/2004 S 4",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.61,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 6",
        "english_name": "S/2004 S 6",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.02,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.002,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.61,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2010 J 1",
        "english_name": "S/2010 J 1",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 163.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.32,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 723.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2010 J 2",
        "english_name": "S/2010 J 2",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 150.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.307,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 588.1,
        "picture": null,
        "moons": null
    },
    {
        "name": "(1) Cérès",
        "english_name": "1 Ceres",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 9.393,
            "mass_exponent": 20
        },
        "density": 2.161,
        "gravity": 0.28,
        "axial_tilt": 3,
        "equa_radius": 487,
        "mean_radius": 476.2,
        "polar_radius": 455,
        "flattening": 0.9619,
        "inclination": 10.593,
        "around_planet": null,
        "eccentricity": 0.07582,
        "aphelion": 445410000,
        "perihelion": 382620000,
        "arg_periapsis": 73.59769,
        "sideral_rotation": 9.07,
        "sideral_orbit": 1681.63,
        "picture": null,
        "moons": null
    },
    {
        "name": "(6) Hébé",
        "english_name": "6 Hebe",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 6.7,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 92.3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 14.765,
        "around_planet": null,
        "eccentricity": 0.201,
        "aphelion": 435960000,
        "perihelion": 289958000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1380.373,
        "picture": null,
        "moons": null
    },
    {
        "name": "(47171) Lempo",
        "english_name": "47171 Lempo",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 197,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 8.4,
        "around_planet": null,
        "eccentricity": 0.221,
        "aphelion": 7185000000,
        "perihelion": 4580000000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 91678,
        "picture": null,
        "moons": null
    },
    {
        "name": "Petit-Prince",
        "english_name": "The Little Prince",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.2,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 13,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 8,
        "around_planet": {
            "planet": "eugenia",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/eugenia"
        },
        "eccentricity": 0.01,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 4.76,
        "picture": null,
        "moons": null
    },
    {
        "name": "(762) Pulcova",
        "english_name": "762 Pulcova",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.6,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 78.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 13.049,
        "around_planet": null,
        "eccentricity": 0.096,
        "aphelion": 517758230,
        "perihelion": 427401116,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2049.475,
        "picture": null,
        "moons": null
    },
    {
        "name": "(4179) Toutatis",
        "english_name": "4179 Toutatis",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 50,
            "mass_exponent": 12
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.446,
        "around_planet": null,
        "eccentricity": 0.635,
        "aphelion": 616914000,
        "perihelion": 137739000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1463.14,
        "picture": null,
        "moons": null
    },
    {
        "name": "(50000) Quaoar",
        "english_name": "50000 Quaoar",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 21
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 675,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 7.984,
        "around_planet": null,
        "eccentricity": 0.034,
        "aphelion": 6711620000,
        "perihelion": 6266487000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 104347.575,
        "picture": null,
        "moons": [
            {
                "moon": "Weywot",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/weywot"
            }
        ]
    },
    {
        "name": "(2867) Šteins",
        "english_name": "2867 Šteins",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 9.944,
        "around_planet": null,
        "eccentricity": 0.1463,
        "aphelion": 405132000,
        "perihelion": 30867000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1327.3582,
        "picture": null,
        "moons": null
    },
    {
        "name": "(136199) Éris",
        "english_name": "136199 Eris",
        "body_type": "Dwarf planet",
        "mass": {
            "mass_value": 1.66,
            "mass_exponent": 22
        },
        "density": 2.52,
        "gravity": 0.82,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1163,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 44.0445,
        "around_planet": null,
        "eccentricity": 0.44068,
        "aphelion": 14594512904,
        "perihelion": 5765732799,
        "arg_periapsis": 151.639,
        "sideral_rotation": 25.92,
        "sideral_orbit": 203830,
        "picture": null,
        "moons": [
            {
                "moon": "Dysnomie",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/dysnomie"
            }
        ]
    },
    {
        "name": "(5) Astrée",
        "english_name": "5 Astraea",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.2,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 59.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 5.37,
        "around_planet": null,
        "eccentricity": 0.193,
        "aphelion": 459245000,
        "perihelion": 310509000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1507.279,
        "picture": null,
        "moons": null
    },
    {
        "name": "(5145) Pholus",
        "english_name": "5145 Pholus",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 7.5,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 95,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.574,
        "aphelion": 4807509000,
        "perihelion": 1302945000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 33711,
        "picture": null,
        "moons": null
    },
    {
        "name": "(4769) Castalia",
        "english_name": "4769 Castalia",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.3,
            "mass_exponent": 12
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 8.886,
        "around_planet": null,
        "eccentricity": 0.483,
        "aphelion": 235916000,
        "perihelion": 82190000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 400.428,
        "picture": null,
        "moons": null
    },
    {
        "name": "Rémus",
        "english_name": "Remus",
        "body_type": "Moon",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 2,
        "around_planet": {
            "planet": "sylvia",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/sylvia"
        },
        "eccentricity": 0.016,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.37,
        "picture": null,
        "moons": null
    },
    {
        "name": "(624) Hector",
        "english_name": "624 Hektor",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.4,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 18.198,
        "around_planet": null,
        "eccentricity": 0.024,
        "aphelion": 800220000,
        "perihelion": 762145000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 4358.521,
        "picture": null,
        "moons": null
    },
    {
        "name": "(216) Kléopatra",
        "english_name": "216 Kleopatra",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 3,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 13.099,
        "around_planet": null,
        "eccentricity": 0.252,
        "aphelion": 523049000,
        "perihelion": 312544000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1707,
        "picture": null,
        "moons": [
            {
                "moon": "Alexhélios",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/alexhelios"
            },
            {
                "moon": "Cléoséléné",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/cleoselene"
            }
        ]
    },
    {
        "name": "(3753) Cruithne",
        "english_name": "3753 Cruithne",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.3,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 19.807,
        "around_planet": null,
        "eccentricity": 0.515,
        "aphelion": 226104000,
        "perihelion": 72415000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 364.019,
        "picture": null,
        "moons": null
    },
    {
        "name": "(3) Junon",
        "english_name": "3 Juno",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.82,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 120,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 12.963,
        "around_planet": null,
        "eccentricity": 0.2568,
        "aphelion": 502080000,
        "perihelion": 328870000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1593.926,
        "picture": null,
        "moons": null
    },
    {
        "name": "(10) Hygie",
        "english_name": "10 Hygiea",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 20
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 203.6,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 3.83,
        "around_planet": null,
        "eccentricity": 0.119,
        "aphelion": 525311000,
        "perihelion": 413378000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2029.776,
        "picture": null,
        "moons": null
    },
    {
        "name": "(21) Lutetia",
        "english_name": "21 Lutetia",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.7,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 42.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 3.064,
        "around_planet": null,
        "eccentricity": 0.164,
        "aphelion": 423955000,
        "perihelion": 304600000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1387.902,
        "picture": null,
        "moons": null
    },
    {
        "name": "(253) Mathilde",
        "english_name": "253 Mathilde",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.03,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 6.738,
        "around_planet": null,
        "eccentricity": 0.266,
        "aphelion": 501170000,
        "perihelion": 290640000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1572.491,
        "picture": null,
        "moons": null
    },
    {
        "name": "Uranus",
        "english_name": "Uranus",
        "body_type": "Gas giant",
        "mass": {
            "mass_value": 8.68127,
            "mass_exponent": 25
        },
        "density": 1.27,
        "gravity": 8.87,
        "axial_tilt": 97.77,
        "equa_radius": 25559,
        "mean_radius": 25362,
        "polar_radius": 24973,
        "flattening": 0.02293,
        "inclination": 0.772,
        "around_planet": null,
        "eccentricity": 0.0457,
        "aphelion": 3006318143,
        "perihelion": 2734998229,
        "arg_periapsis": 98.862,
        "sideral_rotation": -17.24,
        "sideral_orbit": 30685.4,
        "picture": null,
        "moons": [
            {
                "moon": "Ariel",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ariel"
            },
            {
                "moon": "Umbriel",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/umbriel"
            },
            {
                "moon": "Titania",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/titania"
            },
            {
                "moon": "Obéron",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/oberon"
            },
            {
                "moon": "Miranda",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/miranda"
            },
            {
                "moon": "Cordélia",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/cordelia"
            },
            {
                "moon": "Ophélie",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ophelia"
            },
            {
                "moon": "Bianca",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/bianca"
            },
            {
                "moon": "Cressida",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/cressida"
            },
            {
                "moon": "Desdémone",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/desdemona"
            },
            {
                "moon": "Juliette",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/juliet"
            },
            {
                "moon": "Portia",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/portia"
            },
            {
                "moon": "Rosalinde",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/rosalind"
            },
            {
                "moon": "Belinda",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/belinda"
            },
            {
                "moon": "Puck",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/puck"
            },
            {
                "moon": "Caliban",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/caliban"
            },
            {
                "moon": "Sycorax",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/sycorax"
            },
            {
                "moon": "Prospero",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/prospero"
            },
            {
                "moon": "Setebos",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/setebos"
            },
            {
                "moon": "Stephano",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/stephano"
            },
            {
                "moon": "Trinculo",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/trinculo"
            },
            {
                "moon": "Francisco",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/francisco"
            },
            {
                "moon": "Margaret",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/margaret"
            },
            {
                "moon": "Ferdinand",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ferdinand"
            },
            {
                "moon": "Perdita",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/perdita"
            },
            {
                "moon": "Mab",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/mab"
            },
            {
                "moon": "Cupid",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/cupid"
            }
        ]
    },
    {
        "name": "(7) Iris",
        "english_name": "7 Iris",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 8.4,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 100,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 5.523,
        "around_planet": null,
        "eccentricity": 0.23,
        "aphelion": 439310000,
        "perihelion": 274729000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1346.628,
        "picture": null,
        "moons": null
    },
    {
        "name": "(433) Éros",
        "english_name": "433 Eros",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 7.2,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 10.8294,
        "around_planet": null,
        "eccentricity": 0.2229,
        "aphelion": 266762000,
        "perihelion": 169548000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 643.219,
        "picture": null,
        "moons": null
    },
    {
        "name": "Vanth",
        "english_name": "Vanth",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3.6,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 434,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 105.03,
        "around_planet": {
            "planet": "orcus",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/orcus"
        },
        "eccentricity": 0.0009,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 9.539,
        "picture": null,
        "moons": null
    },
    {
        "name": "(90377) Sedna",
        "english_name": "90377 Sedna",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 21
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 497,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 11.932,
        "around_planet": null,
        "eccentricity": 0.85,
        "aphelion": 139941508000,
        "perihelion": 11378031000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 4154395,
        "picture": null,
        "moons": null
    },
    {
        "name": "(10199) Chariklo",
        "english_name": "10199 Chariklo",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 248,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 23.3737,
        "around_planet": null,
        "eccentricity": 0.1759,
        "aphelion": 2799000000,
        "perihelion": 1962000000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 23084,
        "picture": null,
        "moons": null
    },
    {
        "name": "(87) Sylvia",
        "english_name": "87 Sylvia",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.478,
            "mass_exponent": 19
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 10.856,
        "around_planet": null,
        "eccentricity": 0.08,
        "aphelion": 563729000,
        "perihelion": 48540000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2381.639,
        "picture": null,
        "moons": [
            {
                "moon": "Rémus",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/remus"
            },
            {
                "moon": "Romulus",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/romulus"
            }
        ]
    },
    {
        "name": "Dactyl",
        "english_name": "(243) Ida I Dactyl",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 8,
        "around_planet": {
            "planet": "ida",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/ida"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.54,
        "picture": null,
        "moons": null
    },
    {
        "name": "(90482) Orcus",
        "english_name": "90482 Orcus",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 7,
            "mass_exponent": 20
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 473,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 20.593,
        "around_planet": null,
        "eccentricity": 0.2262,
        "aphelion": 7188170000,
        "perihelion": 4535800000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 89606,
        "picture": null,
        "moons": [
            {
                "moon": "Vanth",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/vanth"
            }
        ]
    },
    {
        "name": "Pluton",
        "english_name": "Pluto",
        "body_type": "Dwarf planet",
        "mass": {
            "mass_value": 1.303,
            "mass_exponent": 22
        },
        "density": 1.89,
        "gravity": 0.62,
        "axial_tilt": 122.5,
        "equa_radius": 1188.3,
        "mean_radius": 1188.3,
        "polar_radius": 1195,
        "flattening": 0,
        "inclination": 17.16,
        "around_planet": null,
        "eccentricity": 0.2488,
        "aphelion": 7376124302,
        "perihelion": 4436756954,
        "arg_periapsis": 113.175,
        "sideral_rotation": -153.2928,
        "sideral_orbit": 90465,
        "picture": null,
        "moons": [
            {
                "moon": "Charon",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/charon"
            },
            {
                "moon": "Nix",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/nix"
            },
            {
                "moon": "Hydra",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hydra"
            },
            {
                "moon": "Kerberos",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/kerberos"
            },
            {
                "moon": "Styx",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/styx"
            }
        ]
    },
    {
        "name": "(5335) Damoclès",
        "english_name": "5335 Damocles",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.87,
        "aphelion": 3304500000,
        "perihelion": 236400000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 14880.9,
        "picture": null,
        "moons": null
    },
    {
        "name": "Romulus",
        "english_name": "Romulus",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 10.8,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.7,
        "around_planet": {
            "planet": "sylvia",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/sylvia"
        },
        "eccentricity": 0.0069,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 3.6496,
        "picture": null,
        "moons": null
    },
    {
        "name": "Alexhélios",
        "english_name": "Alexhelios",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 6.9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "kleopatra",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/kleopatra"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 2.3,
        "picture": null,
        "moons": null
    },
    {
        "name": "Cléoséléné",
        "english_name": "Cleoselene",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 8.9,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "kleopatra",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/kleopatra"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "(8) Flore",
        "english_name": "8 Flora",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.6,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 67.7,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 5.887,
        "around_planet": null,
        "eccentricity": 0.156,
        "aphelion": 380821000,
        "perihelion": 277806000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1192.956,
        "picture": null,
        "moons": null
    },
    {
        "name": "(2060) Chiron",
        "english_name": "2060 Chiron",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 83,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 6.935,
        "around_planet": null,
        "eccentricity": 0.382,
        "aphelion": 2822659000,
        "perihelion": 1262646000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 18429,
        "picture": null,
        "moons": null
    },
    {
        "name": "(5261) Eurêka",
        "english_name": "5261 Eureka",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.065,
        "aphelion": 242684000,
        "perihelion": 213132000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 686.829,
        "picture": null,
        "moons": null
    },
    {
        "name": "(588) Achille",
        "english_name": "588 Achilles",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.6,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 67.8,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 10.324,
        "around_planet": null,
        "eccentricity": 0.147,
        "aphelion": 890944000,
        "perihelion": 662395000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 4320.803,
        "picture": null,
        "moons": null
    },
    {
        "name": "Weywot",
        "english_name": "Weywot",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 170,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 14,
        "around_planet": {
            "planet": "quaoar",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/quaoar"
        },
        "eccentricity": 0.148,
        "aphelion": 16530,
        "perihelion": 12470,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 12.438,
        "picture": null,
        "moons": null
    },
    {
        "name": "(28978) Ixion",
        "english_name": "28978 Ixion",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.3,
            "mass_exponent": 20
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 379.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 19.621,
        "around_planet": null,
        "eccentricity": 0.241,
        "aphelion": 7337896000,
        "perihelion": 4483896000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 90717,
        "picture": null,
        "moons": null
    },
    {
        "name": "Neptune",
        "english_name": "Neptune",
        "body_type": "Gas giant",
        "mass": {
            "mass_value": 1.02413,
            "mass_exponent": 26
        },
        "density": 1.638,
        "gravity": 11.15,
        "axial_tilt": 28.3,
        "equa_radius": 24764,
        "mean_radius": 24622,
        "polar_radius": 24341,
        "flattening": 0.01708,
        "inclination": 1.769,
        "around_planet": null,
        "eccentricity": 0.0113,
        "aphelion": 4537039826,
        "perihelion": 4459753056,
        "arg_periapsis": 256.932,
        "sideral_rotation": 16.11,
        "sideral_orbit": 60189,
        "picture": null,
        "moons": [
            {
                "moon": "Triton",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/triton"
            },
            {
                "moon": "Néreïde",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/nereide"
            },
            {
                "moon": "Naïade",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/naiade"
            },
            {
                "moon": "Thalassa",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/thalassa"
            },
            {
                "moon": "Despina",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/despina"
            },
            {
                "moon": "Galatée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/galatee"
            },
            {
                "moon": "Larissa",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/larissa"
            },
            {
                "moon": "Protée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/protee"
            },
            {
                "moon": "Halimède",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/halimede"
            },
            {
                "moon": "Psamathée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/psamathee"
            },
            {
                "moon": "Sao",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/sao"
            },
            {
                "moon": "Laomédie",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/laomedie"
            },
            {
                "moon": "Néso",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/neso"
            },
            {
                "moon": "Hippocampe",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hippocampe"
            }
        ]
    },
    {
        "name": "Shoemaker-Levy 9",
        "english_name": "Shoemaker-Levy 9",
        "body_type": "Comet",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 94.2,
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
        "name": "(9) Métis",
        "english_name": "9 Metis",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 4.6,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 5.576,
        "around_planet": null,
        "eccentricity": 0.122,
        "aphelion": 400548000,
        "perihelion": 313556000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1346.815,
        "picture": null,
        "moons": null
    },
    {
        "name": "(136108) Hauméa",
        "english_name": "136108 Haumea",
        "body_type": "Dwarf planet",
        "mass": {
            "mass_value": 4.006,
            "mass_exponent": 21
        },
        "density": 2.6,
        "gravity": 0.401,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 498,
        "flattening": 0.6102,
        "inclination": 28.19,
        "around_planet": null,
        "eccentricity": 0.19126,
        "aphelion": 7706399149,
        "perihelion": 5157623774,
        "arg_periapsis": 239.041,
        "sideral_rotation": 3.92,
        "sideral_orbit": 103774,
        "picture": null,
        "moons": [
            {
                "moon": "Namaka",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/namaka"
            },
            {
                "moon": "Hi'iaka",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hiiaka"
            }
        ]
    },
    {
        "name": "(7066) Nessus",
        "english_name": "7066 Nessus",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.5203,
        "aphelion": 608000000,
        "perihelion": 1769000000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 44561,
        "picture": null,
        "moons": null
    },
    {
        "name": "(25143) Itokawa",
        "english_name": "25143 Itokawa",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 3.5,
            "mass_exponent": 10
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.622,
        "around_planet": null,
        "eccentricity": 0.2801,
        "aphelion": 253520000,
        "perihelion": 142500000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 556.38,
        "picture": null,
        "moons": null
    },
    {
        "name": "(10370) Hylonome",
        "english_name": "10370 Hylonome",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 70,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 4.141,
        "around_planet": null,
        "eccentricity": 0.2504,
        "aphelion": 4725000000,
        "perihelion": 2832000000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 44561,
        "picture": null,
        "moons": null
    },
    {
        "name": "(45) Eugénie",
        "english_name": "45 Eugenia",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 6.21,
            "mass_exponent": 18
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 107.3,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 6.61,
        "around_planet": null,
        "eccentricity": 0.082,
        "aphelion": 440383000,
        "perihelion": 373484000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1638.654,
        "picture": null,
        "moons": [
            {
                "moon": "Petit-Prince",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/petitprince"
            }
        ]
    },
    {
        "name": "(308933) 2006 SQ372",
        "english_name": "(308933) 2006 SQ372",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 55,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 19.46,
        "around_planet": null,
        "eccentricity": 0.976,
        "aphelion": 218565300000,
        "perihelion": 3616000000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 11800000,
        "picture": null,
        "moons": null
    },
    {
        "name": "(2) Pallas",
        "english_name": "2 Pallas",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.11,
            "mass_exponent": 20
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 545,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.231,
        "aphelion": 510077000,
        "perihelion": 319358000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1685.927,
        "picture": null,
        "moons": null
    },
    {
        "name": "(8405) Asbolus",
        "english_name": "8405 Asbolus",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 33,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 17.63807,
        "around_planet": null,
        "eccentricity": 0.6194,
        "aphelion": 4362000000,
        "perihelion": 1025000000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 27796,
        "picture": null,
        "moons": null
    },
    {
        "name": "(20000) Varuna",
        "english_name": "20000 Varuna",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1.55,
            "mass_exponent": 20
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 330,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 17.158,
        "around_planet": null,
        "eccentricity": 0.051,
        "aphelion": 6781985000,
        "perihelion": 6120810000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 103440,
        "picture": null,
        "moons": null
    },
    {
        "name": "(4) Vesta",
        "english_name": "4 Vesta",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 2.7,
            "mass_exponent": 20
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 265,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 7.1337,
        "around_planet": null,
        "eccentricity": 0.0893,
        "aphelion": 384920000,
        "perihelion": 321767000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1325.886,
        "picture": null,
        "moons": null
    },
    {
        "name": "(243) Ida",
        "english_name": "243 Ida",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 1.138,
        "around_planet": null,
        "eccentricity": 0.046,
        "aphelion": 447837000,
        "perihelion": 408162000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1767.564,
        "picture": null,
        "moons": [
            {
                "moon": "Dactyl",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/dactyl"
            }
        ]
    },
    {
        "name": "Hyakutake",
        "english_name": "Comet Hyakutake",
        "body_type": "Comet",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 4.2,
        "polar_radius": 0,
        "flattening": 0,
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
        "name": "(951) Gaspra",
        "english_name": "951 Gaspra",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 1,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 4.102,
        "around_planet": null,
        "eccentricity": 0.174,
        "aphelion": 388047000,
        "perihelion": 272979000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1199.479,
        "picture": null,
        "moons": null
    },
    {
        "name": "(15760) Albion",
        "english_name": "15760 Albion",
        "body_type": "Asteroid",
        "mass": {
            "mass_value": 9,
            "mass_exponent": 17
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 60,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 2.195,
        "around_planet": null,
        "eccentricity": 0.066,
        "aphelion": 6977613000,
        "perihelion": 6117144000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 105757,
        "picture": null,
        "moons": null
    },
    {
        "name": "(136472) Makémaké",
        "english_name": "136472 Makemake",
        "body_type": "Dwarf planet",
        "mass": {
            "mass_value": 4.4,
            "mass_exponent": 21
        },
        "density": 1.4,
        "gravity": 0.5,
        "axial_tilt": 0,
        "equa_radius": 745,
        "mean_radius": 725,
        "polar_radius": 715,
        "flattening": 0.05,
        "inclination": 29.00685,
        "around_planet": null,
        "eccentricity": 0.15586,
        "aphelion": 7894762625,
        "perihelion": 5671928586,
        "arg_periapsis": 294.834,
        "sideral_rotation": 0,
        "sideral_orbit": 112897,
        "picture": null,
        "moons": [
            {
                "moon": "S/2015 (136472) 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/mk2"
            }
        ]
    },
    {
        "name": "Comète de Halley",
        "english_name": "Halley's Comet",
        "body_type": "Comet",
        "mass": {
            "mass_value": 2.2,
            "mass_exponent": 14
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 15,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": null,
        "eccentricity": 0.96727,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "Jupiter",
        "english_name": "Jupiter",
        "body_type": "Gas giant",
        "mass": {
            "mass_value": 1.89819,
            "mass_exponent": 27
        },
        "density": 1.3262,
        "gravity": 24.79,
        "axial_tilt": 3.12,
        "equa_radius": 71492,
        "mean_radius": 69911,
        "polar_radius": 66854,
        "flattening": 0.06487,
        "inclination": 1.304,
        "around_planet": null,
        "eccentricity": 0.0489,
        "aphelion": 816620000,
        "perihelion": 740379835,
        "arg_periapsis": 273.442,
        "sideral_rotation": 9.925,
        "sideral_orbit": 4332.589,
        "picture": null,
        "moons": [
            {
                "moon": "Io",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/io"
            },
            {
                "moon": "Europe",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/europe"
            },
            {
                "moon": "Ganymède",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ganymede"
            },
            {
                "moon": "Callisto",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/callisto"
            },
            {
                "moon": "Amalthée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/amalthee"
            },
            {
                "moon": "Himalia",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/himalia"
            },
            {
                "moon": "Élara",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/elara"
            },
            {
                "moon": "Pasiphaé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pasiphae"
            },
            {
                "moon": "Sinopé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/sinope"
            },
            {
                "moon": "Lysithéa",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/lysithea"
            },
            {
                "moon": "Carmé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/carme"
            },
            {
                "moon": "Ananké",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ananke"
            },
            {
                "moon": "Léda",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/leda"
            },
            {
                "moon": "Thébé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/thebe"
            },
            {
                "moon": "Adrastée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/adrastee"
            },
            {
                "moon": "Métis",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/metis"
            },
            {
                "moon": "Callirrhoé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/callirrhoe"
            },
            {
                "moon": "Thémisto",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/themisto"
            },
            {
                "moon": "Mégaclité",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/megaclite"
            },
            {
                "moon": "Taygété",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/taygete"
            },
            {
                "moon": "Chaldéné",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/chaldene"
            },
            {
                "moon": "Harpalyké",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/harpalyke"
            },
            {
                "moon": "Kalyké",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/kalyke"
            },
            {
                "moon": "Iocasté",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/iocaste"
            },
            {
                "moon": "Erinomé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/erinome"
            },
            {
                "moon": "Isonoé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/isonoe"
            },
            {
                "moon": "Praxidyké",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/praxidike"
            },
            {
                "moon": "Autonoé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/autonoe"
            },
            {
                "moon": "Thyoné",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/thyone"
            },
            {
                "moon": "Hermippé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hermippe"
            },
            {
                "moon": "Aitné",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/aitne"
            },
            {
                "moon": "Eurydomé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/eurydome"
            },
            {
                "moon": "Euanthé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/euanthe"
            },
            {
                "moon": "Euporie",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/euporie"
            },
            {
                "moon": "Orthosie",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/orthosie"
            },
            {
                "moon": "Spondé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/sponde"
            },
            {
                "moon": "Calé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/cale"
            },
            {
                "moon": "Pasithée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pasithee"
            },
            {
                "moon": "Hégémone",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hegemone"
            },
            {
                "moon": "Mnémé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/mneme"
            },
            {
                "moon": "Aoedé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/aoede"
            },
            {
                "moon": "Thelxinoé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/thelxinoe"
            },
            {
                "moon": "Arché",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/arche"
            },
            {
                "moon": "Callichore",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/callichore"
            },
            {
                "moon": "Hélicé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/helice"
            },
            {
                "moon": "Carpo",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/carpo"
            },
            {
                "moon": "Eukéladé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/eukelade"
            },
            {
                "moon": "Cyllène",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/cyllene"
            },
            {
                "moon": "Coré",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/core"
            },
            {
                "moon": "Hersé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/herse"
            },
            {
                "moon": "S/2003 J 2",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j2"
            },
            {
                "moon": "Euphémé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/eupheme"
            },
            {
                "moon": "S/2003 J 4",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j4"
            },
            {
                "moon": "Eiréné",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/eirene"
            },
            {
                "moon": "S/2003 J 9",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j9"
            },
            {
                "moon": "S/2003 J 10",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j10"
            },
            {
                "moon": "S/2003 J 12",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j12"
            },
            {
                "moon": "Philophrosyne",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/philophrosyne"
            },
            {
                "moon": "S/2003 J 16",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j16"
            },
            {
                "moon": "S/2003 J 18",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j18"
            },
            {
                "moon": "S/2003 J 19",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j19"
            },
            {
                "moon": "S/2003 J 23",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j23"
            },
            {
                "moon": "Dia",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/dia"
            },
            {
                "moon": "S/2010 J 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2010j1"
            },
            {
                "moon": "S/2010 J 2",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2010j2"
            },
            {
                "moon": "S/2011 J 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2011j1"
            },
            {
                "moon": "S/2011 J 2",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2011j2"
            },
            {
                "moon": "S/2017 J 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j1"
            },
            {
                "moon": "S/2016 J 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2016j1"
            },
            {
                "moon": "Valétudo",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/valetudo"
            },
            {
                "moon": "S/2017 J 2",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j2"
            },
            {
                "moon": "S/2017 J 3",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j3"
            },
            {
                "moon": "Pandia",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pandia"
            },
            {
                "moon": "S/2017 J 5",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j5"
            },
            {
                "moon": "S/2017 J 6",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j6"
            },
            {
                "moon": "S/2017 J 7",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j7"
            },
            {
                "moon": "S/2017 J 8",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j8"
            },
            {
                "moon": "S/2017 J 9",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2017j9"
            },
            {
                "moon": "Ersa",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ersa"
            },
            {
                "moon": "S/2003 J 24",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2003j24"
            }
        ]
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
        "name": "Saturne",
        "english_name": "Saturn",
        "body_type": "Gas giant",
        "mass": {
            "mass_value": 5.68336,
            "mass_exponent": 26
        },
        "density": 0.6871,
        "gravity": 10.44,
        "axial_tilt": 26.73,
        "equa_radius": 60268,
        "mean_radius": 58232,
        "polar_radius": 54364,
        "flattening": 0.09796,
        "inclination": 2.485,
        "around_planet": null,
        "eccentricity": 0.0565,
        "aphelion": 1503509229,
        "perihelion": 1349823615,
        "arg_periapsis": 336.178,
        "sideral_rotation": 10.656,
        "sideral_orbit": 10759.22,
        "picture": null,
        "moons": [
            {
                "moon": "Mimas",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/mimas"
            },
            {
                "moon": "Encelade",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/encelade"
            },
            {
                "moon": "Téthys",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/tethys"
            },
            {
                "moon": "Dioné",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/dione"
            },
            {
                "moon": "Rhéa",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/rhea"
            },
            {
                "moon": "Titan",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/titan"
            },
            {
                "moon": "Hypérion",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hyperion"
            },
            {
                "moon": "Japet",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/japet"
            },
            {
                "moon": "Phœbé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/phoebe"
            },
            {
                "moon": "Janus",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/janus"
            },
            {
                "moon": "Epiméthée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/epimethee"
            },
            {
                "moon": "Hélène",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/helene"
            },
            {
                "moon": "Télesto",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/telesto"
            },
            {
                "moon": "Calypso",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/calypso"
            },
            {
                "moon": "Atlas",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/atlas"
            },
            {
                "moon": "Prométhée",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/promethee"
            },
            {
                "moon": "Pandore",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pandore"
            },
            {
                "moon": "Pan",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pan"
            },
            {
                "moon": "Ymir",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ymir"
            },
            {
                "moon": "Paaliaq",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/paaliaq"
            },
            {
                "moon": "Tarvos",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/tarvos"
            },
            {
                "moon": "Ijiraq",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/ijiraq"
            },
            {
                "moon": "Suttungr",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/suttungr"
            },
            {
                "moon": "Kiviuq",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/kiviuq"
            },
            {
                "moon": "Mundilfari",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/mundilfari"
            },
            {
                "moon": "Albiorix",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/albiorix"
            },
            {
                "moon": "Skathi",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/skathi"
            },
            {
                "moon": "Erriapo",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/erriapo"
            },
            {
                "moon": "Siarnaq",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/siarnaq"
            },
            {
                "moon": "Thrymr",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/thrymr"
            },
            {
                "moon": "Narvi",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/narvi"
            },
            {
                "moon": "Méthone",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/methone"
            },
            {
                "moon": "Pallène",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pallene"
            },
            {
                "moon": "Pollux",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/pollux"
            },
            {
                "moon": "Daphnis",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/daphnis"
            },
            {
                "moon": "Aegir",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/aegir"
            },
            {
                "moon": "Bebhionn",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/bebhionn"
            },
            {
                "moon": "Bergelmir",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/bergelmir"
            },
            {
                "moon": "Bestla",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/bestla"
            },
            {
                "moon": "Farbauti",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/farbauti"
            },
            {
                "moon": "Fenrir",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/fenrir"
            },
            {
                "moon": "Fornjot",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/fornjot"
            },
            {
                "moon": "Hati",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hati"
            },
            {
                "moon": "Hyrrokkin",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/hyrrokkin"
            },
            {
                "moon": "Kari",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/kari"
            },
            {
                "moon": "Loge",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/loge"
            },
            {
                "moon": "Skoll",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/skoll"
            },
            {
                "moon": "Surtur",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/surtur"
            },
            {
                "moon": "Anthé",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/anthe"
            },
            {
                "moon": "Jarnsaxa",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/jarnsaxa"
            },
            {
                "moon": "Greip",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/greip"
            },
            {
                "moon": "Tarqeq",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/tarqeq"
            },
            {
                "moon": "Égéon",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/egeon"
            },
            {
                "moon": "S/2004 S 7",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s7"
            },
            {
                "moon": "S/2004 S 12",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s12"
            },
            {
                "moon": "S/2004 S 13",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s13"
            },
            {
                "moon": "S/2004 S 17",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s17"
            },
            {
                "moon": "S/2006 S 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2006s1"
            },
            {
                "moon": "S/2006 S 3",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2006s3"
            },
            {
                "moon": "S/2007 S 2",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2007s2"
            },
            {
                "moon": "S/2007 S 3",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2007s3"
            },
            {
                "moon": "S/2009 S 1",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2009s1"
            },
            {
                "moon": "S/2004 S 22",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s22"
            },
            {
                "moon": "S/2004 S 21",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s21"
            },
            {
                "moon": "S/2004 S 20",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s20"
            },
            {
                "moon": "S/2004 S 23",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s23"
            },
            {
                "moon": "S/2004 S 24",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s24"
            },
            {
                "moon": "S/2004 S 25",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s25"
            },
            {
                "moon": "S/2004 S 26",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s26"
            },
            {
                "moon": "S/2004 S 27",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s27"
            },
            {
                "moon": "S/2004 S 28",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s28"
            },
            {
                "moon": "S/2004 S 29",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s29"
            },
            {
                "moon": "S/2004 S 30",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s30"
            },
            {
                "moon": "S/2004 S 31",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s31"
            },
            {
                "moon": "S/2004 S 32",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s32"
            },
            {
                "moon": "S/2004 S 33",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s33"
            },
            {
                "moon": "S/2004 S 34",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s34"
            },
            {
                "moon": "S/2004 S 35",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s35"
            },
            {
                "moon": "S/2004 S 36",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s36"
            },
            {
                "moon": "S/2004 S 37",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s37"
            },
            {
                "moon": "S/2004 S 38",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s38"
            },
            {
                "moon": "S/2004 S 39",
                "rel": "https://api.le-systeme-solaire.net/rest/bodies/s2004s39"
            }
        ]
    },
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
        "name": "Kerberos",
        "english_name": "Kerberos",
        "body_type": "Moon",
        "mass": {
            "mass_value": 1.64,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 25,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.389,
        "around_planet": {
            "planet": "pluton",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/pluton"
        },
        "eccentricity": 0.003,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 32.167,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2011 J 1",
        "english_name": "S/2011 J 1",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 162.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.296,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 580.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2011 J 2",
        "english_name": "S/2011 J 2",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 148.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.332,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 726.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "Styx",
        "english_name": "Styx",
        "body_type": "Moon",
        "mass": {
            "mass_value": 7.5,
            "mass_exponent": 15
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 20,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0.809,
        "around_planet": {
            "planet": "pluton",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/pluton"
        },
        "eccentricity": 0.005,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 20.16,
        "picture": null,
        "moons": null
    },
    {
        "name": "Hippocampe",
        "english_name": "Hippocamp",
        "body_type": "Moon",
        "mass": {
            "mass_value": 3,
            "mass_exponent": 16
        },
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 17,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "neptune",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/neptune"
        },
        "eccentricity": 0,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0.95,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2015 (136472) 1",
        "english_name": "S/2015 (136472) 1",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 75,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "makemake",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/makemake"
        },
        "eccentricity": 0,
        "aphelion": 300000,
        "perihelion": 21100,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 12.4,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 1",
        "english_name": "S/2017 J 1",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 149.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.397,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 734.2,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2016 J 1",
        "english_name": "S/2016 J 1",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 139.8,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.141,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 602.7,
        "picture": null,
        "moons": null
    },
    {
        "name": "Valétudo",
        "english_name": "Valetudo",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 34,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.222,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 533,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 2",
        "english_name": "S/2017 J 2",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 166.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.236,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 723,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 3",
        "english_name": "S/2017 J 3",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 147.9,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.148,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 606,
        "picture": null,
        "moons": null
    },
    {
        "name": "Pandia",
        "english_name": "Pandia",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 28.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.18,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 252,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 5",
        "english_name": "S/2017 J 5",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.3,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.284,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 719,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 6",
        "english_name": "S/2017 J 6",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 155.2,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.557,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 683,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 7",
        "english_name": "S/2017 J 7",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 143.4,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.215,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 603,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 8",
        "english_name": "S/2017 J 8",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164.7,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.312,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 720,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2017 J 9",
        "english_name": "S/2017 J 9",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 152.7,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.229,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 639,
        "picture": null,
        "moons": null
    },
    {
        "name": "Ersa",
        "english_name": "Ersa",
        "body_type": "Moon",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 30.6,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.094,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 252,
        "picture": null,
        "moons": null
    },
    {
        "name": "(486958) Arrokoth",
        "english_name": "Arrokoth",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 2.4533,
        "around_planet": null,
        "eccentricity": 0.0461,
        "aphelion": 6879000000,
        "perihelion": 6387800000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 107847,
        "picture": null,
        "moons": null
    },
    {
        "name": "(101955) Bénou",
        "english_name": "101955 Bennu",
        "body_type": "Asteroid",
        "mass": null,
        "density": 1,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 250,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 6.035,
        "around_planet": null,
        "eccentricity": 0.204,
        "aphelion": 202900000,
        "perihelion": 134200000,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 436.604,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 22",
        "english_name": "S/2004 S 22",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 177.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.257,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 21",
        "english_name": "S/2004 S 21",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 154.6,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.312,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 20",
        "english_name": "S/2004 S 20",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 163.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.204,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 23",
        "english_name": "S/2004 S 23",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 177.7,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.399,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 24",
        "english_name": "S/2004 S 24",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 36.78,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.049,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 1317.6,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 25",
        "english_name": "S/2004 S 25",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 173.3,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.457,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 26",
        "english_name": "S/2004 S 26",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 171.3,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.148,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 27",
        "english_name": "S/2004 S 27",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 167.1,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.12,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 28",
        "english_name": "S/2004 S 28",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 171,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.133,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 29",
        "english_name": "S/2004 S 29",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 44.43,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.472,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 858.77,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 30",
        "english_name": "S/2004 S 30",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 156.3,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.113,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 31",
        "english_name": "S/2004 S 31",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 48.11,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.242,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 853.8,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 32",
        "english_name": "S/2004 S 32",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 158.5,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.262,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 33",
        "english_name": "S/2004 S 33",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 161.5,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.417,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 34",
        "english_name": "S/2004 S 34",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 165.7,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.267,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 35",
        "english_name": "S/2004 S 35",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 176.4,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.182,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 36",
        "english_name": "S/2004 S 36",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1.5,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 147.6,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.667,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 37",
        "english_name": "S/2004 S 37",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 164,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.506,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 38",
        "english_name": "S/2004 S 38",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 2,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 155,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.381,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2004 S 39",
        "english_name": "S/2004 S 39",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 1,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 167.6,
        "around_planet": {
            "planet": "saturne",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/saturne"
        },
        "eccentricity": 0.081,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    },
    {
        "name": "C/2020 F3 (NEOWISE)",
        "english_name": "C/2020 F3 (NEOWISE)",
        "body_type": "Comet",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 128.93,
        "around_planet": null,
        "eccentricity": 0.99921,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 6800,
        "picture": null,
        "moons": null
    },
    {
        "name": "S/2003 J 24",
        "english_name": "S/2003 J 24",
        "body_type": "Moon",
        "mass": null,
        "density": 0,
        "gravity": 0,
        "axial_tilt": 0,
        "equa_radius": 0,
        "mean_radius": 0,
        "polar_radius": 0,
        "flattening": 0,
        "inclination": 0,
        "around_planet": {
            "planet": "jupiter",
            "rel": "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        },
        "eccentricity": 0.25,
        "aphelion": 0,
        "perihelion": 0,
        "arg_periapsis": 0,
        "sideral_rotation": 0,
        "sideral_orbit": 0,
        "picture": null,
        "moons": null
    }
]



module.exports = bodies