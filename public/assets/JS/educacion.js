
const slides = document.querySelectorAll(".slide");
const anteriorBtn = document.querySelector(".anterior");
const siguienteBtn = document.querySelector(".siguiente");

let contador = 0;

siguienteBtn.addEventListener("click", () => {
    contador++;
    if (contador >= slides.length) {
        contador = 0;
    }
    actualizarSlide();
});

anteriorBtn.addEventListener("click", () => {
    contador--;
    if (contador < 0) {
        contador = slides.length - 1;
    }
    actualizarSlide();
});

function actualizarSlide() {
    slides.forEach((slide, index) => {
        if (index === contador) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

actualizarSlide();
