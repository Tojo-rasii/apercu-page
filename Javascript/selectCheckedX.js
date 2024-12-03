const checkboxes = document.querySelectorAll('.popup-item input[type="checkbox"]');
const selectedItemsContainer = document.getElementById('selected-items');
const noSelectionText = document.getElementById('no-selection');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Si la case est cochée
        if (checkbox.checked) {
            // Crée un élément <span>
            const span = document.createElement('span');
            span.classList.add('span-select');
            span.textContent = checkbox.value;

            // Ajoute un bouton de suppression
            const closeButton = document.createElement('sub');
            closeButton.textContent = ' X';
            closeButton.classList.add('fa-x');
            closeButton.addEventListener('click', () => {
                span.remove();
                checkbox.checked = false;
                toggleNoSelectionText();
            });

            span.appendChild(closeButton);
            selectedItemsContainer.appendChild(span);
        } else {
            // Retire le span correspondant
            const spanToRemove = Array.from(selectedItemsContainer.children).find(
                span => span.textContent.includes(checkbox.value)
            );
            if (spanToRemove) {
                spanToRemove.remove();
            }
        }

        // Gère le texte "Aucun élément sélectionné"
        toggleNoSelectionText();
    });
});

function toggleNoSelectionText() {
    if (selectedItemsContainer.children.length > 0) {
        noSelectionText.style.display = 'none';
    } else {
        noSelectionText.style.display = 'block';
    }
}
