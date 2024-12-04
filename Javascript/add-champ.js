document.addEventListener("DOMContentLoaded", () => {
    const addChampBtn = document.getElementById("add-champ"); // Bouton pour ajouter un champ
    const tbody = addChampBtn.closest("tbody"); // Conteneur des lignes
    const trChamp = tbody.querySelector(".champ"); // Ligne à dupliquer

    addChampBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du bouton

        // Clone de la ligne
        const newTrChamp = trChamp.cloneNode(true);

        // Réinitialiser les champs dupliqués (si nécessaire)
        const inputs = newTrChamp.querySelectorAll("input");
        inputs.forEach(input => {
            if (input.type === "text") input.value = "";
            if (input.type === "checkbox") input.checked = false;
        });

        // Ajouter la nouvelle ligne avant la ligne contenant le bouton
        tbody.insertBefore(newTrChamp, addChampBtn.closest("tr"));
    });


    // Sélectionne toutes les icônes avec la classe "delete-tr"
    document.querySelectorAll('.delete-tr').forEach((deleteButton) => {
        deleteButton.addEventListener('click', function () {
            // Remonte à l'élément parent <tr> et le supprime
            const row = this.closest('tr');
            if (row) {
                row.remove();
            }
        });
    });

});
