document.addEventListener("DOMContentLoaded", () => {
    console.log("Ce facem cu pisica? - Website încărcat");

    // Meniu mobil interactiv
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").prepend(menuToggle);
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Animatii la scroll
    const sections = document.querySelectorAll(".banner, .news-section, .article");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(section => observer.observe(section));

    // Încărcare dinamică a știrilor
    const newsContainer = document.querySelector("#latest");
    if (newsContainer) {
        fetch("news.json") // Simulăm un API static
            .then(response => response.json())
            .then(data => {
                data.articles.forEach(article => {
                    const articleElement = document.createElement("div");
                    articleElement.classList.add("article");
                    articleElement.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>${article.summary}</p>
                        <a href="${article.link}">Citește mai mult</a>
                    `;
                    newsContainer.appendChild(articleElement);
                });
            })
            .catch(error => console.error("Eroare la încărcarea știrilor:", error));
    }

    // Buton pentru revenire sus
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
