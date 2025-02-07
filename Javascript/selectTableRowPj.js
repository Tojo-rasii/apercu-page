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
            item.closest('.th-pj').querySelector('.p-select-pj').value = selectedText;
            item.closest('.pop-select-pj').style.display = 'none'; // Fermer le pop-up

            // Mettre à jour la classe active pour l'élément sélectionné
            document.querySelectorAll('.p-select-pop-pj').forEach(e => e.classList.remove('active-pj'));
            item.classList.add('active-pj');
        });
    });



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

function attachLastSelectHandler(container) {
    const lastSelect = container.querySelector('.last-select');
    const label = container.querySelector('.select-label-pj');
    const pop = container.querySelector('.pop-select-pj');
    const pSelect = container.querySelector('.p-select-pj'); // Récupérer le <p> à réinitialiser
    const defaultOptions = container.querySelectorAll('.p-select-pop-pj');

    if (lastSelect) {
        lastSelect.addEventListener('click', () => {
            pSelect.removeAttribute('readonly');
            pSelect.value = ''; // Réinitialiser le texte du <p> à vide
            pSelect.placeholder = ''; // Réinitialiser le texte du <p> à vide
            pSelect.focus(); // Mettre le focus sur le champ
            pop.style.display = 'none'; // Supprimer le pop-up


            // pSelect.addEventListener('blur', function () {
            //    alert(pSelect.value)
            // })

        });
    }
    defaultOptions.forEach(option => {
        option.addEventListener('click', () => {
            pSelect.setAttribute('readonly', 'readonly'); // Restaurer readonly si un choix est fait
            pop.style.display = 'none'; // Masquer le pop-up
        });
    });

    // Ajouter un événement global pour fermer le pop-up si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) { // Vérifie si le clic est en dehors du container
            pop.style.display = 'none'; // Masquer le pop-up
            pSelect.placeholder = 'Bulletin de paie'; // Réinitialiser le texte du <p> à vide
            pSelect.setAttribute('readonly', 'readonly');
        }
    });
}

// Appeler la fonction pour lier les événements

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
            itemgrt.closest('.th-pj').querySelector('.p-select-pj-garant').value = selectedTextgrt;

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



function attachLastSelectGarantHandler(container) {
    const lastSelectGarant = container.querySelector('.last-select-garant');
    const label = container.querySelector('.select-label-pj-garant');
    const popGarant = container.querySelector('.pop-select-pj-garant');
    const pSelectGarant = container.querySelector('.p-select-pj-garant'); // Récupérer le <p> à réinitialiser
    const defaultOptionsGarant = container.querySelectorAll('.p-select-pop-pj-garant');

    if (lastSelectGarant) {
        lastSelectGarant.addEventListener('click', () => {
            pSelectGarant.removeAttribute('readonly');
            pSelectGarant.value = ''; // Réinitialiser le texte du <p> à vide
            pSelectGarant.placeholder = ''; // Réinitialiser le texte du <p> à vide
            pSelectGarant.focus(); // Mettre le focus sur le champ
            popGarant.style.display = 'none'; // Supprimer le popGarant-up


            // pSelectGarant.addEventListener('blur', function () {
            //    alert(pSelectGarant.value)
            // })

        });
    }
    defaultOptionsGarant.forEach(option => {
        option.addEventListener('click', () => {
            pSelectGarant.setAttribute('readonly', 'readonly'); // Restaurer readonly si un choix est fait
            popGarant.style.display = 'none'; // Masquer le pop-up
        });
    });

    // Ajouter un événement global pour fermer le pop-up si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) { // Vérifie si le clic est en dehors du container
            popGarant.style.display = 'none'; // Masquer le pop-up
            pSelectGarant.placeholder = 'Bulletin de paie'; // Réinitialiser le texte du <p> à vide
            pSelectGarant.setAttribute('readonly', 'readonly');
        }
    });
}