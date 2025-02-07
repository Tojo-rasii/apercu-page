// Initialisation : cacher .tr-add au départ
document.querySelector('.tr-add').style.display = 'none';

// Événement sur le bouton "Ajouter nouveau champ" de .last-tr
document.getElementById('add-primary-champ').addEventListener('click', function () {
    const tableBody = document.getElementById('table-body');


    // Vérifier le nombre actuel de champs
    //    if (countChamps() >= 6) {
    //     alert("Vous ne pouvez pas ajouter plus de 6 champs !");
    //     return;
    // }

    // Ajouter la première ligne .champ
    addNewChamp(tableBody);


    // Afficher la ligne .tr-add
    document.querySelector('.tr-add').style.display = '';

    // Masquer la ligne .last-tr
    document.querySelector('.last-tr').style.display = 'none';
});


// Fonction pour compter le nombre actuel de champs
// function countChamps() {
//     return document.querySelectorAll('#table-body .champ').length;
// }

// Événement sur le bouton "Ajouter nouveau champ" de .tr-add
document.getElementById('add-champ').addEventListener('click', function () {
    const tableBody = document.getElementById('table-body');
    const champs = tableBody.querySelectorAll('.champ');


    // Vérifier le nombre actuel de champs
    // if (countChamps() >= 6) {
    //     alert("Vous ne pouvez pas ajouter plus de 6 champs !");
    //     return;
    // }
    // Ajouter une nouvelle ligne .champ
    // if (champs.length < 6) {
    //     addNewChamp(tableBody);
    // }

    addNewChamp(tableBody);

    // Si le nombre de champs atteint 6, afficher le div HTML
    // Si le nombre de champs atteint 6, afficher le div HTML
    checkMaxChamps(tableBody);
});


// Fonction pour vérifier la limite des champs
let checkMaxChamps = function (tableBody) {
    const champs = document.querySelectorAll('.champ');

    // Si le nombre de champs atteint 5, afficher un message
    if (champs.length === 5) {
        displayMaxChampsMessage(tableBody);
    }
};


// Fonction pour supprimer le message si le nombre de champs est inférieur à 5


let displayMaxChampsMessage = function (tableBody) {
    // Créer une nouvelle ligne
    const messageRow = document.createElement('tr');
    messageRow.classList.add('max-champs-message');

    // Ajouter une cellule avec colspan="6"
    messageRow.innerHTML = `
        <td colspan="6" style="text-align: center;">
            <div>
                <p>Vous avez atteint le nombre maximal de champs personnalisés pouvant être ajoutés gratuitement.</p>
                <button id="obtain-button" class='btn-blue'>Obtenir plus de champ</button>
            </div>
        </td>
    `;

    // Ajouter la nouvelle ligne au tableau
    tableBody.appendChild(messageRow);

    // Désactiver le bouton d'ajout
    // document.getElementById('add-champ').disabled = true;
    document.querySelector('.tr-add').style.visibility = 'hidden';

    // Ajouter un événement au bouton "Obtenir"
    document.getElementById('obtain-button').addEventListener('click', function () {
        // Supprimer la limitation
        messageRow.remove();
        // document.getElementById('add-champ').disabled = false;
        document.querySelector('.tr-add').style.visibility = 'visible';
        // document.querySelector('.tr-add').removeEventListener('click', enforceMaxChamps);

        // Supprimer complètement la fonction de limitation
        checkMaxChamps = () => { };
    });
}



