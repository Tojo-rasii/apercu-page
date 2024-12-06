document.getElementById("checkbox-others").addEventListener("change", function () {
    const container = document.getElementById("selected-items-other");
    const noSelectionsText = document.getElementById("no-selections");

    if (this.checked) {
        // Masquer le texte "Autres pièces justificatives"
        noSelectionsText.style.display = "none";

        // Ajouter les suggestions
        ["Trois dernières fiches de paie", "Contrat de travail", "Justificatif de domicile"].forEach(text => {
            const span = document.createElement("span");
            span.className = "span-select";
            span.innerHTML = `${text} <sub class="fa-x"></sub>`;
            container.appendChild(span);

            // Ajouter un événement pour retirer l'élément
            span.querySelector(".fa-x").addEventListener("click", function () {
                container.removeChild(span);
                // Vérifier si le conteneur est vide après suppression
                if (container.children.length === 0) {
                    noSelectionsText.style.display = "block"; // Réafficher le texte
                    document.getElementById("checkbox-others").checked = false; // Décocher la case
                }
            });
        });
    } else {
        // Réafficher le texte "Autres pièces justificatives"
        noSelectionsText.style.display = "block";

        // Supprimer toutes les suggestions
        container.innerHTML = "";
    }
});
