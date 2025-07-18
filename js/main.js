// Scroll Reveal
document.addEventListener("DOMContentLoaded", () => {
  // Loading screen
  setTimeout(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
      loadingScreen.classList.add("fade-out");
    }
  }, 1000);

  // Scroll reveal
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // Mobile navigation
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Form submission
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
        });

        // Show success message
        const successMessage = document.querySelector("#form-success");
        if (successMessage) {
          successMessage.classList.remove("hidden");
          contactForm.reset();
          setTimeout(() => {
            successMessage.classList.add("hidden");
          }, 5000);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    });
  }
});
