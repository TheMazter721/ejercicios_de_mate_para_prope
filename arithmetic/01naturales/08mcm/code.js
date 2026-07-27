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

var activated = [];
// Para generar números enteros aleatorios
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

// Ejercicio 1
function Ejercicio01(){

        activated[1] = true;
    limpiarRespuestas(["m1_1", "r_1"]);
    n_1 = enteroAleatorio(2, 7);
    document.getElementById("n_1").innerHTML = n_1;
}

function Respuesta01(){

        if (!activated[1]) return;
    if(typeof n_1 === 'undefined')
        return;
    var multiplos = primerosMultiplos(n_1, 6);
    document.getElementById("m1_1").innerHTML = "Los primeros 6 múltiplos de " + n_1 + " son:";
    document.getElementById("r_1").innerHTML = multiplos.join(", ");
}

// Ejercicio 2
function Ejercicio02(){

        activated[2] = true;
    limpiarRespuestas(["m1_2", "r1_2", "m2_2", "r2_2", "m3_2", "r3_2"]);
    n1_2 = enteroAleatorio(2, 5);
    n2_2 = enteroAleatorio(2, 5);
    while(n2_2 === n1_2)
        n2_2 = enteroAleatorio(2, 5);
    document.getElementById("n1_2").innerHTML = n1_2;
    document.getElementById("n2_2").innerHTML = n2_2;
	document.getElementById("comma_2").innerHTML = ", ";
}

function Respuesta02(){

        if (!activated[2]) return;
    if(typeof n1_2 === 'undefined' || typeof n2_2 === 'undefined')
        return;
    var multiplos1 = primerosMultiplos(n1_2, 6);
    var multiplos2 = primerosMultiplos(n2_2, 6);
    common_2 = primerMultiploComun(n1_2, n2_2, 6);
    document.getElementById("m1_2").innerHTML = "Múltiplos de " + n1_2 + ": ";
    document.getElementById("r1_2").innerHTML = multiplos1.join(", ");
    document.getElementById("m2_2").innerHTML = "Múltiplos de " + n2_2 + ": ";
    document.getElementById("r2_2").innerHTML = multiplos2.join(", ");
    document.getElementById("m3_2").innerHTML = "Primer múltiplo común: ";
    document.getElementById("r3_2").innerHTML = common_2;
}

// Ejercicio 3
function Ejercicio03(){

        activated[3] = true;
    limpiarRespuestas(["m1_3", "r_3"]);
    n1_3 = enteroAleatorio(1, 3);
    n2_3 = enteroAleatorio(1, 3);
    n3_3 = enteroAleatorio(1, 3);
    n4_3 = enteroAleatorio(1, 3);
    document.getElementById("e1n1_3").innerHTML = n1_3 === 1 ? "" : n1_3;
    document.getElementById("e2n1_3").innerHTML = n2_3 === 1 ? "" : n2_3;
    document.getElementById("e1n2_3").innerHTML = n3_3 === 1 ? "" : n3_3;
    document.getElementById("e2n2_3").innerHTML = n4_3 === 1 ? "" : n4_3;

	// Las constantes c1n1_3 y c1n2_3 se usan para mostrar el número 2 
	// en la factorización, mientras que c2n1_3 y c2n2_3 se usan para 
	// mostrar el número 3. Esto es
	document.getElementById("c1n1_3").innerHTML = "2";
	document.getElementById("c1n2_3").innerHTML = "2";
	document.getElementById("c2n1_3").innerHTML = "3";
	document.getElementById("c2n2_3").innerHTML = "3";

	// Los math objects operator1_3 y operator2_3 son puntos 
	// para mostrar la operación de multiplicación entre los 
	// factores primos.
	document.getElementById("operator1_3").innerHTML = "·";
	document.getElementById("operator2_3").innerHTML = "·";

	// comma_3 es para la coma
	document.getElementById("comma_3").innerHTML = ", ";
}

function Respuesta03(){

        if (!activated[3]) return;
    if(typeof n1_3 === 'undefined' || typeof n2_3 === 'undefined' || typeof n3_3 === 'undefined' || typeof n4_3 === 'undefined')
        return;
    var exp2 = Math.max(n1_3, n3_3);
    var exp3 = Math.max(n2_3, n4_3);
    m_3 = Math.pow(2, exp2) * Math.pow(3, exp3);
    document.getElementById("m1_3").innerHTML = "El mcm es: ";
    document.getElementById("r_3").innerHTML = m_3;
}

