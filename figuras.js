console.log("Hola mundo !");
//codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perimetro del cuadra es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();
//codigo del triangulo
console.group("Trinagulo");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");
*/
function perimetroTrinagulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroCuadrado + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();
//codigo del Circulo
console.group("Circulo");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
//console.log("PI es: " + PI);
//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
//const areaCirculo = radioCirculo * radioCirculo * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();
//Aqui interactiamos con el html
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = areaCuadrado(value);
  alert(perimetro);
}
