const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

document.getElementById('prev').addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.getAttribute('data-index')));
    });
});

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

// Optional: Auto-slide
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);
