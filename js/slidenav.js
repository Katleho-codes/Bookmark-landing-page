const burgerBtn = document.querySelector("button.hamburger_btn");
const mobileNavDefault = document.querySelector(".navbar");

const closeBtn = document.querySelector("button.close_btn");
const mobileNav = document.querySelector("nav.mobile_navbar");

// Hamburger menu

burgerBtn.addEventListener("click", () => {
  mobileNav.style.display = "block";
  mobileNav.style.width = "100%";
  // mobileNavDefault.style.display = "none";
  // mobileNavDefault.style.transition = ".2s ease-in";
});

// Close button menu

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
  mobileNavDefault.style.display = "block";
  mobileNavDefault.style.width = "100%";
});
