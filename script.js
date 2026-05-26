const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});


const slides = document.querySelectorAll(".slide");
const proximo = document.querySelector(".proximo");
const anterior = document.querySelector(".anterior");

let atual = 0;

function mostrarSlide(index){

  slides.forEach(slide => {
    slide.classList.remove("ativo");
  });

  slides[index].classList.add("ativo");
}

proximo.addEventListener("click", () => {

  atual++;

  if(atual >= slides.length){
    atual = 0;
  }

  mostrarSlide(atual);
});

anterior.addEventListener("click", () => {

  atual--;

  if(atual < 0){
    atual = slides.length - 1;
  }

  mostrarSlide(atual);
});



setInterval(() => {

  atual++;

  if(atual >= slides.length){
    atual = 0;
  }

  mostrarSlide(atual);

}, 5000);