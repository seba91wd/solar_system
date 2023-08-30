export function tbody_filter(checkboxes) {
    const type = checkboxes.id.replace('checkbox_', '');
    const rows = document.querySelectorAll("tr");
    console.log(checkboxes);
    if (checkboxes.checked === true) {
        console.log("checked === true");
        rows.forEach(row => {
            if (row.classList.contains("hidden")) {
                row.classList.remove('hidden');
            };
        });
    }
    else {
        console.log("checked === false");
        rows.forEach(row => {
            if (row.classList.contains(type)) {
                row.classList.add('hidden');
            };
        });
    };
};