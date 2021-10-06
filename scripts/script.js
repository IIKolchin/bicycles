const buttonHighway = document.querySelector(".bicycle__button-highway");
const buttonGrevel = document.querySelector(".bicycle__button-grevel");
const buttonTt = document.querySelector(".bicycle__button-tt");

new Swiper(".slider__container", {
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },

  loop: true,
});

new Swiper(".slider__container_mobile", {
  navigation: {
    nextEl: ".slider__button-next_mobile",
    prevEl: ".slider__button-prev_mobile",
  },

  loop: true,
});

const swiper = new Swiper(".bicycles__slider");

buttonHighway.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(0, 0);
});

buttonGrevel.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(1, 0);
});

buttonTt.addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(2, 0);
});

const swiperBicycleMobile = new Swiper(".bicycles__slider-mobile");

const select = document.querySelector(".bicycle__buttons-mobile");

select.addEventListener("change", function () {
  if (this.value == "highway") {
    swiperBicycleMobile.slideTo(0, 0);
  } else if (this.value == "grevel") {
    swiperBicycleMobile.slideTo(1, 0);
  } else if (this.value == "tt") {
    swiperBicycleMobile.slideTo(2, 0);
  }
});

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

const switchButtonFooter = document.querySelector(".footer__switch-button");

switchButtonFooter.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark");
});

const switchButtonHeader = document.querySelector(".header__switch-button");

switchButtonHeader.addEventListener("click", function () {
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
});

const closeMenu = document.querySelector(".header__close");

closeMenu.addEventListener("click", function () {
  document.querySelector(".header_menu").classList.remove("header_menu-on");
  document
    .querySelector(".header_mobile")
    .classList.remove("header_mobile-off");
});

const swiperInHighway = new Swiper(".slider-highway", {
  pagination: {
    el: ".slider__pagination-highway",
    clickable: true,
  },
});

const swiperInGrevel = new Swiper(".slider-grevel", {
  pagination: {
    el: ".slider__pagination-grevel",
    clickable: true,
  },
});

const swiperInTt = new Swiper(".slider-tt", {
  pagination: {
    el: ".slider__pagination-tt",
    clickable: true,
  },
});
