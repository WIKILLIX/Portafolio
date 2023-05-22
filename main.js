"use strict";
import Typed from "typed.js";

const elemento = document.querySelector("#header-false");
const header = document.querySelector("#header");
const heroSection = document.querySelector("#hero-section");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const nav = document.querySelector("nav");
const loader = document.querySelector("#loader");
const dateYear = new Date();
const dateCopyright = document.getElementById("year");

//mantiene el loader hasta que la pagina carga
window.addEventListener("load", () => {
  loader.classList.add("hidden");
});

// valida si el nav sale de la vista del usuario o vuelve a entrar a la vista
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    header.classList.toggle("header-fixed", !entry.isIntersecting);
    heroSection.classList.toggle("pt-20", !entry.isIntersecting);
  });
});

observer.observe(elemento);
// header-active
//agrega la clase header-active al header basado en la section en la que se encuentre el usuario

const options = {
  threshold: 0.5,
};
const activeSections = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        link.classList.toggle(
          "header-active",
          link.href.includes(entry.target.id)
        );
      });
    }
  });
};

const observerSections = new IntersectionObserver(activeSections, options);

sections.forEach((section) => observerSections.observe(section));

//efecto maquina de escribir

const typed = new Typed(".text-presentation", {
  strings: ["desarrollador web", "fullstack", "freelance"],
  typeSpeed: 50,
  backSpeed: 40,
  startDelay: 300,
  backDelay: 1200,
  loop: true,
});

const visibleMenu = () => {
  // nav.classList.toggle("max-md:hidden");
  nav.classList.toggle("max-md:scale-100");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
};

//boton de navegacion para moviles
openMenu.addEventListener("click", visibleMenu);
closeMenu.addEventListener("click", visibleMenu);

const date = () => {
  const getYear = dateYear.getFullYear();

  dateCopyright.innerHTML = getYear;
};

date();
