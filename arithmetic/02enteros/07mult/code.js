var a1;
var b1;

var a2;
var b2;

var a3;
var b3;

var a4;
var b4;

var a5;
var b5;
var c5;

var a6;
var b6;
var c6;

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

	
	function Ejercicio1()
	{

    activated[1] = true;
		document.getElementById("r1").innerHTML = "";
		
		a1 = enteroAleatorio(0,15);
		b1 = enteroAleatorio(0,15);
		document.getElementById("a1").innerHTML = a1;
		document.getElementById("op1").innerHTML = "&sdot;";
		document.getElementById("b1").innerHTML = b1;		
	}
	
	function Respuesta1()
	{

    if (!activated[1]) return;
		document.getElementById("r1").innerHTML = a1 * b1;
	}

	function Ejercicio2()
	{

    activated[2] = true;
		document.getElementById("r2").innerHTML = "";
		
		a2 = enteroAleatorio(0,15);
		b2 = enteroAleatorio(1,15);
		document.getElementById("a2").innerHTML = a2;
		document.getElementById("op21").innerHTML = "&sdot;";
		document.getElementById("pl2").innerHTML = "(";
		document.getElementById("op22").innerHTML = "-";
		document.getElementById("b2").innerHTML = b2;
		document.getElementById("pr2").innerHTML = ")";		
	}
	
	function Respuesta2()
	{

    if (!activated[2]) return;
		document.getElementById("r2").innerHTML = a2 * (-1) *  b2;
	}
	
	function Ejercicio3()
	{

    activated[3] = true;
		document.getElementById("r3").innerHTML = "";
		
		a3 = enteroAleatorio(1,15);
		b3 = enteroAleatorio(0,15);
		document.getElementById("op31").innerHTML = "-";
		document.getElementById("a3").innerHTML = a3;
		document.getElementById("op32").innerHTML = "&sdot;";
		document.getElementById("b3").innerHTML = b3;				
	}
	
	function Respuesta3()
	{

    if (!activated[3]) return;
		document.getElementById("r3").innerHTML = (-1)* a3 * b3;
	}
	
	function Ejercicio4()
	{

    activated[4] = true;
		document.getElementById("r4").innerHTML = "";
		
		a4 = enteroAleatorio(1,15);
		b4 = enteroAleatorio(1,15);
		document.getElementById("op41").innerHTML = "-";
		document.getElementById("a4").innerHTML = a4;
		document.getElementById("op42").innerHTML = "&sdot;";
		document.getElementById("pl4").innerHTML = "(";
		document.getElementById("op43").innerHTML = "-";
		document.getElementById("b4").innerHTML = b4;
		document.getElementById("pr4").innerHTML = ")";				
	}
	
	function Respuesta4()
	{

    if (!activated[4]) return;
		document.getElementById("r4").innerHTML = a4 * b4;
	}
	
	function Ejercicio5()
	{

    activated[5] = true;
		document.getElementById("r5").innerHTML = "";
		
		a5 = enteroAleatorio(1,9);
		b5 = enteroAleatorio(1,9);
		c5 = enteroAleatorio(1,9);
		document.getElementById("a5").innerHTML = a5;
		document.getElementById("op51").innerHTML = "&sdot;";
		document.getElementById("b5").innerHTML = b5;
		document.getElementById("op52").innerHTML = "&sdot;";
		document.getElementById("c5").innerHTML = c5;				
	}
	
	function Respuesta5()
	{

    if (!activated[5]) return;
		document.getElementById("r5").innerHTML =a5 * b5 * c5;
	}
	
	function Ejercicio6()
	{

    activated[6] = true;
		document.getElementById("r6").innerHTML = "";
		
		a6 = enteroAleatorio(1,9);
		b6 = enteroAleatorio(1,9);
		c6 = enteroAleatorio(1,9);
		document.getElementById("a6").innerHTML = a6;
		document.getElementById("op61").innerHTML = "&sdot;";
		document.getElementById("pl6").innerHTML = "(";
		document.getElementById("op62").innerHTML = "-";
		document.getElementById("b6").innerHTML = b6;
		document.getElementById("pr6").innerHTML = ")";
		document.getElementById("op63").innerHTML = "&sdot;";
		document.getElementById("c6").innerHTML = c6;				
	}
	
	function Respuesta6()
	{

    if (!activated[6]) return;
		document.getElementById("r6").innerHTML = (-1)* a6 * b6 * c6;
	}
	
	function Ejercicio7()
	{

    activated[7] = true;
		document.getElementById("r7").innerHTML = "";
		
		a7 = enteroAleatorio(1,9);
		b7 = enteroAleatorio(1,9);
		c7 = enteroAleatorio(1,9);
		document.getElementById("a7").innerHTML = a7;
		document.getElementById("op71").innerHTML = "&sdot;";
		document.getElementById("pl71").innerHTML = "(";
		document.getElementById("op72").innerHTML = "-";
		document.getElementById("b7").innerHTML = b7;
		document.getElementById("pr71").innerHTML = ")";
		document.getElementById("op73").innerHTML = "&sdot;";
		document.getElementById("pl72").innerHTML = "(";
		document.getElementById("op74").innerHTML = "-";
		document.getElementById("c7").innerHTML = c7;
		document.getElementById("pr72").innerHTML = ")";
	}
	
	function Respuesta7()
	{

    if (!activated[7]) return;
		document.getElementById("r7").innerHTML = a7 * b7 * c7;
	}
