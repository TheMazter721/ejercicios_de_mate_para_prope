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

/*
Funciones relacionadas con números racionales.
Los racionales se representan como arreglos de dos elementos, donde el primer elemento es el numerador y el segundo es el denominador.
*/
function generaRacional()
//Funcion para generar un numero racional positivo, en forma reducida, de manera aleatoria
{		
    var rn,rd;
    var r = [];
    var divcom;
    rd = enteroAleatorio(2,49);//Denominador generado de forma aleatoria
    rn = enteroAleatorio(2,2*rd);//Numerador generado de forma aleatoria. Se obtienen fracciones entre 0 y 2.
    
    // Se asegura de que no sea un entero
    while ((rn == rd) || (rn == 2*rd))
        rn = enteroAleatorio(2,2*rd);	
    divcom = mcd(rn,rd);
    rn = rn / divcom;
    rd = rd / divcom;
    r[0] = rn;
    r[1] = rd;
    return r;		
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

// Ahora mismo, los ejercicios dicen resta, pero todos
// deben ser adaptados a suma, ya que el objetivo es practicar la suma de racionales.
// Los signos que acompañan a los racionales negativos deben dejarse igual

// Variables globales para el ejercicio 1
// Solo se necesitan el numerador y el denominador de la respuesta
var nr_1, dr_1;

// Función para el Ejercicio 1
// Simplemente genera dos números racionales con el mismo denominador, los muestra en la página
// y los suma, regresando el resultado en forma simplificada.
function Ejercicio01(){

    activated[1] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_1","dr_1","signor_1","intr_1"]);
    
    //Genera los números del ejercicio		
    var a1 = enteroAleatorio(1,49);
    var b1 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c1 = enteroAleatorio(1,49);
    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b1 no divida a1 y que b1 no divida a c1. Si b1 divide a a1, se genera un nuevo a1. Si b1 divide a c1, se genera un nuevo c1.
    while(a1 % b1 === 0)
        a1 = enteroAleatorio(1,49);
    while(c1 % b1 === 0)
        c1 = enteroAleatorio(1,49);

    var d1 = b1;//Mismo denominador
    
    rat1_1 = [a1,b1];
    rat2_1 = [c1,d1];
    
    //Escribe el ejercicio
    document.getElementById("a_1").innerHTML = a1;
    document.getElementById("b_1").innerHTML = b1;
    document.getElementById("op1_1").innerHTML = "+";
    document.getElementById("c_1").innerHTML = c1;
    document.getElementById("d_1").innerHTML = d1;			
    
    // Hace la suma y guarda el resultado en las variables globales
    var resultado = sumaRacional(rat1_1,rat2_1);
    nr_1 = resultado[0];
    dr_1 = resultado[1];
}

// Función para mostrar la respuesta del Ejercicio 1 en forma de fracción,
// no en forma de entero + fracción. La función se encarga de mostrar el signo, y el entero o la fracción,
// según corresponda
function Respuesta01(){

    if (!activated[1]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_1 === 0){
        document.getElementById("intr_1").innerHTML = "0";
        document.getElementById("nr_1").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_1").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_1").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_1 === 1){
        document.getElementById("intr_1").innerHTML = Math.abs(nr_1);
        document.getElementById("nr_1").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_1").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_1 < 0)
            document.getElementById("signor_1").innerHTML = "- ";
        else
            document.getElementById("signor_1").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_1").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_1").innerHTML = Math.abs(nr_1);
        document.getElementById("dr_1").innerHTML = dr_1;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_1 < 0)
            document.getElementById("signor_1").innerHTML = "- ";
        else
        document.getElementById("signor_1").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el ejercicio 2
var nr_2, dr_2;

