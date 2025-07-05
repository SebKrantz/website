// Navbar disappears when scrolling down and reappears when scrolling up

const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // Add a check to ensure nav exists to prevent errors on pages without a navbar
    if (nav) {
        if (lastScrollY < window.scrollY && window.scrollY > nav.offsetHeight) {
            // User is scrolling down and is past the navbar
            nav.classList.add("navbar--hidden");
        } else {
            // User is scrolling up
            nav.classList.remove("navbar--hidden");
        }
    }
    lastScrollY = window.scrollY;
});