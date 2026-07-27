/* El siguiente arreglo, llamado activated,
se inicia vacío. Es una medida para que, al entrar
al Ejercicio n, se active el correspondiente elemento del arreglo activated poniéndolo como true.
En todas las funciones para las respuestas, si activated[n] no es true, entonces no se debe hacer nada. */
var activated = [];

//Variables globales para los ejercicios de orden entre números enteros
var n1_1,n2_1,nr1_1,nr2_1;
var n1_2,n2_2,nr1_2,nr2_2;
var n1_3,n2_3,nr1_3,nr2_3;
var n1_4,n2_4,nr1_4,nr2_4;
var n1_5,n2_5,nr1_5,nr2_5;
var n1_6,n2_6,nr1_6,nr2_6;


 // Para generar números enteros aleatorios
function enteroAleatorio(a,b){ // Número aleatorio entre a y b, ambos inclusive
	var x = a + Math.floor((b-a+1)*Math.random());
	return x;
}

/*
FUNCIONES AUXILIARES
*/

// Función para regresar un arreglo que sea permutación
// aleatoria de otro
function permutarArreglo(A){
    var Alen = A.length;
    var lenm1 = Alen - 1;
    var B = [];
    B[lenm1] = 0;
    var cont = 0;

    while(cont < Alen){
        var idx = enteroAleatorio(0, lenm1);
        var curr = A[idx];
        while(B.includes(curr)){
            idx = enteroAleatorio(0, lenm1);
            curr = A[idx];
        }
        B[cont] = curr;
        cont++;
    }
    return B;
}

function escogerPrimosDistintos(cantidad){
    var perm = permutarArreglo(primos);
    var resultado = [];
    for(var i = 0; i < cantidad; i++)
        resultado[i] = perm[i];
    return resultado;
}

function primerosMultiplos(numero, cantidad){
    var lista = [];
    for(var i = 1; i <= cantidad; i++)
        lista.push(numero * i);
    return lista;
}

function primerMultiploComun(a, b, cantidad){
    var primerosA = primerosMultiplos(a, cantidad);
    var primerosB = primerosMultiplos(b, cantidad);
    for(var i = 0; i < primerosA.length; i++){
        if(primerosB.includes(primerosA[i]))
            return primerosA[i];
    }
    return a * b;
}

