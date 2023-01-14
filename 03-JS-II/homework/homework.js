// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x>y){
    return x;
  }
  else if(x<y) {
    return y;
  }
  else if (x==y){
    return x;
  }
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
}

function mayoriaDeEdad(edad) {
  if (edad >=18){
    return "Allowed";
  }
  else {
    return "Not allowed";
  }
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
  
function conection(status) {
  if (status ===1){
    return "Online";
  }
  else if(status ===2){
    return "Away";
  }
  else if (status != 1 || status != 2){
    return "Offline";
  }
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}

function saludo(idioma) {
  var si;
  idioma=='aleman'?  si= "Guten Tag!": idioma=='mandarin'?  si= "Ni Hao!": idioma=='ingles'?  si= "Hello!":  si= "Hola!"
  return si;
}

function colors(color) {
  if (color == "blue" || color == "red" || color == "green" || color == "orange" ){
    return "This is " + color;
  }
  else if  (color != "blue" && color != "red" && color != "green" && color != "orange"){
    return "Color not found"
  }
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
}

function esDiezOCinco(numero) {
  return numero==10 || numero==5
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}

function estaEnRango(numero) {
  return numero <50 && numero >20;
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
  var dif = numero %1;
  if (dif==0){
    return true;
  }else{
    return false;
  }
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  var si;

  if (numero %5==0 || numero %3 ==0){
  numero % 5==0 && numero %3==0 ? si="fizzbuzz":numero % 3==0 ? si='fizz':si='buzz';
  return si;
}

return numero;


  

}

function operadoresLogicos(num1, num2, num3) {

  if (num1 == 0 || num2 == 0 || num3 == 0 ){
    return "Error";
  } 
  else if (num1 < 0 || num2 < 0 || num3 < 0 ){
    return "Hay negativos";
  }
  else if (num1 > num2 && num1 > num3 && num1 > 0 ){
    return "Número 1 es mayor y positivo";
  }
  
  else if (num3 > num1 && num3 > num2 ){
    return num3 + 1;
  }
  else{
    return false;
  }
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function esPrimo(numero) {
  var cont=0;

  for (var i =1 ;i<=numero;i++){
    if(numero%i==0){
      cont++;
    }
  }
  return cont==2;
}

function esVerdadero(valor){
  var str

  valor==true? str="Soy verdadero":str="Soy falso"

  return str;


}

function tablaDelSeis(){
  let tabla=[];
   
  for (var i=0;i<=10;i++){
    tabla.push(6*i);
    
  }   
  
  return tabla;
}

function tieneTresDigitos(numero){
  return numero >99 && numero <1000;

  
}

function doWhile(numero) {
  cont=0;
  do {
    numero += 5;
    cont++;
  }while(cont<8);

  return numero;
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
