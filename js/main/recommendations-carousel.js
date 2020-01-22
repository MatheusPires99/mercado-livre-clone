const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children); 
const nextButton = document.querySelector(".carousel-button-right");
const prevButton = document.querySelector(".carousel-button-left");

// Pegando a largura do primeiro slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Colocando slides um ao lado do outro
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

// Botão de próximo
nextButton.addEventListener("click", function() {
    console.log("teste");
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amoutToMove = nextSlide.style.left;

    moveToSlide(track, currentSlide, nextSlide);
});

// Botão de voltar
prevButton.addEventListener("click", function() {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});