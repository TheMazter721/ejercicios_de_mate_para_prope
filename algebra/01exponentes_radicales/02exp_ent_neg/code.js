// Variables globales para los ejercicios de mcm
var primos = [2, 3, 5, 7, 11];

var n_1;
var n1_2, n2_2, common_2;
var n1_3, n2_3, n3_3, n4_3, m_3;
var p1_4, p2_4, p3_4, p4_4;
var pow14_4, pow24_4, pow34_4, pow44_4, pow54_4, pow64_4;
var p1_5, p2_5, p3_5, p4_5;
var n1_5, n2_5, n3_5, n4_5, n5_5, n6_5, n7_5, n8_5, m_5;
var p1_6, p2_6, p3_6, p4_6;
var n1_6, n2_6, n3_6, n4_6, n5_6, n6_6, n7_6, n8_6, m_6, l_6;

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

// La siguiente función es similar a limpiarRespuestas, pero esta vez,
// en lugar de modificar el innerHTML, modifica su atributo display para que el elemento no se vea. Esto es útil para los signos de los números
function ocultarElementos(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.style.display = "none";
    }
}

// La siguiente función hace lo opuesto a ocultarElemtos, es decir, hace que los elementos se vean. Esto es útil para los signos de los números
function mostrarElementos(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.style.display = "inline";
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


// Variables globales para el Ejercicio 1. Solo necesita un entero, una potencia, y el resultado, por lo que no se necesitan arreglos
var n1, exp1, denominador1;

// Función para el Ejercicio 1. Genera un número entero aleatorio y una potencia aleatoria, y los muestra en el HTML
// Cuando el número es negativo, también muestra los paréntesis y el signo negativo. Cuando el número es positivo, no muestra ni paréntesis ni signo
function Ejercicio1(){

    activated[1] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["signo_r_1", "numerador_1", "denominador_1"]);

    // Generar un número entero aleatorio entre -11 y 11, excluyendo el 0 y el +-1
    do {
        n1 = enteroAleatorio(-11, 11);
    } while (n1 === 0 || n1 === 1 || n1 === -1);

    // Generar una potencia aleatoria entre -1 y -4
    exp1 = -enteroAleatorio(1, 4);

    // Obtiene el resultado de n1 elevado a exp1. Lo va a escribir en forma de racional,
    // así que solamente calcula el resultado para fines de depuración, pero no lo va a mostrar en el HTML
    var resultado1 = Math.pow(n1, exp1);

    // Calcula el denominador. De entrada se sabe que el denominador es n1 elevado a la potencia positiva de exp1, así que se calcula como n1^(-exp1)
    denominador1 = Math.pow(n1, -exp1);

    // Muestra el número entero y la potencia en el HTML
    document.getElementById("n_1").innerHTML = Math.abs(n1);
    document.getElementById("exp_1").innerHTML = exp1;

    // Muestra los paréntesis y el signo negativo si el número es negativo
    if(n1 < 0){
        mostrarElementos(["par_izq_1", "par_der_1", "signo_1"]);
    } else {
        ocultarElementos(["par_izq_1", "par_der_1", "signo_1"]);
    }
    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 1: n1 = " + n1 + ", exp1 = " + exp1 + ", resultado = " + resultado1);
}

// Función para la respuesta del Ejercicio 1. Muestra el resultado en el HTML y también muestra el signo negativo si el resultado es negativo
function Respuesta1(){

    if (!activated[1]) return;
    // Muestra el resultado en el HTML
    document.getElementById("numerador_1").innerHTML = 1;
    document.getElementById("denominador_1").innerHTML = Math.abs(denominador1);

    // Muestra el signo negativo si el resultado es negativo
    if(denominador1 < 0){
        mostrarElementos(["signo_r_1"]);
        document.getElementById("signo_r_1").innerHTML = "- ";
    } else {
        ocultarElementos(["signo_r_1"]);
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 1: denominador = " + denominador1);
}

// Variables globales para el Ejercicio 2. Necesita dos enteros, una potencia, un signo, y el resultado, por lo que no se necesitan arreglos
var n1_2, n2_2, exp2, denominador2, numerador2, signo2;

// Función para el ejercicio 2. Genera dos números enteros positivos aleatorios, una potencia aleatoria, y un signo aleatorio, con lo cual crea
// un número racional, de manera que el resultado de elevarlo a la potencia sea un número racional. Cuando el signo es negativo, 
// también muestra los paréntesis y el signo negativo. Cuando los números son positivos, no muestra ni paréntesis ni signo
function Ejercicio2(){

    activated[2] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["signo_r_2", "num_2", "denom_2"]);

    // Los paréntesis siempre se muestran por tratarse de un número racional, así que se muestran siempre
    mostrarElementos(["par_izq_2", "par_der_2"]);

    // Generar dos números enteros aleatorios entre 1 y 11
    n1_2 = enteroAleatorio(1, 11); // Numerador
    n2_2 = enteroAleatorio(1, 11); // Denominador

    // Se asegura de que n1_2 no divida a n2_2 ni viceversa, para que el resultado sea un número racional y no un número entero
    while(n1_2 % n2_2 === 0 || n2_2 % n1_2 === 0){
        n1_2 = enteroAleatorio(1, 11);
        n2_2 = enteroAleatorio(1, 11);
    }

    // Generar una potencia aleatoria entre -1 y -4
    exp2 = -enteroAleatorio(1, 4);

    // Genera un signo aleatorio. Basta con generar 1 o -1, y multiplicar el resultado por el signo. 
    // Si el signo es -1, entonces el resultado será negativo, y si es 1, será positivo
    signo2 = Math.random() < 0.5 ? -1 : 1;

    var resultado2 = Math.pow(signo2 * n1_2 / n2_2, exp2);

    // Calcula el numerador y denominador. De entrada se sabe que el numerador es n2_2 elevado a la potencia positiva de exp2,
    // y el denominador es n1_2 elevado a la potencia positiva de exp2, así que se calculan como n2_2^(-exp2) y n1_2^(-exp2)
    numerador2 = Math.pow(n2_2, -exp2);
    denominador2 = Math.pow(n1_2, -exp2);

    // Muestra los números enteros y la potencia en el HTML
    document.getElementById("n1_2").innerHTML = Math.abs(n1_2);
    document.getElementById("n2_2").innerHTML = Math.abs(n2_2);
    document.getElementById("exp_2").innerHTML = exp2;

    // Muestra los paréntesis y el signo negativo si el signo es negativo
    if(signo2 < 0){
        mostrarElementos(["signo_2"]);
    } else {
        ocultarElementos(["signo_2"]);
    }
    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 2: n1 = " + n1_2 + ", n2 = " + n2_2 + ", exp2 = " + exp2 + ", signo = " + signo2 + ", resultado = " + resultado2);
}

