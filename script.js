document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const themeToggle = document.getElementById("theme-toggle");

  // Section Switching
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("data-section");

    // If already active, do nothing
    if (this.classList.contains("active")) return;

    // Update active nav link
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    const currentSection = document.querySelector(".section.active");
    const nextSection = document.getElementById(target);

    // Fade out current section
    if (currentSection) {
      currentSection.classList.remove("active");

      setTimeout(() => {
        nextSection.classList.add("active");
      }, 200);
    } else {
      nextSection.classList.add("active");
    }
  });
});

  // Dark Mode Load
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    themeToggle.textContent = "☀️";
  }

  // Toggle Theme
  themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });

});
