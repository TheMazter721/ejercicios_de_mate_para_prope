// Variables globales para los ejercicios de mcm
var primos = [2, 3, 5, 7, 11];

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
              "z"];

// La siguiente función permite generar n letras distintas de forma aleatoria. Para ello, primero genera 
// un arreglo con todas las letras del alfabeto, y luego lo permuta de forma aleatoria. Finalmente, regresa las primeras n letras del arreglo permutado.
function nLetrasDistintas(n){
    var perm = permutarArreglo(letras);
    var resultado = [];
    for(var i = 0; i < n; i++)
        resultado[i] = perm[i];
    return resultado;
}



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

/* Variables globales para el Ejercicio 1. Este ejercicio consiste en obtener la raíz cuadrada de un número entero
que se obtenga como resultado de elevar al cuadrado un número entre 1 y 11, y después agregarle un signo.
Por tal razón, se utilizan como variables globales una para el entero, otra para el signo, y otra para el resultado. */
var signo_1, entero_1, resultado_1;

/* Función para el Ejercicio 1
Primero se determina resultado_1 como un entero aleatorio entre 1 y 11, después se elige un signo al 
obtener 1 o -1. Posteriormente, se calcula entero_1 como resultado_1^2 * signo_1. Luego, se escribe en el sitio
web a entero_1 */
function Ejercicio01(){
    activated[1] = true;
    // Limpia las respuestas de los elementos cuyo ID es r_1 y t_1
    limpiarRespuestas(["r_1", "t_1"]);

    // Hace que la raíz sea visible
    document.getElementById("raiz_1").style.display = "inline";

    // Se obtiene un entero aleatorio entre 1 y 11
    resultado_1 = enteroAleatorio(1, 11);
    // Se elige un signo al obtener 1 o -1
    signo_1 = Math.random() < 0.5 ? 1 : -1;
    // Se calcula entero_1
    entero_1 = resultado_1 * resultado_1 * signo_1;
    // Se escribe en el sitio web a entero_1
    document.getElementById("c_1").innerHTML = entero_1;
}

/* Función para escribir la respuesta del Ejercicio 1
Si el signo fue -1, se debe cambiar el display del elemento t_1 a inline para 
que el texto 'El resultado no es un número real' se vea. Si el signo fue 1, entonces 
el display de t_1 debe cambiarse a none y se debe mostrar entero_1 en el sitio web, 
en el elemento cuyo ID es r_1. */
function Respuesta01(){
    if (!activated[1]) return;
    if(signo_1 === -1){
        document.getElementById("t_1").style.display = "inline";
        document.getElementById("t_1").innerHTML = "El resultado no es un número real.";
        document.getElementById("r_1").innerHTML = "&ZeroWidthSpace;";
    } else {
        document.getElementById("t_1").style.display = "none";
        document.getElementById("r_1").innerHTML = resultado_1;
    }
}

/* Variables globales para el Ejercicio 2. Este ejercicio consiste en obtener la raíz cúbica de un número entero
que se obtenga como resultado de elevar al cubo un número entre 1 y 7, y después agregarle un signo.
Por tal razón, se utilizan como variables globales una para el entero, otra para el signo, y otra para el resultado. */
var signo_2, entero_2, resultado_2;

/* Función para el Ejercicio 2
Primero se determina resultado_2 como un entero aleatorio entre 1 y 7, después se elige un signo al
obtener 1 o -1. Posteriormente, se calcula entero_2 como resultado_2^3 * signo_2. Luego, se escribe en el sitio
web a entero_2 */
function Ejercicio02(){
    activated[2] = true;
    // Limpia las respuestas de los elementos cuyo ID es r_2 and t_2
    limpiarRespuestas(["r_2"]);

    // Hace que la raíz sea visible
    document.getElementById("raiz_2").style.display = "inline";

    // Se elige un signo al obtener 1 o -1
    signo_2 = Math.random() < 0.5 ? 1 : -1;

    // Se obtiene un entero aleatorio entre 1 y 7, multiplicado por el signo
    resultado_2 = enteroAleatorio(1, 7) * signo_2;
    
    // Se calcula entero_2
    entero_2 = resultado_2 * resultado_2 * resultado_2;
    // Se escribe en el sitio web a entero_2
    document.getElementById("c_2").innerHTML = entero_2;
}

/* Función para escribir la respuesta del Ejercicio 2
En este caso, la respuesta siempre es un número real, independiente del signo. */
function Respuesta02(){
    if (!activated[2]) return;
    document.getElementById("r_2").innerHTML = resultado_2;
}

/* Variables globales para el Ejercicio 3. Este ejercicio consiste en obtener la raíz cuadrada 
de un número racional. Por tal razón, se necesitan variables c_3_num y c_3_den para el racional cuya
raíz cuadrada se obtendrá. Asimismo, se necesita otra variable para el signo. Finalmente, se necesitan 
dos variables r_3_num y r_3_den para el resultado. */
var signo_3, c_3_num, c_3_den, r_3_num, r_3_den;

