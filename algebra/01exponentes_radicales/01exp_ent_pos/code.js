// Variables globales para los ejercicios de mcm
var primos = [2, 3, 5, 7, 11];



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
var n1, exp1, resultado1;

// Función para el Ejercicio 1. Genera un número entero aleatorio y una potencia aleatoria, y los muestra en el HTML
// Cuando el número es negativo, también muestra los paréntesis y el signo negativo. Cuando el número es positivo, no muestra ni paréntesis ni signo
function Ejercicio1(){

    activated[1] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["signo_r_1", "r_1"]);

    // Generar un número entero aleatorio entre -11 y 11, sin excluir al 0
    n1 = enteroAleatorio(-11, 11);

    // Generar una potencia aleatoria entre 1 y 4
    exp1 = enteroAleatorio(1, 4);

    // Obtiene el resultado de n1 elevado a exp1
    resultado1 = Math.pow(n1, exp1);

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
    document.getElementById("r_1").innerHTML = Math.abs(resultado1);

    // Muestra el signo negativo si el resultado es negativo
    if(resultado1 < 0){
        mostrarElementos(["signo_r_1"]);
        document.getElementById("signo_r_1").innerHTML = "- ";
    } else {
        ocultarElementos(["signo_r_1"]);
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 1: resultado = " + resultado1);
}

// Función para el Ejercicio 2:
// Es similar al Ejercicio 1, pero ahora se generan dos enteros positivos aleatorios, ambos entre 1 y 11,
// y un signo aleatorio, que puede ser positivo o negativo. Con esto se forma un número racional.
// También se genera una potencia aleatoria entre 1 y 4, y se muestra el número racional y la potencia en el HTML.
// Las variables globales para este ejercicio son n1_2, n2_2, exp2, signo_2 y 
// las variables para el resultado, que serán num_2 y denom_2. Cuando el número racional es negativo, 
// también se muestran los paréntesis y el signo negativo. Cuando el número racional es positivo, no se muestran ni paréntesis ni signo.
var n1_2, n2_2, exp2, signo_2, num_2, denom_2;

function Ejercicio2(){

    activated[2] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["signo_r_2", "num_2", "denom_2"]);

    // Los paréntesis siempre se necesitan porque es un número racional
    mostrarElementos(["par_izq_2", "par_der_2"]);

    // Generar dos enteros positivos aleatorios entre 1 y 11
    n1_2 = enteroAleatorio(1, 11);
    n2_2 = enteroAleatorio(1, 11);

    // Vuelve a generar n2 hasta que n1 no sea divisible por n2, para evitar que el número racional sea un entero
    while(n1_2 % n2_2 === 0){
        n2_2 = enteroAleatorio(1, 11);
    }

    // Generar un signo aleatorio, que puede ser positivo o negativo
    signo_2 = Math.random() < 0.5 ? -1 : 1;

    // Generar una potencia aleatoria entre 1 y 4
    exp2 = enteroAleatorio(1, 4);

    // Obtiene el resultado del número racional elevado a exp2
    num_2 = Math.pow(signo_2 * n1_2, exp2);
    denom_2 = Math.pow(n2_2, exp2);

    // Muestra el número racional y la potencia en el HTML
    document.getElementById("n1_2").innerHTML = Math.abs(n1_2);
    document.getElementById("n2_2").innerHTML = Math.abs(n2_2);
    document.getElementById("exp_2").innerHTML = exp2;

    // Muestra el signo negativo si el número racional es negativo
    if(signo_2 < 0){
        mostrarElementos(["signo_2"]);
    } else {
        ocultarElementos(["signo_2"]);
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 2: n1 = " + n1_2 + ", n2 = " + n2_2 + ", signo = " + signo_2 + ", exp2 = " + exp2 + ", num_2 = " + num_2 + ", denom_2 = " + denom_2);
}

