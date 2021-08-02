var inputValorHora = document.querySelector("#valor-hora");
var inputValorProjeto = document.querySelector("#horas-projeto");
var spanResposta = document.querySelector("#resposta");

function calcular() {
  console.log("Hello Word! <3");
  console.log("Valor da Hora", inputValorHora.value);
  console.log("Valor Projeto ", inputValorProjeto.value);

  console.log("Valor Resposta ", spanResposta);

  var calcularValorProjeto =
    inputValorHora.valueAsNumber * inputValorProjeto.valueAsNumber;
  console.log("Valor hora  ", calcularValorProjeto);
  spanResposta.textContent = "R$ " + calcularValorProjeto;
}