/* Función para el Ejercicio 3.
Primero, se eligen r_3_num y r_3_den como enteros entre 1 y 11. Posteriormente, se elige el signo
como 1 o -1. Luego, se calculan c_3_num y c_3_den multiplicados por el signo. Se escriben en el sitio web
c_3_num y c_3_den en el sitio web, así como el signo en caso de ser -1. */
function Ejercicio03(){
    activated[3] = true;
    // Limpia las respuestas de los elementos cuyo ID es r_3_num, r_3_den y t_3
    limpiarRespuestas(["r_3_num", "r_3_den", "t_3"]);

    // Hace que la raíz sea visible
    document.getElementById("raiz_3").style.display = "inline";

    // Se eligen r_3_num y r_3_den como enteros entre 1 y 11
    r_3_num = enteroAleatorio(1, 11);
    r_3_den = enteroAleatorio(1, 11);

    // Se asegura de que r_3_den no divida a r_3_num, para que el resultado no sea un número entero
    while(r_3_num % r_3_den === 0){
        r_3_den = enteroAleatorio(1, 11);
    }

    // Se elige un signo al obtener 1 o -1
    signo_3 = Math.random() < 0.5 ? 1 : -1;

    // Se calculan c_3_num y c_3_den sin importar el signo
    c_3_num = r_3_num * r_3_num;
    c_3_den = r_3_den * r_3_den;

    // Se escriben en el sitio web c_3_num y c_3_den
    document.getElementById("c_3_num").innerHTML = c_3_num;
    document.getElementById("c_3_den").innerHTML = c_3_den;

    // Si el signo fue -1, se debe mostrar el signo en el sitio web. Si fue 1, entonces no se debe mostrar nada.
    if(signo_3 === -1){
        document.getElementById("signo_3").style.display = "inline";
        document.getElementById("signo_3").innerHTML = "-" ;
    } else {
        document.getElementById("signo_3").style.display = "none";
        document.getElementById("signo_3").innerHTML = "&ZeroWidthSpace;";
    }
}

/* Función para escribir la respuesta del Ejercicio 3
Si el signo fue -1, se debe cambiar el display del elemento t_3 a inline para 
que el texto 'El resultado no es un número real' se vea. Si el signo fue 1, entonces 
el display de t_3 debe cambiarse a none y se debe mostrar r_3_num y r_3_den en el sitio web, 
en los elementos cuyo ID son r_3_num y r_3_den. */
function Respuesta03(){
    if (!activated[3]) return;
    if(signo_3 === -1){
        mostrarElementos(["t_3"]);
        document.getElementById("t_3").innerHTML = "El resultado no es un número real.";

        ocultarElementos(["r_3"]);
        document.getElementById("r_3_num").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("r_3_den").innerHTML = "&ZeroWidthSpace;";
    } else {
        ocultarElementos(["t_3"]);

        mostrarElementos(["r_3"]);
        document.getElementById("r_3_num").innerHTML = r_3_num;
        document.getElementById("r_3_den").innerHTML = r_3_den;
    }
}

/* Variables globales para el Ejercicio 4.
Este ejercicio es muy similar al Ejercicio 3, pero en esta ocasión se obtiene la raíz cúbica
en vez de la raíz cuadrada de un número racional. */
var signo_4, c_4_num, c_4_den, r_4_num, r_4_den;

/* Función para el Ejercicio 4.
Primero, se eligen r_4_num y r_4_den como enteros entre 1 y 7. Posteriormente, se elige el signo
como 1 o -1. Luego, se calculan c_4_num y c_4_den multiplicados por el signo. Se escriben en el sitio web
c_4_num y c_4_den en el sitio web, así como el signo en caso de ser -1. */
function Ejercicio04(){
    activated[4] = true;
    // Limpia las respuestas de los elementos cuyo ID es r_4_num, r_4_den y t_4
    limpiarRespuestas(["r_4_num", "r_4_den", "t_4", "signo_r_4"]);

    // Hace que la raíz sea visible
    document.getElementById("raiz_4").style.display = "inline";

    // Se eligen r_4_num y r_4_den como enteros entre 1 y 7
    r_4_num = enteroAleatorio(1, 7);
    r_4_den = enteroAleatorio(1, 7);

    // Se asegura de que r_4_den no divida a r_4_num, para que el resultado no sea un número entero
    while(r_4_num % r_4_den === 0){
        r_4_den = enteroAleatorio(1, 7);
    }

    // Se elige un signo al obtener 1 o -1
    signo_4 = Math.random() < 0.5 ? 1 : -1;

    // Se calculan c_4_num y c_4_den sin importar el signo
    c_4_num = r_4_num * r_4_num * r_4_num;
    c_4_den = r_4_den * r_4_den * r_4_den;

    // Se escriben en el sitio web c_4_num y c_4_den
    document.getElementById("c_4_num").innerHTML = c_4_num;
    document.getElementById("c_4_den").innerHTML = c_4_den;

    // Si el signo fue -1, se debe mostrar el signo en el sitio web. Si fue 1, entonces no se debe mostrar nada.
    if(signo_4 === -1){
        document.getElementById("signo_4").style.display = "inline";
        document.getElementById("signo_4").innerHTML = "-" ;
    } else {
        document.getElementById("signo_4").style.display = "none";
        document.getElementById("signo_4").innerHTML = "&ZeroWidthSpace;";
    }
}

/* Función para escribir la respuesta del Ejercicio 4
En este caso, la respuesta siempre es un número real, independiente del signo. */
function Respuesta04(){
    if (!activated[4]) return;
    document.getElementById("r_4_num").innerHTML = r_4_num;
    document.getElementById("r_4_den").innerHTML = r_4_den;

    // Si el signo fue negativo, se hace visible y se escribe en la respuesta. Si fue positivo, se oculta y no se escribe nada.
    if(signo_4 === -1){
        document.getElementById("signo_r_4").style.display = "inline";
        document.getElementById("signo_r_4").innerHTML = "-" ;
    } else {
        document.getElementById("signo_r_4").style.display = "none";
        document.getElementById("signo_r_4").innerHTML = "&ZeroWidthSpace;";
    }
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

