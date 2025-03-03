document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded - Ce facem cu pisica?");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dynamic article loading (simulation)
    const articles = document.querySelectorAll(".article a");
    articles.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Articolul complet va fi disponibil în curând!");
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙 Mod Întunecat";
    toggleButton.classList.add("dark-mode-toggle");
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Mod Luminos";
        } else {
            toggleButton.textContent = "🌙 Mod Întunecat";
        }
    });

    // Contact form validation (if implemented later)
    const emailLink = document.querySelector(".contact-section a[href^='mailto']");
    if (emailLink) {
        emailLink.addEventListener("click", (e) => {
            alert("Se va deschide clientul de email pentru contactare.");
        });
    }
});
