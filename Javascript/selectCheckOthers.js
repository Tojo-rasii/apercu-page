const checkboxOthers = document.getElementById('checkbox-others');
const selectedItems = document.getElementById('selected-items-other');
const noSelectionText = document.getElementById('no-selection');

// Liste des textes à afficher
const additionalTexts = ["Text1", "Text2", "Text3"];

// Ajouter/retirer des spans dynamiquement
checkboxOthers.addEventListener('change', () => {
    if (checkboxOthers.checked) {
        // Supprimer le texte "Autres pièces justificatives"
        noSelectionText.style.display = 'none';

        // Ajouter les spans
        additionalTexts.forEach((text, index) => {
            const span = document.createElement('span');
            span.className = 'span-select';
            span.innerHTML = `${text} <sub class="fa-x" data-index="${index}">X</sub>`;
            selectedItems.appendChild(span);
        });
    } else {
        // Réinitialiser si décoché
        selectedItems.innerHTML = '';
        noSelectionText.style.display = 'block';
    }
});

// Supprimer un span lorsque "X" est cliqué
selectedItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-x')) {
        const spanToRemove = e.target.closest('span');
        selectedItems.removeChild(spanToRemove);

        // Si tous les spans sont supprimés, afficher à nouveau le texte par défaut
        if (selectedItems.children.length === 0) {
            noSelectionText.style.display = 'block';
        }
    }
});
