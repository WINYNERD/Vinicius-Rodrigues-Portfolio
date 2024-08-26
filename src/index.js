// Função para observar as seções e aplicar animações
function observeSection(sectionId, itemClass, translateY = 20, opacity = 0) {
    const section = document.querySelector(sectionId);
    const items = document.querySelectorAll(itemClass);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove(`translate-y-${translateY}`, `opacity-${opacity}`);
                    }, index * 100);
                });
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section);
}

// Inicializar observadores quando o conteúdo for carregado
document.addEventListener('DOMContentLoaded', function () {
    observeSection('#skills', '.skill-item', 10);
    observeSection('#projetos', '.project-item', 20);
});

// ROLL LENTO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ROLL PARA CIMA
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const backToTopButton = document.getElementById('back-to-top');

    if (scrollPosition > 300) { // Mostrar o botão após rolar 300px
        backToTopButton.classList.add('opacity-100', 'visible');
        backToTopButton.classList.remove('opacity-0', 'invisible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

document.getElementById('back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//----------------------MOBILE
document.getElementById('hamburguer').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu.classList.contains('scale-y-0')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(function () {
            mobileMenu.classList.remove('scale-y-0');
        }, 10); // Pequeno delay para ativar a animação
    } else {
        mobileMenu.classList.add('scale-y-0');
        mobileMenu.addEventListener('transitionend', function () {
            if (mobileMenu.classList.contains('scale-y-0')) {
                mobileMenu.classList.add('hidden');
            }
        }, { once: true });
    }
});

// Funções de cópia para Discord, Email e Telefone
function copyToClipboard(text, iconId, successMessage, errorMessage) {
    const icon = document.getElementById(iconId);
    navigator.clipboard.writeText(text).then(function() {
        showTemporaryMessage(successMessage + text, icon);
    }, function(err) {
        showTemporaryMessage(errorMessage + err, icon);
    });
}

function copyDiscord() {
    const discordText = document.getElementById("discord-name").textContent;
    copyToClipboard(discordText, "discord-icon", "Discord copiado: ", "Erro ao copiar Discord: ");
}

function copyEmail() {
    const emailText = document.getElementById("email").textContent;
    copyToClipboard(emailText, "email-icon", "E-mail copiado: ", "Erro ao copiar e-mail: ");
}

function copyPhone() {
    const phoneText = document.getElementById("phone-number").textContent;
    copyToClipboard(phoneText, "phone-icon", "Número de telefone copiado: ", "Erro ao copiar número de telefone: ");
}

// Função para mostrar mensagem temporária
function showTemporaryMessage(message, element) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.className = 'temporary-message';

    var rect = element.getBoundingClientRect();
    messageElement.style.left = rect.left + window.scrollX + "px";
    messageElement.style.top = rect.top + window.scrollY - rect.height - 10 + "px";

    document.body.appendChild(messageElement);

    setTimeout(function() {
        messageElement.remove();
    }, 2000);
}

// Efeito de digitação
const welcomeText = "Meu nome é Vinícius, sou desenvolvedor de Software com paixão por criar experiências digitais envolventes e intuitivas. Atualmente, estou cursando as faculdades de Engenharia de Software e Análise e Desenvolvimento de Sistemas.";
let index = 0;

function typeEffect() {
    if (index < welcomeText.length) {
        document.getElementById('typing-animation').textContent += welcomeText.charAt(index);
        index++;
        setTimeout(typeEffect, 30); // Velocidade da digitação (30ms por caractere)
    }
}

typeEffect();

// Adicionando hover ao ícone do GitHub
document.getElementById('github').addEventListener('mouseover', function () {
    this.querySelector('i').classList.add('scale-110');
});
document.getElementById('github').addEventListener('mouseout', function () {
    this.querySelector('i').classList.remove('scale-110');
});


// Inicializando o efeito de partículas
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00ff80"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00ff80",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
