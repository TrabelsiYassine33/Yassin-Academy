
/* ========================================
   YASSIN ACADEMY - academyJS.js
======================================== */


/* ===== 1. MOBILE NAVBAR ===== */

const menuButton = document.querySelector(".menu-toggle");
const navbar = document.querySelector("header nav");

if (menuButton && navbar) {

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        // Change hamburger icon to X
        menuButton.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a navigation link
    navbar.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });

}


/* ===== 2. ACTIVE NAVBAR LINK ===== */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {

    const linkHref = link.getAttribute("href");

    if (!linkHref) return;

    const linkPage = linkHref.split("#")[0];

    if (
        linkPage === currentPage &&
        !linkHref.startsWith("#")
    ) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});


/* ===== 3. SMOOTH SCROLLING ===== */

document.querySelectorAll('a[href*="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const url = new URL(link.href, window.location.href);

        // Only handle links targeting the current page
        if (url.pathname !== window.location.pathname) return;

        const targetId = url.hash.slice(1);

        if (!targetId) return;

        const target = document.getElementById(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ===== 4. CONTACT FORM VALIDATION ===== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();
            return;

        }

        alert(
            "Thank you for contacting Yassin Academy! " +
            "Your form is valid, but the message has not been sent yet."
        );

        contactForm.reset();

    });

}


/* ===== 5. AUTOMATIC FOOTER YEAR ===== */

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML = footerText.innerHTML.replace(
        /©\s*\d{4}/,
        "© " + new Date().getFullYear()
    );

}
