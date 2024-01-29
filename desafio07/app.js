function imc(altura, peso) {
  let imc = peso / (altura * altura);
  document.getElementById("imc").value = imc.toFixed(2);
}

function fatorial(valor) {
  let fatorial = document.getElementById("fatorial");
  if (valor == 0 || valor == 1) {
    fatorial.value = 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= valor; i++) {
      resultado *= i;
    }
    fatorial.value = resultado;
  }
}

function convertDollar(valor) {
  let dolar = document.getElementById("dolar");
  let resp = `R$ ${(valor * 4.8).toFixed(2)}`;
  dolar.value = resp;
}

function perimetroQuad(frente, comprimento) {
  document.getElementById("area1").value = frente * comprimento;
  document.getElementById("perimetro1").value = (frente + comprimento) * 2;
}

function perimetroRed(valor) {
  document.getElementById("area2").value = valor * valor * 3.14;
  document.getElementById("perimetro2").value = 2 * valor * 3.14;
}

function tabuada(valor) {
  let tagP = document.getElementById("tabuada");
  for (i = 1; i <= 10; i++) {
    tagP.innerHTML += `${i} x ${valor} = ${i*valor}</br>`
  }
}
