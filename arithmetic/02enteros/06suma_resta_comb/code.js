var a1;
var b1;
var c1;

var a2;
var b2;
var c2;

var a3;
var b3;
var c3;

var a4;
var b4;
var c4;

var a5;
var b5;
var c5;

var a6;
var b6;
var c6;

var a7;
var b7;
var c7;
var d7;

var a8;
var b8;
var c8;
var d8;



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
		a1 = enteroAleatorio(0,20);
		b1 = enteroAleatorio(0,20);
		c1 = enteroAleatorio(0,20);
		document.getElementById("a1").innerHTML = a1;
		document.getElementById("op11").innerHTML = "+";
		document.getElementById("b1").innerHTML = b1;	
		document.getElementById("op12").innerHTML = "-";
		document.getElementById("c1").innerHTML = c1;
		
	}
	
	function Respuesta1()
	{

    if (!activated[1]) return;
		document.getElementById("r1").innerHTML = a1 + b1 - c1;
	}

	function Ejercicio2()
	{

    activated[2] = true;
		document.getElementById("r2").innerHTML = "";
		a2 = enteroAleatorio(0,20);
		b2 = enteroAleatorio(0,20);
		c2 = enteroAleatorio(0,20);
		
		document.getElementById("a2").innerHTML = a2;
		document.getElementById("op21").innerHTML = "-";
		document.getElementById("b2").innerHTML = b2;
		document.getElementById("op22").innerHTML = "+";
		document.getElementById("c2").innerHTML = c2;		
	}
	
	function Respuesta2()
	{

    if (!activated[2]) return;
		document.getElementById("r2").innerHTML = a2 - b2 + c2;
	}
	
	function Ejercicio3()
	{

    activated[3] = true;
		document.getElementById("r3").innerHTML = "";
		a3 = enteroAleatorio(0,20);
		b3 = enteroAleatorio(0,20);
		c3 = enteroAleatorio(0,20);
		document.getElementById("a3").innerHTML = a3;
		document.getElementById("op31").innerHTML = "-";
		document.getElementById("b3").innerHTML = b3;
		document.getElementById("op32").innerHTML = "-";
		document.getElementById("c3").innerHTML = c3;				
	}
	
	function Respuesta3()
	{

    if (!activated[3]) return;
		document.getElementById("r3").innerHTML = a3 - b3 - c3;
	}
	
	function Ejercicio4()
	{

    activated[4] = true;
		document.getElementById("r4").innerHTML = "";
		a4 = enteroAleatorio(1,20);
		b4 = enteroAleatorio(0,20);
		c4 = enteroAleatorio(0,20);
		document.getElementById("op41").innerHTML = "-";
		document.getElementById("a4").innerHTML = a4;
		document.getElementById("op42").innerHTML = "+";
		document.getElementById("b4").innerHTML = b4;
		document.getElementById("op43").innerHTML = "-";
		document.getElementById("c4").innerHTML = c4;			
	}
	
	function Respuesta4()
	{

    if (!activated[4]) return;
		document.getElementById("r4").innerHTML = b4 - a4 - c4;
	}
	
	function Ejercicio5()
	{

    activated[5] = true;
		document.getElementById("r5").innerHTML = "";
		a5 = enteroAleatorio(1,20);
		b5 = enteroAleatorio(1,20);
		c5 = enteroAleatorio(1,20);
		document.getElementById("a5").innerHTML = a5;
		document.getElementById("op51").innerHTML = "-";
		document.getElementById("pl5").innerHTML = "(";
		document.getElementById("op52").innerHTML = "-";
		document.getElementById("b5").innerHTML = b5;
		document.getElementById("pr5").innerHTML = ")";
		document.getElementById("op53").innerHTML = "-";
		document.getElementById("c5").innerHTML = c5;				
	}
	
	function Respuesta5()
	{

    if (!activated[5]) return;
		document.getElementById("r5").innerHTML = a5 + b5 -c5;
	}
	
	function Ejercicio6()
	{

    activated[6] = true;
		document.getElementById("r6").innerHTML = "";
		a6 = enteroAleatorio(1,20);
		b6 = enteroAleatorio(1,20);
		c6 = enteroAleatorio(1,20);
		document.getElementById("op61").innerHTML = "-";
		document.getElementById("a6").innerHTML = a6;
		document.getElementById("op62").innerHTML = "+";
		document.getElementById("pl6").innerHTML = "(";
		document.getElementById("op63").innerHTML = "-";
		document.getElementById("b6").innerHTML = b6;
		document.getElementById("pr6").innerHTML = ")";
		document.getElementById("op64").innerHTML = "-";
		document.getElementById("c6").innerHTML = c6;				
	}
	
	function Respuesta6()
	{

    if (!activated[6]) return;
		document.getElementById("r6").innerHTML = (-1)*(a6 + b6 + c6);
	}
	
	function Ejercicio7()
	{

    activated[7] = true;
		document.getElementById("r7").innerHTML = "";
		a7 = enteroAleatorio(1,20);
		b7 = enteroAleatorio(1,20);
		c7 = enteroAleatorio(1,20);
		d7 = enteroAleatorio(1,20);
		document.getElementById("a7").innerHTML = a7;
		document.getElementById("op71").innerHTML = "+";
		document.getElementById("pl71").innerHTML = "(";
		document.getElementById("op72").innerHTML = "-";
		document.getElementById("b7").innerHTML = b7;
		document.getElementById("pr71").innerHTML = ")";
		document.getElementById("op73").innerHTML = "-";
		document.getElementById("pl72").innerHTML = "(";
		document.getElementById("op74").innerHTML = "-";
		document.getElementById("c7").innerHTML = c7;
		document.getElementById("pr72").innerHTML = ")";
		document.getElementById("op75").innerHTML = "+";
		document.getElementById("d7").innerHTML = d7;		
	}
	
	function Respuesta7()
	{

    if (!activated[7]) return;
		document.getElementById("r7").innerHTML =a7 - b7 + c7 + d7;
	}
	
	function Ejercicio8()
	{

    activated[8] = true;
		document.getElementById("r8").innerHTML = "";
		a8 = enteroAleatorio(1,20);
		b8 = enteroAleatorio(1,20);
		c8 = enteroAleatorio(1,20);
		d8 = enteroAleatorio(1,20);
		document.getElementById("op81").innerHTML = "-";
		document.getElementById("a8").innerHTML = a8;
		document.getElementById("op82").innerHTML = "-";
		document.getElementById("b8").innerHTML = b8;
		document.getElementById("op83").innerHTML = "+";
		document.getElementById("pl81").innerHTML = "(";
		document.getElementById("op84").innerHTML = "-";
		document.getElementById("c8").innerHTML = c8;
		document.getElementById("pr81").innerHTML = ")";
		document.getElementById("op85").innerHTML = "-";
		document.getElementById("pl82").innerHTML = "(";
		document.getElementById("op86").innerHTML = "-";
		document.getElementById("d8").innerHTML = d8;
		document.getElementById("pr82").innerHTML = ")";
	}
	
	function Respuesta8()
	{

    if (!activated[8]) return;
		document.getElementById("r8").innerHTML =d8 - c8 -b8 -a8;
	}
