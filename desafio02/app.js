let diaSemana = prompt("Qual dia da semana e hoje");
if (diaSemana == "sabado" || diaSemana == "domingo") {
  alert("Bom final de semana");
} else {
  alert("Boa semana");
}

let numero = Number(prompt("Escolha um numero qualquer"));
if (numero >= 1) {
  alert(`${numero} é positivo`);
} else if (numero == 0) {
  alert(`${numero} é neutro`);
} else {
  alert(`${numero} é negativo`);
}

let pontuacao = Number(prompt("Digite sua pontuacao"));
while (pontuacao < 100) {
  pontuacao = Number(prompt("Tente novamente para ganhar"));
}
alert("Parabens voce venceu");

let saldo = Number(prompt("Informe seu saldo"));
alert(`seu saldo no momento é de ${saldo} reais`);

let nome = prompt("Informe seu nome");
alert(`Bem vindo ${nome}`);
