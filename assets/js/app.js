"use strict";

(function() {


  /**
  * Add a function that will be called when the window is loaded.
  */
  window.addEventListener("load", init);

  /**
  * CHANGE: Describe what your init function does here.
  */
  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
    // scroll to top functionality
    const scrollUp = document.querySelector("#scroll-up");

    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });


    // Nav hamburgerburger selections
    const burger = document.querySelector("#burger-menu");
    const ul = document.querySelector("nav ul");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
      ul.classList.toggle("show");
    });

    // Close hamburger menu when a link is clicked
    // Select nav links
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((link) =>
      link.addEventListener("click", () => {
        ul.classList.remove("show");
      })
  );


  }
  
  

  
})();