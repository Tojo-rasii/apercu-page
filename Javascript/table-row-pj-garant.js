console.log('Have a nice day garant !');

const btnAddPjGrt = document.querySelector('.btn-add-pj-garant');
const trAddPjGrt = document.querySelector('.tr-add-pj-garant');
const tbodyPjGrt = document.querySelector('.tbody-pj-garant');
const trAddPjBtnGrt = document.querySelector('.tr-add-pj-add-garant');



btnAddPjGrt.addEventListener('click', function () {
    // alert('red');
    trAddPjGrt.style.display = 'none';
    trAddPjBtnGrt.style.display = 'block';

    addNewChampPjGarant();
    addSelectGarantFunction();


})

// trAddPj.style.display = 'none';