// Función para la respuesta del Ejercicio 2. Muestra el resultado en el HTML y también muestra el signo negativo si el resultado es negativo
function Respuesta2(){

    if (!activated[2]) return;
    // Muestra el resultado en el HTML
    document.getElementById("num_2").innerHTML = Math.abs(numerador2);
    document.getElementById("denom_2").innerHTML = Math.abs(denominador2);

    // Muestra el signo negativo si el resultado es negativo. Esto ocurre si y sólo si
    // el signo es negativo y la potencia es impar
    if(signo2 < 0 && exp2 % 2 !== 0){
        mostrarElementos(["signo_r_2"]);
        document.getElementById("signo_r_2").innerHTML = "- ";
    } else {
        ocultarElementos(["signo_r_2"]);
        console.log("signo_r_2 oculto");
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 2: numerador = " + numerador2 + ", denominador = " + denominador2);
}


// Variables globales para el Ejercicio 3. Este ejercicio es muy similar al Ejercicio 1,
// pero ahora se elevará 1 a alguna potencia entera entre -1 y -100. Por lo tanto, las variables globales para este ejercicio son exp3 y resultado3.
var exp3, resultado3;

// Función para el Ejercicio 3. Genera una potencia aleatoria entre 1 y 100, y muestra el número 1 y la potencia en el HTML
function Ejercicio3(){

    activated[3] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["r_3"]);

    // Generar una potencia aleatoria entre -1 y -100
    exp3 = enteroAleatorio(-100, -1);

    // Obtiene el resultado de 1 elevado a exp3, que siempre será 1
    resultado3 = 1;

    // Muestra el número 1 y la potencia en el HTML
    document.getElementById("n_3").innerHTML = 1;
    document.getElementById("exp_3").innerHTML = exp3;

    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 3: exp3 = " + exp3 + ", resultado = " + resultado3);
}

// Función para la respuesta del Ejercicio 3. Muestra el resultado en el HTML
function Respuesta3(){

    if (!activated[3]) return;
    // Muestra el resultado en el HTML
    document.getElementById("r_3").innerHTML = resultado3;

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 3: resultado = " + resultado3);
}

// Variables globales para el Ejercicio 4. Este ejercicio es muy similar al Ejercicio 3,
// pero ahora se elevará -1 a alguna potencia entera entre -1 y -100. Por lo tanto, las variables globales para este ejercicio son exp4 y resultado4.
var exp4, resultado4;

// Función para el Ejercicio 4. Genera una potencia aleatoria entre -1 y -100, y muestra el número -1 y la potencia en el HTML
function Ejercicio4(){

    activated[4] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["r_4", "signo_r_4"]);

    // Generar una potencia aleatoria entre -1 y -100
    exp4 = enteroAleatorio(-100, -1);

    // Obtiene el resultado de -1 elevado a exp4, que será -1 si exp4 es impar y 1 si exp4 es par
    resultado4 = (exp4 % 2 === 0) ? 1 : -1;

    // Muestra el número 1, el signo y la potencia en el HTML
    document.getElementById("n_4").innerHTML = 1;
    document.getElementById("exp_4").innerHTML = exp4;

    mostrarElementos(["signo_4", "par_izq_4", "par_der_4"]);

    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 4: exp4 = " + exp4 + ", resultado = " + resultado4);
}

// Función para la respuesta del Ejercicio 4. Muestra el resultado en el HTML y también muestra el signo negativo si el resultado es negativo
function Respuesta4(){

    if (!activated[4]) return;
    // Muestra el resultado en el HTML
    document.getElementById("r_4").innerHTML = Math.abs(resultado4);

    // Muestra el signo negativo si el resultado es negativo
    if(resultado4 < 0){
        mostrarElementos(["signo_r_4"]);
        document.getElementById("signo_r_4").innerHTML = "- ";
    } else {
        ocultarElementos(["signo_r_4"]);
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 4: resultado = " + resultado4);
}
