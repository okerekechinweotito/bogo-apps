// MAIN JS

const navBtn = document.querySelector(".nav__menu"),
    mobileNav = document.querySelector(".mobilenav"),
    bar1 = document.querySelector(".bar-1"),
    bar2 = document.querySelector(".bar-2"),
    bar3 = document.querySelector(".bar-3");
// EVENT LISTENERS

navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("openNav");
    bar1.classList.toggle("bar1Open");
    bar2.classList.toggle("bar2Open");
    bar3.classList.toggle("bar3Open");
    navBtn.classList.toggle('padded');
});

window.addEventListener("scroll", () => {
    mobileNav.classList.remove("openNav");
    bar1.classList.remove("bar1Open");
    bar2.classList.remove("bar2Open");
    bar3.classList.remove("bar3Open");
    navBtn.classList.remove('padded');
});
