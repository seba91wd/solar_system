// Fonction de récupération du token dans le cookie 
export function get_token_from_cookies() {
    const cookies = document.cookie.split(';');
    let auth_token = null;

    for (const cookie of cookies) {
        const trimmed_cookie = cookie.trim();

        if (trimmed_cookie.startsWith("auth_token=")) {
            const token_parts = trimmed_cookie.split('=');
            if (token_parts.length === 2) {
                auth_token = token_parts[1];
                break;
            };
        };
    };
    return auth_token;
};
