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

/*
NOTA TÉCNICA:
Para multiplicación y división de racionales, decidí reducir el rango
de los enteros a  1 a 25, y de los denominadores de 1 a 23, para que las 
multiplicaciones no sean tan complicadas. En la multiplicación, el resultado puede ser hasta 25*25 = 625 en el numerador y 
23*23 = 529 en el denominador. Esto es más manejable que los rangos anteriores.

UPDATE:
SE AÑADE UNA FUNCIÓN PARA LAS RESPUESTAS GENERALES, Y UN ARREGLO PARA LAS RESPUESTAS DE LOS EJERCICIOS. 
    ESTO ES PARA QUE SE PUEDA USAR LA MISMA FUNCIÓN PARA TODOS LOS EJERCICIOS, Y NO TENER QUE HACER UNA FUNCIÓN PARA CADA UNO.
*/

// Arreglo para guardar las respuestas de los ejercicios
var respuestas = [];

// Función para guardar la respuesta de un ejercicio en el arreglo de respuestas
function guardarRespuesta(n, num, den){
    respuestas[n] = [num, den];
}

// Función general para escribir la respuesta del ejercicio n
function Respuesta(n){

    if (!activated[n]) return;

    // Obtiene todas las etiquetas utilizando el valor de n
    var intr = "intr_" + n;
    var nr = "nr_" + n;
    var dr = "dr_" + n;
    var signor = "signor_" + n;

    // Saca el numerador y denominador de la respuesta del arreglo de respuestas
    var num = respuestas[n][0];
    var den = respuestas[n][1];


    // Ahora que ya tiene todas las etiquetas, ya puede usar todos
    // los condicionales
    // Si la respuesta es 0, simplemente pone cero
    if(num === 0){
        document.getElementById(intr).innerHTML = "0";
        document.getElementById(nr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(dr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(signor).innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(den === 1){
        document.getElementById(intr).innerHTML = Math.abs(num);
        document.getElementById(nr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(dr).innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0)
            document.getElementById(signor).innerHTML = "- ";
        else
            document.getElementById(signor).innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById(intr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(nr).innerHTML = Math.abs(num);
        document.getElementById(dr).innerHTML = den;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0)
            document.getElementById(signor).innerHTML = "- ";
        else
        document.getElementById(signor).innerHTML = "&ZeroWidthSpace;";
    }
}


/*
FUNCIÓN GENERAL PARA GENERAR EJERCICIOS

Esta función contará con varios parámetros

n: Número de ejercicio. Sirve para construir las etiquetas correspondientes
same_den: Puede ser 1 o 0. Es 1 si se requiere que ambos denominadores sean iguales
cancel_type: Puede ser 1 o 2. Es 1 si se quiere que el denominador izquierdo y el numerador derecho sean iguales,
                              y es 2 si se quiere que el denominador derecho y el numerador izquierdo sean iguales.
                              Es 0 si no se requiere ninguna cancelación
neg1: Puede ser 1 o 0. Es 1 si y sólo si se requiere que la primera fracción sea negativa
neg2: Puede ser 1 o 0. Es 1 si y sólo si se requiere que la segunda fracción sea negativa
ent1: Puede ser 1 0 0. Es 1 si y sólo si se requiere que la primera fracción sea un entero
ent2: Puede ser 1 0 0. Es 1 si y sólo si se requiere que la segunda fracción sea un entero
*/
function Ejercicio(n, same_den, cancel_type, neg1, neg2, ent1, ent2){

    activated[n] = true;

    // Primero, obtiene todas las etiquetas que podrían ser necesarias
    var nr = "nr_" + n;
    var dr = "dr_" + n;
    var signor = "signor_" + n;
    var intr = "intr_" + n;
    var signo1 = "signo1_" + n;
    var signo2 = "signo2_" + n;
    var op1 = "op1_" + n;
    var atag = "a_" + n;
    var btag = "b_" + n;
    var ctag = "c_" + n;
    var dtag = "d_" + n;
    var lp1 = "lp1_" + n;
    var rp1 = "rp1_" + n;
    var ent1tag = "ent1_" + n;
    var ent2tag = "ent2_" + n;

    // Limpia las repuestas del ejercicio anterior
    limpiarRespuestas([signor, intr, nr, dr]);

    // Todo esto es si y sólo si no se requieren enteros

    if(ent1+ent2==0){    // Ahora, genera la primera fracción
        var a = enteroAleatorio(1, 25);
        var b = enteroAleatorio(1, 23);

        // Se asegura de que no sea un entero
        while(a%b == 0)
            a = enteroAleatorio(1, 25);

        // Si se solicita el mismo denominador, simplemente pone d = b,
        // y genera el numerador
        if(same_den == 1){
            var d = b;
            var c = enteroAleatorio(1, 25);
            while(c%d == 0)
                c = enteroAleatorio(1, 25);
        }

        // Si no se solicita el mismo denominador, podría haber 
        // algún tipo de cancelación. Si cancel_type es 1, entonces el denominador izquierdo y el numerador derecho son iguales.
        else if(cancel_type == 1){
            var d = enteroAleatorio(1, 23);
            var c = b;

            // Se asegura de que no sea un entero, pero esta vez variando d para asegurar que b = c
            while(c%d == 0)
                d = enteroAleatorio(1, 23);
        }
        // Si cancel_type es 2, entonces el denominador derecho y el numerador izquierdo son iguales.
        else if(cancel_type == 2){
            var c = enteroAleatorio(1, 25);
            var d = a;

            // Se asegura de que no sea un entero, pero esta vez variando c para asegurar que a = d
            while(c%d == 0)
                c = enteroAleatorio(1, 25);
        }
        // Si cancel_type es 0, entonces simplemente genera c y d aleatoriamente
        else{
            var c = enteroAleatorio(1, 25);
            var d = enteroAleatorio(1, 23);

            // Se asegura de que no sea un entero
            while(c%d == 0)
                c = enteroAleatorio(1, 25);
        }

        // Ahora que ya tiene a, b, c y d, puede escribirlos en la página
        document.getElementById(atag).innerHTML = a;
        document.getElementById(btag).innerHTML = b;
        document.getElementById(ctag).innerHTML = c;
        document.getElementById(dtag).innerHTML = d;

        // Independientemente de los signos, puede obtener un resultado parcial haciendo la multiplicación
        var rat1 = [a, b];
        var rat2 = [c, d];

        var resultado = multiplicaRacional(rat1, rat2);

        // Ahora, determina el signo del numerador. Solo hace falta cambiarle el signo si 
        // Se pidieron cosas diferentes en ambas fracciones 
        if(neg1 != neg2)
            resultado[0] = -resultado[0];
        // Ahora, guarda la respuesta en el arreglo de respuestas
        guardarRespuesta(n, resultado[0], resultado[1]);
    }
    // Si sí se pidió un entero, entonces solo hay que generar lo de una fracción
    else if(ent1==1){
        // Genera un entero aleatorio entre 1 y 12
        var int1 = enteroAleatorio(1, 12);

        // Después, genera el numerador y el denominador de la segunda fracción
        var c = enteroAleatorio(1, 25);
        var d = enteroAleatorio(1, 23);

        // Se asegura de que no sea un entero
        while(c%d == 0)
            c = enteroAleatorio(1, 25);

        // Crea los racionales y hace la multiplicación
        var rat1 = [int1, 1];
        var rat2 = [c, d];
        var resultado = multiplicaRacional(rat1, rat2);

        // Ahora, determina el signo del numerador. Solo hace falta cambiarle el signo si 
        // Se pidieron cosas diferentes en ambas fracciones 
        if(neg1 != neg2)
            resultado[0] = -resultado[0];

        // Guarda la respuesta en el arreglo de respuestas
        guardarRespuesta(n, resultado[0], resultado[1]);

        // Escribe los valores en la página
        document.getElementById(ent1tag).innerHTML = int1;
        document.getElementById(ctag).innerHTML = c;
        document.getElementById(dtag).innerHTML = d;
    }
    else{
        // Genera un entero aleatorio entre 1 y 12
        var int2 = enteroAleatorio(1, 12);

        // Después, genera el numerador y el denominador de la primera fracción
        var a = enteroAleatorio(1, 25);
        var b = enteroAleatorio(1, 23);

        // Se asegura de que no sea un entero
        while(a%b == 0)
            a = enteroAleatorio(1, 25);

        // Crea los racionales y hace la multiplicación
        var rat1 = [a, b];
        var rat2 = [int2, 1];
        var resultado = multiplicaRacional(rat1, rat2);

        // Ahora, determina el signo del numerador. Solo hace falta cambiarle el signo si 
        // Se pidieron cosas diferentes en ambas fracciones 
        if(neg1 != neg2)
            resultado[0] = -resultado[0];

        // Guarda la respuesta en el arreglo de respuestas
        guardarRespuesta(n, resultado[0], resultado[1]);

        // Escribe los valores en la página
        document.getElementById(atag).innerHTML = a;
        document.getElementById(btag).innerHTML = b;
        document.getElementById(ent2tag).innerHTML = int2;
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

    // Muestra el punto de multiplicación en la página
    mostrarPuntos([op1])

    // Finalmente, muestra los paréntesis si y sólo si el segundo signo se pidió negativo
    if(neg2 == 1){
        document.getElementById(lp1).innerHTML = "(";
        document.getElementById(rp1).innerHTML = ")";
    }
}
