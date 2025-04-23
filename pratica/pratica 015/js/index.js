const res = document.getElementById("res")
const btn = document.getElementById("btn-click")
const btn_2 = document.getElementById("btn_click_2")
const frases = [
    "Estude sempre que poder!",
    "Não desista do que te faz feliz!",
    "Trace metas para se manter focado e comprometido!",
    "Programação é para qualquer \"miserável\" até você!",
    "Nunca busque uma fonte de inspiração antes de te inspirares em ti!",
    "Batalhas só são vencidas com uma mente forte, focada e determinada!",
    "Se dasafie sempre!",
    "Busque o autoconhecimento antes de tudo",
    "Não deixes para amanhã o que podes fazer hoje miserável!"
  ]
btn.addEventListener("click", () => {
  var index = Math.floor(Math.random()*(frases.length + 1))
  res.innerHTML = `Frase: ${frases[index]}`
})

btn_2.addEventListener("click", () => {
  alert("Seu miserável vecê não sabe ler?")
})