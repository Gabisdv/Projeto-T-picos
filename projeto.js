let slideIndex = 1;

function mostrarSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
        dots[index].classList.remove("active");
    });

    dots[slideIndex - 1].classList.add("active");
}

function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mudarParaSlide(n) {
    mostrarSlide(slideIndex = n);
}

mostrarSlide(slideIndex);  // Inicializa o carrossel com o primeiro slide.