"use strict";
import Typed from "typed.js";

const elemento = document.querySelector("#header-false");
const header = document.querySelector("#header");
const heroSection = document.querySelector("#hero-section");
const skills = document.querySelector("#skills");
const aboutMe = document.querySelector("#about-me");
// valida si el nav sale de la vista del usuario o vuelve a entrar a la vista
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.add("header");
      header.classList.remove("header-fixed");
      heroSection.classList.remove("pt-20");
    } else {
      header.classList.add("header-fixed");
      heroSection.classList.add("pt-20");
    }
  });
});

observer.observe(elemento);
// header-active
//agrega la clase header-active al header basado en la sectin en la que se encuentre el usuario
let options = {
  root: document.querySelector("#main"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observerMain = new IntersectionObserver(callback, options);

var callback = function (entries, observer) {
  entries.forEach((entry) => {
    // Cada entry describe un cambio en la intersección para
    // un elemento observado
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

//efecto maquina de escribir
const typed = new Typed(".text-presentation", {
  strings: ["web developer", "fullstack", "freelance"],
  typeSpeed: 50,
  backSpeed: 40,
  startDelay: 300,
  backDelay: 1200,
  loop: true,
});
