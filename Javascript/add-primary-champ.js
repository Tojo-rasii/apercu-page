// Initialisation : cacher .tr-add au départ
document.querySelector('.tr-add').style.display = 'none';

// Événement sur le bouton "Ajouter nouveau champ" de .last-tr
document.getElementById('add-primary-champ').addEventListener('click', function () {
    const tableBody = document.getElementById('table-body');

    // Ajouter la première ligne .champ
    addNewChamp(tableBody);

    // Afficher la ligne .tr-add
    document.querySelector('.tr-add').style.display = '';

    // Masquer la ligne .last-tr
    document.querySelector('.last-tr').style.display = 'none';
});

// Événement sur le bouton "Ajouter nouveau champ" de .tr-add
document.getElementById('add-champ').addEventListener('click', function () {
    const tableBody = document.getElementById('table-body');

    // Ajouter une nouvelle ligne .champ
    addNewChamp(tableBody);
});

// Fonction pour ajouter une nouvelle ligne .champ
function addNewChamp(tableBody) {
    // Créer une nouvelle ligne .champ
    const newRow = document.createElement('tr');
    newRow.classList.add('champ');

    // Contenu de la nouvelle ligne
    newRow.innerHTML = `
        <td class="td-title">
          <p>Nouveau champ</p>
        </td>
        <td>
         <div class="search-container">
             <div class="selected-item">
                 <label class="select-label">
                     <img class="selected-icon" src="Asset/123.png" alt="Selected Icon" width="20" height="20">
                     <input type="text" class="search-input" placeholder="Champ numérique" readonly>
                     <i class="down-i">
                         <svg width="10" height="10" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.59628 0H0.403717C0.0444951 0 -0.135116 0.382449 0.119165 0.606582L2.71444 2.89594C2.87185 3.03469 3.12815 3.03469 3.28556 2.89594L5.88084 0.606582C6.13512 0.382449 5.9555 0 5.59628 0Z" fill="#585856" />
                         </svg>
                     </i>
                 </label>
                 <div class="popups">
                     <div class="popup-item" data-img="Asset/image.png">
                         <img src="Asset/T.png" alt="Icon 1" width="20" height="20">
                         <span>Text simple</span>
                     </div>
                     <div class="popup-item" data-img="Asset/down.png">
                         <img src="Asset/down.png" alt="Icon 2" width="20" height="20">
                         <span>Champ de selection</span>
                     </div>
                     <div class="popup-item" data-img="Asset/list.png">
                         <img src="Asset/image.png" alt="Icon 3" width="20" height="20">
                         <span>Champ numérique</span>
                     </div>
                    <div class="popup-item" data-img="Asset/list.png">
                        <img src="Asset/list.png" alt="Icon 4" width="20"
                            height="20">
                        <span>Texte multiligne</span>
                    </div>
                      <div class="popup-item" data-img="Asset/check.png">
                        <img src="Asset/check.png" alt="Icon 4" width="20"
                            height="20">
                        <span>Case à cocher</span>
                    </div>
                    <div class="popup-item" data-img="Asset/check.png">
                        <img src="Asset/check.png" alt="Icon 4" width="20"
                            height="20">
                        <span>Selection multiple</span>
                    </div>
                 </div>
             </div>
         </div>
        </td>


        <td>
          <div class="multi-select-wrapper">
            <picture class="multi-select-label">
                <figure>
                    <div class="selection-text toggle-popup">
                        <p class="no-items-selected">Aucun élément
                            sélectionné</p>
                        <figcaption class="display-selected">
                            <!-- Les éléments sélectionnés apparaîtront ici -->
                        </figcaption>
                        <span class="arrow-icon">
                            <svg width="10" height="10" viewBox="0 0 6 3"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.59628 0H0.403717C0.0444951 0 -0.135116 0.382449 0.119165 0.606582L2.71444 2.89594C2.87185 3.03469 3.12815 3.03469 3.28556 2.89594L5.88084 0.606582C6.13512 0.382449 5.9555 0 5.59628 0Z"
                                    fill="#585856" />
                            </svg>
                        </span>
                    </div>

                    <div class="popups-possibility">
                        <label class="popup-item3">
                            <input type="checkbox">
                            <span>CDI</span>
                        </label>
                        <label class="popup-item3">
                            <input type="checkbox">
                            <span>CDD</span>
                        </label>
                        <label class="popup-item3">
                            <input type="checkbox">
                            <span>Interim</span>
                        </label>
                        <label class="popup-item3">
                            <input type="checkbox">
                            <span>5 mois</span>
                        </label>
                    </div>
                </figure>
            </picture>
        </div>
        </td>

        <td><input type="checkbox"></td>
        <td><button class="btn-red delete-champ">Supprimer</button></td>
    `;

    // Insérer avant la ligne .tr-add
    tableBody.insertBefore(newRow, document.querySelector('.tr-add'));

    // Gérer le bouton de suppression
    newRow.querySelector('.delete-champ').addEventListener('click', function () {
        newRow.remove();

        // Si plus aucun champ n'est présent, réafficher la .last-tr
        if (tableBody.querySelectorAll('.champ').length === 0) {
            document.querySelector('.last-tr').style.display = '';
            document.querySelector('.tr-add').style.display = 'none';
        }
    });

    // Ajouter le comportement pour le menu déroulant
    const searchContainer = newRow.querySelector('.search-container');
    const searchInput = searchContainer.querySelector('.search-input');
    const popups = searchContainer.querySelector('.popups');

    searchInput.addEventListener('click', function () {
        popups.style.display = popups.style.display === 'block' ? 'none' : 'block';
    });

    popups.querySelectorAll('.popup-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const selectedText = item.querySelector('span').innerText;
            const selectedImg = item.getAttribute('data-img');

            searchInput.value = selectedText;
            searchContainer.querySelector('.selected-icon').src = selectedImg;
            popups.style.display = 'none';
        });
    });

    // Fermer le menu lorsqu'on clique ailleurs
    document.addEventListener('click', function (e) {
        if (!searchContainer.contains(e.target)) {
            popups.style.display = 'none';
        }
    });

    // Ajout des événements pour le multi-sélect
    const multiSelectWrapper = newRow.querySelector('.multi-select-wrapper');
    const togglePopup = multiSelectWrapper.querySelector('.toggle-popup');
    const popupsPossibility = multiSelectWrapper.querySelector('.popups-possibility');
    const noItemsSelected = multiSelectWrapper.querySelector('.no-items-selected');
    const displaySelected = multiSelectWrapper.querySelector('.display-selected');

    togglePopup.addEventListener('click', function () {
        // Afficher ou masquer les options du multi-sélect
        popupsPossibility.style.display = popupsPossibility.style.display === 'block' ? 'none' : 'block';
    });

    // Ajouter les éléments sélectionnés dynamiquement
    // Ajouter les éléments sélectionnés dynamiquement
    popupsPossibility.querySelectorAll('label input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const selectedItems = [];
            popupsPossibility.querySelectorAll('label input[type="checkbox"]:checked').forEach(function (checkedInput) {
                const label = checkedInput.closest('label');
                selectedItems.push(label.querySelector('span').innerText);
            });

            // Mettre à jour l'affichage des éléments sélectionnés
            if (selectedItems.length > 0) {
                // Créer l'HTML avec l'icône fa-times pour supprimer
                displaySelected.innerHTML = selectedItems.map(item =>
                    `<p class="selected-item-span">
                        <span>${item}</span>
                        <i class="fa fa-times"></i>
                    </p>`
                ).join('');

                // Ajouter un gestionnaire de clic pour chaque icône fa-times
                displaySelected.querySelectorAll('.fa-times').forEach(function (icon) {
                    icon.addEventListener('click', function (e) {
                        // Récupérer le texte de l'élément à supprimer
                        const itemText = icon.previousElementSibling.innerText;

                        // Désélectionner le checkbox correspondant
                        popupsPossibility.querySelectorAll('label').forEach(function (label) {
                            if (label.querySelector('span').innerText === itemText) {
                                label.querySelector('input[type="checkbox"]').checked = false;
                            }
                        });

                        // Retirer l'élément de la liste affichée
                        icon.closest('.selected-item-span').remove();

                        // Vérifier si des éléments sont encore sélectionnés
                        if (displaySelected.querySelectorAll('.selected-item-span').length === 0) {
                            noItemsSelected.style.display = ''; // Réafficher le message "Aucun élément sélectionné"
                        }
                    });
                });

                // Masquer le message "Aucun élément sélectionné"
                noItemsSelected.style.display = 'none';
            } else {
                displaySelected.innerHTML = ''; // Vider les éléments sélectionnés
                noItemsSelected.style.display = ''; // Afficher le message "Aucun élément sélectionné"
            }
        });
    });

    // Fermer le menu lorsqu'on clique ailleurs
    document.addEventListener('click', function (e) {
        if (!multiSelectWrapper.contains(e.target)) {
            popupsPossibility.style.display = 'none';
        }
    });

}

