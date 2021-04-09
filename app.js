const navButton = document.querySelector(".hamburger");
const navBar = document.querySelector("#nav-bar");
const check = document.querySelector('#checkbox');
const navLink = document.querySelectorAll('.nav-link');

navButton.addEventListener("click", () => {
    check.checked ? navBar.classList.toggle("nav-active") : navBar.classList.toggle("#nav-bar");
})

navLink.forEach(element => {
    element.addEventListener("click", () => {
        navBar.classList.toggle("nav-active");
        check.checked = false;
    })
});

$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        direction: 'vertical',
        anchors: ['one', 'two', 'three', 'four'],
        menu: '.nav-links',
        navigation: {
            'textColor': '#f8f4ff',
            'bulletsColor': '#f8f4ff60',
            'position': 'right',
            'tooltips': ['Home', 'About Me', 'Projects', 'Contact']
        },
        // loopBottom: true,
        // loopTop: true
    });
});