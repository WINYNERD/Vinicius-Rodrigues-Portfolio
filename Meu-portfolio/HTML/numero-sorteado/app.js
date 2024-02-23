let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }
    
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    // responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});
}

function limpaCampoInput() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoInicial() {
    exibirTextoNaTela('h1', 'Bem-vindo(a) ao Game <span class="container__texto-azul">número sorteado</span>');
    exibirTextoNaTela('p', `Escolha um número entre 1 á ${numeroMaximo}`);
}

function verificarChute() {
    let chute = document.getElementById('chute').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parábens vc achou o número secreto! com ${tentativas} ${palavraTentativa}`
    chute == numeroSecreto ? exibirTextoNaTela('h1', 'Acertou! :)') : exibirTextoNaTela('h1', 'Vc Errou! :(');
    let novoJogo = document.getElementById('reiniciar');
    if (chute == numeroSecreto) {
        exibirTextoNaTela('p',mensagemTentativas);
        novoJogo.removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p','O numero é maior!');
        } else {
            exibirTextoNaTela('p','O numero é menor!');
        }
        tentativas++;
        limpaCampoInput();
    }
}

function reiniciarGame() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampoInput();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

exibirTextoInicial();