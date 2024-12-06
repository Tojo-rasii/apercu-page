document.addEventListener("DOMContentLoaded", () => {
  // Fonction d'initialisation
  const initPopupSelect = () => {
      const searchContainers = document.querySelectorAll(".search-container");

      searchContainers.forEach(container => {
          const searchInput = container.querySelector(".search-input");
          const popup = container.querySelector(".popups");
          const popupItems = container.querySelectorAll(".popup-item");
          const selectedIcon = container.querySelector(".selected-icon");
          const selectLabel = container.querySelector(".select-label");

          // Montrer/Masquer le popup au clic sur le champ
          selectLabel.addEventListener("click", (event) => {
              event.stopPropagation(); // Empêcher la propagation pour éviter la fermeture instantanée
              popup.style.display = popup.style.display === "block" ? "none" : "block";
          });

          // Filtrer les options en fonction de l'entrée utilisateur
          searchInput.addEventListener("input", () => {
              const filter = searchInput.value.toLowerCase();
              popupItems.forEach(item => {
                  const text = item.querySelector("span").textContent.toLowerCase();
                  item.style.display = text.includes(filter) ? "flex" : "none";
              });
          });

          // Gérer la sélection d'une option
          popupItems.forEach(item => {
              item.addEventListener("click", () => {
                  const selectedText = item.querySelector("span").textContent;
                  const selectedImg = item.dataset.img;

                  // Mettre à jour l'icône et le champ sélectionné
                  selectedIcon.src = selectedImg;
                  searchInput.value = selectedText;

                  // Fermer le popup
                  popup.style.display = "none";
              });
          });

          // Fermer le popup en cliquant à l'extérieur
          document.addEventListener("click", () => {
              popup.style.display = "none";
          });
      });
  };

  // Appeler la fonction d'initialisation
  initPopupSelect();
});