// Fonction pour ajouter une nouvelle ligne .champ
function addNewChamp(tableBody) {
    // Créer une nouvelle ligne .champ
    const newRow = document.createElement('tr');
    newRow.classList.add('champ');

    // Contenu de la nouvelle ligne
    newRow.innerHTML = `
         <td>
         <div class="search-container-section">
          <div class="selected-item-section">
                <label class="select-label-section">
                     <input type="text" class="search-input" placeholder="Candidat" readonly>
                     <i class="down-i">
                         <svg width="10" height="10" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.59628 0H0.403717C0.0444951 0 -0.135116 0.382449 0.119165 0.606582L2.71444 2.89594C2.87185 3.03469 3.12815 3.03469 3.28556 2.89594L5.88084 0.606582C6.13512 0.382449 5.9555 0 5.59628 0Z" fill="#585856" />
                         </svg>
                     </i>
                </label>
                <div class="popSection hidden">
        <div class="popup-item" data-value="Candidat">
          <span>Candidat</span>
        </div>
        <div class="popup-item" data-value="Garant">
          <span>Garant</span>
        </div>
                 </div>
                 </div>
        </td>

         <td class="td-title">
          <label class="select-label">
                     <input type="text" class="search-input" placeholder="Nouveau champ">
                   
                </label>
        </td>


        <td>
         <div class="search-container">
             <div class="selected-item">
                 <label class="select-label">
                     <img class="selected-icon" src="Asset/123.png" alt="Selected Icon" width="15" height="15">
                     <input type="text" class="search-input" placeholder="Champ numérique" readonly>
                     <i class="down-i">
                         <svg width="10" height="10" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.59628 0H0.403717C0.0444951 0 -0.135116 0.382449 0.119165 0.606582L2.71444 2.89594C2.87185 3.03469 3.12815 3.03469 3.28556 2.89594L5.88084 0.606582C6.13512 0.382449 5.9555 0 5.59628 0Z" fill="#585856" />
                         </svg>
                     </i>
                 </label>
                 <div class="popups">
                     <div class="popup-item" data-img="Asset/T.png">
                         <img src="Asset/T.png" alt="Icon 1" width="20" height="20">
                         <span>Text simple</span>
                     </div>
                     <div class="popup-item" data-img="Asset/down.png">
                         <img src="Asset/down.png" alt="Icon 2" width="20" height="20">
                         <span>Champ de selection</span>
                     </div>
                     <div class="popup-item" data-img="Asset/image.png">
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
                        <i class="down-i">
                         <svg width="10" height="10" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.59628 0H0.403717C0.0444951 0 -0.135116 0.382449 0.119165 0.606582L2.71444 2.89594C2.87185 3.03469 3.12815 3.03469 3.28556 2.89594L5.88084 0.606582C6.13512 0.382449 5.9555 0 5.59628 0Z" fill="#585856" />
                         </svg>
                     </i>
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

         <td>
        <picture class="pic-check"><input type="checkbox" name="" id=""
                class="td-check">
        </picture>
        </td>


         <td class="row-td">
        <picture>
            <i>
                <svg width="40" height="40" viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.05" y="-0.05" width="29.9" height="29.9"
                        rx="4.95" transform="matrix(1 0 0 -1 0 29.9)"
                        fill="#F2F4F7" stroke="#585856" stroke-width="0.1" />
                    <path
                        d="M22.9033 15.0818C21.397 12.0508 18.4147 10 15 10C11.5853 10 8.60221 12.0522 7.09665 15.0821C7.03311 15.2117 7 15.3549 7 15.5001C7 15.6454 7.03311 15.7886 7.09665 15.9182C8.60304 18.9492 11.5853 21 15 21C18.4147 21 21.3978 18.9478 22.9033 15.9179C22.9669 15.7883 23 15.6451 23 15.4999C23 15.3546 22.9669 15.2114 22.9033 15.0818ZM15 19.625C14.2089 19.625 13.4355 19.3831 12.7777 18.9298C12.1199 18.4766 11.6072 17.8323 11.3045 17.0786C11.0017 16.3248 10.9225 15.4954 11.0769 14.6953C11.2312 13.8951 11.6122 13.1601 12.1716 12.5832C12.731 12.0063 13.4437 11.6134 14.2196 11.4543C14.9956 11.2951 15.7998 11.3768 16.5307 11.689C17.2616 12.0012 17.8864 12.5299 18.3259 13.2083C18.7654 13.8866 19 14.6842 19 15.5C19.0003 16.0418 18.897 16.5783 18.696 17.0789C18.4951 17.5795 18.2005 18.0343 17.829 18.4174C17.4575 18.8005 17.0165 19.1043 16.531 19.3115C16.0456 19.5187 15.5254 19.6253 15 19.625ZM15 12.75C14.762 12.7534 14.5255 12.7899 14.2969 12.8586C14.4853 13.1226 14.5757 13.4475 14.5518 13.7744C14.5278 14.1012 14.391 14.4084 14.1662 14.6402C13.9415 14.872 13.6436 15.013 13.3266 15.0378C13.0097 15.0625 12.6946 14.9693 12.4386 14.775C12.2928 15.3289 12.3191 15.916 12.5139 16.4536C12.7086 16.9913 13.0619 17.4524 13.5241 17.7722C13.9862 18.0919 14.534 18.2541 15.0903 18.236C15.6465 18.2179 16.1833 18.0203 16.625 17.6712C17.0667 17.322 17.391 16.8387 17.5525 16.2895C17.7139 15.7402 17.7042 15.1526 17.5248 14.6093C17.3454 14.066 17.0053 13.5944 16.5524 13.2608C16.0995 12.9273 15.5565 12.7486 15 12.75Z"
                        fill="#585856" />
                </svg>
            </i>
            <i>
                <svg class="delete-champ" width="40" height="40"
                    viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="5"
                        transform="matrix(1 0 0 -1 0 30)" fill="#DC3545" />
                    <path
                        d="M9 22.4063C9 22.8289 9.15804 23.2343 9.43934 23.5332C9.72064 23.8321 10.1022 24 10.5 24H19.5C19.8978 24 20.2794 23.8321 20.5607 23.5332C20.842 23.2343 21 22.8289 21 22.4063V16.25C21 13.4886 18.7614 11.25 16 11.25H14C11.2386 11.25 9 13.4886 9 16.25V22.4063ZM17.5 13.9063C17.5 13.7654 17.5527 13.6302 17.6464 13.5306C17.7402 13.431 17.8674 13.375 18 13.375C18.1326 13.375 18.2598 13.431 18.3536 13.5306C18.4473 13.6302 18.5 13.7654 18.5 13.9063V21.3438C18.5 21.4846 18.4473 21.6198 18.3536 21.7194C18.2598 21.819 18.1326 21.875 18 21.875C17.8674 21.875 17.7402 21.819 17.6464 21.7194C17.5527 21.6198 17.5 21.4846 17.5 21.3438V13.9063ZM14.5 13.9063C14.5 13.7654 14.5527 13.6302 14.6464 13.5306C14.7402 13.431 14.8674 13.375 15 13.375C15.1326 13.375 15.2598 13.431 15.3536 13.5306C15.4473 13.6302 15.5 13.7654 15.5 13.9063V21.3438C15.5 21.4846 15.4473 21.6198 15.3536 21.7194C15.2598 21.819 15.1326 21.875 15 21.875C14.8674 21.875 14.7402 21.819 14.6464 21.7194C14.5527 21.6198 14.5 21.4846 14.5 21.3438V13.9063ZM11.5 13.9063C11.5 13.7654 11.5527 13.6302 11.6464 13.5306C11.7402 13.431 11.8674 13.375 12 13.375C12.1326 13.375 12.2598 13.431 12.3536 13.5306C12.4473 13.6302 12.5 13.7654 12.5 13.9063V21.3438C12.5 21.4846 12.4473 21.6198 12.3536 21.7194C12.2598 21.819 12.1326 21.875 12 21.875C11.8674 21.875 11.7402 21.819 11.6464 21.7194C11.5527 21.6198 11.5 21.4846 11.5 21.3438V13.9063ZM21.5 8.06251H18.4369C18.0175 8.06251 17.6356 7.82074 17.4563 7.44161C17.394 7.30887 17.2982 7.19721 17.1795 7.11919C17.0608 7.04118 16.9239 6.9999 16.7844 7.00001H13.2125C13.0732 6.99944 12.9367 7.04056 12.8184 7.11866C12.7001 7.19676 12.6049 7.30869 12.5437 7.44161C12.3644 7.82074 11.9825 8.06251 11.5631 8.06251H8.5C8.36739 8.06251 8.24021 8.11848 8.14645 8.2181C8.05268 8.31773 8 8.45286 8 8.59376V9.65626C8 9.79715 8.05268 9.93228 8.14645 10.0319C8.24021 10.1315 8.36739 10.1875 8.5 10.1875H21.5C21.6326 10.1875 21.7598 10.1315 21.8536 10.0319C21.9473 9.93228 22 9.79715 22 9.65626V8.59376C22 8.45286 21.9473 8.31773 21.8536 8.2181C21.7598 8.11848 21.6326 8.06251 21.5 8.06251Z"
                        fill="white" />
                </svg>

            </i>
        </picture>
    </td>
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

        const champRow = event.target.closest('tr');
        champRow.remove();

        // Vérifier si le message de maximum est présent
        const messageRow = document.querySelector('.max-champs-message');
        if (messageRow) {
            messageRow.remove();
            document.querySelector('.tr-add').style.visibility = 'visible';
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



