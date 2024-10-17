let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
    slides[slideIndex - 1].style.display = 'flex'; // Flex for centering

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
