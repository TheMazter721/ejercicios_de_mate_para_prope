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

/* 
** FUNCIONES ESPECIALIZADAS EN RACIONALES

Los racionales son representados como un arreglo de 2 elementos, donde el primer elemento es el numerador y el segundo elemento es el denominador. 
Por ejemplo, el racional 3/4 se representa como [3, 4]. Las siguientes funciones son útiles para trabajar con racionales. 
*/

function escribeRacional(intr, nr, dr, signor, rat){
    // Obtiene el numerador y el denominador del racional
    var num = rat[0];
    var den = rat[1];

    // Si la respuesta es 0, simplemente pone cero
    if(num === 0){
        document.getElementById(intr).innerHTML = "0";
        document.getElementById(intr).setAttribute("style", "display: inline;");

        // No muestra los otros elementos. Para ello, modifica su display como none, para que no ocupen espacio en la página
        document.getElementById(nr).setAttribute("style", "display: none;");
        document.getElementById(dr).setAttribute("style", "display: none;");
        document.getElementById(signor).setAttribute("style", "display: none;");
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(den === 1){
        document.getElementById(intr).innerHTML = Math.abs(num);
        document.getElementById(intr).setAttribute("style", "display: inline;");

        document.getElementById(nr).setAttribute("style", "display: none;");
        document.getElementById(dr).setAttribute("style", "display: none;");

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0){
            document.getElementById(signor).innerHTML = "- ";
            document.getElementById(signor).setAttribute("style", "display: inline;");
        } else {
            document.getElementById(signor).setAttribute("style", "display: none;");
        }
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById(intr).setAttribute("style", "display: none;");

        document.getElementById(nr).innerHTML = Math.abs(num);
        document.getElementById(nr).setAttribute("style", "display: inline;");
        document.getElementById(dr).innerHTML = den;
        document.getElementById(dr).setAttribute("style", "display: inline;");

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0){
            document.getElementById(signor).innerHTML = "- ";
            document.getElementById(signor).setAttribute("style", "display: inline;");
        } else {
            document.getElementById(signor).setAttribute("style", "display: none;");
        }
    }
}

function sumaRacional(r1,r2)
//Calcula la suma de dos números racionales y regresa el resultado en forma simplificada,
//	con denominador positivo. Se supone que los denominadores de las fracciones dadas son positivos.
{
    var suma;
    // Es a/b + c/d = (ad + bc)/bd
    var a = r1[0];
    var b = r1[1];
    var c = r2[0];
    var d = r2[1];
    var e = a*d + b*c;
    var f = b*d;
    var divisor = mcd(Math.abs(e),f);
    e = e / divisor;
    f = f / divisor;
    suma = [e,f];
    return suma;		
}

function restaRacional(r1,r2)
//Calcula la resta r1 - r2 de dos números racionales y regresa el resultado en forma simplificada,
//	con denominador positivo. Se supone que los denominadores de las fracciones dadas son positivos.
{
    var resta;
    var a = r1[0];
    var b = r1[1];
    var c = r2[0];
    var d = r2[1];
    var e = a*d - b*c;
    var f = b*d;
    var divisor = mcd(Math.abs(e),f);
    e = e / divisor;
    f = f / divisor;
    resta = [e,f];
    return resta;		
}

// La siguiente función hace la multiplicación r1*r2 y regresa el resultado en forma simplificada
function multiplicaRacional(r1, r2){
    var mult;
    var a = r1[0];
    var b = r1[1];
    var c = r2[0];
    var d = r2[1];

    // La multiplicación de racionales es más sencilla. Simplemente se hace
    // numerador por numerador y denominador por denominador
    var e = a*c;
    var f = b*d;

    // Encuentra el mcd 
    var divisor = mcd(Math.abs(e),f);
    e = e / divisor;
    f = f / divisor;
    mult = [e,f];
    return mult;
}

// La siguiente función hace la división r1/r2 y regresa el resultado en forma simplificada
function divideRacional(r1, r2){
    var div;
    var a = r1[0];
    var b = r1[1];
    var c = r2[0];
    var d = r2[1];

    // La división de racionales es más sencilla. Simplemente se hace
    // numerador por denominador y denominador por numerador
    var e = a*d;
    var f = b*c;

    // Encuentra el mcd 
    var divisor = mcd(Math.abs(e),f);
    e = e / divisor;
    f = f / divisor;
    div = [e,f];
    return div;
}

