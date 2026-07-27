// Variables globales para los ejercicios de fracciones equivalentes
var primos = [2, 3, 5, 7, 11];

// Variables para el ejercicio 1
var n1_1, n2_1, d1_1, d2_1;

// Variables para el ejercicio 2
var n1_2, n2_2, d1_2, d2_2;

// Variables para el ejercicio 3
var n1_3, n2_3, d1_3, d2_3;

// Variables para el ejercicio 4
var n1_4, n2_4, d1_4, d2_4;

// Para generar números enteros aleatorios

var activated = [];
function enteroAleatorio(a,b){ // Genera números aleatorios entre a y b
	var x = a + Math.floor((b-a+1)*Math.random());
	return x;
}

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


// Función para generar el Ejercicio 1
// Primero, elige dos primos distintos, p1_1 y p2_1, y luego elige dos enteros aleatorios
// entre 1 y 10, digamos f1_1. Luego, calcula n1_1 = p1_1 * f1_1, d1_1 = p2_1 * f1_1.
function Ejercicio1(){

    activated[1] = true;
    // Borra la respuesta previa 
    limpiarRespuestas(["nr_1", "dr_1", "op_1"]);

    primos_1 = escogerPrimosDistintos(2);
    p1_1 = primos_1[0];
    p2_1 = primos_1[1];
    f1_1 = enteroAleatorio(1, 10);
    n1_1 = p1_1 * f1_1;
    d1_1 = p2_1 * f1_1;

    // Solo pone en el ejercicio dos numeradores 
    // y un denominador 
    document.getElementById("n1_1").innerHTML = n1_1;
    document.getElementById("d1_1").innerHTML = d1_1;
    document.getElementById("n2_1").innerHTML = p1_1;
    document.getElementById("d2_1").innerHTML = "?";
    document.getElementById("op_1").innerHTML = "=";
}

// En la respuesta, simplemente se pone p2_1 en dr_1
// y deja el p1_1 en nr_1. Esto es porque la fracción equivalente a n1_1/d1_1 es p1_1/p2_1.
function Respuesta1(){

    if (!activated[1]) return;
    // Revisa que el elemento dr_1 no esté indefinido.
    // En dado caso, simplemente invoca return 
    if(document.getElementById("dr_1") === undefined)
        return;
    document.getElementById("dr_1").innerHTML = p2_1;
    document.getElementById("nr_1").innerHTML = p1_1;
}

// El Ejercicio 2 es prácticamente igual al Ejercicio 1, pero en esta ocasión 
// la segunda fracción es la que tiene los números primos multiplicados por el número
// aleatorio que está entre 1 y 10.

function Ejercicio2(){

    activated[2] = true;
    // Borra la respuesta previa 
    limpiarRespuestas(["nr_2", "dr_2", "op_2"]);

    primos_2 = escogerPrimosDistintos(2);
    p1_2 = primos_2[0];
    p2_2 = primos_2[1];
    f1_2 = enteroAleatorio(1, 10);
    n1_2 = p1_2 * f1_2;
    d1_2 = p2_2 * f1_2;

    // Solo pone en el ejercicio dos numeradores 
    // y un denominador 
    document.getElementById("n1_2").innerHTML = p1_2;
    document.getElementById("d1_2").innerHTML = p2_2;
    document.getElementById("n2_2").innerHTML = n1_2;
    document.getElementById("d2_2").innerHTML = "?";
    document.getElementById("op_2").innerHTML = "=";
}

// La función para la respuesta es similar a la del Ejercicio 1, pero en este caso se pone d1_2 en dr_2 y n1_2 en nr_2.
function Respuesta2(){

    if (!activated[2]) return;
    // Revisa que el elemento dr_2 no esté indefinido.
    // En dado caso, simplemente invoca return 
    if(document.getElementById("dr_2") === undefined)
        return;
    document.getElementById("dr_2").innerHTML = d1_2;
    document.getElementById("nr_2").innerHTML = n1_2;
}

// Ejercicio 3
// Es muy similar al Ejercicio 1, pero en este caso se pone 
// el signo de interrogación en el numerador de la segunda fracción.
function Ejercicio3(){

    activated[3] = true;
    // Borra la respuesta previa 
    limpiarRespuestas(["nr_3", "dr_3", "op_3"]);

    primos_3 = escogerPrimosDistintos(2);
    p1_3 = primos_3[0];
    p2_3 = primos_3[1];
    f1_3 = enteroAleatorio(1, 10);
    n1_3 = p1_3 * f1_3;
    d1_3 = p2_3 * f1_3;

    // Solo pone en el ejercicio dos numeradores 
    // y un denominador 
    document.getElementById("n1_3").innerHTML = n1_3;
    document.getElementById("d1_3").innerHTML = d1_3;
    document.getElementById("n2_3").innerHTML = "?";
    document.getElementById("d2_3").innerHTML = p2_3;
    document.getElementById("op_3").innerHTML = "=";
}

// La función para la respuesta es similar a la del Ejercicio 1, pero en este caso se pone n1_3 en nr_3 y p1_3 en dr_3.
function Respuesta3(){

    if (!activated[3]) return;
    // Revisa que el elemento dr_3 no esté indefinido.
    // En dado caso, simplemente invoca return 
    if(document.getElementById("dr_3") === undefined)
        return;
    document.getElementById("nr_3").innerHTML = p1_3;
    document.getElementById("dr_3").innerHTML = p2_3;
}

// Ejercicio 4
// Es muy similar al Ejercicio 2, pero en este caso se pone 
// el signo de interrogación en el numerador de la segunda fracción.
function Ejercicio4(){

    activated[4] = true;
    // Borra la respuesta previa 
    limpiarRespuestas(["nr_4", "dr_4", "op_4"]);

    primos_4 = escogerPrimosDistintos(2);
    p1_4 = primos_4[0];
    p2_4 = primos_4[1];
    f1_4 = enteroAleatorio(1, 10);
    n1_4 = p1_4 * f1_4;
    d1_4 = p2_4 * f1_4;

    // Solo pone en el ejercicio dos numeradores 
    // y un denominador 
    document.getElementById("n1_4").innerHTML = p1_4;
    document.getElementById("d1_4").innerHTML = p2_4;
    document.getElementById("n2_4").innerHTML = "?";
    document.getElementById("d2_4").innerHTML = d1_4;
    document.getElementById("op_4").innerHTML = "=";
}

// La función para la respuesta es similar a la del Ejercicio 1, pero en este caso se pone n1_4 en nr_4 y p1_4 en dr_4.
function Respuesta4(){

    if (!activated[4]) return;
    // Revisa que el elemento dr_4 no esté indefinido.
    // En dado caso, simplemente invoca return 
    if(document.getElementById("dr_4") === undefined)
        return;
    document.getElementById("nr_4").innerHTML = n1_4;
    document.getElementById("dr_4").innerHTML = d1_4;
}
