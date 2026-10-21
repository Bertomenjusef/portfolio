
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu when a navigation link is clicked
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Highlight the navigation link for the visible section
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navItems.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        }
    });
}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach((section) => observer.observe(section));

// Replace the GitHub placeholder with your real profile URL
const githubLink = document.getElementById("github-link");

githubLink.addEventListener("click", (event) => {
    if (githubLink.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Please add your GitHub profile URL in index.html.");
    }
});