// Ejercicio 4
function Ejercicio04(){

        activated[4] = true;
    limpiarRespuestas(["m1_4", "f1r_4", "e1r_4", "op1r_4", "f2r_4", "e2r_4", "op2r_4", "f3r_4", "e3r_4", "op3r_4", "f4r_4", "e4r_4"]);
    var primosElegidos = escogerPrimosDistintos(4);
    p1_4 = primosElegidos[0];
    p2_4 = primosElegidos[1];
    p3_4 = primosElegidos[2];
    p4_4 = primosElegidos[3];
    pow14_4 = enteroAleatorio(1, 3);
    pow24_4 = enteroAleatorio(1, 3);
    pow34_4 = enteroAleatorio(1, 3);
    pow44_4 = enteroAleatorio(1, 3);
    pow54_4 = enteroAleatorio(1, 3);
    pow64_4 = enteroAleatorio(1, 3);
    document.getElementById("f1n1_4").innerHTML = p1_4;
    document.getElementById("e1n1_4").innerHTML = pow14_4 === 1 ? "" : pow14_4;
    document.getElementById("f2n1_4").innerHTML = p2_4;
    document.getElementById("e2n1_4").innerHTML = pow24_4 === 1 ? "" : pow24_4;
    document.getElementById("f3n1_4").innerHTML = p3_4;
    document.getElementById("e3n1_4").innerHTML = pow34_4 === 1 ? "" : pow34_4;
    document.getElementById("f1n2_4").innerHTML = p1_4;
    document.getElementById("e1n2_4").innerHTML = pow44_4 === 1 ? "" : pow44_4;
    document.getElementById("f2n2_4").innerHTML = p2_4;
    document.getElementById("e2n2_4").innerHTML = pow54_4 === 1 ? "" : pow54_4;
    document.getElementById("f3n2_4").innerHTML = p4_4;
    document.getElementById("e3n2_4").innerHTML = pow64_4 === 1 ? "" : pow64_4;

	// Muestra los puntos de multiplicación entre factores primos
	// para los IDs op1n1_4, op2n1_4, op1n2_4, op2n2_4
	// utilizando la función mostrarPuntos, pasándole 
	// todos los nombres en un arreglo
	var idsPuntos = ["op1n1_4", "op2n1_4", "op1n2_4", "op2n2_4"];
	mostrarPuntos(idsPuntos);

	// También muestra la coma en comma_4
	document.getElementById("comma_4").innerHTML = ", ";
	
}

function Respuesta04(){

        if (!activated[4]) return;
    if(typeof p1_4 === 'undefined')
        return;
    var exp1 = Math.max(pow14_4, pow44_4);
    var exp2 = Math.max(pow24_4, pow54_4);
    var exp3 = pow34_4;
    var exp4 = pow64_4;
    document.getElementById("m1_4").innerHTML = "El mcm en forma factorizada es:";
    document.getElementById("f1r_4").innerHTML = p1_4;
    document.getElementById("e1r_4").innerHTML = exp1 === 1 ? "" : exp1;
    document.getElementById("op1r_4").innerHTML = "·";
    document.getElementById("f2r_4").innerHTML = p2_4;
    document.getElementById("e2r_4").innerHTML = exp2 === 1 ? "" : exp2;
    document.getElementById("op2r_4").innerHTML = "·";
    document.getElementById("f3r_4").innerHTML = p3_4;
    document.getElementById("e3r_4").innerHTML = exp3 === 1 ? "" : exp3;
    document.getElementById("op3r_4").innerHTML = "·";
    document.getElementById("f4r_4").innerHTML = p4_4;
    document.getElementById("e4r_4").innerHTML = exp4 === 1 ? "" : exp4;
}

