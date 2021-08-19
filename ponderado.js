// const notas = [
//   {peso: 50, valor: 20},
//   {peso: 30, valor: 15},
//   {peso: 20, valor: 05},
// ];

// const promedio = 0;

function calcularPromedioPonderado(notas){
  var promedio = notas.map(function(nota){
    var notaPeso = ((nota.peso)/100);
    var notaValor = nota.valor;
    return notaPeso * notaValor;
  });

  const sumaPesoxValor = promedio.reduce(
    function(valorAcumulado=0,valorNuevo){
      return valorAcumulado + valorNuevo;
    }
  );

  return `El promedio ponderado es ${sumaPesoxValor}`;
}

