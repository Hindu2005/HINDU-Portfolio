// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= SCROLL REVEAL =================

const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


sections.forEach(section => {

    observer.observe(section);

});