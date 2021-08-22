// Helpers or utils
// ===========================================================
// Se determina si es par o impar
function esPar(numero){
  return numero % 2 === 0; //retorna true si el modulo es 0, sino false
}

// Funcion que calcula la media aritmetica
function hallarMediaAritmetica(lista){
  let sumaLista = lista.reduce(
    function (valorAcumulado = 0, valorNuevo){
      return valorAcumulado + valorNuevo;
     }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// ===========================================================

// MEDIANA GENERAL
// crea un array con solo los salarios que hay en el {objeto peru} en salarios.js
const salarioPer = peru.map(
  function (persona){
    return persona.salary;
  }
);

const salarioPeru = peru.map(
  function (persona){
    return persona.salary;
  }
);

// Ordenamos los salarios de menor a mayor
const salariosPerSorted = salarioPer.sort(
  function (salarioA, salarioB){
    return salarioA - salarioB;
  }
);



// Calculo de la mediana de salarios
function medianaSalario(lista){
  const mitad = parseInt(lista.length / 2);

  if(esPar(lista.length)){
    const personaMitad1 = lista[mitad-1];
    const personaMitad2 = lista[mitad];

    const mediana = hallarMediaAritmetica([personaMitad1,personaMitad2]);
    return mediana;
  }else{
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const medianaGeneralPer = medianaSalario(salariosPerSorted);

// MEDIANA TOP 10%

//hallando el 10% de los elementos del array
const spliceStart = (salariosPerSorted.length * (100 - 10)) / 100;
const spliceCount = salariosPerSorted.length - spliceStart;

const salarioTop10Per = salariosPerSorted.splice(
  spliceStart,
  spliceCount
);

const medianaTop10Per = medianaSalario(salarioTop10Per);


//MOSTRAR
//mostrar la mediana de los salarios
console.log({
  medianaGeneralPer,
  medianaTop10Per
});

