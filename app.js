let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogo adivinhação';              

let subtitulo= document.querySelector('p');
subtitulo.innerHTML = 'escolha um numero de 1 a 100';              

function verificarChute() { 
    alert ('apertou o botão')
}let campo =document.querySelector(tag); 
campo.innerHTML =texto
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;                                                         
}

function verificarChute() {
    console.log('Apertou o botão');
}

//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>