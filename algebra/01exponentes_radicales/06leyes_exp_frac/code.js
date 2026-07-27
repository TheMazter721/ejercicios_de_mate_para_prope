// Variables globales para los ejercicios de mcm
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

// La siguiente función permite generar n letras distintas de forma aleatoria. Para ello, primero genera 
// un arreglo con todas las letras del alfabeto, y luego lo permuta de forma aleatoria. Finalmente, regresa las primeras n letras del arreglo permutado.
function nLetrasDistintas(n){
    var perm = permutarArreglo(letras);
    var resultado = [];
    for(var i = 0; i < n; i++)
        resultado[i] = perm[i];
    return resultado;
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

// La siguiente función facilita la obtención de un número que sea 1 o -1, de manera aleatoria. Esto es útil para los signos de los números
function signoAleatorio(){
    return Math.random() < 0.5 ? -1 : 1;
}

/* Las siguientes funciones están especializadas
en números racionales, los cuales se representan como arreglos
de dos elementos donde el primer elemento es el numerador y el 
segundo elemento es el denominador. El denominador
siempre es positivo */

/* La siguiente función recibe un racional (con numerador y denominador positivos)
y devuelve el mismo racional pero con signo positivo. Para ello, simplemente
regresa el valor absoluto del numerador y del denominador. */
function racionalPositivo(racional){
    var numerador = Math.abs(racional[0]);
    var denominador = Math.abs(racional[1]);
    return [numerador, denominador];
}

/* La siguiente función recibe un racional (con numerador y denominador positivos)
y devuelve el mismo racional pero con signo negativo. Para ello, simplemente
regresa el valor absoluto del numerador y del denominador, pero cambia el signo
del numerador. */
function racionalNegativo(racional){
    var numerador = -Math.abs(racional[0]);
    var denominador = Math.abs(racional[1]);
    return [numerador, denominador];
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

// En esta ocasión, la función para escribir la respuesta en la página es más complicada,
// así que se auxilia de una función auxiliar llamada escribeRacional, que básicamente
// hace lo mismo que hacía la función respuesta. Para ello, recibe directamente las etiquetas
// intr, nr, dr, signor y el racional a escribir, que es un arreglo con dos elementos: el numerador y el denominador.
function escribeRacionalExponente(intr, nr, dr, signor, rat){
    // Obtiene el numerador y el denominador del racional
    var num = rat[0];
    var den = rat[1];

    // Si el racional no es 1 o 0, debe escribirlo en la página. Para determinar es 1, utiliza 
    // la función compararRacional, que compara el racional con el racional [1, 1], que representa al 1.
    if(compararRacional(rat, [1, 1]) !== 0 && compararRacional(rat, [0, 1]) !== 0){
        if(den === 1){
            document.getElementById(intr).innerHTML = Math.abs(num);
            mostrarElementos([intr]);

            ocultarElementos([nr, dr]);

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
            ocultarElementos([intr]);

            document.getElementById(nr).innerHTML = Math.abs(num);
            document.getElementById(dr).innerHTML = den;
            mostrarElementos([nr, dr]);

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
    // Si el racional es 1 o 0, entonces debe ocultar todos los elementos, sin excepción,
    // pues el exponente no es escribe cuando es 1. Para ello, modifica su display como none, para que no ocupen espacio en la página
    else{
        ocultarElementos([intr, nr, dr, signor]);
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

// La siguiente función simplemente genera un número racional aleatorio, con numerador y denominador entre 1 y 10, y con signo aleatorio. 
// Esto es útil para los ejercicios de exponentes.
function racionalAleatorio(){
    var num = enteroAleatorio(1, 10) * signoAleatorio();
    var den = enteroAleatorio(1, 10);
    return [num, den];
}

// La siguiente función genera un número racional que sea distinto de [1, 1]
// Para ello, utiliza un ciclo while en el que se asegura, con la función compararRacional, que el número racional generado sea distinto de [1, 1]
function racionalAleatorioDistintoDeUno(){
    var r;
    do {
        r = racionalAleatorio();
    } while (compararRacional(r, [1, 1]) == 0);
    return r;
}

// El siguiente arreglo guarda las literales de cada ejercicio. Guarda en la posición n la literal del ejercicio n. 
// Esto es útil para que el alumno no se confunda con las literales de los ejercicios.
var literales = [];

// El siguiente arreglo guarda los resultados de cada ejercicio. Guarda en la posición n el resultado del ejercicio n. 
// Esto es útil para que el alumno no se confunda con los resultados de los ejercicios.
var resultados = [];

/* DESCRIPCIÓN DE LOS EJERCICIOS
El propósito de los ejercicios que se crearán a continuación es preparar al alumno 
para simplificar, principalmente, productos y divisiones de expresiones
que tengan una misma literal con dos exponentes distintos, donde los exponentes,
en esta ocasión, son números racionales en general. Para ello, los primeros 7 ejercicios tencdrán
la misma estructura:

Una primera expresión de la forma literal^(signo * número racional positivo),
multiplicada por una segunda expresión de la misma forma, usando la misma literal, y dando
como resultado una expresión de la misma forma.

Ya que todos los ejercicios siguen la misma estructura, se diseñará una función que generalice estos primeros 7 
ejercicios. La función tendrá la siguiente estructura:

Ejercicio(n, suma, segundo, producto)

Los inputs son los siguientes:

n: Es el número de ejercicio. Se utiliza para obtener todos los ID's necesarios.

suma: Indica cuánto se requiere que sea la suma de los exponentes. Puede ser 1 (si se requiere que la suma de los exponentes sea 1),
 0 (si se requiere que la suma de los exponentes sea 0) o -1 SI SE REQUIERE QUE LA SUMA DE LOS EXPONENTES SEA UN RACIONAL DISTINTO DE UNO Y DE 0.

segundo: Indica si el segundo exponente debe ser 1 forzosamente. Puede ser 1 (si sí se requiere que el segundo exponente sea 1) 
 o 0 (si no se requiere que el segundo exponente sea 1).

 producto: Indica si el ejercicio es un producto o una división. Puede ser 1 (si es un producto) o 0 (si es una división).

Lo primero que debe hacer la función es obtener todas las posibles etiquetas que puede utilizar para 
el ejercicio, las cuales tendrán esta forma:

int1_n, signo1_n, n1_n, d1_n, literal1_n, int2_n, signo2_n, n2_n, d2_n, literal2_n, intr_n, signor_n, nr_n, dr_n

donde n es el número de ejercicio. Por ejemplo, para el ejercicio 1, las etiquetas serían:

int1_1, signo1_1, n1_1, d1_1, int2_1, signo2_1, n2_1, d2_1, intr_1, signor_1, nr_1, dr_1

El ejercicio consiste en que el alumno simplifique, por ejemplo,
x^rat1 * x^rat2 = x^(rat1 + rat2), donde rat1 y rat2 son números racionales aleatorios, y el resultado es la suma de los exponentes,

o bien, que simplifique
x^rat1 / x^rat2 = x^(rat1 - rat2), donde rat1 y rat2 son números racionales aleatorios, y el resultado es la resta de los exponentes.
*/

function Ejercicio(n, suma, segundo, producto){

    activated[n] = true;
    // Obtiene todas las etiquetas necesarias para el ejercicio
    // Etiquetas para el primer exponente
    var int1 = "int1_" + n;
    var signo1 = "signo1_" + n;
    var n1 = "n1_" + n;
    var d1 = "d1_" + n;
    var literal1 = "literal1_" + n;

    // Etiquetas para el segundo exponente
    var int2 = "int2_" + n;
    var signo2 = "signo2_" + n;
    var n2 = "n2_" + n;
    var d2 = "d2_" + n;
    var literal2 = "literal2_" + n;

    // Etiquetas para el resultado
    var intr = "intr_" + n;
    var signor = "signor_" + n;
    var nr = "nr_" + n;
    var dr = "dr_" + n;
    var literalr = "literalr_" + n;

    // La variables para la suma se inicializa como un arreglo vacío, y se llenará con el resultado de la suma de los exponentes
    var sumaRat = [];

    // Se hace lo mismo con una variable para la resta
    var restaRat = [];

    // Oculta todo lo que haya estado en la respuesta
    ocultarElementos([intr, nr, dr, signor, literalr, int1, n1, d1, signo1, literal1, int2, n2, d2, signo2, literal2]);

    // Muestra lo correspondiente a los primeros exponentes, que son los que el alumno debe simplificar
    mostrarElementos([int1, n1, d1, signo1, literal1, int2, n2, d2, signo2, literal2]);

    // Genera una literal aleatoria para el ejercicio, y la asigna a las dos literales del ejercicio
    var literal = letraAleatoria();
    document.getElementById(literal1).innerHTML = literal;
    document.getElementById(literal2).innerHTML = literal;

    // También la guarda en el arreglo de literales, para que el alumno no se confunda con las literales de los ejercicios
    literales[n] = literal;

    // Primero genera el segundo número racional, rat2
    // Si segundo es 1, entonces el segundo número racional debe ser 1, así que simplemente lo asigna
    if(segundo === 1){
        var rat2 = [1, 1];
    }
    // Si segundo es 0, entonces el segundo número racional puede ser cualquier número racional positivo distinto de 1
    else{
        // Para ello, genera un numerador y un denominador aleatorios entre 1 y 10, y los asigna a rat2
        // También multiplica num2 por un signo aleatorio, para que el segundo número racional pueda ser positivo o negativo
        var num2 = enteroAleatorio(1, 10) * signoAleatorio();
        var den2 = enteroAleatorio(1, 10);
        // Si el numerador y el denominador son iguales, entonces el número racional es 1, así que vuelve a generar un nuevo numerador y denominador hasta que sean distintos
        while(num2 === den2){
            num2 = enteroAleatorio(1, 10) * signoAleatorio();
            den2 = enteroAleatorio(1, 10);
        }
        var rat2 = [num2, den2];
    }

    // Ahora genera el primer número racional, rat1, de tal manera que la suma de rat1 y rat2 sea el número racional que se requiere según el parámetro suma
    // Para ello, primero genera un numerador y un denominador aleatorios entre 1 y 10, y los asigna a rat1
    // También multiplica num1 por un signo aleatorio, para que el primer número racional pueda ser positivo o negativo
    var num1 = enteroAleatorio(1, 10) * signoAleatorio();
    var den1 = enteroAleatorio(1, 10);
    var rat1 = [num1, den1];

    // Si suma es 1, entonces la suma de rat1 y rat2 debe ser 1, así que ajusta rat1 para que la suma sea 1
    if(suma === 1){
        // Para ello, calcula el numerador y denominador de rat1 de tal manera que la suma sea 1
        // Es decir, si rat2 = [a, b], entonces rat1 debe ser [b - a, b]
        var num1 = rat2[1] - rat2[0];
        var den1 = rat2[1];
        rat1 = [num1, den1];
    }
    // Si suma es 0, entonces la suma de rat1 y rat2 debe ser 0, así que ajusta rat1 para que la suma sea 0
    else if(suma === 0){
        // Para ello, calcula el numerador y denominador de rat1 de tal manera que la suma sea 0
        // Es decir, si rat2 = [a, b], entonces rat1 debe ser [-a, b]
        var num1 = -rat2[0];
        var den1 = rat2[1];
        rat1 = [num1, den1];
    }
    // Si suma es -1, entonces la suma de rat1 y rat2 debe ser un número racional distinto de 1 y de 0, 
    // así que ajusta rat1 para que la suma sea un número racional distinto de 1 y de 0
    else if(suma === -1){
        // Para ello, calcula el numerador y denominador de rat1 de tal manera que la suma sea un número racional distinto de 1 y de 0
        // Es decir, si rat2 = [a, b], entonces rat1 debe ser [c, d] tal que c/d + a/b sea distinto de 1 y de 0
        // Con tal fin, utiliza la función compararRacional para comparar la suma de rat1 y rat2 con 1 y con 0, y ajusta rat1 hasta que la suma sea distinta de 1 y de 0
        sumaRat = sumaRacional(rat1, rat2);
        while(compararRacional(sumaRat, [1, 1]) === 0 || compararRacional(sumaRat, [0, 1]) === 0){
            var num1 = enteroAleatorio(1, 10) * signoAleatorio();
            var den1 = enteroAleatorio(1, 10);
            rat1 = [num1, den1];
            sumaRat = sumaRacional(rat1, rat2);
        }
    }

    // El procedimiento anterior funciona a la perfección cuando el ejercicio es de producto.
    // Sin embargo, cuando el ejercicio es de división, entonces la suma de los exponentes no es la suma de rat1 y rat2, sino la resta de rat1 y rat2.
    // Por ello, basta con cambiar el signo del numerador de rat2.
    // Además, cuando es una división, se obtendrá una nueva etiqueta ejercicio_division_n para cambiar
    // su display a inline, y así el alumno sepa que el ejercicio es de división. Para ello, se utiliza la función mostrarElementos.
    if(producto === 0){
        // El cambio de signo solo lo hace si no se pidió que el segundo exponente sea 1, pues si es 1, entonces no se puede cambiar el signo del numerador de rat2.
        if(segundo === 0){
            rat2[0] = -rat2[0];
        }
        // Cambia el display de la etiqueta ejercicio_division_n a inline, para que el alumno sepa que el ejercicio es de división
        // Para ello, utiliza la función mostrarElementos.
        var ejercicio_division = "ejercicio_division_" + n;
        mostrarElementos([ejercicio_division]);
    }

    // Muestra los dos racionales en la consola con fines de depuración
    console.log("rat1: " + rat1[0] + "/" + rat1[1]);
    console.log("rat2: " + rat2[0] + "/" + rat2[1]);

    // Ahora escribe los números racionales en la página
    escribeRacionalExponente(int1, n1, d1, signo1, rat1);
    escribeRacionalExponente(int2, n2, d2, signo2, rat2);

    // Si el problema consistía en un producto, entonces se guarda la suma de los racionales 
    // como la respuesta
    if(producto === 1){
        resultados[n] = sumaRacional(rat1, rat2);
    }
    // Si el problema consistía en una división, entonces se guarda la resta de los racionales 
    // como la respuesta
    else{
        resultados[n] = restaRacional(rat1, rat2);
    }
}

/* La siguiente función escribe la respuesta del ejercicio.
Para ello, nuevamente necesita obtener las variables
intr, signor, etcétera, introducidas en la función para generar el ejercicio.
Posteriormente, debe acceder a resultados[n] y escribirlo 
en la página web usando la función escribeRacionalExponente. Por último,
escribe la literal y la hace visible. */
function Respuesta(n){

    if (!activated[n]) return;
    var intr = "intr_" + n;
    var signor = "signor_" + n;
    var nr = "nr_" + n;
    var dr = "dr_" + n;
    var literalr = "literalr_" + n;

    // Obtiene el resultado del ejercicio n
    var rat = resultados[n];

    // Escribe el resultado en la página
    escribeRacionalExponente(intr, nr, dr, signor, rat);

    // Escribe la literal en la página de tal manera que, si rat es 0, entonces se escriba
    // 1 en vez de la literal, pues cualquier número elevado a 0 es 1. Para ello, utiliza la función compararRacional para comparar rat con [0, 1], que representa al 0.
    if(compararRacional(rat, [0, 1]) === 0){
        document.getElementById(literalr).innerHTML = "1";
    } else {
        document.getElementById(literalr).innerHTML = literales[n];
    }

    // La hace visible
    mostrarElementos([literalr]);
}

/* Las funciones Ejercicio y Respuesta sirvieron para los ejercicio 
1-8, pues estos seguían estructuras muy similares. Sin embargo, para los ejercicio
9 al 11, se utilizarán funciones particulares. Por tal razón, a continuación se 
presentan las funciones Ejercicio09 y Respuesta09, Ejercicio10
y Respuesta10, y Ejercicio11 y Respuesta11. */

/* Variables globales para el Ejercicio 9.
Este ejercicio consiste en que el alumno simplifique una expresión de la forma
(literal^n)^m, donde n y m son números racionales.
 */
var rat1_9 = [];
var rat2_9 = [];

/* Función para el Ejercicio 9.
En este ejercicio se deben generar una literal aleatoria, y dos racionales aleatorios.
Posteriormente, se debe escribir el ejercicio en la página web utilizando las funciones correspondientes. 
En esta ocasión, los números racionales se generan utilizando la función
auxiliar racionalAleatorio */
function Ejercicio09(){
    activated[9] = true;
    // Obtiene todas las etiquetas necesarias para el ejercicio
    // Al tratarse del ejercicio 9, se tiene que n=9
    var n = 9;

    // Etiquetas para el primer exponente
    var int1 = "int1_" + n;
    var signo1 = "signo1_" + n;
    var n1 = "n1_" + n;
    var d1 = "d1_" + n;
    var literal1 = "literal1_" + n; // En este caso, solo hay una literal, pues el ejercicio es de la forma (literal^n)^m

    // Etiquetas para el segundo exponente
    var int2 = "int2_" + n;
    var signo2 = "signo2_" + n;
    var n2 = "n2_" + n;
    var d2 = "d2_" + n;

    // Etiquetas para el resultado
    var intr = "intr_" + n;
    var signor = "signor_" + n;
    var nr = "nr_" + n;
    var dr = "dr_" + n;
    var literalr = "literalr_" + n;

    // Variable que se encarga de la visibilidad
    var ejercicio_potenciacion = "ejercicio_potenciacion_" + n;

    // También se necesitan etiquetas para los paréntesis izquierdo y derecho, que son los que indican que el primer exponente está dentro de un paréntesis
    // var parenizq = "parenizq_" + n;
    // var parender = "parender_" + n;

    // Oculta todo lo que haya estado en la respuesta
    ocultarElementos([intr, nr, dr, signor, literalr, int1, n1, d1, signo1, literal1, int2, n2, d2, signo2, ejercicio_potenciacion]);

    // Muestra lo correspondiente a los primeros exponentes, que son los que el alumno debe simplificar
    // Esta vez, lo hace cambiando el display a inline-block. Para ello, usa la nueva función mostrarElementosInlineBlock, que hace lo mismo que mostrarElementos,
    // pero cambia el display a inline-block en lugar de inline
    mostrarElementosMath([int1, n1, d1, signo1, literal1, int2, n2, d2, signo2, ejercicio_potenciacion]);

    // Genera una literal aleatoria para el ejercicio
    var literal = letraAleatoria();
    document.getElementById(literal1).innerHTML = literal;

    // También la guarda en el arreglo de literales
    literales[n] = literal;

    // Genera dos números racionales aleatorios distintos de 1, que serán los exponentes del ejercicio. Para ello, utiliza la 
    // función auxiliar racionalAleatorioDistintoDeUno
    rat1_9 = racionalAleatorioDistintoDeUno();
    rat2_9 = racionalAleatorioDistintoDeUno();

    // Muestra los dos racionales en la consola con fines de depuración
    console.log("rat1_9: " + rat1_9[0] + "/" + rat1_9[1]);
    console.log("rat2_9: " + rat2_9[0] + "/" + rat2_9[1]);

    // Ahora escribe los números racionales en la página
    escribeRacionalExponente(int1, n1, d1, signo1, rat1_9);
    escribeRacionalExponente(int2, n2, d2, signo2, rat2_9);

    // Calcula el resultado del ejercicio 9, que es la multiplicación de los dos racionales
    resultados[n] = multiplicaRacional(rat1_9, rat2_9);
}

/* Función para la Respuesta del Ejercicio 9.
Esta función es similar a la función Respuesta, pero en esta ocasión, se utiliza la variable global rat1_9 y rat2_9 para calcular el resultado del ejercicio 9. */
function Respuesta09(){
    if (!activated[9]) return;
    // En este caso particular, la estructura de la respuesta
    // es la misma que la de los ejercicios 1-8, así que se puede utilizar la función Respuesta
    Respuesta(9);
}

/* Variables globales para el Ejercicio 10.
En el ejercicio 10, el alumno debe simplificar una expresión de la forma
(literal1literal2)^r, donde r es un número racional. Para ello, se deben generar dos literales
aleatorias distintas y un número racional distinto de 1. Además, se deben declarar más variables
para la respuesta, pues habrá dos racionales en el resultado. Esto ya que, por ejemplo,
(xy)^r = x^r * y^r */
var rat_10 = [];
var literal1_10 = "";
var literal2_10 = "";

/* Función para el Ejercicio 10.
En este ejercicio se deben generar dos literales aleatorias distintas, y un número racional aleatorio distinto de 1.
Posteriormente, se debe escribir el ejercicio en la página web utilizando las funciones correspondientes.
En esta ocasión, el número racional se genera utilizando la función
auxiliar racionalAleatorioDistintoDeUno */
function Ejercicio10(){
    activated[10] = true;
    // Obtiene todas las etiquetas necesarias para el ejercicio
    // Al tratarse del ejercicio 10, se tiene que n=10
    var n = 10;

    // Etiquetas para el exponente
    var int1 = "int1_" + n;
    var signo1 = "signo1_" + n;
    var n1 = "n1_" + n;
    var d1 = "d1_" + n;

    // Etiquetas para las literales
    var literal1 = "literal1_" + n;
    var literal2 = "literal2_" + n;

    // Etiquetas para el resultado
    // Etiquetas del primer racional
    var intr1 = "intr1_" + n;
    var signor1 = "signor1_" + n;
    var nr1 = "nr1_" + n;
    var dr1 = "dr1_" + n;
    var literalr1 = "literalr1_" + n;
    var literalr2 = "literalr2_" + n;

    // Etiquetas para el segundo racional
    var intr2 = "intr2_" + n;
    var signor2 = "signor2_" + n;
    var nr2 = "nr2_" + n;
    var dr2 = "dr2_" + n;

    // Variable que se encarga de la visibilidad
    var ejercicio_potenciacion = "ejercicio_potenciacion_" + n;

    // Oculta todo lo que haya estado en la respuesta
    ocultarElementos([intr1, nr1, dr1, signor1, intr2, nr2, dr2, signor2, literalr1, literalr2, int1, n1, d1, signo1, literal1, literal2, ejercicio_potenciacion]);

    // Muestra lo correspondiente a los primeros exponentes, que son los que el alumno debe simplificar
    mostrarElementosMath([int1, n1, d1, signo1, literal1, literal2, ejercicio_potenciacion]);

    // Genera dos literales aleatorias distintas para el ejercicio
    var letras = nLetrasDistintas(2);
    document.getElementById(literal1).innerHTML = letras[0];
    document.getElementById(literal2).innerHTML = letras[1];

    // También las guarda en el arreglo de literales
    literal1_10 = letras[0];
    literal2_10 = letras[1];

    // Genera un número racional aleatorio distinto de 1, que será el exponente del ejercicio. Para ello, utiliza la 
    // función auxiliar racionalAleatorioDistintoDeUno
    rat_10 = racionalAleatorioDistintoDeUno();

    // Muestra el número racional en la consola con fines de depuración
    console.log("rat_10: " + rat_10[0] + "/" + rat_10[1]);

    // Ahora escribe el número racional en la página
    escribeRacionalExponente(int1, n1, d1, signo1, rat_10);

    // Calcula el resultado del ejercicio 10, que es la multiplicación de los dos racionales
    resultados[n] = [rat_10, rat_10];
}

/* Función para la Respuesta del Ejercicio 10.
Esta función es similar a la función Respuesta, pero en esta ocasión, se utiliza la variable global rat_10 para calcular el resultado del ejercicio 10. */
function Respuesta10(){
    if (!activated[10]) return;
    // En este caso particular, la estructura de la respuesta
    // es diferente a la de los ejercicios 1-8, así que se debe escribir la respuesta de manera diferente
    var n = 10;

    // Etiquetas para el resultado
    // Etiquetas para el primer racional
    var intr1 = "intr1_" + n;
    var signor1 = "signor1_" + n;
    var nr1 = "nr1_" + n;
    var dr1 = "dr1_" + n;
    var literalr1 = "literalr1_" + n;

    // Etiquetas para el segundo racional
    var intr2 = "intr2_" + n;
    var signor2 = "signor2_" + n;
    var nr2 = "nr2_" + n;
    var dr2 = "dr2_" + n;
    var literalr2 = "literalr2_" + n;

    // Obtiene el resultado del ejercicio 10 que, en esta ocasión, simplemente es de nuevo rat_10, pero simplificado. Por ello, 
    // se asigna a dos variables distintas, rat1 y rat2, para que se puedan escribir en la página web.
    var rat1 = racionalIrreducible(rat_10);
    var rat2 = racionalIrreducible(rat_10);

    // Escribe los dos racionales en la página
    escribeRacionalExponente(intr1, nr1, dr1, signor1, rat1);
    escribeRacionalExponente(intr2, nr2, dr2, signor2, rat2);

    // Escribe las literales en la página
    document.getElementById(literalr1).innerHTML = literal1_10;
    document.getElementById(literalr2).innerHTML = literal2_10;

    // Hace visibles los elementos de la respuesta
    mostrarElementos([literalr1, literalr2]);
}

/* Variables globales para el Ejercicio 11.
Es prácticamente idéntico al Ejercicio 10. Solo que, en esta ocasión, el alumno debe simplificar una fracción elevada a un exponente.
No obstante, en términos de generación de elementos en el sitio web, la lógica es la misma que la 
del Ejercicio 10, por lo que se usan las mismas variables globales, pero con los nombres
modificados para que correspondan al Ejercicio 11. */
var rat_11 = [];
var literal1_11 = "";
var literal2_11 = "";

/* Función para el Ejercicio 11.
En este ejercicio se deben generar dos literales aleatorias distintas, y un número racional aleatorio distinto de 1.
Posteriormente, se debe escribir el ejercicio en la página web utilizando las funciones correspondientes.
En esta ocasión, el número racional se genera utilizando la función
auxiliar racionalAleatorioDistintoDeUno */
function Ejercicio11(){
    activated[11] = true;
    // Obtiene todas las etiquetas necesarias para el ejercicio
    // Al tratarse del ejercicio 11, se tiene que n=11
    var n = 11;

    // Etiquetas para el exponente
    var int1 = "int1_" + n;
    var signo1 = "signo1_" + n;
    var n1 = "n1_" + n;
    var d1 = "d1_" + n;

    // Etiquetas para las literales
    var literal1 = "literal1_" + n;
    var literal2 = "literal2_" + n;

    // Etiquetas para el resultado
    // Etiquetas del primer racional
    var intr1 = "intr1_" + n;
    var signor1 = "signor1_" + n;
    var nr1 = "nr1_" + n;
    var dr1 = "dr1_" + n;
    var literalr1 = "literalr1_" + n;
    var literalr2 = "literalr2_" + n;

    // Etiquetas para el segundo racional
    var intr2 = "intr2_" + n;
    var signor2 = "signor2_" + n;
    var nr2 = "nr2_" + n;
    var dr2 = "dr2_" + n;

    // Variable que se encarga de la visibilidad del ejercicio de potenciación
    var ejercicio_potenciacion = "ejercicio_potenciacion_" + n;

    // Variable que se encarga de la visibilidad de la respuesta
    var respuesta_potenciacion = "respuesta_potenciacion_" + n;

    // Oculta todo lo que haya estado en la respuesta
    ocultarElementos([intr1, nr1, dr1, signor1, intr2, nr2, dr2, signor2, literalr1, literalr2, 
        int1, n1, d1, signo1, literal1, literal2, ejercicio_potenciacion, respuesta_potenciacion]);

    // Muestra lo correspondiente a los primeros exponentes, que son los que el alumno debe simplificar
    mostrarElementosMath([int1, n1, d1, signo1, literal1, literal2, ejercicio_potenciacion]);

    // Genera dos literales aleatorias distintas para el ejercicio
    var letras = nLetrasDistintas(2);
    document.getElementById(literal1).innerHTML = letras[0];
    document.getElementById(literal2).innerHTML = letras[1];

    // También las guarda en el arreglo de literales
    literal1_11 = letras[0];
    literal2_11 = letras[1];

    // Genera un número racional aleatorio distinto de 1, que será el exponente del ejercicio. Para ello, utiliza la 
    // función auxiliar racionalAleatorioDistintoDeUno
    rat_11 = racionalAleatorioDistintoDeUno();

    // Muestra el número racional en la consola con fines de depuración
    console.log("rat_11: " + rat_11[0] + "/" + rat_11[1]);

    // Ahora escribe el número racional en la página
    escribeRacionalExponente(int1, n1, d1, signo1, rat_11);

    // Calcula el resultado del ejercicio 11, que es la multiplicación de los dos racionales
    resultados[n] = [rat_11, rat_11];
}

/* Función para la Respuesta del Ejercicio 11.
Esta función es similar a la función Respuesta, pero en esta ocasión, se utiliza la variable global rat_11 para calcular el resultado del ejercicio 11. */
function Respuesta11(){
    if (!activated[11]) return;
    // En este caso particular, la estructura de la respuesta
    // es diferente a la de los ejercicios 1-8, así que se debe escribir la respuesta de manera diferente
    var n = 11;

    // Etiquetas para el resultado
    // Etiquetas para el primer racional
    var intr1 = "intr1_" + n;
    var signor1 = "signor1_" + n;
    var nr1 = "nr1_" + n;
    var dr1 = "dr1_" + n;
    var literalr1 = "literalr1_" + n;

    // Etiquetas para el segundo racional
    var intr2 = "intr2_" + n;
    var signor2 = "signor2_" + n;
    var nr2 = "nr2_" + n;
    var dr2 = "dr2_" + n;
    var literalr2 = "literalr2_" + n;

    // Variable que se encarga de la visibilidad de la respuesta
    var respuesta_potenciacion = "respuesta_potenciacion_" + n;

    // Hace visible la respuesta de potenciación
    mostrarElementosMath([respuesta_potenciacion]);

    // Obtiene el resultado del ejercicio 11 que, en esta ocasión, simplemente es de nuevo rat_11, pero simplificado. Por ello,
    // se asigna a dos variables distintas, rat1 y rat2, para que se puedan escribir en la página web.
    var rat1 = racionalIrreducible(rat_11);
    var rat2 = racionalIrreducible(rat_11);

    // Escribe los dos racionales en la página
    escribeRacionalExponente(intr1, nr1, dr1, signor1, rat1);
    escribeRacionalExponente(intr2, nr2, dr2, signor2, rat2);

    // Escribe las literales en la página
    document.getElementById(literalr1).innerHTML = literal1_11;
    document.getElementById(literalr2).innerHTML = literal2_11;

    // Hace visibles los elementos de la respuesta
    mostrarElementos([literalr1, literalr2]);
}
