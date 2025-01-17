function addSelectFunction() {

    const selectLabelPj = document.querySelector('.select-label-pj');
    const popSelectPj = document.querySelector('.pop-select-pj');
    const svgDown = document.querySelector('.svg-down');
    const pSelectPopPj = document.querySelectorAll('.p-select-pop-pj');
    const pSelectPj = document.querySelector('.p-select-pj');

    selectLabelPj.addEventListener('click', function () {
        popSelectPj.classList.toggle('pop-display');
        svgDown.classList.toggle('rotate-pj');
    })

    pSelectPopPj.forEach(selectpop => {
        selectpop.addEventListener('click', function () {
            // alert(selectpop.getAttribute('data-value'));
            const valueSelect = selectpop.getAttribute('data-value');

            pSelectPj.innerHTML = valueSelect;


            popSelectPj.classList.toggle('pop-display');
            svgDown.classList.toggle('rotate-pj');

            // Supprimer la classe active-pj de tous les éléments
            pSelectPopPj.forEach(el => el.classList.remove('active-pj'));
            selectpop.classList.add('active-pj');
        })

        selectpop.classList.remove('active-pj');
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

