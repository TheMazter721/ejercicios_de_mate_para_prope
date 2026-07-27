// Variables globales para los ejercicios de mcm
var primos = [2, 3, 5, 7, 11];

// Variables para el ejercicio 1
var r_1 = "&ZeroWidthSpace;";
var n_1;

// Variables para el ejercicio 2
var r_2 = "&ZeroWidthSpace;";
var n_2;

// Variables para el ejercicio 3
var r_3 = "&ZeroWidthSpace;";
var n_3;

// Variables para el ejercicio 4 (son idénticas a las de los previos)
var r_4 = "&ZeroWidthSpace;";
var n_4;

// Variables para el ejercicio 5
var r_5 = "&ZeroWidthSpace;";
var n_5;

// Variables para el ejercicio 6
var r_6 = "&ZeroWidthSpace;";
var n_6;

// Variables para el ejercicio 7
var r_7 = "&ZeroWidthSpace;";
var n_7;

// Variables para el ejercicio 8
var r_8 = "&ZeroWidthSpace;";
var n_8;

// Variables para el ejercicio 9
var r_9 = "&ZeroWidthSpace;";
var n_9;

// Variables para el ejercicio 10
var r_10 = "&ZeroWidthSpace;";
var n_10;

// Variables para el ejercicio 11
var r_11 = "&ZeroWidthSpace;";
var n_11;

// Variables para el ejercicio 12
var r_12 = "&ZeroWidthSpace;";
var n_12;

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

// Ejercicio 1
// Genera un entero positivo de un dígito y se 
// debe obtener su valor absoluto. En este caso, como el número es positivo, 
// la respuesta siempre será el propio número. Sin embargo, el ejercicio se puede modificar para generar números negativos o incluso cero, 
// lo que haría que la respuesta pueda ser "Negativo" o "Cero" respectivamente.
function Ejercicio01(){

    activated[1] = true;
    limpiarRespuestas(["r_1"]);

    // Genera un entero aleatorio entre 1 y 9
    n_1 = enteroAleatorio(1, 9);
    document.getElementById("n_1").innerHTML = n_1;
}

function Respuesta01(){

    if (!activated[1]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_1 === 'undefined')
        return;
    document.getElementById("r_1").innerHTML = Math.abs(n_1);
}

// Ejercicio 2: 
// Es similar al ejercicio 1, pero en esta ocasión se utilizan 
// números positivos de dos dígitos. 
function Ejercicio02(){

    activated[2] = true;
    limpiarRespuestas(["r_2"]);

    // Genera un entero aleatorio entre 10 y 99
    n_2 = enteroAleatorio(10, 99);
    document.getElementById("n_2").innerHTML = n_2;
}

function Respuesta02(){

    if (!activated[2]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_2 === 'undefined')
        return;
    document.getElementById("r_2").innerHTML = Math.abs(n_2);
}

// Ejercicio 3
// Es similar al ejercicio anterior, pero en esta ocasión se 
// utilizan números enteros positivos de tres dígitos. La respuesta seguirá siendo "Positivo" para todos los casos, 
// pero se puede modificar el ejercicio para incluir números negativos o cero, 
// lo que haría que la respuesta pueda ser "Negativo" o "Cero" respectivamente.
function Ejercicio03(){

    activated[3] = true;
    limpiarRespuestas(["r_3"]);

    // Genera un entero aleatorio entre 100 y 999
    n_3 = enteroAleatorio(100, 999);
    document.getElementById("n_3").innerHTML = n_3;
}

function Respuesta03(){

    if (!activated[3]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_3 === 'undefined')
        return;
    document.getElementById("r_3").innerHTML = Math.abs(n_3);
}

// Ejercicio 4
// Es similar a los ejercicios previos, pero en esta ocasión, 
// se utilizan enteros positivos arbitrarios menores a 1000. La respuesta seguirá siendo "Positivo" para todos 
// los casos, pero se puede modificar el ejercicio para incluir números negativos o cero.
function Ejercicio04(){

    activated[4] = true;
    limpiarRespuestas(["r_4"]);

    // Genera un entero aleatorio entre 1 y 999
    n_4 = enteroAleatorio(1, 999);
    document.getElementById("n_4").innerHTML = n_4;
}

function Respuesta04(){

    if (!activated[4]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_4 === 'undefined')
        return;
    document.getElementById("r_4").innerHTML = Math.abs(n_4);
}

