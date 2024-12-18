document.getElementById("checkbox-others").addEventListener("change", function () {
    const autreInptCandidat = document.getElementById("autre-inpt-candidat");

    if (this.checked) {
        autreInptCandidat.style.display = "block";
    } else {
        autreInptCandidat.style.display = "none";
    }
});
  // Récupération des éléments nécessaires
  const input = document.getElementById('input-justificatif');
  const pictureContainer = document.querySelector('#selected-items-others .row-select');

  // Fonction pour ajouter un span dynamique
  function addSpan(text) {
      // Création d'un nouvel élément span
      const span = document.createElement('span');
      span.className = 'span-select';
      span.innerHTML = `${text} <sub class='fa-x'></sub>`;
      
      // Ajout d'un gestionnaire pour supprimer le span au clic sur "x"
      span.querySelector('sub').addEventListener('click', () => {
          span.remove();
      });

      // Ajout du span dans le conteneur
      pictureContainer.appendChild(span);
  }

  // Gestion de l'événement 'Enter' ou perte de focus
  input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && input.value.trim() !== '') {
          addSpan(input.value.trim());
          input.value = ''; // Réinitialise le champ après ajout
      }
  });

  input.addEventListener('blur', () => {
      if (input.value.trim() !== '') {
          addSpan(input.value.trim());
          input.value = ''; // Réinitialise le champ après ajout
      }
  });