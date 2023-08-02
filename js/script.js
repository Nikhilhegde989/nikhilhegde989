document.addEventListener("DOMContentLoaded", function () {
    // Initialize Scroll Reveal
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });
  
    // Add Scroll Reveal animations
    sr.reveal(".home-content, .heading", { origin: "top" });
    sr.reveal(".home-img, .services-container, .portfolio-box, .contact form", {
      origin: "bottom",
    });
    sr.reveal(".home-content h1, .about-img", { origin: "left" });
    sr.reveal(".home-content p, .about-content", { origin: "right" });
  });
  
  // Typed.js initialization
  const typed = new Typed(".multiple-text", {
    strings: ["Passionate", "Aspiring", "Software-Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  // Toggle icon navbar and scroll sections active link code...
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
  
  // Scroll sections active link code
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
  
    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  
    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
  