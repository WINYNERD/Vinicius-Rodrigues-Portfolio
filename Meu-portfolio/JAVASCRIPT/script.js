const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-hamburguer');

hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('open');
    menu.classList.toggle('open');
});

// TEXTO PRINCIPAL DE BOAS VINDAS
const text = "Olá, Meu nome é Vinícius e sou um entusiasta e desenvolvedor front-end com paixão por criar experiências digitais envolventes e intuitivas. Atualmente, estou cursando a faculdade de Análise e Desenvolvimento de Sistemas, onde aprimoro minhas habilidades técnicas e adquiro conhecimentos fundamentais para a indústria de tecnologia. Com um olhar atento para o design e a usabilidade, busco constantemente aperfeiçoar minha habilidade em transformar ideias em interfaces elegantes e responsivas.";
const typingAnimationElement = document.getElementById("typing-animation");

function startTypingAnimation() {
    let index = 0;
    const typingInterval = setInterval(() => {
        typingAnimationElement.textContent = text.slice(0, index);
        index++;
        if (index > text.length) {
            clearInterval(typingInterval);
        }
    }, 15);
}
//------------------------------------------------------------------------------------------

startTypingAnimation();