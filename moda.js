// const valores = [
//   1,2,3,1,2,3,1,2,1,2,2,4,4,3
// ];

function calcularModa(valores){
  const valoresRepetidos = {};

  valores.map(
    function(valor){
      if(valoresRepetidos[valor]){
        valoresRepetidos[valor] += 1;
      }else{
        valoresRepetidos[valor] = 1;
      }
    }
  );

  const listaOrdenadaxCant = Object.entries(valoresRepetidos).sort(
      function(valorA,valorB){
          return valorA[1] - valorB[1];
      }
  );

  const moda = listaOrdenadaxCant[listaOrdenadaxCant.length - 1];

  return moda;
}





