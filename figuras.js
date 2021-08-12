// Código de Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado){
   return ladoCuadrado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(ladoCuadrado){
  return ladoCuadrado * ladoCuadrado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código de Triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 7;
// const baseTriangulo = 10;
// console.log(
//   "Los lados del Triángulo miden: "
//   + ladoTriangulo1 + "cm, "
//   + ladoTriangulo2 + "cm, "
//   + baseTriangulo + "cm"
//   );

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
// console.log("El perímetro del Triángulo es: " + perimetroTriangulo);

// const alturaTriangulo = 6.3;
// console.log("La altura del Triángulo mide: " + alturaTriangulo + "cm");

function areaTriangulo(baseTriangulo,alturaTriangulo){
  return (baseTriangulo * alturaTriangulo) / 2;
}
// console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código de Triangulo Isosceles
// const lado1TrianguloIso = 4;
// const lado2TrianguloIso = 4;
// const lado3TrianguloIso = 2;
function hallarAlturaTrianguloIsosceles(lado1TrianguloIso,lado2TrianguloIso,lado3TrianguloIso){
  var ladosIgualesTrianguloIso;
  var baseTrianguloIso;
  var esIsosceles = false;

  if (lado1TrianguloIso != lado2TrianguloIso
      && lado1TrianguloIso!= lado3TrianguloIso
      && lado2TrianguloIso!= lado3TrianguloIso){
    alert("Este es un triangulo ESCALENO");
  }else if(lado1TrianguloIso == lado2TrianguloIso
    && lado1TrianguloIso == lado3TrianguloIso
    && lado2TrianguloIso == lado3TrianguloIso){
    alert("Este es un triangulo EQUILATERO");
  }else{
    alert("Este es un triangulo ISOSCELES");
    esIsosceles = true;
  }

  if(esIsosceles==true){
    if(lado1TrianguloIso==lado2TrianguloIso && lado3TrianguloIso!=lado1TrianguloIso){
      ladosIgualesTrianguloIso=lado1TrianguloIso;
      baseTrianguloIso=lado3TrianguloIso;
    }else if(lado2TrianguloIso==lado3TrianguloIso && lado1TrianguloIso!=lado2TrianguloIso){
      ladosIgualesTrianguloIso=lado2TrianguloIso;
      baseTrianguloIso=lado1TrianguloIso;
    }else{
      ladosIgualesTrianguloIso=lado3TrianguloIso;
      baseTrianguloIso=lado2TrianguloIso;
    }
    const alturaTrianguloIso = Math.sqrt((Math.pow(ladosIgualesTrianguloIso,2))-((Math.pow(baseTrianguloIso,2)/4)));
    return alturaTrianguloIso;
  }else{
    alert("Solo puedo calcular un triangulo isoseles")
  }
}

// console.log("Los lados del triangulo son: "
//   + lado1TrianguloIso+", "
//   + lado2TrianguloIso+", "
//   + lado3TrianguloIso);



// const alturaTrianguloIso = Math.sqrt((Math.pow(ladosIgualesTrianguloIso,2))-((Math.pow(baseTrianguloIso,2)/4)));
// console.log(alturaTrianguloIso);


// Código de Círculo
console.group("Círculo");
// Radio
// const radioCirculo = 5;
// console.log("El radio del Círculo es: " + radioCirculo);
// PI
// const PI = Math.PI;
// console.log("El valor de PI es: " + PI);
// Diametro
// const diametroCirculo = 2 * radioCirculo;
// console.log("El diametro del Círculo es: " + diametroCirculo);
// Perimetro
function perimetroCirculo(PI,diametroCirculo){
  return PI * diametroCirculo;
}
// console.log("El perímetro del Círculo es: " + perimetroCirculo);
// Area
function areaCirculo(PI,radioCirculo){
  return  PI * (radioCirculo * radioCirculo);
}
// console.log("El área del Círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


// -------------------AQUI INTERACTUAMOS CON EL HTML---------------------------

// Cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
  const lado1 = document.getElementById("InputTrianguloL1");
  const value1 = Number(lado1.value);

  const lado2 = document.getElementById("InputTrianguloL2");
  const value2 = Number(lado2.value);

  const base = document.getElementById("InputTrianguloBase");
  const value3 = Number(base.value);

  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const altura = document.getElementById("InputTrianguloAltura");
  const value1 = Number(altura.value);

  const base = document.getElementById("InputTrianguloBase");
  const value2 = Number(base.value);

  const area = areaTriangulo(value2,value1);
  alert(area);
}

// Triangulo Isosceles

function calcularAlturaTrianguloIso(){
  const lado1 = document.getElementById("InputLado1TrianguloIso");
  const value1 = Number(lado1.value);

  const lado2 = document.getElementById("InputLado2TrianguloIso");
  const value2 = Number(lado2.value);

  const lado3 = document.getElementById("InputLado3TrianguloIso");
  const value3 = Number(lado3.value);

  const altura = hallarAlturaTrianguloIsosceles(value1,value2,value3);
  if (altura != undefined){
    alert(altura);
  }

}

