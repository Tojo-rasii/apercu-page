
document.querySelector('.tr-add-pj-add-garant').onclick = () => {
    addNewChampPjGarant();
    addSelectGarantFunction();

}

function addNewChampPjGarant() {
    // alert('red');

    const divTrSelectGarant = document.createElement('div');
    divTrSelectGarant.classList.add('tr-add-select-pj-garant');

    divTrSelectGarant.innerHTML = `
                                 <div class="th-pj th-primary">
                                         <figure class="select-pj">
                                            <label class="select-label-pj-garant">
                                                  <input type='text' readonly class="p-select-pj-garant inpt-p-select-garant" placeholder='Bulletin de paie'>
                                                <i class="svg-down-garant">
                                                    <svg width="15" height="7" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.64288 0H0.896441C0.498902 0 0.300133 0.382449 0.581537 0.606582L3.45364 2.89594C3.62784 3.03469 3.91148 3.03469 4.08568 2.89594L6.95778 0.606582C7.23919 0.382449 7.04042 0 6.64288 0Z" fill="#585856"/>
                                                        </svg>
                                                        
                                                </i>
                                            </label>

                                            <!-- Pop label pj -->
                                             <div class="pop-select-pj-garant">
                                                <div class="col-pop-pj">
                                                    <picture class="p-select-pop-pj-garant" data-value="Bulletin de paie">
                                                        <p>Bulletin de paie</p>
                                                    </picture>
                                                    <picture class="p-select-pop-pj-garant" data-value="Justificatif d’identité">
                                                        <p>Justificatif d’identité</p>
                                                    </picture>
                                                    <picture class="p-select-pop-pj-garant" data-value="Justificatif de revenus">
                                                        <p>Justificatif de revenus</p>
                                                    </picture>
                                                    <picture class="p-select-pop-pj-garant" data-value="Quittance de loyer">
                                                        <p>Quittance de loyer</p>
                                                    </picture>
                                                    <picture class="p-select-pop-pj-garant" data-value="Plusieurs mois d’avance">
                                                        <p>Plusieurs mois d’avance</p>
                                                    </picture>
                                                    <picture class="p-select-pop-pj-garant" data-value="Déclaration d’impôt">
                                                        <p>Déclaration d’impôt</p>
                                                    </picture>
                                                    <picture class="p-select-pop-pj-garant" data-value="Recommandation du dernier bailleur">
                                                        <p>Recommandation du dernier bailleur</p>
                                                    </picture>
                                                    <picture class="last-select-garant">
                                                         <p><span class="plus-pj">+</span>Ajouter une nouvelle pièce</p>
                                                    </picture>
                                                </div>
                                             </div>
                                         </figure>
                                    </div>
                                    
                                    <!-- CHECK -->
                                    <div class="th-pj th-secondary">
                                        <picture class="inpt-check-pj">
                                            <input type="checkbox" name="" id="">
                                        </picture>
                                   </div>

                                   <!-- ACTION -->
                                   <div class="th-pj th-tertiary">
                                    <picture class="action-row-pj">
                                        <i class="i-see-pj">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.05" y="-0.05" width="29.9" height="29.9" rx="4.95" transform="matrix(1 0 0 -1 0 29.9)" fill="#F2F4F7" stroke="#585856" stroke-width="0.1"/>
                                                <path d="M22.9033 15.0818C21.397 12.0508 18.4147 10 15 10C11.5853 10 8.60221 12.0522 7.09665 15.0821C7.03311 15.2117 7 15.3549 7 15.5001C7 15.6454 7.03311 15.7886 7.09665 15.9182C8.60304 18.9492 11.5853 21 15 21C18.4147 21 21.3978 18.9478 22.9033 15.9179C22.9669 15.7883 23 15.6451 23 15.4999C23 15.3546 22.9669 15.2114 22.9033 15.0818ZM15 19.625C14.2089 19.625 13.4355 19.3831 12.7777 18.9298C12.1199 18.4766 11.6072 17.8323 11.3045 17.0786C11.0017 16.3248 10.9225 15.4954 11.0769 14.6953C11.2312 13.8951 11.6122 13.1601 12.1716 12.5832C12.731 12.0063 13.4437 11.6134 14.2196 11.4543C14.9956 11.2951 15.7998 11.3768 16.5307 11.689C17.2616 12.0012 17.8864 12.5299 18.3259 13.2083C18.7654 13.8866 19 14.6842 19 15.5C19.0003 16.0418 18.897 16.5783 18.696 17.0789C18.4951 17.5795 18.2005 18.0343 17.829 18.4174C17.4575 18.8005 17.0165 19.1043 16.531 19.3115C16.0456 19.5187 15.5254 19.6253 15 19.625ZM15 12.75C14.762 12.7534 14.5255 12.7899 14.2969 12.8586C14.4853 13.1226 14.5757 13.4475 14.5518 13.7744C14.5278 14.1012 14.391 14.4084 14.1662 14.6402C13.9415 14.872 13.6436 15.013 13.3266 15.0378C13.0097 15.0625 12.6946 14.9693 12.4386 14.775C12.2928 15.3289 12.3191 15.916 12.5139 16.4536C12.7086 16.9913 13.0619 17.4524 13.5241 17.7722C13.9862 18.0919 14.534 18.2541 15.0903 18.236C15.6465 18.2179 16.1833 18.0203 16.625 17.6712C17.0667 17.322 17.391 16.8387 17.5525 16.2895C17.7139 15.7402 17.7042 15.1526 17.5248 14.6093C17.3454 14.066 17.0053 13.5944 16.5524 13.2608C16.0995 12.9273 15.5565 12.7486 15 12.75Z" fill="#585856"/>
                                                </svg>
                                                
                                        </i>
                                        <i class="i-delete-pj-garant">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="30" height="30" rx="5" transform="matrix(1 0 0 -1 0 30)" fill="#DC3545"/>
                                                <path d="M9 22.4063C9 22.8289 9.15804 23.2343 9.43934 23.5332C9.72064 23.8321 10.1022 24 10.5 24H19.5C19.8978 24 20.2794 23.8321 20.5607 23.5332C20.842 23.2343 21 22.8289 21 22.4063V16.25C21 13.4886 18.7614 11.25 16 11.25H14C11.2386 11.25 9 13.4886 9 16.25V22.4063ZM17.5 13.9063C17.5 13.7654 17.5527 13.6302 17.6464 13.5306C17.7402 13.431 17.8674 13.375 18 13.375C18.1326 13.375 18.2598 13.431 18.3536 13.5306C18.4473 13.6302 18.5 13.7654 18.5 13.9063V21.3438C18.5 21.4846 18.4473 21.6198 18.3536 21.7194C18.2598 21.819 18.1326 21.875 18 21.875C17.8674 21.875 17.7402 21.819 17.6464 21.7194C17.5527 21.6198 17.5 21.4846 17.5 21.3438V13.9063ZM14.5 13.9063C14.5 13.7654 14.5527 13.6302 14.6464 13.5306C14.7402 13.431 14.8674 13.375 15 13.375C15.1326 13.375 15.2598 13.431 15.3536 13.5306C15.4473 13.6302 15.5 13.7654 15.5 13.9063V21.3438C15.5 21.4846 15.4473 21.6198 15.3536 21.7194C15.2598 21.819 15.1326 21.875 15 21.875C14.8674 21.875 14.7402 21.819 14.6464 21.7194C14.5527 21.6198 14.5 21.4846 14.5 21.3438V13.9063ZM11.5 13.9063C11.5 13.7654 11.5527 13.6302 11.6464 13.5306C11.7402 13.431 11.8674 13.375 12 13.375C12.1326 13.375 12.2598 13.431 12.3536 13.5306C12.4473 13.6302 12.5 13.7654 12.5 13.9063V21.3438C12.5 21.4846 12.4473 21.6198 12.3536 21.7194C12.2598 21.819 12.1326 21.875 12 21.875C11.8674 21.875 11.7402 21.819 11.6464 21.7194C11.5527 21.6198 11.5 21.4846 11.5 21.3438V13.9063ZM21.5 8.06251H18.4369C18.0175 8.06251 17.6356 7.82074 17.4563 7.44161C17.394 7.30887 17.2982 7.19721 17.1795 7.11919C17.0608 7.04118 16.9239 6.9999 16.7844 7.00001H13.2125C13.0732 6.99944 12.9367 7.04056 12.8184 7.11866C12.7001 7.19676 12.6049 7.30869 12.5437 7.44161C12.3644 7.82074 11.9825 8.06251 11.5631 8.06251H8.5C8.36739 8.06251 8.24021 8.11848 8.14645 8.2181C8.05268 8.31773 8 8.45286 8 8.59376V9.65626C8 9.79715 8.05268 9.93228 8.14645 10.0319C8.24021 10.1315 8.36739 10.1875 8.5 10.1875H21.5C21.6326 10.1875 21.7598 10.1315 21.8536 10.0319C21.9473 9.93228 22 9.79715 22 9.65626V8.59376C22 8.45286 21.9473 8.31773 21.8536 8.2181C21.7598 8.11848 21.6326 8.06251 21.5 8.06251Z" fill="white"/>
                                                </svg>
                                                
                                        </i>
                                    </picture>
                               </div>
                                 `



    tbodyPjGrt.insertBefore(divTrSelectGarant, document.querySelector('.tr-add-pj-add-garant'));
    attachLastSelectGarantHandler(divTrSelectGarant);

    // Ajouter le comportement de suppression

    divTrSelectGarant.querySelector('.i-delete-pj-garant').addEventListener('click', function () {
        divTrSelectGarant.remove();

        // trAddPjGrt.style.display = 'block';

        // divTrSelectGarant.style.display = 'none';
        // divTrSelectGarant.innerHTML = '';

        if (document.querySelectorAll('.tr-add-select-pj-garant').length === 0) {

            trAddPjBtnGrt.style.display = 'none';
            trAddPjGrt.style.display = 'block';

        }
        // alert('delete')
    });

    addSelectGarantFunction();

    // trAddPjBtn.style.display = 'none';

    // alert("erd")





}
