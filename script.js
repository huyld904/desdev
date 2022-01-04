"use strict";

/////// Click scroll sections
document.querySelector(".header__nav").addEventListener("click", function (e) {
   e.preventDefault();

   // Matching stratery
   if (e.target.classList.contains("header-nav__item")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
   }
});

document.querySelector(".footer__nav").addEventListener("click", function (e) {
   e.preventDefault();

   // Matching stratery
   if (e.target.classList.contains("footer-nav__item")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
   }
});

document.querySelector(".banner__btn").addEventListener("click", function (e) {
   e.preventDefault();

   // Matching stratery
   if (e.target.classList.contains("banner__btn-item")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
   }
});

///////// Drop Down
const dropMenu = document.querySelector(".header__nav");
const dropMenuItems = document.querySelectorAll(".header-nav__item");
const burger = document.querySelector(".icon");
const overlay = document.querySelector(".overlay");
const dropDown = function () {
   burger.addEventListener("click", () => {
      dropMenu.classList.toggle("drop__menu-active");
      overlay.classList.remove("hidden");
   });
};
dropDown();

const removeDrop = function () {
   dropMenuItems.forEach((item) =>
      item.addEventListener("click", () => {
         dropMenu.classList.remove("drop__menu-active");
         overlay.classList.add("hidden");
      })
   );
};
removeDrop();

const closeMenu = function () {
   dropMenu.classList.remove("drop__menu-active");
   overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (e) {
   if (
      e.key === "Escape" &&
      !dropMenu.classList.contains("drop__menu-active")
   ) {
      closeMenu();
   }
});

// Roll
window.addEventListener("scroll", function () {
   const headerScroll = document.querySelector(".header");
   const image = document.querySelector(".logo");
   if (headerScroll.classList.toggle("sticky", window.scrollY > 0)) {
      image.src = "./asest/img/logo-footer.svg";
      image.style.width = "85%";
   } else {
      image.src = "./asest/img/logo-header.svg";
      image.style.width = "100%";
   }
});
