const checkboxesGarant = document.querySelectorAll('.popup-item-garant input[type="checkbox"]');
const selectedItemsContainerGarant = document.getElementById('selected-items-garant');
const noSelectionTextGarant = document.getElementById('no-selection-garant');

checkboxesGarant.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Si la case est cochée
        if (checkbox.checked) {
            // Crée un élément <span>
            const span = document.createElement('span');
            span.classList.add('span-select');
            span.textContent = checkbox.value;

            // Ajoute un bouton de suppression
            const closeButton = document.createElement('sub');
            // closeButton.textContent = ' X';
            closeButton.classList.add('fa-x');
            closeButton.addEventListener('click', () => {
                span.remove();
                checkbox.checked = false;
                toggleNoSelectionText();
            });

            span.appendChild(closeButton);
            selectedItemsContainerGarant.appendChild(span);
        } else {
            // Retire le span correspondant
            const spanToRemove = Array.from(selectedItemsContainerGarant.children).find(
                span => span.textContent.includes(checkbox.value)
            );
            if (spanToRemove) {
                spanToRemove.remove();
            }
        }

        // Gère le texte "Aucun élément sélectionné"
        toggleNoSelectionTextGarant();
    });
});

function toggleNoSelectionTextGarant() {
    if (selectedItemsContainerGarant.children.length > 0) {
        noSelectionTextGarant.style.display = 'none';
    } else {
        noSelectionTextGarant.style.display = 'block';
    }
}
