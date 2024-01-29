let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerText = texto;
}
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

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

function reiniciarJogo() {
  location.reload();
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
