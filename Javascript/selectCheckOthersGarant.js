document.getElementById("checkbox-others-garant").addEventListener("change", function () {
    const autreInpt = document.getElementById("autre-inpt");

    if (this.checked) {
        // Masquer le texte "Autres pièces justificatives"
        autreInpt.style.display = "block";

    } else {
        // Réafficher le texte "Autres pièces justificatives"
        autreInpt.style.display = "none";

    }
});

// Récupération des éléments nécessaires
const inputGarant = document.getElementById('input-justificatif-garant');
const pictureContainerGarant = document.querySelector('#selected-items-others-garant .row-select');

// Fonction pour ajouter un span dynamique
function addSpanGarant(text) {
    // Création d'un nouvel élément span
    const span = document.createElement('span');
    span.className = 'span-select';
    span.innerHTML = `${text} <sub class='fa-x'></sub>`;

    // Ajout d'un gestionnaire pour supprimer le span au clic sur "x"
    span.querySelector('sub').addEventListener('click', () => {
        span.remove();
    });

    // Ajout du span dans le conteneur
    pictureContainerGarant.appendChild(span);
}

// Gestion de l'événement 'Enter' ou perte de focus
inputGarant.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputGarant.value.trim() !== '') {
        addSpanGarant(inputGarant.value.trim());
        inputGarant.value = ''; // Réinitialise le champ après ajout
    }
});

inputGarant.addEventListener('blur', () => {
    if (inputGarant.value.trim() !== '') {
        addSpanGarant(inputGarant.value.trim());
        inputGarant.value = ''; // Réinitialise le champ après ajout
    }
});