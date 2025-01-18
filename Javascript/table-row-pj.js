console.log('Have a nice day !');

const btnAddPj = document.querySelector('.btn-add-pj');
const tbodyPj = document.querySelector('.tbody-pj');
const trAddPj = document.querySelector('.tr-add-pj');
const trAddPjBtn = document.querySelector('.tr-add-pj-add');

btnAddPj.addEventListener('click', function () {
    // alert('red');

    trAddPj.style.display = 'none';
    trAddPjBtn.style.display = 'block';

    // TABLE
    addNewChampPj()
    addSelectFunction();
})

// FUNCTION ADD NEW CHAMP


