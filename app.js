const navButton = document.querySelector(".hamburger");
const navBar = document.querySelector("#nav-bar");
const check = document.querySelector('#checkbox');
const navLink = document.querySelectorAll('.nav-link');

navButton.addEventListener("click", () => {
    check.checked ? navBar.classList.toggle("active") : navBar.classList.toggle("#nav-bar");
})

navLink.forEach(element => {
    element.addEventListener("click", () => {
        navBar.classList.toggle("active");
        check.checked = false;
    })
});