// Importation de la bar de navigation
import { nav_bar } from "../nav_bar.js";
nav_bar();

document.addEventListener('DOMContentLoaded', () => {
    const login_form = document.getElementById('login_form');

    login_form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.querySelector('#message');

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();

            const expiration_date = new Date();
            expiration_date.setHours(expiration_date.getHours() + 1); // Ajoute 1 heure à l'heure actuelle

            // Créer le cookie pour stocker le token avec la durée de vie d'une heure
            document.cookie = `auth_token=${data.token}; expires=${expiration_date.toUTCString()}; path=/;`;

            // Afficher le message d'authentification dans le navigateur
            message.textContent = data.message + ", redirection ...";

            // Redirection vers /exploration_api
            setTimeout(() => {
                window.location.href = "/exploration_api";
            }, 3000);
        } else {
            // Gestion des erreurs d'authentification (afficher un message d'erreur)
            const error_data = await response.json();
            // Accéder à la propriété "message" de l'objet
            const error_message = error_data.message; 
            // Afficher le message d'erreur dans le navigateur
            message.textContent = error_message; 
        }
    });
});
