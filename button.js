let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector("#controls");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle1 = document.querySelector(".nav__toggle1");
let navWrapper1 = document.querySelector("#calculator");

navToggle1.addEventListener("click", function () {
  if (navWrapper1.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper1.classList.remove("active");
  } else {
    navWrapper1.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle2 = document.querySelector(".nav__toggle2");
let navWrapper2 = document.querySelector("#formulaNav");

navToggle2.addEventListener("click", function () {
  if (navWrapper2.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper2.classList.remove("active");
  } else {
    navWrapper2.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle4 = document.querySelector(".nav__toggle4");
let navWrapper4 = document.querySelector("#formulaControls");

navToggle4.addEventListener("click", function () {
  if (navWrapper4.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper4.classList.remove("active");
  } else {
    navWrapper4.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle5 = document.querySelector(".nav__toggle5");
let navWrapper5 = document.querySelector("#formulaCalcu");

navToggle5.addEventListener("click", function () {
  if (navWrapper5.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper5.classList.remove("active");
  } else {
    navWrapper5.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle6 = document.querySelector(".nav__toggle6");
let navWrapper6 = document.querySelector("#Foc");

navToggle6.addEventListener("click", function () {
  if (navWrapper6.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper6.classList.remove("active");
  } else {
    navWrapper6.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle7 = document.querySelector(".nav__toggle7");
let navWrapper7 = document.querySelector("#Fcm");

navToggle7.addEventListener("click", function () {
  if (navWrapper7.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper7.classList.remove("active");
  } else {
    navWrapper7.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle8 = document.querySelector(".nav__toggle8");
let navWrapper8 = document.querySelector("#Stats");

navToggle8.addEventListener("click", function () {
  if (navWrapper8.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper8.classList.remove("active");
  } else {
    navWrapper8.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

let navToggle9 = document.querySelector(".nav__toggle9");
let navWrapper9 = document.querySelector("#Mmw");

navToggle9.addEventListener("click", function () {
  if (navWrapper9.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper9.classList.remove("active");
  } else {
    navWrapper9.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});