"use strict";

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
