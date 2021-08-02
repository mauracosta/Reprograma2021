// Objetivo: saber o valor da hora trabalhada
// Dados neccesarios
// Dias trabalhos
// Quantas horas de trabalho por dia(pega da pagina html)
// Valor fial(mensal) (pegar da pagina da html)

var inputValorMes = document.querySelector("#ganho-mes");
var inputHorasDia = document.querySelector("#horas-dia");
var spanHora = document.querySelector(
  ".secao__rodape .secao__rodape__valor span"
);

function calcularValorHora() {
  // Dentro da função, será executado
  console.log("Hello Word! <3"); // Função que me permite exibir uma mensgengaem no console do navegador
  console.log("Valor do mês", inputValorMes.value);
  console.log("Horas dia ", inputHorasDia.value);

  console.log("Valor Final ", spanHora);

  // Multiplicar os dia trabalhao pela horas trabalhada por dia
  var qtdTotalHoras = inputHorasDia.valueAsNumber * 22;
  console.log("Valor total de horas ", qtdTotalHoras);

  // Divisão do valor final pelas horas trabalhadas
  var valorHora = (inputValorMes.valueAsNumber / qtdTotalHoras).toFixed(2);
  console.log("Valor hora Final ", valorHora);

  spanHora.textContent = "R$" + valorHora;
}