// Función para el Ejercicio 2
// En esta ocasión, se generan dos números racionales con el mismo denominador,
// pero el primero racional debe ser negativo y se le debe sumar un segundo
// racional que sea positivo. En otras palabras, se hace una operación 
// de la forma -a/b + c/b = (c-a)/b, donde a, b y c son enteros positivos y b > 1.
// Para obtener el resultado, simplemente se calcula (c-a)/b.
function Ejercicio02(){

    activated[2] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_2","dr_2","signor_2","intr_2"]);
    
    //Genera los números del ejercicio
    var a2 = enteroAleatorio(1,49);
    var b2 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c2 = enteroAleatorio(1,49);
    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b2 no divida a a2 y que b2 no divida a c2. Si b2 divide a a2, se genera un nuevo a2. Si b2 divide a c2, se genera un nuevo c2.
    while(a2 % b2 === 0)
        a2 = enteroAleatorio(1,49);
    while(c2 % b2 === 0)
        c2 = enteroAleatorio(1,49);

    var d2 = b2;//Mismo denominador
    
    rat1_2 = [a2,b2];
    rat2_2 = [c2,d2];
    
    //Escribe el ejercicio
    // El signo negativo debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("signo1_2").innerHTML = "- ";
    document.getElementById("a_2").innerHTML = a2;
    document.getElementById("b_2").innerHTML = b2;

    document.getElementById("op1_2").innerHTML = "+";
    document.getElementById("c_2").innerHTML = c2;
    document.getElementById("d_2").innerHTML = d2;

    // Calcula la suma de los racionales, que será positiva, y luego se le pone el signo negativo al resultado
    var resultado = restaRacional(rat2_2,rat1_2);
    nr_2 = resultado[0];
    dr_2 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 2 en forma de fracción, no en forma de entero + fracción. 
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta02(){

    if (!activated[2]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_2 === 0){
        document.getElementById("intr_2").innerHTML = "0";
        document.getElementById("nr_2").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_2").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_2").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_2 === 1){
        document.getElementById("intr_2").innerHTML = Math.abs(nr_2);
        document.getElementById("nr_2").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_2").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_2 < 0)
            document.getElementById("signor_2").innerHTML = "- ";
        else
            document.getElementById("signor_2").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_2").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_2").innerHTML = Math.abs(nr_2);
        document.getElementById("dr_2").innerHTML = dr_2;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_2 < 0)
            document.getElementById("signor_2").innerHTML = "- ";
        else
        document.getElementById("signor_2").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 3
var nr_3, dr_3;

// Función para el Ejercicio 3
// En esta ocasión, se hará la suma de un racional positivo con un racional negativo, 
// ambos con el mismo denominador, es decir, 
// se hará una operación de la forma a/b + (-c/b) = a/b - c/b. Por tal razón,
// basta con generar los números a, b, y c, y luego calcular la resta de los racionales. 
function Ejercicio03(){

    activated[3] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_3","dr_3","signor_3","intr_3"]);
    
    //Genera los números del ejercicio
    var a3 = enteroAleatorio(1,49);
    var b3 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c3 = enteroAleatorio(1,49);
    var d3 = b3; // Ambos denominadores deben ser iguales, para que el segundo racional sea negativo. Esto es, se hace a/b - (-c/b) = a/b + c/b.
    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b3 no divida a a3 y que b3 no divida a c3. Si b3 divide a a3, se genera un nuevo a3. Si b3 divide a c3, se genera un nuevo c3.
    while(a3 % b3 === 0)
        a3 = enteroAleatorio(1,49);
    while(c3 % d3 === 0)
        c3 = enteroAleatorio(1,49);

    rat1_3 = [a3,b3];
    rat2_3 = [c3,d3];
    
    //Escribe el ejercicio
    document.getElementById("a_3").innerHTML = a3;
    document.getElementById("b_3").innerHTML = b3;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_3").innerHTML = "+";
    document.getElementById("signo1_3").innerHTML = "- ";
    document.getElementById("c_3").innerHTML = c3;
    document.getElementById("d_3").innerHTML = d3;

    // En esta ocasión, también escribe un paréntesis izquierdo (lp1_3) y un paréntesis derecho (rp1_3) para que se vea bien el ejercicio en la página
    document.getElementById("lp1_3").innerHTML = "(";
    document.getElementById("rp1_3").innerHTML = ")";

    // Calcula la resta de los racionales, que será positiva, y luego se le pone el signo negativo al resultado
    var resultado = restaRacional(rat1_3,rat2_3);
    nr_3 = resultado[0];
    dr_3 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 3 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta03(){

    if (!activated[3]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_3 === 0){
        document.getElementById("intr_3").innerHTML = "0";
        document.getElementById("nr_3").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_3").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_3").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_3 === 1){
        document.getElementById("intr_3").innerHTML = Math.abs(nr_3);
        document.getElementById("nr_3").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_3").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_3 < 0)
            document.getElementById("signor_3").innerHTML = "- ";
        else
            document.getElementById("signor_3").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_3").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_3").innerHTML = Math.abs(nr_3);
        document.getElementById("dr_3").innerHTML = dr_3;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_3 < 0)
            document.getElementById("signor_3").innerHTML = "- ";
        else
        document.getElementById("signor_3").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 4
