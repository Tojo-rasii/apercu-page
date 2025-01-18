function addSelectFunction() {

    const selectLabelPj = document.querySelectorAll('.select-label-pj');
    const popSelectPj = document.querySelectorAll('.pop-select-pj');
    const svgDown = document.querySelectorAll('.svg-down');
    const pSelectPopPj = document.querySelectorAll('.p-select-pop-pj');
    const pSelectPj = document.querySelectorAll('.p-select-pj');

    function closeAllPopups() {
        const allPopups = document.querySelectorAll('.pop-select-pj');
        allPopups.forEach(popup => {
            popup.style.display = 'none';
        });
    }

    // Ouvrir le pop-up sur clic et fermer les autres
    document.querySelectorAll('.select-label-pj').forEach(label => {
        label.addEventListener('click', function (event) {
            // Fermer tous les autres pop-ups
            closeAllPopups();

            // Ouvrir celui du champ cliqué
            const popSelect = label.closest('.th-pj').querySelector('.pop-select-pj');
            popSelect.style.display = popSelect.style.display === 'block' ? 'none' : 'block';


          
        });
    });

    // Sélectionner un élément et le mettre dans le label
    document.querySelectorAll('.p-select-pop-pj').forEach(item => {
        item.addEventListener('click', function () {
            const selectedText = item.getAttribute('data-value');
            item.closest('.th-pj').querySelector('.p-select-pj').textContent = selectedText;
            item.closest('.pop-select-pj').style.display = 'none'; // Fermer le pop-up

            // Mettre à jour la classe active pour l'élément sélectionné
            document.querySelectorAll('.p-select-pop-pj').forEach(e => e.classList.remove('active-pj'));
            item.classList.add('active-pj');
        });
    });
    
    function addPieceFunction() {
        // Sélectionner tous les éléments avec la classe `.last-select`
        document.querySelectorAll('.last-select').forEach(lastSelect => {
            lastSelect.addEventListener('click', function () {
                // Trouver le conteneur principal où les nouvelles pièces doivent être ajoutées
                const container = lastSelect.closest('.col-pop-pj');

                // Créer un nouvel élément `picture`
                const newPiece = document.createElement('picture');
                newPiece.className = 'p-select-pop-pj editable-piece';

                // Ajouter un champ d'entrée pour permettre la modification
                newPiece.innerHTML = `
                <input type="text" class="input-new-piece" placeholder="Entrez le nom de la pièce" />
            `;

                // Insérer la nouvelle pièce juste avant l'élément `.last-select`
                container.insertBefore(newPiece, lastSelect);

                // Ajouter un gestionnaire d'événement pour sauvegarder le texte après modification
                const input = newPiece.querySelector('.input-new-piece');
                input.addEventListener('blur', function () {
                    // Si le champ perd le focus, remplacer l'input par un texte
                    const textValue = input.value.trim() || "Nouvelle pièce";
                    newPiece.setAttribute('data-value', textValue);
                    newPiece.innerHTML = `<p>${textValue}</p>`;

                    // Rendre l'élément sélectionnable
                    newPiece.addEventListener('click', function () {
                        const selectedText = newPiece.getAttribute('data-value');
                        const label = newPiece.closest('.th-pj').querySelector('.p-select-pj');
                        label.textContent = selectedText;

                        // Fermer le pop-up après la sélection
                        newPiece.closest('.pop-select-pj').style.display = 'none';
                    });
                });

                // Focus automatique sur le champ d'entrée pour une modification immédiate
                input.focus();

                // Message de confirmation ou autre action
                // alert("Nouvelle pièce ajoutée. Modifiez son nom avant de quitter le champ.");
            });
        });
    }

    // Appeler la fonction pour lier les événements
    addPieceFunction();





   
    //     selectpop.addEventListener('click', function () {
    //         const valueSelect = selectpop.getAttribute('data-value');
    //         const parentIndex = [...popSelectPj].findIndex(pop =>
    //             pop.contains(selectpop)
    //         );

    //         // Mise à jour du contenu correspondant
    //         if (parentIndex !== -1) {
    //             pSelectPj[parentIndex].innerHTML = valueSelect;

    //             // Supprimer la classe active des autres éléments de la liste
    //             popSelectPj[parentIndex].querySelectorAll('.p-select-pop-pj').forEach(el => {
    //                 el.classList.remove('active-pj');
    //             });

    //             // Ajouter la classe active à l'élément sélectionné
    //             selectpop.classList.add('active-pj');
    //         }
    //     });
    // });
};

// SELECT GARANT
function addSelectGarantFunction() {
    // Sélectionner les éléments spécifiques pour chaque champ
    const selectLabelPjGarant = document.querySelector('.select-label-pj-garant');
    const svgDownGarant = document.querySelector('.svg-down-garant');

    // Fonction pour fermer tous les pop-ups
    function closeAllPopupsGarant() {
        const allPopupsGrt = document.querySelectorAll('.pop-select-pj-garant');
        allPopupsGrt.forEach(popupgrt => {
            popupgrt.style.display = 'none';
        });
    }

    // Fonction pour gérer l'ouverture et la fermeture des pop-ups
    document.querySelectorAll('.select-label-pj-garant').forEach(labelgrt => {
        labelgrt.addEventListener('click', function (event) {
            // Fermer tous les autres pop-ups
            closeAllPopupsGarant();

            // Trouver le pop-up spécifique au label cliqué
            const popSelectgrt = labelgrt.closest('.th-pj').querySelector('.pop-select-pj-garant');

            // Vérifier si le pop-up est déjà ouvert, si oui on le ferme, sinon on l'ouvre
            if (popSelectgrt.style.display === 'block') {
                popSelectgrt.style.display = 'none';
            } else {
                popSelectgrt.style.display = 'block';
            }
        });
    });

    // Sélectionner un élément dans le pop-up et mettre à jour le label
    document.querySelectorAll('.p-select-pop-pj-garant').forEach(itemgrt => {
        itemgrt.addEventListener('click', function () {
            const selectedTextgrt = itemgrt.getAttribute('data-value');

            // Mettre à jour le texte du label avec la valeur sélectionnée
            itemgrt.closest('.th-pj').querySelector('.p-select-pj-garant').textContent = selectedTextgrt;

            // Fermer le pop-up après la sélection
            itemgrt.closest('.pop-select-pj-garant').style.display = 'none';
        });
    });

    // Gérer la rotation de l'icône SVG lors du clic sur le label
    selectLabelPjGarant.addEventListener('click', function () {
        svgDownGarant.classList.toggle('rotate-pj-garant');
    });

    // Optionnel : gestion de la sélection active pour chaque élément
    document.querySelectorAll('.p-select-pop-pj-garant').forEach(selectpopgarant => {
        selectpopgarant.addEventListener('click', function () {
            const valueSelect = selectpopgarant.getAttribute('data-value');

            // Mettre à jour le texte dans le label sélectionné
            const label = selectpopgarant.closest('.th-pj').querySelector('.p-select-pj-garant');
            label.innerHTML = valueSelect;

            // Fermer le pop-up après la sélection
            selectpopgarant.closest('.pop-select-pj-garant').style.display = 'none';

            // Mettre à jour la classe active pour l'élément sélectionné
            document.querySelectorAll('.p-select-pop-pj-garant').forEach(e => e.classList.remove('active-pj-garant'));
            selectpopgarant.classList.add('active-pj-garant');

            // Optionnel : fermer le SVG de rotation
            svgDownGarant.classList.remove('rotate-pj-garant');
        });
    });
}


