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
			elem.innerHTML = "&sdot;";
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

/*
NOTA TÉCNICA:
Como estos ejercicios son de comparación de racionales, y la respuesta puede ser un número entero, una fracción o cero, 
se decidió hacer una función general para escribir la respuesta en la página. Además, se redujo el rango de los enteros
a 12, para que el alumno no tenga que hacer multiplicaciones de números grandes. Esto es para que el ejercicio sea más 
de comparación que de cálculo.

UPDATE:
SE AÑADE UNA FUNCIÓN PARA LAS RESPUESTAS GENERALES, Y UN ARREGLO PARA LAS RESPUESTAS DE LOS EJERCICIOS. 
    ESTO ES PARA QUE SE PUEDA USAR LA MISMA FUNCIÓN PARA TODOS LOS EJERCICIOS, Y NO TENER QUE HACER UNA FUNCIÓN PARA CADA UNO.
*/

// Arreglo para guardar las respuestas de los ejercicios
// Cada elemento del arreglo es un arreglo con dos racionales. Primero el menor,
// y después el mayor. Cada racional es un arreglo con dos elementos: el numerador y el denominador.
var respuestas = [];

// Función para guardar la respuesta de un ejercicio en el arreglo de respuestas
// Para estos ejercicios, la respuesta es un arreglo con dos racionales. El primer racional es el menor, y el segundo es el mayor.
function guardarRespuesta(n, r1, r2){
    respuestas[n] = [r1, r2];
}

// En esta ocasión, la función para escribir la respuesta en la página es más complicada,
// así que se auxilia de una función auxiliar llamada escribeRacional, que básicamente
// hace lo mismo que hacía la función respuesta. Para ello, recibe directamente las etiquetas
// intr, nr, dr, signor, y el racional a escribir, que es un arreglo con dos elementos: el numerador y el denominador.
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

// Función general para escribir la respuesta del ejercicio n
// Tiene dos parámetros: n, que es el número del ejercicio, y una bandera menor,
// que indica si se debe usar el signo menor o el signo mayor. Si menor es true, se usa el signo menor, 
// si es false, se usa el signo mayor.
function Respuesta(n, menor){

    if (!activated[n]) return;

    // Obtiene todas las etiquetas utilizando el valor de n
    var intr1 = "intr1_" + n;
    var nr1 = "nr1_" + n;
    var dr1 = "dr1_" + n;
    var signor1 = "signor1_" + n;
    var intr2 = "intr2_" + n;
    var nr2 = "nr2_" + n;
    var dr2 = "dr2_" + n;
    var signor2 = "signor2_" + n; 
    var signo = "signo_" + n;

    // Obtiene los dos racionales, guardándolos en las variables rat1 y rat2, de tal manera
    // que primero se escriba rat1, después el signo (ya sea menor o mayor) y finalmente rat2. Para esto, 
    // se usa la bandera menor para determinar cuál es el menor y cuál es el mayor.

    var rat1, rat2;
    if(menor){
        rat1 = respuestas[n][0];
        rat2 = respuestas[n][1];

        // Aprovechando, escribe el signo menor que se debe usar en la página
        document.getElementById(signo).innerHTML = "&lt;";
    } else {
        rat1 = respuestas[n][1];
        rat2 = respuestas[n][0];

        // Aprovechando, escribe el signo mayor que se debe usar en la página
        document.getElementById(signo).innerHTML = "&gt;";
    }

    // Escribe los dos racionales en la página usando la función auxiliar escribeRacional
    escribeRacional(intr1, nr1, dr1, signor1, rat1);
    escribeRacional(intr2, nr2, dr2, signor2, rat2);
}


