const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

/* Sticky Nav */
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/* Mobile Menu Toggle */
hamburger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.background = "#fff";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.right = "20px";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "8px";
    navLinks.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
  }
});

/* Close Mobile Menu on Link Click */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navLinks.style.display = "none";
    }
  });
});
