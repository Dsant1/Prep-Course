// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático: 
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
  
}

function suma(x, y) {
  return x+y;
  
}

function resta(x, y) {
  return x-y;
  
}

function multiplica(x, y) {
  return x * y;
  
}

function divide(x, y) {
  return x/y;
  
}

function sonIguales(x, y) {
  if (x===y){
    return true;
  }
  else {
    return false;
  }
  
}

function tienenMismaLongitud(str1, str2) {
  
  return str1.length === str2.length;
  
}

function menosQueNoventa(num) {
  return num < 90;
  
}

function mayorQueCincuenta(num) {
  return num > 50
  
}

function obtenerResto(x, y) {
  return x%y;
  
}

function esPar(num) {
  return num%2==0
  
}

function esImpar(num) {
  return num %2==1;
  
}

function elevarAlCuadrado(num) {
  return num**2;
  
}

function elevarAlCubo(num) {
  return num**3;
  
}

function elevar(num, exponent) {
  return num**exponent;
  
}

function redondearNumero(num) {
  var a=num%1;
  if (a==0){
    return num;
  }
  if (a>=0.5){
    return num -a +1;
  }else {
    return num -a;
  }
  
}

function redondearHaciaArriba(num) {
  var a =num%1;
  if (a==0){
    return num;
  }
  else{
  return num -a +1;}
  
}

function numeroRandom() {
  return Math.random()
}

function esPositivo(numero) {
  
  if (numero > 0){
    return"Es positivo";
  }
  else if (numero < 0){
    return "Es negativo";
  }
  else if (numero == 0){
    return false;
  }
}

function agregarSimboloExclamacion(str) {
  return str+'!';
}

function combinarNombres(nombre, apellido) {
  return nombre +" "+apellido;
  
}

function obtenerSaludo(nombre) {
  return "Hola "+nombre+"!";
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto*ancho;
  
}


function retornarPerimetro(lado){
  return lado*4;
  
}


function areaDelTriangulo(base, altura){
  return (base*altura)/2;

}


function deEuroAdolar(euro){

  return euro*1.20;
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){

  if (letra==="a" || letra==='e' || letra==='i'|| letra==='o' || letra==='u'&& letra.length==1){
    return "Es vocal";
  }
  else if(letra.length >1 || letra !="a" || letra !='e' || letra !='i'|| letra !='o' || letra !='u'){
    return "Dato incorrecto"
  }
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
