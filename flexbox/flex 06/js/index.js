const palavras = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
      "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
      "incididunt", "ut", "labore", "et", "dolore", "magna",
      "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud"
      ];

function gerarLorem() {
  let texto = "";
  const numPalavras = Math.floor(Math.random() * 30) + 20;

  for (let i = 0; i < numPalavras; i++) {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    texto += palavra + " ";
  }

  texto = texto.charAt(0).toUpperCase() + texto.slice(1).trim() + ".";
  document.getElementById("saida").innerHTML = `<p>${texto}</p>`;
}

window.addEventListener("load", gerarLorem)