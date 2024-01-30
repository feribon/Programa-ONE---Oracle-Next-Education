let listaDeNumerosSorteados = [];
let tentativa = 1;
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerText = texto;
}
exibirMensagemInicial();

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function verificarChute() {
  let input = document.querySelector("input");
  let chute = input.value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    exibirTextoNaTela(
      "p",
      `Você descobriu o número secreto com ${tentativa} ${
        tentativa > 1 ? "tentativas" : "tentativa"
      }!`
    );
    tentativa++;
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", "Errou! O número secreto é menor.");
    tentativa++;
  } else {
    exibirTextoNaTela("p", "Errou! O número secreto é maior.");
    tentativa++;
  }
  document.querySelector("input").value = "";
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
