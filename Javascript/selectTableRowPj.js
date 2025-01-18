function addSelectFunction() {

    const selectLabelPj = document.querySelectorAll('.select-label-pj');
    const popSelectPj = document.querySelectorAll('.pop-select-pj');
    const svgDown = document.querySelectorAll('.svg-down');
    const pSelectPopPj = document.querySelectorAll('.p-select-pop-pj');
    const pSelectPj = document.querySelectorAll('.p-select-pj');



    // Vérifie que tous les éléments nécessaires existent
    // selectLabelPj.forEach((selectclick, index) => {
    //     selectclick.addEventListener('click', function (e) {
    //         e.stopPropagation();

    //         // Supprime les classes sur tous les autres éléments avant d'ajouter
    //         popSelectPj.forEach((pop, i) => {
    //             if (i !== index) {
    //                 pop.classList.remove('pop-display');
    //                 svgDown[i].classList.remove('rotate-pj');
    //             }
    //         });

    //         // Bascule les classes pour l'élément courant
    //         popSelectPj[index].classList.toggle('pop-display');
    //         svgDown[index].classList.toggle('rotate-pj');

    //         console.log(`Index : ${index}, Element :`, popSelectPj[index]);
    //     });
    // });

    document.addEventListener('click', function (e) {
        selectLabelPj.forEach((selectclick, index) => {
            if (selectclick.contains(e.target)) {
                e.stopPropagation();

                popSelectPj.forEach((pop, i) => {
                    if (i !== index) {
                        pop.classList.remove('pop-display');
                        svgDown[i].classList.remove('rotate-pj');
                    }
                });

                popSelectPj[index].classList.toggle('pop-display');
                svgDown[index].classList.toggle('rotate-pj');
            }
        });
    });



    // Optionnel : Fermer toutes les listes déroulantes au clic ailleurs sur la page
    document.addEventListener('click', () => {
        popSelectPj.forEach((pop) => pop.classList.remove('pop-display'));
        svgDown.forEach((svg) => svg.classList.remove('rotate-pj'));
    });


    pSelectPopPj.forEach((selectpop) => {
        selectpop.addEventListener('click', function () {
            const valueSelect = selectpop.getAttribute('data-value');
            const parentIndex = [...popSelectPj].findIndex(pop =>
                pop.contains(selectpop)
            );

            // Mise à jour du contenu correspondant
            if (parentIndex !== -1) {
                pSelectPj[parentIndex].innerHTML = valueSelect;

                // Supprimer la classe active des autres éléments de la liste
                popSelectPj[parentIndex].querySelectorAll('.p-select-pop-pj').forEach(el => {
                    el.classList.remove('active-pj');
                });

                // Ajouter la classe active à l'élément sélectionné
                selectpop.classList.add('active-pj');
            }
        });
    });
};

// SELECT GARANT
function addSelectGarantFunction() {

    const selectLabelPjGarant = document.querySelector('.select-label-pj-garant');
    const popSelectPjGarant = document.querySelector('.pop-select-pj-garant');
    const svgDownGarant = document.querySelector('.svg-down-garant');
    const pSelectPopPjGarant = document.querySelectorAll('.p-select-pop-pj-garant');
    const pSelectPjGarant = document.querySelector('.p-select-pj-garant');

    selectLabelPjGarant.addEventListener('click', function () {
        popSelectPjGarant.classList.toggle('pop-display-garant');
        svgDownGarant.classList.toggle('rotate-pj-garant');
    })

    pSelectPopPjGarant.forEach(selectpopgarant => {
        selectpopgarant.addEventListener('click', function () {
            // alert(selectpop.getAttribute('data-value'));
            const valueSelect = selectpopgarant.getAttribute('data-value');

            pSelectPjGarant.innerHTML = valueSelect;


            popSelectPjGarant.classList.toggle('pop-display-garant');
            svgDownGarant.classList.toggle('rotate-pj-garant');

            // Supprimer la classe active-pj de tous les éléments
            pSelectPopPjGarant.forEach(e => e.classList.remove('active-pj-garant'));
            selectpopgarant.classList.add('active-pj-garant');
        })

        selectpopgarant.classList.remove('active-pj-garant');
    });

};

