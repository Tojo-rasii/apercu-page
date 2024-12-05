document.addEventListener("DOMContentLoaded", () => {
    // Sélection des modales et boutons
    const primaryModale = document.getElementById("modale-apercu");
    const secondaryModale = document.getElementById("modale-apercu-secondary");
    const notificationModale = document.getElementById("modale-apercu-notification");
    const nextButton = document.getElementById("next");
    const backButton = document.getElementById("back");
    const nextLastButton = document.getElementById("next-last");

    const closeNotifButton = document.getElementById("close-modal-notif");
    const closeSecondaryButton = document.getElementById("close-modal-secondary");


    // Fonction pour afficher un modale
    function showModale(modale) {
        primaryModale.style.display = "none";
        secondaryModale.style.display = "none";
        notificationModale.style.display = "none";

        modale.style.display = "flex";
    }

    // Bouton "Suivant" pour passer à la modale secondaire
    nextButton.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        showModale(secondaryModale);
    });

    closeNotifButton.addEventListener("click", () => {
        document.body.classList.remove("no-scroll"); // Réactive le scroll du body
        notificationModale.style.display = "none";

    });
    closeSecondaryButton.addEventListener("click", () => {
        secondaryModale.style.display = "none";
        document.body.classList.remove("no-scroll"); // Réactive le scroll du body


    });

    // Bouton "Précédent" pour retourner à la modale primaire
    backButton.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        showModale(primaryModale);
    });

    // Bouton "Suivant Notification" pour afficher la modale de notification
    nextLastButton.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        showModale(notificationModale);
    });

    // Fermer le modale de notification si on clique en dehors
    window.addEventListener("click", (event) => {
        if (event.target === notificationModale) {
            notificationModale.style.display = "none";
        document.body.classList.remove("no-scroll"); // Réactive le scroll du body

        }
    });
});