var nr_4, dr_4;

// Función para el Ejercicio 4
// En esta ocasión, se hará la suma de un racional negativo con otro racional
// negativo, ambos con el mismo denominador, es decir, se hará una operación de la forma -a/b + (-c/b) = -a/b - c/b. Por tal razón,
// basta con generar los números a, b, c y d, y luego calcular la suma de los racionales,
// para después cambiarle el signo. El resultado puede ser positivo o negativo.
function Ejercicio04(){

    activated[4] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_4","dr_4","signor_4","intr_4"]);
    
    //Genera los números del ejercicio
    var a4 = enteroAleatorio(1,49);
    var b4 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c4 = enteroAleatorio(1,49);
    var d4 = b4; // Ambos denominadores deben ser iguales, para que el segundo racional sea negativo. Esto es, se hace -a/b - (-c/b) = -a/b + c/b.
    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b4 no divida a a4 y que d4 no divida a c4. Si b4 divide a a4, se genera un nuevo a4. Si d4 divide a c4, se genera un nuevo c4.
    while(a4 % b4 === 0)
        a4 = enteroAleatorio(1,49);
    while(c4 % d4 === 0)
        c4 = enteroAleatorio(1,49);

    rat1_4 = [a4,b4];
    rat2_4 = [c4,d4];

    document.getElementById("signo1_4").innerHTML = "- ";
    document.getElementById("a_4").innerHTML = a4;
    document.getElementById("b_4").innerHTML = b4;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_4").innerHTML = "+";
    document.getElementById("signo2_4").innerHTML = "- ";
    document.getElementById("c_4").innerHTML = c4;
    document.getElementById("d_4").innerHTML = d4;

    // En esta ocasión, también escribe un paréntesis izquierdo (lp1_4) y un paréntesis derecho (rp1_4) para que se vea bien el ejercicio en la página
    document.getElementById("lp1_4").innerHTML = "(";
    document.getElementById("rp1_4").innerHTML = ")";

    // Calcula la suma de los racionales, que puede ser positiva o negativa
    // Ya que el resultado será -a/b + (-c/b) = -a/b - c/b, la suma se hará en el orden -a/b - c/b
    var resultado = sumaRacional(rat1_4,rat2_4);
    nr_4 = -resultado[0];
    dr_4 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 4 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta04(){

    if (!activated[4]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_4 === 0){
        document.getElementById("intr_4").innerHTML = "0";
        document.getElementById("nr_4").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_4").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_4").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_4 === 1){
        document.getElementById("intr_4").innerHTML = Math.abs(nr_4);
        document.getElementById("nr_4").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_4").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador  es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_4 < 0)
            document.getElementById("signor_4").innerHTML = "- ";
        else
            document.getElementById("signor_4").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_4").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_4").innerHTML = Math.abs(nr_4);
        document.getElementById("dr_4").innerHTML = dr_4;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_4 < 0)
            document.getElementById("signor_4").innerHTML = "- ";
        else
        document.getElementById("signor_4").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 5
