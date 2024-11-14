/*


let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;
    const slideWidth = slides.children[0].clientWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
*/
let currentIndex1 = 0;
let currentIndex2 = 0;

function moveSlide(direction, sliderNumber) {
    let slider, currentIndex, totalSlides;

    if (sliderNumber === 1) {
        slider = document.querySelector('#slider1 .slider');
        currentIndex = currentIndex1;
    } else if (sliderNumber === 2) {
        slider = document.querySelector('#slider2 .slider');
        currentIndex = currentIndex2;
    }

    totalSlides = slider.children.length;
    const slideWidth = slider.children[0].clientWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Actualiza el índice según el slider
    if (sliderNumber === 1) {
        currentIndex1 = currentIndex;
    } else if (sliderNumber === 2) {
        currentIndex2 = currentIndex;
    }
}

// Inicializar ambos sliders al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => moveSlide(1, 1), 3000); // Slider 1
    setInterval(() => moveSlide(1, 2), 3000); // Slider 2
});