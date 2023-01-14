// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}


function devolverUltimoElemento(array) {
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  
  for (var i =0;i<array.length;i++){

    array[i]+=1;
  }
  
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  
  array.unshift(elemento);
  return array;
  // Pista: usa el método `.unshift`
  // Tu código:
}


function dePalabrasAFrase(palabras) {

  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  
  for (var i =0; i<array.length ;i++){
    if (array[i]===elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  var sum=0;
  for (var i =0; i<numeros.length ;i++){
    sum+=numeros[i];
    
  }
  return sum;
}


function promedioResultadosTest(resultadosTest) {
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  mg=0;
  for (var i =0; i<numeros.length ;i++){
    if (numeros[i]>mg){
      mg=numeros[i];
    }
  }
  return mg;
}


function multiplicarArgumentos() {
  if (arguments.length<1 ){return 0;}
  else{
    var total=1;
    for (var i =0; i<arguments.length;i++){
      total *=arguments[i];
    }
    
  }
  return total;
  
  
}


function cuentoElementos(arreglo){
  var cont=0;

  for (var i =0 ; i<arreglo.length; i++){
    if (arreglo[i]>18){
      cont++;
    }
  }
  return cont;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  var m=10;
  cd=1;
  while(n%m !=n){
    cd++;
    m*=10;
    
  }
  var en=n;
  for (var i =1; i <cd;i++){
    en =en/10;
  }

  if (en %1==0){nf= en;}
  else{
    var dif = en%1;
    nf= en-dif;
  }

  return nf==9;
  
}


function todosIguales(arreglo) {

  var com ;
  com =arreglo[0];
  for (var i=0; i<arreglo.length;i++){
    if (arreglo[i]!=com ){
      return false;
    }
  }
  return true;
  

} 


function mesesDelAño(array) {

var arrayn =[];

var cont =0;
for (var i = 0 ; i <array.length ;i++){
  if (array [i]== "Marzo" || array [i]== "Noviembre" || array [i]== "Enero"){
    arrayn.push(array[i]);
    cont++;
  }
}
if (cont==3){
  return arrayn;
}
else{
  return "No se encontraron los meses pedidos"; 
}

return cont==3;
}


function mayorACien(array) {

  na=[];
  for (var i =0 ; i<array.length ; i++){
    if (array[i]>100){
      na.push(array[i]);
    }
  }
  return na;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}


function continueStatement(numero) {
  var array=[];
  var suma =numero;

  for (var i = 1;i<=10;i++){
    
    

    if (i != 5){
      suma =suma+2;
      array.push (suma);
    }
    
  }

  return array;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
