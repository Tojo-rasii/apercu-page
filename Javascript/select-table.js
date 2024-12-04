document.querySelectorAll('.search-container').forEach(container => {
    const input = container.querySelector('.search-input');
    const popup = container.querySelector('.popups');
    const selectedIcon = container.querySelector('.selected-icon');
    const items = container.querySelectorAll('.popup-item');
  
    // Afficher la popup lorsqu'on clique sur l'input
    input.addEventListener('focus', () => {
      popup.style.display = 'block';
    });
  
    // Cacher la popup lorsqu'on clique en dehors
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        popup.style.display = 'none';
      }
    });
  
    // Mettre à jour l'image et le texte sélectionnés
    items.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        const text = item.querySelector('span').textContent;
  
        // Mettre à jour l'image et le texte
        selectedIcon.src = imgSrc;
        input.value = text;
  
        popup.style.display = 'none';
      });
    });
  });
  