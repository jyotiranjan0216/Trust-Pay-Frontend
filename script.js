window.onload = (event) => {

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active")
        })
    })


    const nav = document.getElementsByClassName("hamburger-nav")[0];
    const navItems = document.getElementsByClassName("nav-items")[0];

    nav.addEventListener("click", () => {
        navItems.classList.toggle("show")
    })
}