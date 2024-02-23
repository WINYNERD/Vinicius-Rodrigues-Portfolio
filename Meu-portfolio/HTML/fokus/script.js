const html = document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const curtoBotao = document.querySelector('.app__card-button--curto');
const longoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPause = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBotao = document.querySelector('#start-pause span');
const iconeStartPause = document.querySelector('.app__card-primary-button-icon');
const tempoNaTela = document.querySelector('#timer');
const musica = new Audio (`sons/luna-rise-part-one.mp3`);
const audioPlay = new Audio('sons/play.wav');
const audioPausa = new Audio('sons/pause.mp3');
const audioTempoFinalizado = new Audio('sons/beep.mp3');

let temporizador = 1500;
let intervaloId = null;

musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
});

focoBotao.addEventListener('click', () => {
    temporizador = 1500;
    alterarContexto('foco');
    focoBotao.classList.add('active');
});

curtoBotao.addEventListener('click', () => {
    temporizador = 300;
    alterarContexto('descanso-curto');
    curtoBotao.classList.add('active');
});

longoBotao.addEventListener('click', () => {
    temporizador = 900;
    alterarContexto('descanso-longo');
    longoBotao.classList.add('active');
});

function alterarContexto (contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    })
    html.setAttribute ('data-contexto', contexto);
    banner.setAttribute ('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
    
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (temporizador <= 0) {
        zerar()
const focoAtivo = html.getAttribute('data-contexto') === 'foco'
    if (focoAtivo) {            
            var event = new CustomEvent("TarefaFinalizada", {
                detail: {
                    message: "A tarefa foi concluída com sucesso!",
                    time: new Date(),
                },
                bubbles: true,
                cancelable: true
            });
            document.dispatchEvent(event);
            temporizador = 5
            mostrarTempo()
        }
        return
}
 
    temporizador -= 1;
    mostrarTempo();
}

startPause.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar () {
    if(intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    iconeStartPause.setAttribute('src', 'imagens/pause.png');
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBotao.textContent = "Pausar";
    
}

function zerar () {
    clearInterval(intervaloId);
    iconeStartPause.setAttribute('src', 'imagens/play_arrow.png');
    iniciarOuPausarBotao.textContent = "Começar";
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(temporizador*1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute:'2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();