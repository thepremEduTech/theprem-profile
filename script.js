/* =========================================================
   THEPREM PLATFORM
   Main JavaScript
   ========================================================= */


/* =========================
   1. DYNAMIC FOOTER YEAR
========================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.textContent =
        `© ${currentYear} ThePrem Platform.`;
}


/* =========================
   2. SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    "main > section"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((section) => {

    section.classList.add("reveal");

    revealObserver.observe(section);

});


/* =========================
   3. ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll(
    "main > section[id]"
);

const navLinks = document.querySelectorAll(
    "header nav a"
);


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentSection =
                entry.target.getAttribute("id");

            navLinks.forEach((link) => {

                link.classList.remove("active");

                const linkTarget =
                    link.getAttribute("href");

                if (linkTarget === `#${currentSection}`) {
                    link.classList.add("active");
                }

            });

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});