var nr_5, dr_5;

// Función para el Ejercicio 5
// El Ejercicio 5 es similar al Ejercicio 1, pero en esta ocasión, se generan dos números racionales con denominadores distintos. 
// Por tal razón, se hace la suma de los racionales de la forma a/b + c/d, donde a, b, c y d son enteros positivos y b > 1 y d > 1. 
// El resultado será positivo
function Ejercicio05(){

    activated[5] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_5","dr_5","signor_5","intr_5"]);
    
    //Genera los números del ejercicio
    var a5 = enteroAleatorio(1,49);
    var b5 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c5 = enteroAleatorio(1,49);
    var d5 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b5 no divida a a5 y que d5 no divida a c5. Si b5 divide a a5, se genera un nuevo a5. Si d5 divide a c5, se genera un nuevo c5.
    while(a5 % b5 === 0)
        a5 = enteroAleatorio(1,49);
    while(c5 % d5 === 0)
        c5 = enteroAleatorio(1,49);

    rat1_5 = [a5,b5];
    rat2_5 = [c5,d5];

    document.getElementById("a_5").innerHTML = a5;
    document.getElementById("b_5").innerHTML = b5;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_5").innerHTML = "+";
    document.getElementById("c_5").innerHTML = c5;
    document.getElementById("d_5").innerHTML = d5;

    // Calcula la suma de los racionales, que puede ser positiva o negativa
    var resultado = sumaRacional(rat1_5,rat2_5);
    nr_5 = resultado[0];
    dr_5 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 5 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta05(){

    if (!activated[5]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_5 === 0){
        document.getElementById("intr_5").innerHTML = "0";
        document.getElementById("nr_5").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_5").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_5").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_5 === 1){
        document.getElementById("intr_5").innerHTML = Math.abs(nr_5);
        document.getElementById("nr_5").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_5").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador  es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_5 < 0)
            document.getElementById("signor_5").innerHTML = "- ";
        else
            document.getElementById("signor_5").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_5").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_5").innerHTML = Math.abs(nr_5);
        document.getElementById("dr_5").innerHTML = dr_5;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_5 < 0)
            document.getElementById("signor_5").innerHTML = "- ";
        else
        document.getElementById("signor_5").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 6
var nr_6, dr_6;

// Función para el Ejercicio 6
// Es muy similar al Ejercicio 2, pero en esta ocasión, se generan dos números racionales con denominadores distintos.
// Por tal razón, se hace la suma de los racionales de la forma -a/b + c/d, donde a, b, c y d son enteros positivos y b > 1 y d > 1. 
// El resultado será negativo.
function Ejercicio06(){

    activated[6] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_6","dr_6","signor_6","intr_6"]);
    
    //Genera los números del ejercicio
    var a6 = enteroAleatorio(1,49);
    var b6 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c6 = enteroAleatorio(1,49);
    var d6 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b6 no divida a a6 y que d6 no divida a c6. Si b6 divide a a6, se genera un nuevo a6. Si d6 divide a c6, se genera un nuevo c6.
    while(a6 % b6 === 0)
        a6 = enteroAleatorio(1,49);
    while(c6 % d6 === 0)
        c6 = enteroAleatorio(1,49);

    rat1_6 = [a6,b6];
    rat2_6 = [c6,d6];

    document.getElementById("signo1_6").innerHTML = "- ";
    document.getElementById("a_6").innerHTML = a6;
    document.getElementById("b_6").innerHTML = b6;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_6").innerHTML = "+";
    document.getElementById("c_6").innerHTML = c6;
    document.getElementById("d_6").innerHTML = d6;

    // Calcula la suma de los racionales, haciendo la resta rat2_6 - rat1_6
    var resultado = restaRacional(rat2_6, rat1_6);
    nr_6 = resultado[0];
    dr_6 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 6 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta06(){

    if (!activated[6]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_6 === 0){
        document.getElementById("intr_6").innerHTML = "0";
        document.getElementById("nr_6").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_6").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_6").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_6 === 1){
        document.getElementById("intr_6").innerHTML = Math.abs(nr_6);
        document.getElementById("nr_6").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_6").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_6 < 0)
            document.getElementById("signor_6").innerHTML = "- ";
        else
            document.getElementById("signor_6").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_6").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_6").innerHTML = Math.abs(nr_6);
        document.getElementById("dr_6").innerHTML = dr_6;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_6 < 0)
            document.getElementById("signor_6").innerHTML = "- ";
        else
        document.getElementById("signor_6").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 7
