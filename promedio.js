// const lista1 = [
//   100,
//   200,
//   300,
//   500
// ];



function hallarMediaAritmetica(lista){
  // let sumaLista = 0;

  // for (let i=0; i<lista.length;i++){
  //   sumaLista = sumaLista + lista[i];
  // }
  // console.log("la suma de la lista es; " + sumaLista);

  let sumaLista = lista.reduce(
    function (valorAcumulado = 0, valorNuevo){
      return valorAcumulado + valorNuevo;
     }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
