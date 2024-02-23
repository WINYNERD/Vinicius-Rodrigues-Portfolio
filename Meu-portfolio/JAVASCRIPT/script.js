// TEXTO PRINCIPAL DE BOAS VINDAS
const text = "Olá, Meu nome é Vinícius sou desenvolvedor front-end com paixão por criar experiências digitais envolventes e intuitivas. Atualmente, estou cursando a faculdade de Análise e Desenvolvimento de Sistemas.";
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
