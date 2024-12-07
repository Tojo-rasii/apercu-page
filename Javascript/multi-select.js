document.addEventListener("DOMContentLoaded", () => {
    const multiSelectWrappers = document.querySelectorAll(".multi-select-wrapper");

    multiSelectWrappers.forEach(wrapper => {
        const popupItems = wrapper.querySelectorAll(".popup-item3 input[type='checkbox']");
        const displaySelected = wrapper.querySelector(".display-selected");
        const noItemsSelected = wrapper.querySelector(".no-items-selected");
        const togglePopup = wrapper.querySelector(".toggle-popup");
        const popupPossibility = wrapper.querySelector(".popups-possibility");

        // Met à jour les éléments sélectionnés
        const updateSelectedItems = () => {
            displaySelected.innerHTML = ""; // Vider les éléments affichés
            let hasSelection = false;

            popupItems.forEach(item => {
                if (item.checked) {
                    hasSelection = true;
                    const value = item.nextElementSibling.textContent;

                    // Crée un élément pour la sélection avec "X"
                    const span = document.createElement("span");
                    span.className = "span-select arrow-down";
                    span.textContent = value;

                    const sub = document.createElement("sub");
                    sub.textContent = "x";
                    sub.style.cursor = "pointer";

                    // Ajouter l'événement de suppression
                    sub.addEventListener("click", () => {
                        item.checked = false; // Décocher la case
                        updateSelectedItems(); // Rafraîchir la sélection
                    });

                    span.appendChild(sub);
                    displaySelected.appendChild(span);
                }
            });

            // Gérer la visibilité du texte "Aucun élément sélectionné"
            noItemsSelected.style.display = hasSelection ? "none" : "block";
        };

        // Ajoute un événement de mise à jour sur chaque case à cocher
        popupItems.forEach(item => {
            item.addEventListener("change", updateSelectedItems);
        });

        // Ajoute un événement pour afficher/masquer le popup
        togglePopup.addEventListener("click", () => {
            const isVisible = popupPossibility.style.display === "block";
            popupPossibility.style.display = isVisible ? "none" : "block";
        });

        // Initialiser l'affichage au chargement
        updateSelectedItems();
    });
});
