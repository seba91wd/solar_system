// Type de planètes autorisé
const valide_types = ["Star", "Telluric planet", "Gas giant", "Dwarf planet", "Moon", "Asteroid", "Comet"];

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('bodie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Une planète porte deja ce nom."
            },
            validate: {
                notEmpty: { msg: "Le nom du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le nom du corps céleste est une propriété requise." }
            }
        },
        english_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Une planète porte deja ce nom."
            },
            validate: {
                notEmpty: { msg: "Le nom du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le nom du corps céleste est une propriété requise." }
            }
        },
        body_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Validateur personnalisé
                is_type_valide(value) {
                    if (!value) {
                        throw new Error('Le type de corps céleste est une propriété requise');
                    };
                    if (!valide_types.includes(value)) {
                        throw new Error(`Le type de corps céleste doit apartenir à la liste suivante : ${valide_types}`);
                    };
                }
            }
        },
        mass: {
            type: DataTypes.STRING,
            allowNull: true,
            set(mass) {
                if (mass === null) {
                    this.setDataValue('mass', null);
                }
                else {
                    const formatted_mass = `${mass.mass_value} x 10^${mass.mass_exponent} kg`;
                    this.setDataValue('mass', formatted_mass);
                }
            }
        },
        density: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La densité du corps céleste ne peut pas être vide." },
                min: {
                    args: [0],
                    msg: "La densité d'une planète ne peut pas ètre 0"
                },
                notNull: { msg: "Le densité du corps céleste est une propriété requise." }
            }
        },
        gravity: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La gravité du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le gravité du corps céleste est une propriété requise." }
            }
        },
        axial_tilt: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                notEmpty: { msg: "L'inclinaison axiale (axial tilt) du corps céleste ne peut pas être vide." },
            }
        },
        equa_radius: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le rayon équatorial du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le rayon équatorial du corps céleste est une propriété requise." }
            }
        },
        mean_radius: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le rayon moyen du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le rayon moyen du corps céleste est une propriété requise." }
            }
        },
        polar_radius: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le rayon polaire du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le rayon polaire du corps céleste est une propriété requise." }
            }
        },
        flattening: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'aplatissement du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'aplatissement du corps céleste est une propriété requise." }
            }
        },
        inclination: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'inclination du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'inclination du corps céleste est une propriété requise." }
            }
        },
        around_planet: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: { msg: "L'inclination du corps céleste ne peut pas être vide." },
            },
            set(around_planet) {
                // Setter : API Rest -> BDD
                if (around_planet !== null) {
                    this.setDataValue('around_planet', around_planet.planet);
                }
                else {
                    this.setDataValue('around_planet', null);
                }
            }
        },
        eccentricity: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'excentricité du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'excentricité du corps céleste est une propriété requise." }
            }
        },
        aphelion: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'aphelion du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'aphelion du corps céleste est une propriété requise." }
            }
        },
        perihelion: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le perihelion du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le perihelion du corps céleste est une propriété requise." }
            }
        },
        arg_periapsis: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'argument du périastre (arg_periapsis) du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'argument du périastre (arg_periapsis) du corps céleste est une propriété requise." }
            }
        },
        long_asc_node: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La longitude du nœud ascendant (long_asc_node) du corps céleste ne peut pas être vide." },
                notNull: { msg: "La longitude du nœud ascendant (long_asc_node) du corps céleste est une propriété requise." }
            }
        },
        semimajor_axis: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le demi-grand axe (semimajor_axis) du corps céleste ne peut pas être vide." },
                notNull: { msg: "Le demi-grand axe (semimajor_axis) du corps céleste est une propriété requise." }
            }
        },
        main_anomaly: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'anomalie moyenne (main_anomaly) du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'anomalie moyenne (main_anomaly) du corps céleste est une propriété requise." }
            }
        },
        sideral_rotation: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La rotation sideral du corps céleste ne peut pas être vide." },
                notNull: { msg: "La rotation sideral du corps céleste est une propriété requise." }
            }
        },
        sideral_orbit: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "L'orbit sideral du corps céleste ne peut pas être vide." },
                notNull: { msg: "L'orbit sideral du corps céleste est une propriété requise." }
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            set(picture) {
                // console.log(picture);
                if (picture !== null) {
                    picture = process.cwd() + picture; /* Ajout du chemin complet de l'image */
                    // console.log(picture);
                    this.setDataValue('picture', picture);
                }
                else {
                    this.setDataValue('picture', null);
                }
            }
        },
        moons: {
            type: DataTypes.STRING(10500),
            allowNull: true,
            get() {
                // Getter : BDD -> API Rest
                const moons_value = this.getDataValue('moons');

                if (typeof moons_value === 'string') { // Ajout de la vérification

                    const moons_array = JSON.parse(moons_value);
                    if (Array.isArray(moons_array)) {
                        // console.log(moons_array[0].moon);
                        if (moons_array[0].moon === null) {
                            return null;
                        } 
                        else {
                            // console.log(moons_array[0]);
                            return moons_array.map(moon => moon.moon);
                        }
                    }
                }
                return null;
            },
            set(moons) {
                // Setter : API Rest -> BDD
                if (Array.isArray(moons) && moons.length > 0) {
                    const moons_array = moons.map(moon => ({ moon, rel: '' }));
                    this.setDataValue('moons', JSON.stringify(moons_array));
                } 
                else {
                    this.setDataValue('moons', null);
                }
            }
        },
    }, {
        timestamps: false,
        // createdAt: false,
        // updatedAt: false
    });
};