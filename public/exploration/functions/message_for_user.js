export function message_for_user(message) {

    const div_server_message = document.querySelector("#div_server_message");
    const server_message = document.querySelector("#server_message");

    // Nettoyage des messages (augmenter la valeur pour cumuler les messages)
    if (server_message.children.length >= 1) {
        server_message.removeChild(server_message.lastChild);
    };

    // Ajoute du message
    const li = document.createElement("li");
    li.textContent = message;
    server_message.prepend(li);

    // Animation de la div
    div_server_message.style.bottom = "-100px";

    setTimeout(() => {
        div_server_message.style.bottom = "20px";
    }, 10);

    setTimeout(() => {
        div_server_message.style.bottom = "-100px";
    }, 4000);
};