var nr_7, dr_7;

// Función para el Ejercicio 7
// Es similar al Ejercicio 3, pero en esta ocasión, se generan dos números racionales con denominadores distintos.
// Por tal razón, se hace la suma de los racionales de la forma a/b + (-c/d) = a/b + (-c/d), donde a, b, c y d son enteros positivos y b > 1 y d > 1. 
// El resultado será positivo.
function Ejercicio07(){

    activated[7] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_7","dr_7","signor_7","intr_7"]);
    
    //Genera los números del ejercicio
    var a7 = enteroAleatorio(1,49);
    var b7 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c7 = enteroAleatorio(1,49);
    var d7 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b7 no divida a a7 y que d7 no divida a c7. Si b7 divide a a7, se genera un nuevo a7. Si d7 divide a c7, se genera un nuevo c7.
    while(a7 % b7 === 0)
        a7 = enteroAleatorio(1,49);
    while(c7 % d7 === 0)
        c7 = enteroAleatorio(1,49);

    rat1_7 = [a7,b7];
    rat2_7 = [c7,d7];

    document.getElementById("a_7").innerHTML = a7;
    document.getElementById("b_7").innerHTML = b7;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_7").innerHTML = "+";
    document.getElementById("signo1_7").innerHTML = "- ";
    document.getElementById("c_7").innerHTML = c7;
    document.getElementById("d_7").innerHTML = d7;

    // En esta ocasión, también escribe un paréntesis izquierdo (lp1_7) y un paréntesis derecho (rp1_7) para que se vea bien el ejercicio en la página
    document.getElementById("lp1_7").innerHTML = "(";
    document.getElementById("rp1_7").innerHTML = ")";

    // Calcula la resta de los racionales
    var resultado = restaRacional(rat1_7,rat2_7);
    nr_7 = resultado[0];
    dr_7 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 7 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta07(){

    if (!activated[7]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_7 === 0){
        document.getElementById("intr_7").innerHTML = "0";
        document.getElementById("nr_7").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_7").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_7").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_7 === 1){
        document.getElementById("intr_7").innerHTML = Math.abs(nr_7);
        document.getElementById("nr_7").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_7").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_7 < 0)
            document.getElementById("signor_7").innerHTML = "- ";
        else
            document.getElementById("signor_7").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_7").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_7").innerHTML = Math.abs(nr_7);
        document.getElementById("dr_7").innerHTML = dr_7;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_7 < 0)
            document.getElementById("signor_7").innerHTML = "- ";
        else
        document.getElementById("signor_7").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 8
var nr_8, dr_8;

