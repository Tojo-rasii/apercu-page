const selectLabelPj = document.querySelector('.select-label-pj');
const popSelectPj = document.querySelector('.pop-select-pj');
const svgDown = document.querySelector('.svg-down');
const pSelectPopPj = document.querySelectorAll('.p-select-pop-pj');
const pSelectPj = document.querySelector('.p-select-pj');

selectLabelPj.addEventListener('click', function(){
 popSelectPj.classList.toggle('pop-display');
 svgDown.classList.toggle('rotate-pj');
})

pSelectPopPj.forEach(selectpop => {
    selectpop.addEventListener('click', function(){
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

