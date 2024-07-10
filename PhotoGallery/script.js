let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("main-slide");
    let previewImages = document.getElementsByClassName("preview-image");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    
    for (let previewImage of previewImages) {
        previewImage.classList.remove("active");
    }
    previewImages[slideIndex - 1].classList.add("active");
}