// La siguiente función permite comparar dos racionales. Regresa 1 si r1 > r2, -1 si r1 < r2 y 0 si son iguales.
// Esto lo hace asumiendo que los denominadores son positivos, y por lo tanto, basta con comparar los numeradores cruzados.
function compararRacional(r1, r2){
    var a = r1[0];
    var b = r1[1];
    var c = r2[0];
    var d = r2[1];

    // Compara los numeradores cruzados
    var e = a*d;
    var f = b*c;

    if(e > f)
        return 1;
    else if(e < f)
        return -1;
    else
        return 0;
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

/* normalizaRacional

Toma un racional [a, b] y, si b < 0, multiplica tanto el numerador como el denominador por -1. */
function normalizaRacional(racional){
    var numerador = racional[0];
    var denominador = racional[1];
    if(denominador < 0){
        numerador = -numerador;
        denominador = -denominador;
    }
    return [numerador, denominador];
}

/* NOTA TÉCNICA: Los racionales se asumen con denominador positivo */

/* NOTA TÉCNICA:

Los ejercicios de este documento se especializan en racionalización. Para ello, habrá tres tipos de ejercicios:

Ejercicios Tipo 1: El alumno racionaliza expresiones de la forma a/(raíz_n-ésima(c))
Ejercicios Tipo 2: El alumno racionaliza expresiones de la forma 1/(más-menos raíz(a) más-menos sqrt(b))
Ejercicios Tipo 3: El alumno racionaliza expresiones de la forma 1/(más-menos a más-menos sqrt(b) ) */

/* ratRoot

Los números de la forma (a*raíz_n-ésima(b))/(c*raíz_n-ésima(d)) se modelaran mediante
arreglos de la forma [[a, c], n, [b, d]], esto es, un arreglo donde el primer elemento 
es el racional a/c, el segundo elemento es el índice de la raíz, y el tercer elemento
es el radicando b/d.

SE ASUME QUE a, b, c, d, n son enteros positivos, y que c y d son distintos de cero. Además, se asume que n es mayor o igual a 2.

La siguiente sección contiene funciones especializadas en objetos de tipo ratRoot. */



/* escribeRatRoot

Esta función permite escribir un objeto de tipo ratRoot en forma legible en el sitio web. Para ello, debe recibir
12 parámetros:

escribeRatRoot(ratRoot, intA, indexA, rootA, intB, indexB, rootB, intC, indexC, rootC, normal_part, fraction_part)

ratRoot: El objeto de tipo ratRoot que se desea escribir.
intA: El id del elemento donde se escribirá el entero a, si hace falta escribirlo en el sitio.
indexA: El id del elemento donde se escribirá el índice de la raíz n, si hace falta escribirlo en el sitio.
rootA: El id del elemento donde se escribirá el radicando b, si hace falta escribirlo en el sitio.
intB: El id del elemento donde se escribirá el entero c, si hace falta escribirlo en el sitio.
indexB: El id del elemento donde se escribirá el índice de la raíz n, si hace falta escribirlo en el sitio.
rootB: El id del elemento donde se escribirá el radicando d, si hace falta escribirlo en el sitio.
intC: El id del elemento donde se escribirá el entero e, si hace falta escribirlo en el sitio.
indexC: El id del elemento donde se escribirá el índice de la raíz n, si hace falta escribirlo en el sitio.
rootC: El id del elemento donde se escribirá el radicando f, si hace falta escribirlo en el sitio.

normal_part: El id del elemento donde se escribirá la parte normal del ratRoot, si hace falta escribirla en el sitio.
fraction_part: El id del elemento donde se escribirá la parte fraccionaria del ratRoot, si hace falta escribirla en el sitio.
*/

function escribeRatRoot(ratRoot, intA, indexA, rootA, intB, indexB, rootB, intC, indexC, rootC, normal_part, fraction_part){

    // Obtiene el numerador y el denominador del racional
    var rat = ratRoot[0];
    var n = ratRoot[1];
    var rad = ratRoot[2];

    // Obtiene explícitamente los elementos del racional y del radicando
    var a = rat[0];
    var c = rat[1];
    var b = rad[0];
    var d = rad[1];

    // Si el numerador es 0 (esto es, si a*b = 0), entonces el resultado es 0, y no hace falta escribir nada más
    if(a === 0 || b === 0){
        // Escribe 0 en la parte normal
        document.getElementById(intA).innerHTML = "0";

        // Oculta indexA y rootA utilizando la función auxiliar ocultarElementos
        ocultarElementos([indexA, rootA]);

        // Oculta también la parte fraccionaria, ya que no hace falta escribirla
        ocultarElementos([fraction_part]);

        // Muestra la parte normal, ya que es la que contiene el 0
        mostrarElementosMath([normal_part]);

        // Una vez que termina de escribir 0, sale de la función
        return;
    }

    // Si el denominador es 1 (esto es, si c*d = 1), entonces solo tiene que escribir la parte normal, y no hace falta escribir la parte fraccionaria
    if(c === 1 && d === 1){
        // Oculta la parte fraccionaria
        ocultarElementos([fraction_part]);

        // Muestra la parte normal
        mostrarElementosMath([normal_part]);

        // Escribe la parte normal
        document.getElementById(intA).innerHTML = a;
        document.getElementById(indexA).innerHTML = n;
        document.getElementById(rootA).innerHTML = b;

        // Si b = 1, oculta indexA y rootA, ya que no hace falta escribir la raíz
        if(b === 1){
            ocultarElementos([indexA, rootA]);
        } else {
            mostrarElementosMath([indexA, rootA]);
            // Si a = 1, oculta intA, ya que no hace falta escribir el 1    
            if(a === 1){
                ocultarElementos([intA]);
            }
        }

        // Si n = 2, oculta indexA, ya que no hace falta escribir el índice de la raíz
        if(n === 2){
            limpiarRespuestas([indexA]);
        }

        // Una vez que termina de escribir la parte normal, sale de la función
        return;
    }

    // Si el denominador es distinto de 1 (esto es, si c*d != 1), entonces debe ocultar la parte normal
    // y escribir la parte fraccionaria
    ocultarElementos([normal_part]);

    // Muestra la parte fraccionaria
    mostrarElementosMath([fraction_part]);
    
    // Escribe la parte fraccionaria
    document.getElementById(intB).innerHTML = a;
    document.getElementById(indexB).innerHTML = n;
    document.getElementById(rootB).innerHTML = b;

    // Si b = 1, oculta indexB y rootB, ya que no hace falta escribir la raíz
    if(b === 1){
        ocultarElementos([indexB, rootB]);
    } else {
        mostrarElementosMath([indexB, rootB]);

        // Si a = 1, oculta intB, ya que no hace falta escribir el 1
        if(a === 1){
            ocultarElementos([intB]);
        }
    }

    // Si n = 2, oculta indexB, ya que no hace falta escribir el índice de la raíz
    if(n === 2){
        limpiarRespuestas([indexB]);
    }

    // Escribe la parte del denominador
    document.getElementById(intC).innerHTML = c;
    document.getElementById(indexC).innerHTML = n;
    document.getElementById(rootC).innerHTML = d;

    // Si d = 1, oculta indexC y rootC, ya que no hace falta escribir la raíz
    if(d === 1){
        ocultarElementos([indexC, rootC]);
    } else {
        mostrarElementosMath([indexC, rootC]);
        // Si c = 1, oculta intC, ya que no hace falta escribir el 1
        if(c === 1){
            ocultarElementos([intC]);
        }
    }

    // Si n = 2, oculta indexC, ya que no hace falta escribir el índice de la raíz
    if(n === 2){
        limpiarRespuestas([indexC]);
    }
}

/* racionalizaRatRoot

Esta función está diseñada para racionalizar racionales con una raíz 
n-ésima en el denominador. Para ello, reciben un objeto de tipo ratRoot, esto es,
un número que representa un real de la forma (a*raíz n-ésima(b))/(c*raíz n-ésima(d))

Devuelve otro objeto de tipo ratRoot racionalizado, esto es, en el cual d = 1. */

function racionalizaRatRoot(ratRoot){
    // Obtiene el numerador y el denominador del racional
    var rat = ratRoot[0];
    var n = ratRoot[1];
    var rad = ratRoot[2];

    // Obtiene explícitamente los elementos del racional y del radicando
    var a = rat[0];
    var c = rat[1];
    var b = rad[0];
    var d = rad[1];

    // Si d = 1, entonces ya está racionalizado, y solo hace falta simplificar a/c y b/d. Para ello, se auxilia de la función racionalIrreducible
    if(d === 1){
        var nuevo_racional = racionalIrreducible([a, c]);
        var nuevo_radicando = racionalIrreducible([b, d]);
        var nuevo_ratRoot = [nuevo_racional, n, nuevo_radicando];
        return nuevo_ratRoot;
    }

    // Si d != 1, se supone que b = 1 y debe multiplicar el numerador y el denominador por raíz n-ésima(d^(n-1))
    // Esto es equivalente a multiplicar por (raíz n-ésima(d^(n-1)))/(raíz n-ésima(d^(n-1)))
    var nuevo_racional = racionalIrreducible([a, c*d]);
    var nuevo_radicando = racionalIrreducible([b * Math.pow(d, n - 1), 1]);
    var nuevo_ratRoot = [nuevo_racional, n, nuevo_radicando];
    return nuevo_ratRoot;
}

/* La siguiente función está especializada
en ejercicios de tipo 1, y se llamará EjercicioT1.
Tendrá únicamente dos parámetros: 

EjercicioT1(n, tipo):

n: Es el número de Ejercicio. 
tipo: Puede ser 1, 2, 3 o 4.
      Es 1 si se necesita que el numerador sea 1,
      Es 2 si se necesita que el numerador sea un primo distinto al de la raíz
      Es 3 si se necesita que el numerador sea igual al radicando
      Es 4 si se necesita que el numerador sea un múltiplo del radicando */

// Arreglo para las respuestas
var respuestas = [];

function EjercicioT1(n, tipo){

    activated[n] = true;
    // Genera un número aleatorio entre 2 y 4 para el índice de la raíz
    var indice = enteroAleatorio(2, 4);

    // Variable auxiliar para el objeto ratRoot que se generará. Se inicializa como un arreglo vacío, y luego se llenará con los valores correspondientes
    var ratRoot = [];

    // Obtiene todos los ID's que podría necesitar para escribir el ejercicio, y para limpiar las respuestas. Esto es útil para no tener que escribirlos uno por uno.
    // Variables para el Ejercicio
    var intA = "intA_" + n;
    var indexA = "indexA_" + n;
    var rootA = "rootA_" + n;
    var intB = "intB_" + n;
    var indexB = "indexB_" + n;
    var rootB = "rootB_" + n;
    var intC = "intC_" + n;
    var indexC = "indexC_" + n;
    var rootC = "rootC_" + n;
    var normal_part = "normal_part_" + n;
    var fraction_part = "fraction_part_" + n;

    // Variables para la respuesta
    var intAr = "intAr_" + n;
    var indexAr = "indexAr_" + n;
    var rootAr = "rootAr_" + n;
    var intBr = "intBr_" + n;
    var indexBr = "indexBr_" + n;
    var rootBr = "rootBr_" + n;
    var intCr = "intCr_" + n;
    var indexCr = "indexCr_" + n;
    var rootCr = "rootCr_" + n;
    var normal_part_r = "normal_part_r_" + n;
    var fraction_part_r = "fraction_part_r_" + n;

    // Limpia todo lo de las respuestas y lo oculta. Primero limpia intAr, indexAr, rootAr, intBr, indexBr, rootBr, intCr, indexCr, rootCr
    limpiarRespuestas([intAr, indexAr, rootAr, intBr, indexBr, rootBr, intCr, indexCr, rootCr]);

    // Después, oculta normal_part_r y fraction_part_r
    ocultarElementos([normal_part_r, fraction_part_r]);

    // Luego, muestra únicamente fraction_part y oculta normal_part
    mostrarElementosMath([fraction_part]);
    ocultarElementos([normal_part]);

    // Ahora, entra en los casos

    // Caso 1: El numerador es 1
    if(tipo === 1){
        // Simplemente elige un número primo aleatorio 
        var primo = primos[enteroAleatorio(0, primos.length - 1)];

        // Crea un nuevo objeto ratRoot con a = b = 1, c = 1, d = primo, n = indice
        ratRoot = [[1, 1], indice, [1, primo]];


    }
    // Caso 2: El numerador es un primo distinto al de la raíz
    else if(tipo === 2){
        // Escoge dos primos distintos
        var primos_distintos = escogerPrimosDistintos(2);
        var primo1 = primos_distintos[0];
        var primo2 = primos_distintos[1];

        // Crea un nuevo objeto ratRoot con a = primo1, b = 1, c = 1, d = primo2, n = indice
        ratRoot = [[primo1, 1], indice, [1, primo2]];
    }
    // Caso 3: El numerador es igual al radicando
    else if(tipo === 3){
        // Escoge un primo aleatorio
        var primo = primos[enteroAleatorio(0, primos.length - 1)];

        // Crea un nuevo objeto ratRoot con a = primo, b = 1, c = 1, d = primo, n = indice
        ratRoot = [[primo, 1], indice, [1, primo]];
    }
    // Caso 4: El numerador es un múltiplo del radicando
    else if(tipo === 4){
        // Escoge un primo aleatorio
        var primo = primos[enteroAleatorio(0, primos.length - 1)];

        // Escoge un múltiplo aleatorio del primo entre 2 y 5
        var multiplo = enteroAleatorio(2, 5) * primo;

        // Crea un nuevo objeto ratRoot con a = multiplo, b = 1, c = 1, d = primo, n = indice
        ratRoot = [[multiplo, 1], indice, [1, primo]];
    }

    // Escribe el ejercicio en la página
    escribeRatRoot(ratRoot, intA, indexA, rootA, intB, indexB, rootB, intC, indexC, rootC, normal_part, fraction_part);

    // Racionaliza el ratRoot y guarda la respuesta en el arreglo de respuestas
    respuestas[n] = racionalizaRatRoot(ratRoot);
}

/* Función para respuestas a los ejercicios de tipo 1.
Para ello, su único parámetro es el número de ejercicio. */
function RespuestaT1(n){

    if (!activated[n]) return;
    // Obtiene todos los ID's que podría necesitar para escribir la respuesta. Esto es útil para no tener que escribirlos uno por uno.
    var intAr = "intAr_" + n;
    var indexAr = "indexAr_" + n;
    var rootAr = "rootAr_" + n;
    var intBr = "intBr_" + n;
    var indexBr = "indexBr_" + n;
    var rootBr = "rootBr_" + n;
    var intCr = "intCr_" + n;
    var indexCr = "indexCr_" + n;
    var rootCr = "rootCr_" + n;
    var normal_part_r = "normal_part_r_" + n;
    var fraction_part_r = "fraction_part_r_" + n;

    // Escribe la respuesta en la página
    escribeRatRoot(respuestas[n], intAr, indexAr, rootAr, intBr, indexBr, rootBr, intCr, indexCr, rootCr, normal_part_r, fraction_part_r);
}

/* EjercicioT2

La función EjercicioT2 se especializa en generar ejercicios de tipo 2. En estos ejercicios,
el alumno debe racionalizar números de la forma 
1 / (\pm sqrt(a) \pm sqrt(b)), donde \pm significa más menos.

Esta función tendrá tres parámetros.

EjercicioT2(n, signo1, signo2)

n: Número de ejercicio.
signo1: Puede ser 1 o -1. Es 1 si el signo para sqrt(a) será positivo y
        -1 si el signo para sqrt(a) será negativo.
signo2: Puede ser 1 o -1. Es 1 si el signo para sqrt(b) será positivo y
        -1 si el signo para sqrt(b) será negativo.

El ejercicio está diseñado para que no se pueda que ambos signos sean negativos al mismo tiempo.
 */

// Arreglo para las respuestas
var respuestasT2 = [];

function EjercicioT2(n, signo1, signo2){

    activated[n] = true;
    // Inicializa respuestasT2[n] como un arreglo vacío
    respuestasT2[n] = [];
    // Crea una variable auxiliar para guardar respuestasT2[n] como un arreglo de 3 elementos,
    // donde el primer elemento tiene los números primos, el segundo elemento tiene el primer racional que multiplica
    // a sqrt(a) y el tercer elemento tiene el segundo racional que multiplica a sqrt(b)
    var respuesta_aux = respuestasT2[n];

    // Obtiene todas las variables que podría necesitar para escribir el ejercicio, y para limpiar las respuestas. 
    // Esto es útil para no tener que escribirlos uno por uno.
    // Variables para el Ejercicio
    var int1 = "int1_" + n;
    var sgn1 = "sgn1_" + n;
    var int2 = "int2_" + n;
    var sgn2 = "sgn2_" + n;

    // Variable que controla la parte fraccionaria del ejercicio
    var ejercicio_math = "ejercicio_math_" + n;

    // Variables para la respuesta
    // Variables para la primera raíz
    var int1r = "int1r_" + n;
    var signo1r = "signo1r_" + n;
    var num1r = "num1r_" + n;
    var den1r = "den1r_" + n;
    var root1r = "root1r_" + n;

    // Variables para la segunda raíz
    var int2r = "int2r_" + n;
    var signo2r = "signo2r_" + n;
    var num2r = "num2r_" + n;
    var den2r = "den2r_" + n;
    var root2r = "root2r_" + n;

    // Variable que controla la parte fraccionaria de la respuesta
    var respuesta_math = "respuesta_math_" + n;

    // Limpia todo lo de las respuestas y lo oculta. Primero limpia int1r, signo1r, num1r, den1r, root1r, int2r, signo2r, num2r, den2r, root2r
    limpiarRespuestas([int1r, signo1r, num1r, den1r, root1r, int2r, signo2r, num2r, den2r, root2r]);

    // Después, oculta respuesta_math
    ocultarElementos([respuesta_math]);

    // Luego, muestra únicamente ejercicio_math
    mostrarElementosMath([ejercicio_math]);


    // Genera dos números primos distintos aleatorios para a y b
    var primos_distintos = escogerPrimosDistintos(2);
    var a = primos_distintos[0];
    var b = primos_distintos[1];
    respuesta_aux[0] = [a, b];

    // Variables auxiliares para los dos racionales en la respuesta
    var r1 = [];
    var r2 = [];

    // Hay tres casos posibles para los signos:
    // Caso 1: signo1 = 1, signo2 = 1
    if(signo1 === 1 && signo2 === 1){
        // El primer racional es 1/(a-b), y el segundo es 1/(b-a)
        r1 = normalizaRacional([1, a - b]);
        r2 = normalizaRacional([1, b - a]);
    }
    // Caso 2: signo1 = 1, signo2 = -1
    else if(signo1 === 1 && signo2 === -1){
        // El primer racional es 1/(a-b), y el segundo también es 1/(a-b)
        r1 = normalizaRacional([1, a - b]);
        r2 = normalizaRacional([1, a - b]);
    }
    // Caso 3: signo1 = -1, signo2 = 1
    else if(signo1 === -1 && signo2 === 1){
        // El primer racional es 1/(b-a), y el segundo también es 1/(b-a)
        r1 = normalizaRacional([1, b - a]);
        r2 = normalizaRacional([1, b - a]);
    }

    // Guarda los racionales en la respuesta auxiliar
    respuesta_aux[1] = r1;
    respuesta_aux[2] = r2;

    // Escribe el ejercicio en la página
    document.getElementById(int1).innerHTML = a;
    document.getElementById(sgn1).innerHTML = (signo1 === 1) ? "" : "- ";
    document.getElementById(int2).innerHTML = b;
    document.getElementById(sgn2).innerHTML = (signo2 === 1) ? "+" : "- ";
}

/* La siguiente función escribe la respuesta al ejercicio */
function RespuestaT2(n){

    if (!activated[n]) return;
    // Obtiene la respuesta del arreglo de respuestas
    var respuesta_aux = respuestasT2[n];

    // Obtiene los primos a y b
    var a = respuesta_aux[0][0];
    var b = respuesta_aux[0][1];

    // Obtiene los racionales r1 y r2
    var r1 = respuesta_aux[1];
    var r2 = respuesta_aux[2];

    // Obtiene todas las variables que podría necesitar para escribir la respuesta. Esto es útil para no tener que escribirlos uno por uno.
    // Variables para la respuesta
    // Variables para la primera raíz
    var int1r = "int1r_" + n;
    var signo1r = "signo1r_" + n;
    var num1r = "num1r_" + n;
    var den1r = "den1r_" + n;
    var root1r = "root1r_" + n;

    // Variables para la segunda raíz
    var int2r = "int2r_" + n;
    var signo2r = "signo2r_" + n;
    var num2r = "num2r_" + n;
    var den2r = "den2r_" + n;
    var root2r = "root2r_" + n;

    // Variable que controla la parte fraccionaria de la respuesta
    var respuesta_math = "respuesta_math_" + n;

    // Escribe los racionales en la página usando la función auxiliar escribeRacional
    escribeRacional(int1r, num1r, den1r, signo1r, r1);
    escribeRacional(int2r, num2r, den2r, signo2r, r2);

    // En esta ocasión, si el numerador de r2 es positivo, sí tiene que
    // mostrar signo2r y ponerlo como +, ya que se usa para representar una suma
    if(r2[0] > 0){
        document.getElementById(signo2r).innerHTML = "+ ";
        mostrarElementos([signo2r]);
    }

    // Además, si alguno de los numeradores es 1 o -1, no hace falta que muestre el entero correspondiente
    if(r1[0] === 1 || r1[0] === -1){
        ocultarElementos([int1r]);
    }
    if(r2[0] === 1 || r2[0] === -1){
        ocultarElementos([int2r]);
    }

    // Escribe a en root1r y b en root2r
    document.getElementById(root1r).innerHTML = a;
    document.getElementById(root2r).innerHTML = b;

    // Muestra la parte fraccionaria de la respuesta
    mostrarElementosMath([respuesta_math]);
}

/* EjercicioT3

Esta función se especializa en los ejercicios tipo 3, los cuales tienen
como propósito que el alumno sea capaz de racionalizar expresiones 
de la forma 1/(\pm a \pm sqrt(b)). Por tal razón, la estructura
es prácticamente idéntica al ejercicio tipo 2. Únicamente cambia
la forma en que se calculan los denominadores. */

// Arreglo para las respuestas
var respuestasT3 = [];

function EjercicioT3(n, signo1, signo2){

    activated[n] = true;
    // Inicializa respuestasT3[n] como un arreglo vacío
    respuestasT3[n] = [];
    // Crea una variable auxiliar para guardar respuestasT3[n] como un arreglo de 3 elementos,
    // donde el primer elemento tiene los números primos, el segundo elemento tiene el primer racional que multiplica
    // a a, y el tercer elemento tiene el segundo racional que multiplica a sqrt(b)
    var respuesta_aux = respuestasT3[n];

    // Obtiene todas las variables que podría necesitar para escribir el ejercicio, y para limpiar las respuestas.
    // Esto es útil para no tener que escribirlos uno por uno.
    // Variables para el Ejercicio
    var int1 = "int1_" + n;
    var sgn1 = "sgn1_" + n;
    var int2 = "int2_" + n;
    var sgn2 = "sgn2_" + n;

    // Variable que controla la parte fraccionaria del ejercicio
    var ejercicio_math = "ejercicio_math_" + n;

    // Variables para la respuesta
    // Variables para la primera raíz
    var int1r = "int1r_" + n;
    var signo1r = "signo1r_" + n;
    var num1r = "num1r_" + n;
    var den1r = "den1r_" + n;

    // Variables para la segunda raíz
    var int2r = "int2r_" + n;
    var signo2r = "signo2r_" + n;
    var num2r = "num2r_" + n;
    var den2r = "den2r_" + n;
    var root2r = "root2r_" + n;

    // Variable que controla la parte fraccionaria de la respuesta
    var respuesta_math = "respuesta_math_" + n;

    // Limpia todo lo de las respuestas y lo oculta. Primero limpia int1r, signo1r, num1r, den1r, int2r, signo2r, num2r, den2r, root2r
    limpiarRespuestas([int1r, signo1r, num1r, den1r, int2r, signo2r, num2r, den2r, root2r]);

    // Después, oculta respuesta_math
    ocultarElementos([respuesta_math]);

    // Luego, muestra únicamente ejercicio_math
    mostrarElementosMath([ejercicio_math]);

    // Variables auxiliares para los dos racionales en la respuesta
    var r1 = [];
    var r2 = [];

    // Primero, elige a como un entero aleatorio entre 1 y 4
    a = enteroAleatorio(1, 4);

    // Luego, elige b como un primo aleatorio
    b = primos[enteroAleatorio(0, primos.length - 1)];

    // Guarda a y b en la respuesta auxiliar
    respuesta_aux[0] = [a, b];

    // Hay tres casos posibles para los signos:
    // Caso 1: signo1 = 1, signo2 = 1
    if(signo1 === 1 && signo2 === 1){
        // El primer racional es a/(a²-b), y el segundo es 1/(b-a²)
        r1 = racionalIrreducible(normalizaRacional([a, a*a - b]));
        r2 = normalizaRacional([1, b - a*a]);
    }
    // Caso 2: signo1 = 1, signo2 = -1
    else if(signo1 === 1 && signo2 === -1){
        // El primer racional es a/(a²-b), y el segundo es 1/(a²-b)
        r1 = racionalIrreducible(normalizaRacional([a, a*a - b]));
        r2 = normalizaRacional([1, a*a - b]);
    }
    // Caso 3: signo1 = -1, signo2 = 1
    else if(signo1 === -1 && signo2 === 1){
        // El primer racional es a/(b-a²), y el segundo es 1/(b-a²)
        r1 = racionalIrreducible(normalizaRacional([a, b - a*a]));
        r2 = normalizaRacional([1, b - a*a]);
    }

    // Guarda los racionales en la respuesta auxiliar
    respuesta_aux[1] = r1;
    respuesta_aux[2] = r2;

    // Escribe el ejercicio en la página
    document.getElementById(int1).innerHTML = a;
    document.getElementById(sgn1).innerHTML = (signo1 === 1) ? "" : "- ";
    document.getElementById(int2).innerHTML = b;
    document.getElementById(sgn2).innerHTML = (signo2 === 1) ? "+" : "- ";
}

/* RespuestaT3(n)
La siguiente función permite escribir la respuesta a un 
ejercicio de tipo 3. La estructura es prácticamente la misma 
que la función RespuestaT2(n). Solamente hay que omitir root1r,
pues esa raíz no aparece en los ejercicios de este tipo. */
function RespuestaT3(n){

    if (!activated[n]) return;
    // Obtiene la respuesta del arreglo de respuestas
    var respuesta_aux = respuestasT3[n];

    // Obtiene los números a y b
    var a = respuesta_aux[0][0];
    var b = respuesta_aux[0][1];

    // Obtiene los racionales r1 y r2
    var r1 = respuesta_aux[1];
    var r2 = respuesta_aux[2];

    // Obtiene todas las variables que podría necesitar para escribir la respuesta. Esto es útil para no tener que escribirlos uno por uno.
    // Variables para la respuesta
    // Variables para la primera raíz
    var int1r = "int1r_" + n;
    var signo1r = "signo1r_" + n;
    var num1r = "num1r_" + n;
    var den1r = "den1r_" + n;

    // Variables para la segunda raíz
    var int2r = "int2r_" + n;
    var signo2r = "signo2r_" + n;
    var num2r = "num2r_" + n;
    var den2r = "den2r_" + n;
    var root2r = "root2r_" + n;

    // Variable que controla la parte fraccionaria de la respuesta
    var respuesta_math = "respuesta_math_" + n;

    // Escribe los racionales en la página usando la función auxiliar escribeRacional
    escribeRacional(int1r, num1r, den1r, signo1r, r1);
    escribeRacional(int2r, num2r, den2r, signo2r, r2);

    // En esta ocasión, si el numerador de r2 es positivo, sí tiene que
    // mostrar signo2r y ponerlo como +, ya que se usa para representar una suma
    if(r2[0] > 0){
        document.getElementById(signo2r).innerHTML = "+ ";
        mostrarElementos([signo2r]);
    }

    // Además, si alguno de los numeradores es 1 o -1, no hace falta que muestre el entero correspondiente,
    // aunque solo aplica para la raíz 2
    if(r2[0] === 1 || r2[0] === -1){
        ocultarElementos([int2r]);
    }

    // Escribe b en root2r
    document.getElementById(root2r).innerHTML = b;

    // Muestra la parte fraccionaria de la respuesta
    mostrarElementosMath([respuesta_math]);
}