/*
Los ejercicios 5 al 8 serán idénticos a los ejercicios 1 al 4 respectivamente, pero en 
esta ocasión se generarán números enteros negativos. Por lo tanto, la respuesta para 
cada ejercicio será "Negativo". Sin embargo, al igual que con los ejercicios anteriores, 
se pueden modificar para incluir números positivos o cero, lo que haría que la respuesta pueda ser 
"Positivo" o "Cero" respectivamente.
*/

// Ejercicio 5
function Ejercicio05(){

    activated[5] = true;
    limpiarRespuestas(["r_5"]);

    // Genera un entero aleatorio entre -9 y -1
    n_5 = enteroAleatorio(-9, -1);
    document.getElementById("n_5").innerHTML = n_5;
}

function Respuesta05(){

    if (!activated[5]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_5 === 'undefined')
        return;
    document.getElementById("r_5").innerHTML = Math.abs(n_5);
}

// Ejercicio 6
function Ejercicio06(){

    activated[6] = true;
    limpiarRespuestas(["r_6"]);

    // Genera un entero aleatorio entre -99 y -10
    n_6 = enteroAleatorio(-99, -10);
    document.getElementById("n_6").innerHTML = n_6;
}

function Respuesta06(){

    if (!activated[6]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_6 === 'undefined')
        return;
    document.getElementById("r_6").innerHTML = Math.abs(n_6);
}

// Ejercicio 7
function Ejercicio07(){

    activated[7] = true;
    limpiarRespuestas(["r_7"]);

    // Genera un entero aleatorio entre -999 y -100
    n_7 = enteroAleatorio(-999, -100);
    document.getElementById("n_7").innerHTML = n_7;
}

function Respuesta07(){

    if (!activated[7]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_7 === 'undefined')
        return;
    document.getElementById("r_7").innerHTML = Math.abs(n_7);
}

// Ejercicio 8
function Ejercicio08(){

    activated[8] = true;
    limpiarRespuestas(["r_8"]);

    // Genera un entero aleatorio entre -999 y -1
    n_8 = enteroAleatorio(-999, -1);
    document.getElementById("n_8").innerHTML = n_8;
}

function Respuesta08(){

    if (!activated[8]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_8 === 'undefined')
        return;
    document.getElementById("r_8").innerHTML = Math.abs(n_8);
}

/*
Los ejercicios 9 al 12 tendrán la misma lógica que los ejercicios 1 al 4 en lo que al número de dígitos se refiere, 
pero en esta ocasión se generarán números enteros que pueden ser positivos, negativos o cero. 
Por lo tanto, la respuesta para cada ejercicio dependerá del número generado y puede ser "Positivo", "Negativo" o "Cero".
*/

// Ejercicio 9
function Ejercicio09(){

    activated[9] = true;
    limpiarRespuestas(["r_9"]);

    // Genera un entero aleatorio entre -9 y 9
    n_9 = enteroAleatorio(-9, 9);
    document.getElementById("n_9").innerHTML = n_9;
}

function Respuesta09(){

    if (!activated[9]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_9 === 'undefined')
        return;
    document.getElementById("r_9").innerHTML = Math.abs(n_9);
}

// Ejercicio 10
function Ejercicio10(){

    activated[10] = true;
    limpiarRespuestas(["r_10"]);

    // Genera un entero aleatorio entre -99 y 99
    n_10 = enteroAleatorio(-99, 99);
    document.getElementById("n_10").innerHTML = n_10;
}

function Respuesta10(){

    if (!activated[10]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_10 === 'undefined')
        return;
    document.getElementById("r_10").innerHTML = Math.abs(n_10);
}

// Ejercicio 11
function Ejercicio11(){

    activated[11] = true;
    limpiarRespuestas(["r_11"]);

    // Genera un entero aleatorio entre -999 y 999
    n_11 = enteroAleatorio(-999, 999);
    document.getElementById("n_11").innerHTML = n_11;
}

function Respuesta11(){

    if (!activated[11]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_11 === 'undefined')
        return;
    document.getElementById("r_11").innerHTML = Math.abs(n_11);
}

// Ejercicio 12
function Ejercicio12(){

    activated[12] = true;
    limpiarRespuestas(["r_12"]);

    // Genera un entero aleatorio entre -9999 y 9999
    n_12 = enteroAleatorio(-9999, 9999);
    document.getElementById("n_12").innerHTML = n_12;
}

function Respuesta12(){

    if (!activated[12]) return;
    // Si no había número, el ejercicio no ha comenzado, así que no se hace nada
    if(typeof n_12 === 'undefined')
        return;
    document.getElementById("r_12").innerHTML = Math.abs(n_12);
}