// Función para la respuesta del Ejercicio 2. Muestra el resultado en el HTML y también muestra el signo negativo si el resultado es negativo
function Respuesta2(){

    if (!activated[2]) return;
    // Muestra el resultado en el HTML. Debe mostrar el numerador y el denominador por separado, y también debe mostrar el signo negativo si el resultado es negativo
    document.getElementById("num_2").innerHTML = Math.abs(num_2);
    document.getElementById("denom_2").innerHTML = Math.abs(denom_2);

    // Muestra el signo negativo si el resultado es negativo
    if(num_2 < 0){
        mostrarElementos(["signo_r_2"]);
        document.getElementById("signo_r_2").innerHTML = "- ";
        console.log("num_2 es negativo, mostrando signo_r_2");
    } else {
        ocultarElementos(["signo_r_2"]);
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 2: num_2 = " + num_2 + ", denom_2 = " + denom_2);
}

// Variables globales para el Ejercicio 3. Este ejercicio es muy similar al Ejercicio 1,
// pero en esta ocasión solamente se va a elevar 0 a alguna potencia entera entre 1 y 100.
// Por lo tanto, las variables globales para este ejercicio son exp3 y resultado3.
var exp3, resultado3;

// Función para el Ejercicio 3. Genera una potencia aleatoria entre 1 y 100, y muestra el número 0 y la potencia en el HTML
function Ejercicio3(){

    activated[3] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["r_3"]);

    // Generar una potencia aleatoria entre 1 y 100
    exp3 = enteroAleatorio(1, 100);

    // Obtiene el resultado de 0 elevado a exp3, que siempre será 0
    resultado3 = 0;

    // Muestra el número 0 y la potencia en el HTML
    document.getElementById("n_3").innerHTML = 0;
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
// pero ahora se elevará 1 a alguna potencia entera entre 1 y 100. Por lo tanto, las variables globales para este ejercicio son exp4 y resultado4.
var exp4, resultado4;

// Función para el Ejercicio 4. Genera una potencia aleatoria entre 1 y 100, y muestra el número 1 y la potencia en el HTML
function Ejercicio4(){

    activated[4] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["r_4"]);

    // Generar una potencia aleatoria entre 1 y 100
    exp4 = enteroAleatorio(1, 100);

    // Obtiene el resultado de 1 elevado a exp4, que siempre será 1
    resultado4 = 1;

    // Muestra el número 1 y la potencia en el HTML
    document.getElementById("n_4").innerHTML = 1;
    document.getElementById("exp_4").innerHTML = exp4;

    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 4: exp4 = " + exp4 + ", resultado = " + resultado4);
}

// Función para la respuesta del Ejercicio 4. Muestra el resultado en el HTML
function Respuesta4(){

    if (!activated[4]) return;
    // Muestra el resultado en el HTML
    document.getElementById("r_4").innerHTML = resultado4;

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 4: resultado = " + resultado4);
}

// Variables globales para el Ejercicio 5. Este ejercicio es muy similar al Ejercicio 4,
// pero ahora se elevará -1 a alguna potencia entera entre 1 y 100. Por lo tanto, las variables globales para este ejercicio son exp5 y resultado5.
var exp5, resultado5;

// Función para el Ejercicio 5. Genera una potencia aleatoria entre 1 y 100, y muestra el número -1 y la potencia en el HTML
function Ejercicio5(){

    activated[5] = true;
    // Limpia la respuesta anterior
    limpiarRespuestas(["r_5", "signo_r_5"]);

    // Generar una potencia aleatoria entre 1 y 100
    exp5 = enteroAleatorio(1, 100);

    // Obtiene el resultado de -1 elevado a exp5, que será -1 si exp5 es impar y 1 si exp5 es par
    resultado5 = (exp5 % 2 === 0) ? 1 : -1;

    // Muestra el número 1, el signo y la potencia en el HTML
    document.getElementById("n_5").innerHTML = 1;
    document.getElementById("exp_5").innerHTML = exp5;

    mostrarElementos(["signo_5", "par_izq_5", "par_der_5"]);

    // Muestra el resultado en la consola para fines de depuración
    console.log("Ejercicio 5: exp5 = " + exp5 + ", resultado = " + resultado5);
}

// Función para la respuesta del Ejercicio 5. Muestra el resultado en el HTML y también muestra el signo negativo si el resultado es negativo
function Respuesta5(){

    if (!activated[5]) return;
    // Muestra el resultado en el HTML
    document.getElementById("r_5").innerHTML = Math.abs(resultado5);

    // Muestra el signo negativo si el resultado es negativo
    if(resultado5 < 0){
        mostrarElementos(["signo_r_5"]);
        document.getElementById("signo_r_5").innerHTML = "- ";
    } else {
        ocultarElementos(["signo_r_5"]);
    }

    // Muestra el resultado en la consola para fines de depuración
    console.log("Respuesta 5: resultado = " + resultado5);
}

// La siguiente función es similar a mostrarElementos, pero esta vez regresa el display a block en lugar de inline
function mostrarElementosBlock(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.style.display = "block";
    }
}

// Una tercera función que lo cambia el display a inline-block, para que se vea bien en los ejercicios de potenciación
function mostrarElementosInlineBlock(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.style.display = "inline-block";
    }
}

// Una cuarta función que cambia el display a math, para regresar elementos como mrow a como eran antes
function mostrarElementosMath(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.style.display = "math";
    }
}

