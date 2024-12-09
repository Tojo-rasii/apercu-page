    const selectedItems = document.querySelectorAll(".selected-item2");
    const popupContainers = document.querySelectorAll(".popups");
    const selectedIcons = document.querySelectorAll(".selected-icon");
    const searchInputs = document.querySelectorAll(".search-input2");

    // Basculer la liste déroulante au clic sur chaque input
    searchInputs.forEach((input, index) => {
        input.addEventListener("click", (e) => {
            e.stopPropagation(); // Empêche la propagation pour éviter de fermer immédiatement
            popupContainers[index].classList.toggle("visible");
        });
    });

    // Gérer la sélection d'un élément dans la popup
    const popupItems = document.querySelectorAll(".popup-item2");
    popupItems.forEach((item) => {
        item.addEventListener("click", () => {
            const newIcon = item.getAttribute("data-img");
            const newText = item.querySelector("span").textContent;

            // Trouver l'index de la popup actuelle
            const popupContainer = item.closest(".popups");
            const index = Array.from(popupContainer.children).indexOf(item);

            // Vérifier que l'index est valide
            if (index >= 0 && selectedIcons[index] && searchInputs[index]) {
                // Mettre à jour l'icône et le texte pour l'élément correspondant
                selectedIcons[index].src = newIcon;
                searchInputs[index].value = newText;

                // Fermer la popup
                popupContainers[index].classList.remove("visible");
            }
        });
    });

    // Fermer la liste déroulante si on clique à l'extérieur
    document.addEventListener("click", (e) => {
        selectedItems.forEach((selectedItem, index) => {
            if (!selectedItem.contains(e.target) && !popupContainers[index].contains(e.target)) {
                popupContainers[index].classList.remove("visible");
            }
        });
    });

    // Ajouter la fonctionnalité de toggle pour chaque popup
    popupContainers.forEach((popupContainer, index) => {
        const popupItems = popupContainer.querySelectorAll(".popup-item2");
        popupItems.forEach((item) => {
            item.addEventListener("click", () => {
                const newIcon = item.getAttribute("data-img");
                const newText = item.querySelector("span").textContent;

                // Mettre à jour l'icône et le texte
                selectedIcons[index].src = newIcon;
                searchInputs[index].value = newText;

                // Fermer la popup
                popupContainer.classList.remove("visible");
            });
        });
    });
