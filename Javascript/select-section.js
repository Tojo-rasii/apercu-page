document.addEventListener("click", function (e) {
  // Trouver l'élément cliqué
  const input = e.target.closest(".search-input");
  const popupItem = e.target.closest(".popup-item");

  // Vérifier si l'utilisateur clique dans une liste déroulante spécifique
  const activePopSection = e.target.closest(".popSection");

  // Fermer toutes les popSections sauf celle sur laquelle on interagit
  document.querySelectorAll(".popSection").forEach(pop => {
    if (pop !== activePopSection) {
      pop.classList.add("hidden");
    }
  });

  // Si l'utilisateur clique sur un input
  if (input) {
    const popSection = input.closest(".select-label-section").parentElement.querySelector(".popSection");

    // Basculer la visibilité de la liste déroulante associée
    if (popSection) {
      popSection.classList.toggle("hidden");
    }
    return; // Arrêter ici pour éviter de fermer la liste après le toggle
  }

  // Si un élément de la liste est cliqué
  if (popupItem) {
    const popSection = popupItem.closest(".popSection");
    const input = popSection.parentElement.querySelector(".search-input");

    // Mettre à jour la valeur de l'input avec la sélection
    if (input) {
      input.value = popupItem.getAttribute("data-value");
    }

    // Fermer la liste déroulante
    popSection.classList.add("hidden");
  }
});
