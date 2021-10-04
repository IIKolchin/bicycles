new Swiper(".slider__container", {
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },

  loop: true,
});

const swiper = new Swiper(".bicycles__slider");

document
  .querySelector(".bicycle__button_highway")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });

document
  .querySelector(".bicycle__button_grevel")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(1, 0);
  });

document
  .querySelector(".bicycle__button_tt")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(2, 0);
  });

const buttonHighway = document.querySelector(".bicycle__button_highway");
const buttonGrevel = document.querySelector(".bicycle__button_grevel");
const buttonTt = document.querySelector(".bicycle__button_tt");

buttonHighway.classList.add("bicycle__button-active");

buttonHighway.addEventListener("click", function () {
  buttonHighway.classList.add("bicycle__button-active");
  buttonGrevel.classList.remove("bicycle__button-active");
  buttonTt.classList.remove("bicycle__button-active");
});

buttonGrevel.addEventListener("click", function () {
  buttonGrevel.classList.add("bicycle__button-active");
  buttonHighway.classList.remove("bicycle__button-active");
  buttonTt.classList.remove("bicycle__button-active");
});

buttonTt.addEventListener("click", function () {
  buttonTt.classList.add("bicycle__button-active");
  buttonHighway.classList.remove("bicycle__button-active");
  buttonGrevel.classList.remove("bicycle__button-active");
});

const switchButton = document.querySelector(".footer__icon-button");

switchButton.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark");
});

const input = document.querySelector(".footer__input");
const inputButton = document.querySelector(".footer__input-button");

input.addEventListener("click", function () {
  inputButton.classList.add("footer__input-button-on");
  input.removeAttribute("placeholder");
});

inputButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  input.value = "Круто!";
});

const mobileHeaderButton = document.querySelector(".header__button_mobile");

mobileHeaderButton.addEventListener("click", function () {
  document.querySelector(".header_mobile").classList.add("header_mobile-off");
  document.querySelector(".header_menu").classList.add("header_menu-on");
  document.querySelector(".triathlon").classList.add("triathlon-mobile-indent");
});

const closeMenu = document.querySelector(".header__close");

closeMenu.addEventListener("click", function () {
  document.querySelector(".header_menu").classList.remove("header_menu-on");
  document
    .querySelector(".header_mobile")
    .classList.remove("header_mobile-off");
  document
    .querySelector(".triathlon")
    .classList.remove("triathlon-mobile-indent");
});
