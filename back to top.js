document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (!backToTopBtn) return;

  // Show/Hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top using Lenis
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Checks if lenis is globally defined, otherwise falls back smoothly
    if (typeof lenis !== 'undefined' && lenis) {
      lenis.scrollTo(0, { duration: 1.2 }); // Adjust duration in seconds as needed
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});