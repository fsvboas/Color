const Menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// DISPLAY MOBILE MENU 
const mobileMenu = () => {
    Menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

Menu.addEventListener("click", mobileMenu);


// SHOW ACTIVE MENU WHEN SCOLLING
const highlightMenu = () => {
    const Elem = document.querySelector(".highlight");
    const Home = document.querySelector("#home-page");
    const About = document.querySelector("#about-page");
    const Services = document.querySelector("#services-page");
    const Signup = document.querySelector("#signup");

    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 600) {
        Home.classList.add("highlight");
        About.classList.remove("highlight");
        Services.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        About.classList.add("highlight");
        Home.classList.remove("highlight");
        Services.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        Services.classList.add("highlight");
        About.classList.remove("highlight");
        Home.classList.remove("highlight");
        return
    }
    if ((Elem && window.innerWidth <= 960 && scrollPos < 600) || Elem) {
        Elem.classList.remove('highlight');
    }

    Home.addEventListener("click", mobileMenu);
    About.addEventListener("click", mobileMenu);
    Services.addEventListener("click", mobileMenu);
    Signup.addEventListener("click", mobileMenu);
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);