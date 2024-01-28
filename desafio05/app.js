let tagH1 = document.querySelector("h1");
tagH1.innerText = "Hora do Desafio";

function btnConsole() {
  console.log("O botão foi clicado");
}

function btnAlert() {
  alert("Eu amo JS");
}

function btnPrompt() {
  let cidade = prompt("Digite o nome de uma cidade");
  alert(`Estive em ${cidade} e lembrei de você`);
}

function btnSoma() {
  let n1 = parseInt(prompt("Digite um número"));
  let n2 = parseInt(prompt("Agora digite outro número"));
  alert(`A soma de ${n1} e ${n2} é igual a ${n1 + n2}`);
}