function mcd(a, b){
    a = Math.abs(a);
    b = Math.abs(b);
    while(b){
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function mcm(a, b){
    if(a === 0 || b === 0)
        return 0;
    return Math.abs((a * b) / mcd(a, b));
}

function limpiarRespuestas(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.innerHTML = "&ZeroWidthSpace;";
    }
}

// Función para que el innerHTML de un elemento
// sea una coma. Similar a la función limpiarRespuestas
function mostrarComas(ids){
	for(var i = 0; i < ids.length; i++){
		var elem = document.getElementById(ids[i]);
		if(elem)
			elem.innerHTML = ",";
	}
}

// Función para que el innerHTML de un elemento
// sea un punto. Similar a la función limpiarRespuestas
function mostrarPuntos(ids){
	for(var i = 0; i < ids.length; i++){
		var elem = document.getElementById(ids[i]);
		if(elem)
			elem.innerHTML = ".";
	}
}

// Ejercicio 1: Cero vs un número negativo
// El propósito de esta función es generar un ejercicio de orden entre dos números enteros, 
// uno de ellos cero y el otro un número negativo. La función genera los números aleatoriamente 
// y los muestra en la página web.
function Ejercicio1(){
	// Activa el ejercicio 1
	activated[1] = true;
	//Borra las respuestas del ejercicio anterior
	limpiarRespuestas(["n1_1", "op1_1", "n2_1", "nr1_1", "op2_1", "nr2_1"]);

	//Genera los parámetros del ejercicio. El primero número es cero y el segundo es un número negativo 
	// aleatorio entre -1 y -50.
	n1_1 = 0;
	n2_1 = enteroAleatorio(-50, -1);

	// Permuta los valores de vez en cuando 
	if (Math.random() < 0.5) {
		let temp = n1_1;
		n1_1 = n2_1;
		n2_1 = temp;
	}

	//Escribe las expresiones matemáticas del ejercicio		
	document.getElementById("n1_1").innerHTML = n1_1;
	document.getElementById("op1_1").innerHTML = ",";
	document.getElementById("n2_1").innerHTML = n2_1;	
}

function Respuesta1(){
	// Si el ejercicio 1 no ha sido activado, no hace nada
	if (!activated[1]) return;
	//Asigna los valores de las variables para la respuesta
	/*
	La variables nr1_1 y nr2_1 se asignan de manera que nr1_1 sea el número mayor y nr2_1 sea el número menor
	de entre las variables previamente generadas n1_1 y n2_1. Esto se hace para que la respuesta sea consistente 
	y siempre muestre el número mayor primero.
	*/

	nr1_1 = Math.max(n1_1, n2_1);
	nr2_1 = Math.min(n1_1, n2_1);		
	
	//Escribe las expresiones matemáticas de la respuesta
	document.getElementById("nr1_1").innerHTML = nr1_1;
	document.getElementById("op2_1").innerHTML = ">";
	document.getElementById("nr2_1").innerHTML = nr2_1;
}

// Ejercicio 2: Trampa visual, un negativo grande vs un positivo pequeño
// El propósito de esta función es generar un ejercicio de orden entre dos números enteros, 
// uno de ellos un número negativo grande y el otro un número positivo pequeño. La función genera los números aleatoriamente 
// y los muestra en la página web.
// El número positivo se genera aleatoriamente entre 1 y 9, mientras que
// el número negativo se genera entre -50 y -99, esto para hacer que el número negativo sea "grande" en valor absoluto 
// y el número positivo sea "pequeño".
function Ejercicio2(){

	// Activa el ejercicio 2
	activated[2] = true;
	//Borra las respuestas del ejercicio anterior
	limpiarRespuestas(["n1_2", "op1_2", "n2_2", "nr1_2", "op2_2", "nr2_2"]);

	//Genera los parámetros del ejercicio. El primero número es un número negativo grande y el segundo 
	// es un número positivo pequeño 
	// aleatorio entre 1 y 9.
	n1_2 = enteroAleatorio(-99, -50);
	n2_2 = enteroAleatorio(1, 9);

	// Permuta los valores de vez en cuando 
	if (Math.random() < 0.5) {
		let temp = n1_2;
		n1_2 = n2_2;
		n2_2 = temp;
	}

	//Escribe las expresiones matemáticas del ejercicio		
	document.getElementById("n1_2").innerHTML = n1_2;
	document.getElementById("op1_2").innerHTML = ",";
	document.getElementById("n2_2").innerHTML = n2_2;	
}	

// Función para la respuesta del Ejercicio 2. Similar a la función Respuesta1, esta función 
// asigna los valores de las variables nr1_2 y nr2_2 de manera que nr1_2 
// sea el número mayor y nr2_2 sea el número menor entre n1_2 y n2_2. 
// Luego, escribe las expresiones matemáticas de la respuesta en la página web.
function Respuesta2(){
	// Si el ejercicio 2 no ha sido activado, no hace nada
	if (!activated[2]) return;
	nr1_2 = Math.max(n1_2, n2_2);
	nr2_2 = Math.min(n1_2, n2_2);
	document.getElementById("nr1_2").innerHTML = nr1_2;
	document.getElementById("op2_2").innerHTML = ">";
	document.getElementById("nr2_2").innerHTML = nr2_2;
}

// Ejercicio 3: Ahora simplemente se comparan dos enteros aleatorios
// entre -99 y 99.
// Este ejercicio tiene la misma lógica que el anterior, pero ahora se permite que los enteros 
// estén entre -99 y 99, siempre y cuando sean distintos.
function Ejercicio3(){
	// Activa el ejercicio 3
	activated[3] = true;
	//Borra las respuestas del ejercicio anterior
	limpiarRespuestas(["n1_3", "op1_3", "n2_3", "nr1_3", "op2_3", "nr2_3"]);

	//Genera los parámetros del ejercicio. El primero número es un número negativo grande y el segundo 
	// es un número positivo pequeño 
	// aleatorio entre 1 y 9.
	n1_3 = enteroAleatorio(-99, 99);
	n2_3 = enteroAleatorio(-99, 99);

	// Se asegura de que sean distintos
	while(n2_3 == n1_3)
		n2_3 = enteroAleatorio(-99, 99);

	//Escribe las expresiones matemáticas del ejercicio		
	document.getElementById("n1_3").innerHTML = n1_3;
	document.getElementById("op1_3").innerHTML = ",";
	document.getElementById("n2_3").innerHTML = n2_3;	
}	

// Función para la respuesta del Ejercicio 3. Similar a la función Respuesta1, esta función 
// asigna los valores de las variables nr1_3 y nr2_3 de manera que nr1_3 
// sea el número mayor y nr2_3 sea el número menor entre n1_3 y n2_3. 
// Luego, escribe las expresiones matemáticas de la respuesta en la página web.
function Respuesta3(){
	// Si el ejercicio 3 no ha sido activado, no hace nada
	if (!activated[3]) return;
	nr1_3 = Math.max(n1_3, n2_3);
	nr2_3 = Math.min(n1_3, n2_3);
	document.getElementById("nr1_3").innerHTML = nr1_3;
	document.getElementById("op2_3").innerHTML = ">";
	document.getElementById("nr2_3").innerHTML = nr2_3;
}

/*
*
LOS SIGUIENTES EJERCICIOS SON IDÉNTICOS,
PERO AHORA SE UTILIZA EL SIGNO MENOR QUE <
*
*/

// Ejercicio 1: Cero vs un número negativo
// El propósito de esta función es generar un ejercicio de orden entre dos números enteros, 
// uno de ellos cero y el otro un número negativo. La función genera los números aleatoriamente 
// y los muestra en la página web.
function Ejercicio4(){
	// Activa el ejercicio 4
	activated[4] = true;
	//Borra las respuestas del ejercicio anterior
	limpiarRespuestas(["n1_4", "op1_4", "n2_4", "nr1_4", "op2_4", "nr2_4"]);

	//Genera los parámetros del ejercicio. El primero número es cero y el segundo es un número negativo 
	// aleatorio entre -1 y -50.
	n1_4 = 0;
	n2_4 = enteroAleatorio(-50, -1);

	// Permuta los valores de vez en cuando 
	if (Math.random() < 0.5) {
		let temp = n1_4;
		n1_4 = n2_4;
		n2_4 = temp;
	}

	//Escribe las expresiones matemáticas del ejercicio		
	document.getElementById("n1_4").innerHTML = n1_4;
	document.getElementById("op1_4").innerHTML = ",";
	document.getElementById("n2_4").innerHTML = n2_4;	
}

function Respuesta4(){
	// Si el ejercicio 4 no ha sido activado, no hace nada
	if (!activated[4]) return;
	//Asigna los valores de las variables para la respuesta
	/*
	La variables nr1_1 y nr2_1 se asignan de manera que nr1_4 sea el número menor y nr2_4 sea el número mayor
	de entre las variables previamente generadas n1_1 y n2_1. Esto se hace para que la respuesta sea consistente 
	y siempre muestre el número mayor primero.
	*/

	nr1_4 = Math.min(n1_4, n2_4);
	nr2_4 = Math.max(n1_4, n2_4);		
	
	//Escribe las expresiones matemáticas de la respuesta
	document.getElementById("nr1_4").innerHTML = nr1_4;
	document.getElementById("op2_4").innerHTML = "<";
	document.getElementById("nr2_4").innerHTML = nr2_4;
}

// Ejercicio 5: Trampa visual, un negativo grande vs un positivo pequeño
// El propósito de esta función es generar un ejercicio de orden entre dos números enteros, 
// uno de ellos un número negativo grande y el otro un número positivo pequeño. La función genera los números aleatoriamente 
// y los muestra en la página web.
// El número positivo se genera aleatoriamente entre 1 y 9, mientras que
// el número negativo se genera entre -50 y -99, esto para hacer que el número negativo sea "grande" en valor absoluto 
// y el número positivo sea "pequeño".
function Ejercicio5(){
	// Activa el ejercicio 5
	activated[5] = true;
	//Borra las respuestas del ejercicio anterior
	limpiarRespuestas(["n1_5", "op1_5", "n2_5", "nr1_5", "op2_5", "nr2_5"]);

	//Genera los parámetros del ejercicio. El primero número es un número negativo grande y el segundo 
	// es un número positivo pequeño 
	// aleatorio entre 1 y 9.
	n1_5 = enteroAleatorio(-99, -50);
	n2_5 = enteroAleatorio(1, 9);

	// Permuta los valores de vez en cuando 
	if (Math.random() < 0.5) {
		let temp = n1_5;
		n1_5 = n2_5;
		n2_5 = temp;
	}

	//Escribe las expresiones matemáticas del ejercicio		
	document.getElementById("n1_5").innerHTML = n1_5;
	document.getElementById("op1_5").innerHTML = ",";
	document.getElementById("n2_5").innerHTML = n2_5;	
}	

// Función para la respuesta del Ejercicio 5. Similar a la función Respuesta1, esta función 
// asigna los valores de las variables nr1_5 y nr2_5 de manera que nr1_5 
// sea el número menor y nr2_5 sea el número mayor entre n1_5 y n2_5. 
// Luego, escribe las expresiones matemáticas de la respuesta en la página web.
function Respuesta5(){
	// Si el ejercicio 5 no ha sido activado, no hace nada
	if (!activated[5]) return;
	nr1_5 = Math.min(n1_5, n2_5);
	nr2_5 = Math.max(n1_5, n2_5);
	document.getElementById("nr1_5").innerHTML = nr1_5;
	document.getElementById("op2_5").innerHTML = "<";
	document.getElementById("nr2_5").innerHTML = nr2_5;
}

// Ejercicio 3: Ahora simplemente se comparan dos enteros aleatorios
// entre -99 y 99.
// Este ejercicio tiene la misma lógica que el anterior, pero ahora se permite que los enteros 
// estén entre -99 y 99, siempre y cuando sean distintos.
function Ejercicio6(){
	// Activa el ejercicio 6
	activated[6] = true;
	//Borra las respuestas del ejercicio anterior
	limpiarRespuestas(["n1_6", "op1_6", "n2_6", "nr1_6", "op2_6", "nr2_6"]);

	//Genera los parámetros del ejercicio. El primero número es un número negativo grande y el segundo 
	// es un número positivo pequeño 
	// aleatorio entre 1 y 9.
	n1_6 = enteroAleatorio(-99, 99);
	n2_6 = enteroAleatorio(-99, 99);

	// Se asegura de que sean distintos
	while(n2_6 == n1_6)
		n2_6 = enteroAleatorio(-99, 99);

	//Escribe las expresiones matemáticas del ejercicio		
	document.getElementById("n1_6").innerHTML = n1_6;
	document.getElementById("op1_6").innerHTML = ",";
	document.getElementById("n2_6").innerHTML = n2_6;	
}	

// Función para la respuesta del Ejercicio 6. Similar a la función Respuesta1, esta función 
// asigna los valores de las variables nr1_6 y nr2_6 de manera que nr1_6 
// sea el número menor y nr2_6 sea el número mayor entre n1_6 y n2_6. 
// Luego, escribe las expresiones matemáticas de la respuesta en la página web.
function Respuesta6(){
	// Si el ejercicio 6 no ha sido activado, no hace nada
	if (!activated[6]) return;
	nr1_6 = Math.min(n1_6, n2_6);
	nr2_6 = Math.max(n1_6, n2_6);
	document.getElementById("nr1_6").innerHTML = nr1_6;
	document.getElementById("op2_6").innerHTML = "<";
	document.getElementById("nr2_6").innerHTML = nr2_6;
}