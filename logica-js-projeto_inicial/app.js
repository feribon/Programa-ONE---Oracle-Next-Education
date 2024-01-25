alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 29;
let chute = Number(prompt("Escolha um número de 1 a 50"));
let tentativas = 1;
while (chute !== numeroSecreto) {
  if (chute < numeroSecreto) {
    chute = Number(
      prompt("Seu chute foi menor que o número secreto. Tente novamente.")
    );
  } else {
    chute = Number(prompt("Seu chute foi maior que o número secreto."));
  }
  tentativas++;
  console.log(tentativas);
}
alert(
  `Voce acertou com ${tentativas} ${
    tentativas == 1 ? "tentativa" : "tentativas"
  }.`
);
