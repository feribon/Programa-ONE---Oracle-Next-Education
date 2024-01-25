function resp1() {
  console.log("Bem vindo");
}

function resp2() {
  let nome = "Felipe";
  console.log(`Olá, ${nome}!`);
}
function resp3() {
  let nome = "Felipe";
  alert(`Olá, ${nome}!`);
}
function resp4() {
  let linguagem = prompt(
    "Qual é a linguagem de programação que você mais gosta"
  );
  console.log(linguagem);
}
function resp5() {
  let valor1 = 5;
  let valor2 = 3;
  let resultado = valor1 + valor2;
  console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}
function resp6() {
  let valor1 = 5;
  let valor2 = 3;
  let resultado = valor1 - valor2;
  console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);
}
function resp7() {
  let idade = prompt("Qual a sua idade?");
  console.log(idade >= 18 ? "Você é maior de idade" : "Você é menor de idade");
}
function resp8() {
  let numero = prompt("Digite um numero");
  if (numero == 0) {
    console.log("Zero");
  } else if (numero > 0) {
    console.log("Numero positivo");
  } else {
    console.log("Numero negativo");
  }
}
function resp9() {
  let num = 1;
  while (num <= 10) {
    console.log(num);
    num++;
  }
}
function resp10() {
  let nota = 10;
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}
function resp11() {
  console.log(Math.random());
}
function resp12() {
  console.log(Math.floor(Math.random() * 10 + 1));
}
function resp13() {
  console.log(Math.floor(Math.random() * 100 + 1));
}
