document.addEventListener("DOMContentLoaded", () => {
    const notificationModale = document.getElementById("modale-apercu-notification");
    const toastNotification = document.getElementById("toast-notification");
    const btnNon = document.getElementById("btn-non");
    const btnOui = document.getElementById("btn-oui");

    // Fonction pour masquer la modale de notification
    function closeNotificationModale() {
        notificationModale.style.display = "none";
    }

    // Fonction pour afficher le toast
    function showToast() {
        toastNotification.style.display = "block"; // Affiche le toast
        setTimeout(() => {
            toastNotification.style.display = "none"; // Cache le toast après 15s
        }, 3000);
    }

    // Événement bouton "Non"
    btnNon.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut
        document.body.classList.remove("no-scroll"); // Réactive le scroll du body
        closeNotificationModale();
    });

    // Événement bouton "Oui"
    btnOui.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut
        closeNotificationModale(); // Ferme la modale
        document.body.classList.remove("no-scroll"); // Réactive le scroll du body
        showToast(); // Affiche le toast
    });
});
