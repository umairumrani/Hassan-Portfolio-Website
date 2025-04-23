// Main JavaScript file for Hassan Abdullah's website

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize mobile menu functionality
  initMobileMenu();

  // Initialize form validation
  initFormValidation();

  // Initialize social media links
  initSocialMediaLinks();

  // Add scroll animations
  initScrollAnimations();

  // Initialize back to top button
  initBackToTopButton();
});

// Function to handle smooth scrolling
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100, // Offset to account for fixed navbar
      behavior: "smooth",
    });
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const menuIcon = document.querySelector(".ri-menu-3-line");
  const navLinks = document.querySelector("#navpart2");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("mobile-nav-active");

      // Toggle between menu and close icons
      if (this.classList.contains("ri-menu-3-line")) {
        this.classList.remove("ri-menu-3-line");
        this.classList.add("ri-close-line");
      } else {
        this.classList.remove("ri-close-line");
        this.classList.add("ri-menu-3-line");
      }
    });
  }
}

// Form validation
function initFormValidation() {
  const contactForm = document.querySelector("form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      let isValid = true;

      // Simple validation
      if (!nameInput.value.trim()) {
        highlightInvalidField(nameInput, "Please enter your name");
        isValid = false;
      } else {
        resetField(nameInput);
      }

      if (!emailInput.value.trim()) {
        highlightInvalidField(emailInput, "Please enter your email");
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        highlightInvalidField(emailInput, "Please enter a valid email");
        isValid = false;
      } else {
        resetField(emailInput);
      }

      if (!messageInput.value.trim()) {
        highlightInvalidField(messageInput, "Please enter your message");
        isValid = false;
      } else {
        resetField(messageInput);
      }

      if (isValid) {
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      }
    });
  }
}

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to highlight invalid fields
function highlightInvalidField(field, message) {
  field.style.borderColor = "#FF0000";

  // Check if error message already exists
  let errorSpan = field.nextElementSibling;
  if (!errorSpan || !errorSpan.classList.contains("error-message")) {
    errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.style.color = "#FF0000";
    errorSpan.style.fontSize = "12px";
    errorSpan.style.marginTop = "-10px";
    errorSpan.style.marginBottom = "10px";
    field.parentNode.insertBefore(errorSpan, field.nextSibling);
  }

  errorSpan.textContent = message;
}

// Helper function to reset field styling
function resetField(field) {
  field.style.borderColor = "";

  // Remove error message if it exists
  const errorSpan = field.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains("error-message")) {
    errorSpan.remove();
  }
}

// Initialize social media links
function initSocialMediaLinks() {
  // Facebook links
  const facebookLinks = document.querySelectorAll(".ri-facebook-circle-fill");
  facebookLinks.forEach((link) => {
    link.addEventListener("click", function () {
      window.open("https://facebook.com/hassanabdullah", "_blank");
    });
    link.style.cursor = "pointer";
  });

  // Instagram links
  const instagramLinks = document.querySelectorAll(".ri-instagram-line");
  instagramLinks.forEach((link) => {
    link.addEventListener("click", function () {
      window.open("https://instagram.com/hassanabdullah", "_blank");
    });
    link.style.cursor = "pointer";
  });

  // Reddit links
  const redditLinks = document.querySelectorAll(".ri-reddit-fill");
  redditLinks.forEach((link) => {
    link.addEventListener("click", function () {
      window.open("https://reddit.com/user/hassanabdullah", "_blank");
    });
    link.style.cursor = "pointer";
  });

  // LinkedIn links
  const linkedinLinks = document.querySelectorAll(".ri-linkedin-box-fill");
  linkedinLinks.forEach((link) => {
    link.addEventListener("click", function () {
      window.open("https://linkedin.com/in/hassanabdullah", "_blank");
    });
    link.style.cursor = "pointer";
  });
}

// Add scroll animations
function initScrollAnimations() {
  // Add animation class to elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".box1, .project1, .offerspart1"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("animate");
      }
    });
  };

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Run once on page load
  animateOnScroll();
}

// Initialize back to top button
function initBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top");

  // Show button when user scrolls down 300px from the top
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
