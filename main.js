
function converterMoeda() {
  var resultado = 0
  var dolar = 5.71
  var real = parseFloat(document.getElementById("valorReal").value)
  resultado = real / dolar
  document.getElementById("resultado").value = resultado.toFixed(2)
  console.log("resultado")
}

