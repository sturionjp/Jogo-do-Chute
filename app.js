let listaDeNumerosSorteados = [];

function textoTela(elemento, texto) {
    let campo = document.querySelector(elemento);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}

textoTela('h1', 'Jogo do chute.');
textoTela('p', 'Chute um número de 1 a 10.');

let numeroRandom = parseInt(Math.random() * 10 + 1);
console.log(numeroRandom);
let chute = 1;
let palavraTentativa = 'tentativa';

function mensagemInicial() {
    textoTela('h1', 'Jogo do chute.');
    textoTela('p', 'Chute um número de 1 a 10.');
}
mensagemInicial();

function secreto() {
    let chutevalor = parseInt(document.querySelector('input').value);
    
    if (chutevalor === numeroRandom) {
        palavraTentativa = chute > 1 ? 'tentativas' : 'tentativa';
        textoTela('h1', 'Você é o bixão!.');
        textoTela('p', `Parabéns, você acertou com ${chute} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chutevalor > numeroRandom) {
        textoTela('h1', 'Você errou, seu animal!.');
        textoTela('p', 'O número é menor.');
    } else {
        textoTela('h1', 'Você errou, seu animal!.');
        textoTela('p', 'O número é maior.');
    }
    chute++;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let input = document.querySelector('input');
    input.value = '';
}

function reiniciarJogo() {
    numeroRandom = parseInt(Math.random() * 10 + 1);
    limparCampo();
    chute = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Evento de clique para o botão de chute
document.getElementById('chutar').addEventListener('click', secreto);

// Inicialmente, desativar o botão de reiniciar
document.getElementById('reiniciar').setAttribute('disabled', 'true');

// Evento de clique para o botão de reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);
