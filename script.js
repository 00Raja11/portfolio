// =======================
// Mobile Navigation Toggle
// =======================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.classList.toggle("active");
});

// Close menu on link click (mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    toggle.classList.remove("active");
  });
});

// =======================
// Smooth Scroll Animation
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =======================
// Scroll-triggered Animation
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.2 });

// Apply observer to all sections with animation classes
document.querySelectorAll(".fade-in, .slide-up").forEach(section => {
  observer.observe(section);
});
