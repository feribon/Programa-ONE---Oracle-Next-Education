function contador1a10() {
  let contador = 1;
  while (contador <= 10) {
    console.log(contador);
    contador++;
  }
}

function contador10a0() {
  let contador = 10;
  while (contador >= 0) {
    console.log(contador);
    contador--;
  }
}

function regressiva() {
  let escolha = Number(
    prompt(`Escolha um numero e faça sua regressiva ate zero`)
  );
  while (escolha >= 0) {
    console.log(escolha);
    escolha--;
  }
}

function progressiva() {
  let escolha = Number(
    prompt(`Escolha um numero e faça sua progressiva a partir de zero`)
  );
  let auxiliar = 0;
  while (auxiliar <= escolha) {
    console.log(auxiliar);
    auxiliar++;
  }
}
