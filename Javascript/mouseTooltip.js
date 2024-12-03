const svgElement = document.getElementById('svg-about');
const tooltip = document.getElementById('sub');

svgElement.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
});

svgElement.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});
