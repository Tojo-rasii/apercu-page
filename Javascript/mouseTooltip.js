const svgElement = document.getElementById('svg-about');
const svgElementGarant = document.getElementById('svg-about-garant');
const tooltipGarant = document.getElementById('sub-garant');
const tooltip = document.getElementById('sub');

svgElementGarant.addEventListener('mouseenter', () => {
    tooltipGarant.style.display = 'block';
});

svgElementGarant.addEventListener('mouseleave', () => {
    tooltipGarant.style.display = 'none';
});

svgElement.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
});

svgElement.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});
