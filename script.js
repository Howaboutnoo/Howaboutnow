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

    // Încărcare dinamică a știrilor de pe Wikipedia
    const newsContainer = document.querySelector("#latest");
    if (newsContainer) {
        const topics = ["Politică", "Tehnologie", "Știință", "Sănătate", "Economie"];
        topics.forEach(topic => {
            fetch(`https://ro.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.extract && data.thumbnail) {
                        const articleElement = document.createElement("div");
                        articleElement.classList.add("article");
                        articleElement.innerHTML = `
                            <img src="${data.thumbnail.source}" alt="${data.title}" class="article-image">
                            <h3>${data.title}</h3>
                            <p>${data.extract.substring(0, 150)}...</p>
                            <button class="read-more" onclick="window.open('${data.content_urls.desktop.page}', '_blank')">Citește mai mult</button>
                        `;
                        newsContainer.appendChild(articleElement);
                    }
                })
                .catch(error => console.error("Eroare la încărcarea știrilor Wikipedia:", error));
        });
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
