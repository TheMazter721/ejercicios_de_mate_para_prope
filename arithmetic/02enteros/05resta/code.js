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

var a7;
var b7;
var c7;



var activated = [];
	function enteroAleatorio(a,b)
	/* Funcion para construir un entero aleatorio entre a y b*/
	{
		var x = a + Math.floor((b-a+1)*Math.random());
		return x;
	}
	
	function Ejercicio1()
	{

    activated[1] = true;
		document.getElementById("r1").innerHTML = "";
		a1 = enteroAleatorio(0,50);
		b1 = enteroAleatorio(0,50);
		document.getElementById("a1").innerHTML = a1;
		document.getElementById("op1").innerHTML = "-";
		document.getElementById("b1").innerHTML = b1;		
	}
	
	function Respuesta1()
	{

    if (!activated[1]) return;
		document.getElementById("r1").innerHTML = a1 - b1;
	}

	function Ejercicio2()
	{

    activated[2] = true;
		document.getElementById("r2").innerHTML = "";
		a2 = enteroAleatorio(0,50);
		b2 = enteroAleatorio(1,50);
		document.getElementById("a2").innerHTML = a2;
		document.getElementById("op21").innerHTML = "-";
		document.getElementById("pl2").innerHTML = "(";
		document.getElementById("op22").innerHTML = "-";
		document.getElementById("b2").innerHTML = b2;
		document.getElementById("pr2").innerHTML = ")";		
	}
	
	function Respuesta2()
	{

    if (!activated[2]) return;
		document.getElementById("r2").innerHTML = a2 + b2;
	}
	
	function Ejercicio3()
	{

    activated[3] = true;
		document.getElementById("r3").innerHTML = "";
		a3 = enteroAleatorio(1,50);
		b3 = enteroAleatorio(0,50);
		document.getElementById("op31").innerHTML = "-";
		document.getElementById("a3").innerHTML = a3;
		document.getElementById("op32").innerHTML = "-";
		document.getElementById("b3").innerHTML = b3;				
	}
	
	function Respuesta3()
	{

    if (!activated[3]) return;
		document.getElementById("r3").innerHTML = (-1)*(a3 + b3);
	}
	
	function Ejercicio4()
	{

    activated[4] = true;
		document.getElementById("r4").innerHTML = "";
		a4 = enteroAleatorio(1,50);
		b4 = enteroAleatorio(1,50);
		document.getElementById("op41").innerHTML = "-";
		document.getElementById("a4").innerHTML = a4;
		document.getElementById("op42").innerHTML = "-";
		document.getElementById("pl4").innerHTML = "(";
		document.getElementById("op43").innerHTML = "-";
		document.getElementById("b4").innerHTML = b4;
		document.getElementById("pr4").innerHTML = ")";				
	}
	
	function Respuesta4()
	{

    if (!activated[4]) return;
		document.getElementById("r4").innerHTML = b4 - a4;
	}
	
	
	
