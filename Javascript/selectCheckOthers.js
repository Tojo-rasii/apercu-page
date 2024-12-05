const checkboxOthers = document.getElementById('checkbox-others');
const selectedItems = document.getElementById('selected-items-other');
const noSelectionText = document.getElementById('no-selections');

// Liste des textes à afficher
const additionalTexts = ["Text1", "Text2", "Text3"];

// Ajouter/retirer des spans dynamiquement
checkboxOthers.addEventListener('change', () => {
    console.log('Checkbox checked:', checkboxOthers.checked);  // Vérification de l'état de la checkbox
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
        console.log('Spans ajoutés:', additionalTexts);  // Vérification des spans ajoutés
    } else {
        // Réinitialiser si décoché
        selectedItems.innerHTML = '';
        noSelectionText.style.display = 'block';
        console.log('Tous les spans supprimés');
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
        console.log('Span supprimé');
    }
});
