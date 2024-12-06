// main.js
import { addMultiSelectFeature } from './multi.js';

document.addEventListener("DOMContentLoaded", () => {
    const trAddPrimary = document.querySelector(".tr-add-primary");
    const trAddPrimaryTd = document.querySelector(".tr-add-primary td");
    const addPrimaryChampBtn = document.querySelector("#add-primary-champ");
    const tbody = document.querySelector(".table tbody");

    // Masquer initialement tous les champs sauf le champ primaire
    const allTr = document.querySelectorAll(".table tbody .champ, .table tbody .tr-add");
    allTr.forEach(tr => tr.style.display = "none");

    // Fonction pour créer et insérer un nouveau champ (ligne)
    const createNewChamp = () => {
        const newTr = document.createElement("tr");
        newTr.classList.add("champ");
        newTr.innerHTML = `
            <td class="td-title">
                <p>Nouveau champ</p>
            </td>
            <td></td>
            <td class='multi-select'>
                <picture>
                    <label>
                        <figure class="toggle-pop-up">
                            <p>Aucun élément sélectionné</p>
                            <i>&DownArrow;</i>
                        </figure>
                        <figure class="display-selecter">
                            <figcaption class="selected-items">
                                <picture>
                                    <div>
                                        <input type="checkbox" name="option1" class="option-checkbox">
                                        <p>Option 1</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="option2" class="option-checkbox">
                                        <p>Option 2</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="option3" class="option-checkbox">
                                        <p>Option 3</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="option4" class="option-checkbox">
                                        <p>Option 4</p>
                                    </div>
                                </picture>
                            </figcaption>
                        </figure>
                    </label>
                </picture>
            </td>
            <td>
                <picture class="pic-check"><input type="checkbox" class="td-check"></picture>
            </td>
            <td class="row-td">
                <picture>
                    <i>
                        <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.05" y="-0.05" width="29.9" height="29.9" rx="4.95" transform="matrix(1 0 0 -1 0 29.9)" fill="#F2F4F7" stroke="#585856" stroke-width="0.1" />
                            <path d="M22.9033 15.0818C21.397 12.0508 18.4147 10 15 10C11.5853 10 8.60221 12.0522 7.09665 15.0821C7.03311 15.2117 7 15.3549 7 15.5001C7 15.6454 7.03311 15.7886 7.09665 15.9182C8.60304 18.9492 11.5853 21 15 21C18.4147 21 21.3978 18.9478 22.9033 15.9179C22.9669 15.7883 23 15.6451 23 15.4999C23 15.3546 22.9669 15.2114 22.9033 15.0818ZM15 19.625C14.2089 19.625 13.4355 19.3831 12.7777 18.9298C12.1199 18.4766 11.6072 17.8323 11.3045 17.0786C11.0017 16.3248 10.9225 15.4954 11.0769 14.6953C11.2312 13.8951 11.6122 13.1601 12.1716 12.5832C12.731 12.0063 13.4437 11.6134 14.2196 11.4543C14.9956 11.2951 15.7998 11.3768 16.5307 11.689C17.2616 12.0012 17.8864 12.5299 18.3259 13.2083C18.7654 13.8866 19 14.6842 19 15.5C19.0003 16.0418 18.897 16.5783 18.696 17.0789C18.4951 17.5795 18.2005 18.0343 17.829 18.4174C17.4575 18.8005 17.0165 19.1043 16.531 19.3115C16.0456 19.5187 15.5254 19.6253 15 19.625ZM15 12.75C14.762 12.7534 14.5255 12.7899 14.2969 12.8586C14.4853 13.1226 14.5757 13.4475 14.5518 13.7744C14.5278 14.1012 14.391 14.4084 14.1662 14.6402C13.9415 14.872 13.6436 15.013 13.3266 15.0378C13.0097 15.0625 12.6946 14.9693 12.4386 14.775C12.2928 15.3289 12.3191 15.916 12.5139 16.4536C12.7086 16.9913 13.0619 17.4524 13.5241 17.7722C13.9862 18.0919 14.534 18.2541 15.0903 18.236C15.6465 18.2179 16.1833 18.0203 16.625 17.6712C17.0667 17.322 17.391 16.8387 17.5525 16.2895C17.7139 15.7402 17.7042 15.1526 17.5248 14.6093C17.3454 14.066 17.0053 13.5944 16.5524 13.2608C16.0995 12.9273 15.5565 12.7486 15 12.75Z" fill="#585856" />
                        </svg>
                    </i>
                    <i>
                        <svg class="delete-row" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="5" transform="matrix(1 0 0 -1 0 30)" fill="#DC3545" />
                            <path d="M9 22.4063C9 22.8286 9.33579 23.0938 9.75 23.0938C10.1642 23.0938 10.5 22.8286 10.5 22.4063V13.9063C10.5 13.7654 10.5527 13.6302 10.6464 13.5306C10.7402 13.431 10.8674 13.375 11 13.375C11.1326 13.375 11.2598 13.431 11.3536 13.5306C11.4473 13.6302 11.5 13.7654 11.5 13.9063V22.4063C11.5 22.8286 11.1642 23.0938 10.75 23.0938C10.3358 23.0938 10 22.8286 10 22.4063V13.9063ZM17.5 13.9063C17.5 13.7654 17.5527 13.6302 17.6464 13.5306C17.7402 13.431 17.8674 13.375 18 13.375C18.1326 13.375 18.2598 13.431 18.3536 13.5306C18.4473 13.6302 18.5 13.7654 18.5 13.9063V22.4063C18.5 22.8286 18.1642 23.0938 17.75 23.0938C17.3358 23.0938 17 22.8286 17 22.4063V13.9063ZM12 13.9063C12 13.7654 12.0527 13.6302 12.1464 13.5306C12.2402 13.431 12.3674 13.375 12.5 13.375C12.6326 13.375 12.7598 13.431 12.8536 13.5306C12.9473 13.6302 13 13.7654 13 13.9063V22.4063C13 22.8286 12.6642 23.0938 12.25 23.0938C11.8358 23.0938 11.5 22.8286 11.5 22.4063V13.9063Z" fill="white" />
                        </svg>
                    </i>
                </picture>
            </td>
        `;

        // Ajouter l'événement de suppression
        const deleteRowBtn = newTr.querySelector(".delete-row");
        deleteRowBtn.addEventListener("click", () => newTr.remove());

        tbody.appendChild(newTr);

        // Ajouter la fonctionnalité multi-sélection
        addMultiSelectFeature(newTr);
    };

    addPrimaryChampBtn.addEventListener("click", () => {
        createNewChamp();
        trAddPrimary.style.display = "none";
    });

    trAddPrimaryTd.addEventListener("click", () => {
        trAddPrimary.style.display = trAddPrimary.style.display === "none" ? "flex" : "none";
    });
});
