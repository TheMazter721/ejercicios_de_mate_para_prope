var primos = [2, 3, 5, 7, 11];

// Arreglo con todas las letras del alfabeto, para poder escoger una letra aleatoria
var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
              "z"];

// Para generar números enteros aleatorios

var activated = [];
function enteroAleatorio(a,b){ // Genera números aleatorios entre a y b
	var x = a + Math.floor((b-a+1)*Math.random());
	return x;
}

// Función letraAeleatoria: Escoge una letra aleatoria del alfabeto y la regresa
function letraAleatoria(){
    var idx = enteroAleatorio(0, letras.length - 1);
    return letras[idx];
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

/* Los racionales se representan como arreglos con dos números.
La siguiente función recibe un racional (con numerador y denominador positivos) 
y devuelve el mismo racional pero en forma irreducible. Para ello, se auxilia
de la función mcd. */
function racionalIrreducible(racional){
    var numerador = racional[0];
    var denominador = racional[1];
    var divisor = mcd(numerador, denominador);
    return [numerador / divisor, denominador / divisor];
}

// En esta ocasión, la función para escribir la respuesta en la página es más complicada,
// así que se auxilia de una función auxiliar llamada escribeRacional, que básicamente
// hace lo mismo que hacía la función respuesta. Para ello, recibe directamente las etiquetas
// intr, nr, dr y el racional a escribir, que es un arreglo con dos elementos: el numerador y el denominador.
function escribeRacional(intr, nr, dr, rat){
    // Obtiene el numerador y el denominador del racional
    var num = rat[0];
    var den = rat[1];

    // Si la respuesta es 0, simplemente pone cero
    if(num === 0){
        document.getElementById(intr).innerHTML = "0";
        mostrarElementos([intr]);

        // No muestra los otros elementos. Para ello, modifica su display como none, para que no ocupen espacio en la página
        ocultarElementos([nr, dr]);
        //document.getElementById(signor).setAttribute("style", "display: none;");
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(den === 1){
        document.getElementById(intr).innerHTML = Math.abs(num);
        mostrarElementos([intr]);

        ocultarElementos([nr, dr]);

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0){
            //document.getElementById(signor).innerHTML = "- ";
            //document.getElementById(signor).setAttribute("style", "display: inline;");
        } else {
            //document.getElementById(signor).setAttribute("style", "display: none;");
        }
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        ocultarElementos([intr]);

        document.getElementById(nr).innerHTML = Math.abs(num);
        document.getElementById(dr).innerHTML = den;
        mostrarElementos([nr, dr]);

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        // if(num < 0){
        //     document.getElementById(signor).innerHTML = "- ";
        //     document.getElementById(signor).setAttribute("style", "display: inline;");
        // } else {
        //     document.getElementById(signor).setAttribute("style", "display: none;");
        // }
    }
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

/* Variables globales para el Ejercicio 1.
El Ejercicio 1 consiste simplemente en darle un radical al alumno y pedirle que lo convierta a un exponente fraccionario.
Se necesita únicamente una letra aleatoria y un índice para el radical. */
var letra_1, indice_1;

/* Función para el Ejercicio 1. Simplemente elige una letra aleatoria y un índice 
aleatoria, y los muestra en el sitio web. Sin embargo, hay que tener cuidado con si el índice
es 2 o mayor a 2. Si el índice es 2, se muestra como una raíz cuadrada y se cambia
el display como none de los otros elementos del sitio web; si es mayor a 2, se muestra como una raíz en general
y se hace lo opuesto con los otros elementos del sitio web. Para facilitar lo anterior, se emplean
las funciones auxiliares mostrarElementos y ocultarElementos. */
function Ejercicio01(){
    activated[1] = true;
    // Limpia la respuesta anterior 
    limpiarRespuestas(["radicalr_1", "numr_1", "denr_1"]);

    letra_1 = letraAleatoria();
    indice_1 = enteroAleatorio(2, 5);

    // Cuando el índice es 2, se muestra como una raíz cuadrada y se ocultan los otros elementos
    if(indice_1 === 2){
        mostrarElementos(["radical2_1", "cuadrada_root1"]);
        document.getElementById("radical2_1").innerHTML = letra_1;

        ocultarElementos(["normal_root1"]);
    }
    // Cuando el índice es mayor a 2, se muestra como una raíz en general y se muestran los otros elementos
    else{
        mostrarElementos(["radical1_1", "indice1_1", "normal_root1"]);
        document.getElementById("radical1_1").innerHTML = letra_1;
        document.getElementById("indice1_1").innerHTML = indice_1;

        ocultarElementos(["cuadrada_root1"]);
    }
}

/* Función para la respuesta del Ejercicio 1
Esta función es más simple, pues únicamente tienen que mostrar la letra, el numerador y el denominador del exponente fraccionario.
Esto es simple porque ya se sabe que el numerador es 1. */
function Respuesta01(){
    if (!activated[1]) return;
    document.getElementById("radicalr_1").innerHTML = letra_1;
    document.getElementById("numr_1").innerHTML = 1;
    document.getElementById("denr_1").innerHTML = indice_1;
}

/* Variables globales para el Ejercicio 2. Este ejercicio es similar al Ejercicio 1,
pero ahora el alumno lidiará con una expresión de la forma root(literal^exponente), donde la 
raíz sigue siendo de cualquier orden entre 2 y 5. Para ello, se utilizan los mismos
mecanismos del Ejercicio 1, pero en esta ocasión se incluye un exponente para la literal dentro del radical. */
var letra_2, indice_2, exponente_2;

/* Función para el Ejercicio 2. Similar a la función Ejercicio01, pero ahora se incluye un exponente para la literal dentro del radical. */
function Ejercicio02(){
    activated[2] = true;
    // Limpia la respuesta anterior 
    limpiarRespuestas(["radicalr_2", "numr_2", "denr_2"]);

    letra_2 = letraAleatoria();
    indice_2 = enteroAleatorio(2, 5);
    exponente_2 = enteroAleatorio(2, 5);

    // Cuando el índice es 2, se muestra como una raíz cuadrada y se ocultan los otros elementos
    if(indice_2 === 2){
        mostrarElementos(["radical2_2", "exp2_2", "cuadrada_root2"]);
        document.getElementById("radical2_2").innerHTML = letra_2;
        document.getElementById("exp2_2").innerHTML = exponente_2;

        ocultarElementos(["normal_root2"]);
    }
    // Cuando el índice es mayor a 2, se muestra como una raíz en general y se muestran los otros elementos
    else{
        mostrarElementos(["radical1_2", "exp1_2", "indice1_2", "normal_root2"]);
        document.getElementById("radical1_2").innerHTML = letra_2;
        document.getElementById("exp1_2").innerHTML = exponente_2;
        document.getElementById("indice1_2").innerHTML = indice_2;

        ocultarElementos(["cuadrada_root2"]);
    }
}

/* Función para la respuesta del Ejercicio 2
Esta función es similar a la función Respuesta01, pero ahora el numerador del exponente fraccionario es el exponente de la literal dentro del radical. */
function Respuesta02(){
    if (!activated[2]) return;
    // Primero, escribe la letra
    document.getElementById("radicalr_2").innerHTML = letra_2;

    // Después, escribe el racional simplificado [exponente_2, indice_2] como exponente fraccionario
    var rat = racionalIrreducible([exponente_2, indice_2]);
    escribeRacional("intr_2", "numr_2", "denr_2", rat);

    // Solo lo muestra si el exponente es distinto de 1, pues si es 1, no se escribe nada
    if(rat[0] !== rat[1])
        mostrarElementos(["expr_2"]);
    else
        ocultarElementos(["expr_2"]);
}

/* Ejercicio 3:
Es parecido al Ejercicio 1, pero al revés. Esto es, se le da al alumno 
una expresión de la forma a^(1/n), y debe transformarla a radical. Para ello, nuevamente, se deben manejar por separado
los casos en los que n=2 y n>2 */
var letra_3, indice_3;

function Ejercicio03(){
    activated[3] = true;
    // Limpia la respuesta anterior 
    limpiarRespuestas(["radicalr_3", "indicer_3"]);
    // En este caso, por ser una raíz, también la oculta
    ocultarElementos(["normal_root3"]);

    // Obtiene la letra y el índice aleatorios
    letra_3 = letraAleatoria();
    indice_3 = enteroAleatorio(2, 5);

    // Cambia el display del ejercicio
    mostrarElementos(["exp_frac3"]);

    // Muestra la literal y el índice
    document.getElementById("radical1_3").innerHTML = letra_3;
    document.getElementById("den1_3").innerHTML = indice_3;
    document.getElementById("num1_3").innerHTML = 1;
}

/* Función para la respuesta del Ejercicio 3
Esta función es similar a la función Respuesta01, pero ahora el numerador del 
exponente fraccionario es 1 y el denominador es el índice del radical. */
function Respuesta03(){
    if (!activated[3]) return;
    // Cambia el display de normal_root3 para que sea visible
    mostrarElementos(["normal_root3"]);

    // Muestra el radical
    document.getElementById("radicalr_3").innerHTML = letra_3;

    // Muestra el índice si es distinto de 2. De otro modo,
    // lo deja como &ZeroWidthSpace; para que no se vea nada
    if(indice_3 !== 2){
        document.getElementById("indicer_3").innerHTML = indice_3;
    } else {
        document.getElementById("indicer_3").innerHTML = "&ZeroWidthSpace;";
    }
}

/* Variables globales para el Ejercicio 4.
Este Ejercicio es similar al Ejercicio 3, pero en esta ocasión
también se permite variar el numerador del exponente fraccionario. */
var letra_4, exponente_4, indice_4;

/* Función para el Ejercicio 4. Similar a la función Ejercicio03, pero ahora se incluye un exponente para la literal dentro del radical. */
function Ejercicio04(){
    activated[4] = true;
    // Limpia la respuesta anterior 
    limpiarRespuestas(["radicalr_4", "numr_4", "denr_4"]);
    // En este caso, por ser una raíz, también la oculta
    ocultarElementos(["normal_root4"]);

    // Obtiene la letra, el índice y el exponente aleatorios
    letra_4 = letraAleatoria();
    indice_4 = enteroAleatorio(2, 5);
    exponente_4 = enteroAleatorio(2, 5);

    // Cambia el display del ejercicio
    mostrarElementos(["exp_frac4"]);

    // Muestra la literal, el índice y el exponente
    document.getElementById("radical1_4").innerHTML = letra_4;
    document.getElementById("den1_4").innerHTML = indice_4;
    document.getElementById("num1_4").innerHTML = exponente_4;
}

/* Función para la respuesta del Ejercicio 4
Esta función es similar a la función Respuesta02, pero ahora el numerador del exponente fraccionario es el exponente de la literal dentro del radical. */
function Respuesta04(){
    if (!activated[4]) return;
    // Cambia el display de normal_root4 para que sea visible
    mostrarElementos(["normal_root4"]);

    // Muestra el radical
    document.getElementById("radicalr_4").innerHTML = letra_4;

    // Racional simplificado del exponente fraccionario [exponente_4, indice_4]
    var rat = racionalIrreducible([exponente_4, indice_4]);

    // Escribe el racional en la consola para cuestiones de depuración
    console.log("Racional simplificado: " + rat[0] + "/" + rat[1]);

    // Escribe el numerador como exponente
    document.getElementById("expr_4").innerHTML = rat[0];

    // Escribe el denominador como índice del radical, pero solo si es distinto de 2
    if(rat[1] !== 2)
        document.getElementById("indicer_4").innerHTML = rat[1];
    else
        document.getElementById("indicer_4").innerHTML = "&ZeroWidthSpace;";

    // Si el numerador es 1, no hace falta mostrar el exponente, así que lo oculta. De otro modo, lo muestra
    if(rat[0] !== 1)
        mostrarElementos(["expr_4"]);
    else
        ocultarElementos(["expr_4"]);

    // Hace lo mismo con el denominador, pero en este caso, si es 1, no hace falta mostrar el índice del radical
    if(rat[1] !== 1)
        mostrarElementos(["indicer_4"]);
    else
        ocultarElementos(["indicer_4"]);
}
