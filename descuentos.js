// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
var cupones = [
{nombre:"MAGICO",valor:15},
{nombre:"AMIGO",valor:10},
{nombre:"NAVIDAD",valor:30}
];

function validarCupon(cuponName){

  var encontrarCupon = cupones.find(function(cupon){
    return cupon.nombre === cuponName;
  });

  if (encontrarCupon == undefined){
    alert("Este cupon no existe");
    return 0;
  }else{
    var cuponValue = encontrarCupon.valor;
    return cuponValue;
  }
}

function calcularDescuento(precioOriginal, descuento,cupon){

  var cuponDescuento = validarCupon(cupon);

  const porcentajePrecioConDescuento = 100 - (descuento + cuponDescuento);
  const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}






// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });

// INTERACCIÓN CON EL HTML
function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("InputPrice");
  const valuePrice = Number(inputPrice.value);

  const inputDiscount = document.getElementById("InputDiscount");
  const valueDiscount = Number(inputDiscount.value);

  const inputCupon = document.getElementById("InputCupon");
  const valueCupon = inputCupon.value;

  const PrecioConDescuento = calcularDescuento(valuePrice,valueDiscount,valueCupon);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento es S/." + PrecioConDescuento;
}