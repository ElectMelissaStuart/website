fetch("footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });

fetch("navbar.html")
    .then(response => response.text())
    .then(html => {
        const navContainer = document.getElementById("navbar-container");
        navContainer.innerHTML = html;

        // --- Auto-activate current page ---
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        // Select all nav links inside the loaded navbar
        const navLinks = navContainer.querySelectorAll("a.nav-link");

        navLinks.forEach(link => {
            const linkPage = link.getAttribute("href");

            // Exact match → highlight
            if (linkPage === currentPage) {
                link.parentElement.classList.add("active");
            } else {
                link.parentElement.classList.remove("active");
            }
        });
    })
    .catch(err => console.error("Navbar load failed:", err));
