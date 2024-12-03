document.querySelectorAll('.search-container').forEach(container => {
    const input = container.querySelector('.search-input');
    const popup = container.querySelector('.popup');
    const checkboxes = popup.querySelectorAll('input[type="checkbox"]');
    let selectedOptions = [];

    // Afficher la popup lorsqu'on clique sur l'input
    input.addEventListener('click', (e) => {
        // Cacher toutes les autres popups
        document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
        popup.style.display = 'block';
        e.stopPropagation(); // Empêche le clic de se propager à `document`
    });

    // Cacher la popup lorsqu'on clique ailleurs
    document.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Empêcher la fermeture lorsque l'on clique sur la popup elle-même
    popup.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Gérer la sélection/désélection des options
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const optionText = checkbox.value;

            if (checkbox.checked) {
                // Ajouter l'option si elle est cochée
                selectedOptions.push(optionText);
            } else {
                // Retirer l'option si elle est décochée
                selectedOptions = selectedOptions.filter(option => option !== optionText);
            }

            // Mettre à jour l'input avec les options sélectionnées
            input.value = selectedOptions.join(', ');
        });
    });
});