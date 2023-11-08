const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel img');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        moveCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveCarousel();
    }
});

function moveCarousel() {
    const slideWidth = slides[0].offsetWidth;
    const newPosition = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${newPosition}px)`;
}

