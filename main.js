"use strict";
import Typed from "typed.js";

const elemento = document.querySelector("#header-false");
const header = document.querySelector("#header");
const heroSection = document.querySelector("#hero-section");

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

const typed = new Typed(".text-presentation", {
  strings: ["web developer", "fullstack", "freelance"],
  typeSpeed: 50,
  backSpeed: 40,
  startDelay: 300,
  backDelay: 1200,
  loop: true,
});