// Función para el Ejercicio 8
// Es similar al Ejercicio 4, pero en esta ocasión, se generan dos números racionales con denominadores distintos.
// Por tal razón, se hace la suma de los racionales de la forma -a/b + (-c/d) = -a/b - c/d, donde a, b, c y d son enteros positivos y b > 1 y d > 1.
// El resultado será negativo
function Ejercicio08(){

    activated[8] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_8","dr_8","signor_8","intr_8"]);

    // Genera los números del ejercicio
    var a8 = enteroAleatorio(1,49);
    var b8 = enteroAleatorio(2,47);//Denominador mayor que 1
    var c8 = enteroAleatorio(1,49);
    var d8 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que las fracciones no sean enteras, esto es, 
    // que b8 no divida a a8 y que d8 no divida a c8. Si b8 divide a a8, se genera un nuevo a8. Si d8 divide a c8, se genera un nuevo c8.
    while(a8 % b8 === 0)
        a8 = enteroAleatorio(1,49);
    while(c8 % d8 === 0)
        c8 = enteroAleatorio(1,49);

    rat1_8 = [a8,b8];
    rat2_8 = [c8,d8];

    document.getElementById("signo1_8").innerHTML = "- ";
    document.getElementById("a_8").innerHTML = a8;
    document.getElementById("b_8").innerHTML = b8;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_8").innerHTML = "+";
    document.getElementById("signo2_8").innerHTML = "- ";
    document.getElementById("c_8").innerHTML = c8;
    document.getElementById("d_8").innerHTML = d8;

    // En esta ocasión, también escribe un paréntesis izquierdo (lp1_8) y un paréntesis derecho (rp1_8) para que se vea bien el ejercicio en la página
    document.getElementById("lp1_8").innerHTML = "(";
    document.getElementById("rp1_8").innerHTML = ")";

    // Calcula la suma de los racionales, que será negativa
    // Ya que el resultado será -a/b + (-c/d), la suma se hará en el orden -a/b + (-c/d)
    var resultado = sumaRacional(rat1_8,rat2_8);
    nr_8 = -resultado[0];
    dr_8 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 8 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta08(){

    if (!activated[8]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_8 === 0){
        document.getElementById("intr_8").innerHTML = "0";
        document.getElementById("nr_8").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_8").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_8").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_8 === 1){
        document.getElementById("intr_8").innerHTML = Math.abs(nr_8);
        document.getElementById("nr_8").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_8").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_8 < 0)
            document.getElementById("signor_8").innerHTML = "- ";
        else
            document.getElementById("signor_8").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_8").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_8").innerHTML = Math.abs(nr_8);
        document.getElementById("dr_8").innerHTML = dr_8;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_8 < 0)
            document.getElementById("signor_8").innerHTML = "- ";
        else
        document.getElementById("signor_8").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 9
var nr_9, dr_9;

// Función para el Ejercicio 9
// En esta ocasión, se hará la suma de un entero positivo con 
// una fracción positiva. Por tal razón, se hace una operación de la forma a + b/c, donde a, b y c son enteros positivos y c > 1.
// Se usará la variable ent_9 para el entero, y las variables a9 y b9 para la fracción.
function Ejercicio09(){

    activated[9] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_9","dr_9","signor_9","intr_9"]);
    
    //Genera los números del ejercicio
    var ent_9 = enteroAleatorio(1,49);
    var a9 = enteroAleatorio(1,49);
    var b9 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que la fracción no sea entera, esto es, 
    // que b9 no divida a a9. Si b9 divide a a9, se genera un nuevo a9.
    while(a9 % b9 === 0)
        a9 = enteroAleatorio(1,49);

    rat1_9 = [ent_9,1];//El entero se representa como una fracción con denominador 1
    rat2_9 = [a9,b9];

    document.getElementById("ent_9").innerHTML = ent_9;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_9").innerHTML = "+";
    document.getElementById("a_9").innerHTML = a9;
    document.getElementById("b_9").innerHTML = b9;

    // Calcula la suma de los racionales, que será positiva
    var resultado = sumaRacional(rat1_9,rat2_9);
    nr_9 = resultado[0];
    dr_9 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 9 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta09(){

    if (!activated[9]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_9 === 0){
        document.getElementById("intr_9").innerHTML = "0";
        document.getElementById("nr_9").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_9").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_9").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_9 === 1){
        document.getElementById("intr_9").innerHTML = Math.abs(nr_9);
        document.getElementById("nr_9").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_9").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_9 < 0)
            document.getElementById("signor_9").innerHTML = "- ";
        else
            document.getElementById("signor_9").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_9").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_9").innerHTML = Math.abs(nr_9);
        document.getElementById("dr_9").innerHTML = dr_9;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_9 < 0)
            document.getElementById("signor_9").innerHTML = "- ";
        else
        document.getElementById("signor_9").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 10
var nr_10, dr_10;