// Ejercicio 5
function Ejercicio05(){

        activated[5] = true;
    limpiarRespuestas(["m1_5", "r_5"]);
    var primosElegidos = escogerPrimosDistintos(4);
    p1_5 = primosElegidos[0];
    p2_5 = primosElegidos[1];
    p3_5 = primosElegidos[2];
    p4_5 = primosElegidos[3];
    n1_5 = enteroAleatorio(0, 2);
    n2_5 = enteroAleatorio(0, 2);
    n3_5 = enteroAleatorio(0, 2);
    n4_5 = enteroAleatorio(0, 2);
    n5_5 = enteroAleatorio(0, 2);
    n6_5 = enteroAleatorio(0, 2);
    n7_5 = enteroAleatorio(0, 2);
    n8_5 = enteroAleatorio(0, 2);
    var num1 = Math.pow(p1_5, n1_5) * Math.pow(p2_5, n2_5) * Math.pow(p3_5, n3_5) * Math.pow(p4_5, n4_5);
    var num2 = Math.pow(p1_5, n5_5) * Math.pow(p2_5, n6_5) * Math.pow(p3_5, n7_5) * Math.pow(p4_5, n8_5);
    document.getElementById("n1_5").innerHTML = num1;
    document.getElementById("n2_5").innerHTML = num2;

	// Agrega la coma en comma_5 
	document.getElementById("comma_5").innerHTML = ", ";
}

function Respuesta05(){

        if (!activated[5]) return;
    if(typeof p1_5 === 'undefined')
        return;
    var exp1 = Math.max(n1_5, n5_5);
    var exp2 = Math.max(n2_5, n6_5);
    var exp3 = Math.max(n3_5, n7_5);
    var exp4 = Math.max(n4_5, n8_5);
    m_5 = Math.pow(p1_5, exp1) * Math.pow(p2_5, exp2) * Math.pow(p3_5, exp3) * Math.pow(p4_5, exp4);
    document.getElementById("m1_5").innerHTML = "El mcm es:";
    document.getElementById("r_5").innerHTML = m_5;
}

// Ejercicio 6
function Ejercicio06(){

        activated[6] = true;
    limpiarRespuestas(["m1_6", "r_6", "m2_6", "r2_6"]);
    var primosElegidos = escogerPrimosDistintos(4);
    p1_6 = primosElegidos[0];
    p2_6 = primosElegidos[1];
    p3_6 = primosElegidos[2];
    p4_6 = primosElegidos[3];
    n1_6 = enteroAleatorio(0, 2);
    n2_6 = enteroAleatorio(0, 2);
    n3_6 = enteroAleatorio(0, 2);
    n4_6 = enteroAleatorio(0, 2);
    n5_6 = enteroAleatorio(0, 2);
    n6_6 = enteroAleatorio(0, 2);
    n7_6 = enteroAleatorio(0, 2);
    n8_6 = enteroAleatorio(0, 2);
    var num1 = Math.pow(p1_6, n1_6) * Math.pow(p2_6, n2_6) * Math.pow(p3_6, n3_6) * Math.pow(p4_6, n4_6);
    var num2 = Math.pow(p1_6, n5_6) * Math.pow(p2_6, n6_6) * Math.pow(p3_6, n7_6) * Math.pow(p4_6, n8_6);
    document.getElementById("n1_6").innerHTML = num1;
    document.getElementById("n2_6").innerHTML = num2;
    document.getElementById("comma_6").innerHTML = ", ";
}

function Respuesta06(){

        if (!activated[6]) return;
    if(typeof p1_6 === 'undefined')
        return;
    var exp1m = Math.min(n1_6, n5_6);
    var exp2m = Math.min(n2_6, n6_6);
    var exp3m = Math.min(n3_6, n7_6);
    var exp4m = Math.min(n4_6, n8_6);
    m_6 = Math.pow(p1_6, exp1m) * Math.pow(p2_6, exp2m) * Math.pow(p3_6, exp3m) * Math.pow(p4_6, exp4m);
    var exp1l = Math.max(n1_6, n5_6);
    var exp2l = Math.max(n2_6, n6_6);
    var exp3l = Math.max(n3_6, n7_6);
    var exp4l = Math.max(n4_6, n8_6);
    l_6 = Math.pow(p1_6, exp1l) * Math.pow(p2_6, exp2l) * Math.pow(p3_6, exp3l) * Math.pow(p4_6, exp4l);
    document.getElementById("m1_6").innerHTML = "El MCD es:";
    document.getElementById("r_6").innerHTML = m_6;
    document.getElementById("m2_6").innerHTML = "El mcm es:";
    document.getElementById("r2_6").innerHTML = l_6;
}
