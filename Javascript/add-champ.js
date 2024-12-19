function addNewChamp(tableBody) {
    const newRow = document.createElement('div');
    newRow.classList.add('champ');

    newRow.innerHTML = `
        <div class="column">
            <div class="search-container-section">
                <div class="selected-item-section">
                    <label class="select-label">
                        <input type="text" class="search-input" placeholder="Candidat" readonly>
                        <i class="down-i"></i>
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
            </div>
        </div>

        <div class="column td-title">
            <label class="select-label">
                <input type="text" class="search-input" placeholder="Nouveau champ">
            </label>
        </div>

        <div class="column">
            <div class="search-container">
                <div class="selected-item">
                    <label class="select-label">
                        <img class="selected-icon" src="Asset/123.png" width="20" height="20">
                        <input type="text" class="search-input" placeholder="Champ numérique" readonly>
                    </label>
                    <div class="popups"></div>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="multi-select-wrapper"></div>
        </div>

        <div class="column">
            <div class="pic-check">
                <input type="checkbox" class="td-check">
            </div>
        </div>

        <div class="column row-td">
            <i class="delete-champ">🗑️</i>
        </div>
    `;

    tableBody.insertBefore(newRow, document.querySelector('.tr-add'));

    // Ajouter le comportement de suppression
    newRow.querySelector('.delete-champ').addEventListener('click', function () {
        newRow.remove();

        if (tableBody.querySelectorAll('.champ').length === 0) {
            document.querySelector('.last-tr').style.display = '';
            document.querySelector('.tr-add').style.display = 'none';
        }
    });
}