// Función para el Ejercicio 10
// Es similar al Ejercicio 9, pero en esta ocasión, se hará la suma de un entero negativo con 
// una fracción positiva. Por tal razón, se hace una operación de la forma -a + b/c, donde a, b y c son enteros positivos y c > 1.
// Se usará la variable ent_10 para el entero, y las variables a10 y b10 para la fracción.
function Ejercicio10(){

    activated[10] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_10","dr_10","signor_10","intr_10"]);
    
    //Genera los números del ejercicio
    var ent_10 = enteroAleatorio(1,49);
    var a10 = enteroAleatorio(1,49);
    var b10 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que la fracción no sea entera, esto es, 
    // que b10 no divida a a10. Si b10 divide a a10, se genera un nuevo a10.
    while(a10 % b10 === 0)
        a10 = enteroAleatorio(1,49);

    rat1_10 = [ent_10,1];//El entero se representa como una fracción con denominador 1 y numerador positivo
    rat2_10 = [a10,b10];

    document.getElementById("signo1_10").innerHTML = "- ";
    document.getElementById("ent_10").innerHTML = ent_10;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_10").innerHTML = "+";
    document.getElementById("a_10").innerHTML = a10;
    document.getElementById("b_10").innerHTML = b10;

    // Calcula la resta de la fracción con el entero
    var resultado = restaRacional(rat2_10, rat1_10);
    nr_10 = resultado[0];
    dr_10 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 10 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta10(){

    if (!activated[10]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_10 === 0){
        document.getElementById("intr_10").innerHTML = "0";
        document.getElementById("nr_10").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_10").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_10").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_10 === 1){
        document.getElementById("intr_10").innerHTML = Math.abs(nr_10);
        document.getElementById("nr_10").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_10").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_10 < 0)
            document.getElementById("signor_10").innerHTML = "- ";
        else
            document.getElementById("signor_10").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_10").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_10").innerHTML = Math.abs(nr_10);
        document.getElementById("dr_10").innerHTML = dr_10;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_10 < 0)
            document.getElementById("signor_10").innerHTML = "- ";
        else
        document.getElementById("signor_10").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 11
var nr_11, dr_11;

// Función para el Ejercicio 11
// Es similar al Ejercicio 9, pero en esta ocasión, se hará la suma de un entero positivo con 
// una fracción negativa. Por tal razón, se hace una operación de la forma a + (-b/c), donde a, b y c son enteros positivos y c > 1.
// Se usará la variable ent_11 para el entero, y las variables a11 y b11 para la fracción.
function Ejercicio11(){

    activated[11] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_11","dr_11","signor_11","intr_11"]);
    
    //Genera los números del ejercicio
    var ent_11 = enteroAleatorio(1,49);
    var a11 = enteroAleatorio(1,49);
    var b11 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que la fracción no sea entera, esto es, 
    // que b11 no divida a a11. Si b11 divide a a11, se genera un nuevo a11.
    while(a11 % b11 === 0)
        a11 = enteroAleatorio(1,49);

    rat1_11 = [ent_11,1];//El entero se representa como una fracción con denominador 1 y numerador positivo
    rat2_11 = [a11,b11];

    document.getElementById("ent_11").innerHTML = ent_11;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_11").innerHTML = "+";
    document.getElementById("signo1_11").innerHTML = "- ";
    document.getElementById("a_11").innerHTML = a11;
    document.getElementById("b_11").innerHTML = b11;

    // Al tratarse de una fracción negativa, debe estar rodeada por paréntesis para que se vea bien en la página
    document.getElementById("lp1_11").innerHTML = "(";
    document.getElementById("rp1_11").innerHTML = ")";

    // Calcula la resta de la fracción con el entero
    var resultado = restaRacional(rat1_11, rat2_11);
    nr_11 = resultado[0];
    dr_11 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 11 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta11(){

    if (!activated[11]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_11 === 0){
        document.getElementById("intr_11").innerHTML = "0";
        document.getElementById("nr_11").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_11").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_11").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_11 === 1){
        document.getElementById("intr_11").innerHTML = Math.abs(nr_11);
        document.getElementById("nr_11").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_11").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_11 < 0)
            document.getElementById("signor_11").innerHTML = "- ";
        else
            document.getElementById("signor_11").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_11").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_11").innerHTML = Math.abs(nr_11);
        document.getElementById("dr_11").innerHTML = dr_11;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_11 < 0)
            document.getElementById("signor_11").innerHTML = "- ";
        else
        document.getElementById("signor_11").innerHTML = "&ZeroWidthSpace;";
    }
}

