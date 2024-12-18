document.getElementById("checkbox-others").addEventListener("change", function () {
    const autreInptCandidat = document.getElementById("autre-inpt-candidat");

    if (this.checked) {
        autreInptCandidat.style.display = "block";
    } else {
        autreInptCandidat.style.display = "none";
    }
});
// Récupération des éléments nécessaires
const inputCandidat = document.getElementById('input-justificatif');
const pictureContainerCandidat = document.querySelector('#selected-items-others .row-select');

// Fonction pour ajouter un span dynamique
function addSpanCandidat(text) {
    // Création d'un nouvel élément span
    const span = document.createElement('span');
    span.className = 'span-select';
    span.innerHTML = `${text} <sub class='fa-x'></sub>`;

    // Ajout d'un gestionnaire pour supprimer le span au clic sur "x"
    span.querySelector('sub').addEventListener('click', () => {
        span.remove();
    });

    // Ajout du span dans le conteneur
    pictureContainerCandidat.appendChild(span);
}

// Gestion de l'événement 'Enter' ou perte de focus
inputCandidat.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputCandidat.value.trim() !== '') {
        addSpanCandidat(inputCandidat.value.trim());
        inputCandidat.value = ''; // Réinitialise le champ après ajout
    }
});

inputCandidat.addEventListener('blur', () => {
    if (inputCandidat.value.trim() !== '') {
        addSpanCandidat(inputCandidat.value.trim());
        inputCandidat.value = ''; // Réinitialise le champ après ajout
    }
});