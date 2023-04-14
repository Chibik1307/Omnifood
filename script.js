// Set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Open-Close mobile burger menu
const headerEl = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-mobile-nav");

menuBtn.addEventListener("click", () => headerEl.classList.toggle("nav-open"));

const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach((link) =>
  link.addEventListener("click", () => headerEl.classList.toggle("nav-open"))
);

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