// Variables globales para el Ejercicio 12
var nr_12, dr_12;

// Función para el Ejercicio 12
// Es similar al Ejercicio 10, pero en esta ocasión, se hará la suma de un entero negativo con 
// una fracción negativa. Por tal razón, se hace una operación de la forma -a + (-b/c), donde a, b y c son enteros positivos y c > 1.
// Se usará la variable ent_12 para el entero, y las variables a12 y b12 para la fracción.
function Ejercicio12(){

    activated[12] = true;
    //Borra el las respuestas del ejercicio anterior
    limpiarRespuestas(["nr_12","dr_12","signor_12","intr_12"]);
    
    //Genera los números del ejercicio
    var ent_12 = enteroAleatorio(1,49);
    var a12 = enteroAleatorio(1,49);
    var b12 = enteroAleatorio(2,47);//Denominador mayor que 1

    // Debe asegurarse que que la fracción no sea entera, esto es, 
    // que b12 no divida a a12. Si b12 divide a a12, se genera un nuevo a12.
    while(a12 % b12 === 0)
        a12 = enteroAleatorio(1,49);

    rat1_12 = [ent_12,1];//El entero se representa como una fracción con denominador 1 y numerador positivo
    rat2_12 = [a12,b12];

    document.getElementById("signo1_12").innerHTML = "- ";
    document.getElementById("ent_12").innerHTML = ent_12;

    // El signo menos debe tener un espacio para que el ejercicio se vea bien en la página
    document.getElementById("op1_12").innerHTML = "+";
    document.getElementById("signo2_12").innerHTML = "- ";
    document.getElementById("a_12").innerHTML = a12;
    document.getElementById("b_12").innerHTML = b12;

    // Al tratarse de una fracción negativa, debe estar rodeada por paréntesis para que se vea bien en la página
    document.getElementById("lp1_12").innerHTML = "(";
    document.getElementById("rp1_12").innerHTML = ")";

    // Calcula la suma de la fracción con el entero
    var resultado = sumaRacional(rat1_12, rat2_12);
    nr_12 = -resultado[0];
    dr_12 = resultado[1];
}

// Función para escribir la respuesta del Ejercicio 12 en forma de fracción, no en forma de entero + fracción.
// La función se encarga de mostrar el signo, y el entero o la fracción, según corresponda.
// Prácticamente es la misma función que Respuesta01, pero con los ids de los elementos cambiados.
function Respuesta12(){

    if (!activated[12]) return;
    // Si la respuesta es 0, simplemente pone cero
    if(nr_12 === 0){
        document.getElementById("intr_12").innerHTML = "0";
        document.getElementById("nr_12").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_12").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("signor_12").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(dr_12 === 1){
        document.getElementById("intr_12").innerHTML = Math.abs(nr_12);
        document.getElementById("nr_12").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("dr_12").innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien en la página
        if(nr_12 < 0)
            document.getElementById("signor_12").innerHTML = "- ";
        else
            document.getElementById("signor_12").innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById("intr_12").innerHTML = "&ZeroWidthSpace;";
        document.getElementById("nr_12").innerHTML = Math.abs(nr_12);
        document.getElementById("dr_12").innerHTML = dr_12;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(nr_12 < 0)
            document.getElementById("signor_12").innerHTML = "- ";
        else
        document.getElementById("signor_12").innerHTML = "&ZeroWidthSpace;";
    }
}
