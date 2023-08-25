export function tbody_filter(checkboxes) {
    const type = checkboxes.id.replace('checkbox_', '');
    const rows = document.querySelectorAll("tr");

    if (checkboxes.checked === true) {
        rows.forEach(row => {
            if (row.classList.contains("inactive")) {
                row.classList.remove('inactive');
            };
        });
    }
    else {
        console.log("checked === false");
        rows.forEach(row => {
            if (row.classList.contains(type)) {
                row.classList.add('inactive');
            };
        });
    };
};