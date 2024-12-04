document.addEventListener("DOMContentLoaded", () => {
    const apercuButton = document.getElementById("apercu-pop");
    const modale = document.getElementById("modale-apercu");
    const closeButton = document.getElementById("close-modal");

    // Affiche le modale et empêche le scroll sur la page
    apercuButton.addEventListener("click", () => {
        modale.style.display = "flex"; // Affiche le modale
        document.body.classList.add("no-scroll"); // Empêche le scroll du body
    });

    // Cache le modale et réactive le scroll sur la page
    closeButton.addEventListener("click", () => {
        modale.style.display = "none"; // Cache le modale
        document.body.classList.remove("no-scroll"); // Réactive le scroll du body
    });

    // Ferme le modale si on clique en dehors
    window.addEventListener("click", (event) => {
        if (event.target === modale) {
            modale.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });
});
