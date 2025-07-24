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

// Initialize Lucide icons
lucide.createIcons();

// Mouse trail effect
const trail = document.querySelector(".mouse-trail");
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateTrail() {
  const dx = mouseX - trailX;
  const dy = mouseY - trailY;

  trailX += dx * 0.1;
  trailY += dy * 0.1;

  trail.style.left = trailX + "px";
  trail.style.top = trailY + "px";

  requestAnimationFrame(updateTrail);
}
updateTrail();

// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Observe all elements with reveal class
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const successMessage = document.getElementById("form-success");
    successMessage.classList.remove("hidden");
    this.reset();
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);
  });

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(
    ".floating, .floating-delay, .floating-delay-2"
  );

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Add dynamic particle generation
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 8 + "s";
  particle.style.animationDuration = Math.random() * 3 + 5 + "s";

  // Random colors
  const colors = ["#a855f7", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.querySelector(".background-animation").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 8000);
}

// Create particles periodically
setInterval(createParticle, 1000);

// Tech stack hover effects
document.querySelectorAll(".tech-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(17, 24, 39, 0.95)";
  } else {
    nav.style.background = "rgba(17, 24, 39, 0.8)";
  }
});

// Typing effect for hero section
const textElement = document.querySelector(".typewriter");
const text = textElement.textContent;
textElement.textContent = "";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect after page load
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000);
});

// Add click ripple effect
document.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.style.position = "fixed";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  ripple.style.width = "20px";
  ripple.style.height = "20px";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(168, 85, 247, 0.3)";
  ripple.style.transform = "scale(0)";
  ripple.style.animation = "ripple 0.6s ease-out";
  ripple.style.pointerEvents = "none";
  ripple.style.zIndex = "9999";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Add ripple animation
const style = document.createElement("style");
style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
document.head.appendChild(style);

function copyEmail() {
  const emailText = "rudrakshisharma86@gmail.com";
  navigator.clipboard.writeText(emailText).then(() => {
    const emailElement = document.getElementById("email-text");
    const iconElement = document.getElementById("copy-icon");

    emailElement.textContent = "Email copied!";
    iconElement.className = "fas fa-check text-green-400 transition-colors";

    setTimeout(() => {
      emailElement.textContent = "rudrakshisharma86@gmail.com";
      iconElement.className =
        "fas fa-copy text-gray-400 group-hover:text-pink-400 transition-colors";
    }, 2000);
  });
}

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-3"></i>Sending...';
    button.disabled = true;

    setTimeout(() => {
      document.getElementById("form-success").classList.remove("hidden");
      button.innerHTML = originalText;
      button.disabled = false;
      e.target.reset();

      setTimeout(() => {
        document.getElementById("form-success").classList.add("hidden");
      }, 5000);
    }, 2000);
  });
