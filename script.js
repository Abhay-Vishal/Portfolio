
/* ==========================
   Mobile Menu
========================== */

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

/* Close menu when a link is clicked */
document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
    };
});

/* ==========================
   Dark / Light Mode
========================== */

const themeBtn = document.getElementById("theme-btn");

// Enable dark mode by default
document.body.classList.add("dark");
themeBtn.classList.remove("fa-moon");
themeBtn.classList.add("fa-sun");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.classList.replace("fa-moon", "fa-sun");
    } else {
        themeBtn.classList.replace("fa-sun", "fa-moon");
    }
};

/* ==========================
   Typing Animation
========================== */

const text =
"Aspiring Frontend Developer | Data Analyst";

const typing = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 80);

    }

}

window.onload = typeText;

/* ==========================
   Scroll Reveal
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

});

/* Show first section immediately */
document.querySelector("#home").classList.add("show");

/* ==========================
   Back To Top Button
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================
   Active Navigation
========================== */

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
