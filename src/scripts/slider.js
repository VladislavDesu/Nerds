var btnSlide = document.querySelectorAll(".slider-indicator");

btnSlide[0].addEventListener("click", function(event) {
   event.preventDefault();
   promoBg[0].classList.add("promo__item--show");
   promoBg[1].classList.remove("promo__item--show");
   promoBg[2].classList.remove("promo__item--show");
   btnSlide[0].classList.add("slider-indicator--show");
   btnSlide[1].classList.remove("slider-indicator--show");
   btnSlide[2].classList.remove("slider-indicator--show");
});

btnSlide[1].addEventListener("click", function(event) {
   event.preventDefault();
   promoBg[1].classList.add("promo__item--show");
   promoBg[0].classList.remove("promo__item--show");
   promoBg[2].classList.remove("promo__item--show");
   btnSlide[1].classList.add("slider-indicator--show");
   btnSlide[0].classList.remove("slider-indicator--show");
   btnSlide[2].classList.remove("slider-indicator--show");
});

btnSlide[2].addEventListener("click", function(event) {
   event.preventDefault();
   promoBg[2].classList.add("promo__item--show");
   promoBg[0].classList.remove("promo__item--show");
   promoBg[1].classList.remove("promo__item--show");
   btnSlide[2].classList.add("slider-indicator--show");
   btnSlide[0].classList.remove("slider-indicator--show");
   btnSlide[1].classList.remove("slider-indicator--show");
});
