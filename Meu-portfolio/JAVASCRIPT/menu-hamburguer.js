const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-hamburguer');

hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('open');
    menu.classList.toggle("open");
});

function ativarNavMobile() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
        hamburguer.style.display = "flex";
        menu.style.display = "flex";
    } else {
        hamburguer.style.display = "none";
        menu.style.display = "none";
    }
}

window.addEventListener("load", ativarNavMobile);
window.addEventListener("resize", ativarNavMobile);
