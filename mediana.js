const lista1 = [
  100,
  400,
  300,
  3,
  600,
  6,
  500,
  200
];

lista1.sort(
  function(a,b){
    return a - b;
  }
);


let listaMitad = parseInt(lista1.length/ 2);

function esPar(numerito){
  if(numerito % 2 === 0){
    return true;
  }else{
    return false;
  }
}

function hallarMediaAritmetica(lista){
  let sumaLista = lista.reduce(
    function (valorAcumulado = 0, valorNuevo){
      return valorAcumulado + valorNuevo;
     }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

let mediana;

if(esPar(lista1.length)){
  const valor1 = lista1[listaMitad-1];
  const valor2 = lista1[listaMitad];

  const promedio1y2 = hallarMediaAritmetica(
    [valor1, valor2]
  );

  mediana = promedio1y2;
  console.log(mediana)


}else{
  mediana = lista1[listaMitad];
  console.log(mediana)
}

