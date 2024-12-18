document.addEventListener("click", function (e) {
    // Trouver la liste déroulante à partir de l'élément cliqué
    const label = e.target.closest(".select-label");
    const popupItem = e.target.closest(".popup-item");
  
    // Fermer toutes les popSection avant d'effectuer une action
    document.querySelectorAll(".popSection").forEach(pop => pop.classList.add("hidden"));
  
    // Si l'utilisateur clique sur un label (ou son contenu)
    if (label) {
      const input = label.querySelector(".search-input");
      const popSection = label.parentElement.querySelector(".popSection");
  
      // Basculer la visibilité de la liste
      if (popSection) {
        popSection.classList.toggle("hidden");
      }
    }
  
    // Si un élément de la liste est cliqué
    if (popupItem) {
      const popSection = popupItem.closest(".popSection");
      const input = popSection.parentElement.querySelector(".search-input");
  
      // Mettre à jour la valeur de l'input avec la sélection
      if (input) {
        input.value = popupItem.getAttribute("data-value");
      }
  
      // Fermer la liste
      popSection.classList.add("hidden");
    }
  });
  