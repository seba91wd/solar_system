export function tbody_update(response) {

    // Ordre des données dans le tableau "tbody" (colonnes)
    const table_headers = [
        "id", "name", "english_name", "body_type", "mass", "density", "gravity",
        "axial_tilt", "equa_radius", "mean_radius", "polar_radius", "flattening",
        "inclination", "around_planet", "eccentricity", "aphelion", "perihelion",
        "arg_periapsis", "sideral_rotation", "sideral_orbit", "picture", "moons"
    ];

    // Tableau de donnée
    const tbody = document.querySelector('tbody');
    // Nettoyage du tableau
    tbody.innerHTML = "";

    // Parcours de tous les objets dans le tableau 'data'
    response.data.forEach(item => {
        const row = document.createElement('tr');
        const typeClass = item.body_type.replace(/\s+/g, '_'); // Remplace les espaces par des underscores
        row.classList.add(typeClass.toLowerCase()); // Ajoute la classe du type de corps céleste à la ligne

        // Parcours des en-têtes de colonne pour maintenir l'ordre
        table_headers.forEach(header => {
            const cell = document.createElement('td');
            // Traitement des lunes du corps
            if (header === "moons") {
                // Si l'objet possède une lune
                if (item.moons && Array.isArray(item.moons)) {
                    // On affiche les noms des lunes séparées par une virgule
                    const moonNames = item.moons.map(moon => moon.moon).join(", ");
                    cell.textContent = moonNames;
                }
                // Sinon null
                else {
                    cell.textContent = "NULL";
                }
            } else {
                // Pour les autres colonnes, utilisez simplement la valeur de la propriété
                cell.textContent = item[header];
            }
            row.appendChild(cell);
        });
        // Ajout de la ligne au tableau
        tbody.appendChild(row);
    });
}