/*
FUNCIÓN GENERAL PARA GENERAR EJERCICIOS

Estos ejercicios son para comparar dos racionales. La función genera dos fracciones, y las escribe en la página. 
Además, guarda la respuesta en el arreglo de respuestas.

Esta función contará con varios parámetros

n: Número de ejercicio. Sirve para construir las etiquetas correspondientes
same_den: Puede ser 1 o 0. Es 1 si se requiere que ambos denominadores sean iguales
neg1: Puede ser 1 o 0. Es 1 si y sólo si se requiere que la primera fracción sea negativa
neg2: Puede ser 1 o 0. Es 1 si y sólo si se requiere que la segunda fracción sea negativa
ent1: Puede ser 1 0 0. Es 1 si y sólo si se requiere que la primera fracción sea un entero

No hace falta la bander ent2 porque, en los ejercicios de comparación, no importa el orden
en que los valores se le den al estudiante. Por tal razón solo se necesita el parámetro ent1
*/
function Ejercicio(n, same_den, neg1, neg2, ent1){

    activated[n] = true;

    // Primero, obtiene todas las etiquetas que podrían ser necesarias
    // Etiquetas para el primer racional en la respuesta
    var nr1 = "nr1_" + n;
    var dr1 = "dr1_" + n;
    var signor1 = "signor1_" + n;
    var intr1 = "intr1_" + n;

    // Etiquetas para el segundo racional en la respuesta
    var nr2 = "nr2_" + n;
    var dr2 = "dr2_" + n;
    var signor2 = "signor2_" + n;
    var intr2 = "intr2_" + n;

    // Etiquetas para el signo de comparación
    var signo = "signo_" + n;

    // Etiquetas para los racionales en la pregunta
    var signo1 = "signo1_" + n;
    var signo2 = "signo2_" + n;
    var atag = "a_" + n;
    var btag = "b_" + n;
    var ctag = "c_" + n;
    var dtag = "d_" + n;
    var ent1tag = "ent1_" + n;

    // Etiqueta para la coma en el ejercicio
    var coma = "coma_" + n;

    // Bandera que determina si los dos racionales son iguales. Por defecto, es 1, y se cambia a 0 si se detecta que los dos racionales generados son distintos
    var iguales = 1;

    // Limpia todas las repuestas del ejercicio anterior
    limpiarRespuestas([signor1, intr1, nr1, dr1, signor2, intr2, nr2, dr2, signo]);

    // Todo se debe repetir mientras se detecte que los dos racionales generados son iguales. Para ello, se usa un ciclo while
    while(iguales == 1){
         // Si no se pidió que ninguna fracción fuera un entero, entonces genera dos fracciones
        if(ent1==0){    // Ahora, genera la primera fracción
            var a = enteroAleatorio(1, 12);
            var b = enteroAleatorio(1, 12);

            // Se asegura de que no sea un entero
            while(a%b == 0)
                a = enteroAleatorio(1, 12);

            // Si se solicita el mismo denominador, simplemente pone d = b,
            // y genera el numerador
            if(same_den == 1){
                var d = b;
                var c = enteroAleatorio(1, 12);
                while(c%d == 0)
                    c = enteroAleatorio(1, 12);
            }
            // Si no se pidió ninguna igualdad en particular, entonces simplemente
            // genera la segunda fracción de manera independiente
            else{
                var c = enteroAleatorio(1, 12);
                var d = enteroAleatorio(1, 12);

                // Se asegura de que no sea un entero
                while(c%d == 0)
                    c = enteroAleatorio(1, 12);
            }

            // Ahora, guarda los racionales sin tomar en cuenta el signo solicitado
            var rat1 = [a, b];
            var rat2 = [c, d];

            // Ahora que ya tiene a, b, c y d, puede escribirlos en la página
            document.getElementById(atag).innerHTML = a;
            document.getElementById(btag).innerHTML = b;
            document.getElementById(ctag).innerHTML = c;
            document.getElementById(dtag).innerHTML = d;

            
        }
        // Si sí se pidió un entero, entonces solo hay que generar lo de una fracción
        else{
            // Genera un entero aleatorio entre 1 y 5
            var int1 = enteroAleatorio(1, 5);

            // Después, genera el numerador y el denominador de la segunda fracción
            var c = enteroAleatorio(1, 12);
            var d = enteroAleatorio(1, 12);

            // Se asegura de que no sea un entero
            while(c%d == 0)
                c = enteroAleatorio(1, 12);

            // Crea los racionales y hace la división
            var rat1 = [int1, 1];
            var rat2 = [c, d];

            // Escribe los valores en la página
            document.getElementById(ent1tag).innerHTML = int1;
            document.getElementById(ctag).innerHTML = c;
            document.getElementById(dtag).innerHTML = d;
        }

        // Ahora, pone los signos en la página. Aborda los tres casos posibles
        if(neg1 == 1 && neg2 == 1){
            document.getElementById(signo1).innerHTML = "- ";
            document.getElementById(signo2).innerHTML = "- ";
        }
        else if(neg1 == 1 && neg2 == 0){
            document.getElementById(signo1).innerHTML = "- ";
        }
        else if(neg1 == 0 && neg2 == 1){
            document.getElementById(signo2).innerHTML = "- ";
        }

        // Si no se pidió que ningún signo fuera negativo, no hace nada, pues los signos ya están en blanco

        // Ahora, aplica los signos a los racionales, para que la respuesta sea correcta
        if(neg1 == 1)
            rat1[0] = -rat1[0];
        if(neg2 == 1)
            rat2[0] = -rat2[0];

        // Finalmente, verifica si los dos racionales son iguales. Si lo son, la bandera iguales se mantiene en 1, y el ciclo se repite
        if(compararRacional(rat1, rat2) == 0)
            iguales = 1;
        else
            iguales = 0;
    }

    // Finalmente, guarda la respuesta en el arreglo de respuestas. Para ello, debe hacer la comparación
    // de los racionales, y guardar primero el menor y después el mayor
    if(compararRacional(rat1, rat2) == -1)
        guardarRespuesta(n, rat1, rat2);
    else
        guardarRespuesta(n, rat2, rat1);

    // Falta escribir la coma
    document.getElementById(coma).innerHTML = ",";
}

function generarProblemaDivision() {
    // 1. Supongamos que aquí generas tus números aleatorios
    const a = 1, b = 2, c = 3, d = 4;

    // 2. Inyectas los valores en los elementos correspondientes
    document.getElementById("a_1").textContent = a;
    document.getElementById("b_1").textContent = b;
    document.getElementById("c_1").textContent = c;
    document.getElementById("d_1").textContent = d;

    // 3. ¡Mágia! Haces visible el contenedor completo ahora que ya tiene datos
    document.getElementById("contenedor-division").style.display = "block";
}
