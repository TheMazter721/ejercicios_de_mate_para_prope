var letras=["a","b","c","d","e","p","q","r","s","t","u","v","w","x","y","z"];

var l1,e11,e12;
var l2,e2;
var l3,e3;
var l4,e4;
var l5,e51,e52;
var l6,e6;
var l7,e7;
var l8,e81,e82;
var l91,l92,e9;
var l101,l102,e10;



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
		document.getElementById("l11").innerHTML = "";
		document.getElementById("e11").innerHTML = "";
		document.getElementById("l12").innerHTML = "";
		document.getElementById("e12").innerHTML = "";	
		document.getElementById("lr1").innerHTML = "";
		document.getElementById("er1").innerHTML = "";
		
		l1 = letras[enteroAleatorio(0,15)];
		e11 = enteroAleatorio(-15,15);
		while ((e11 == 1) || (e11 == 0))
			e11 = enteroAleatorio(-15,15);
		e12 = enteroAleatorio(-15,15);
		while (((e11 + e12) == 0) || ((e11 + e12) == 1) || (e12 == 1) || (e12 == 0))
			e12 = enteroAleatorio(-15,15);
		document.getElementById("l11").innerHTML = l1;
		document.getElementById("e11").innerHTML = e11;
		document.getElementById("l12").innerHTML = l1;
		document.getElementById("e12").innerHTML = e12;		
	}
	
	function Respuesta1()
	{

    if (!activated[1]) return;
		document.getElementById("lr1").innerHTML = l1;
		document.getElementById("er1").innerHTML = e11 + e12;
	}

	function Ejercicio2()
	{

    activated[2] = true;
		document.getElementById("l21").innerHTML = "";
		document.getElementById("e21").innerHTML = "";
		document.getElementById("l22").innerHTML = "";
		document.getElementById("e22").innerHTML = "";	
		document.getElementById("lr2").innerHTML = "";
				
		l2 = letras[enteroAleatorio(0,15)];
		e2 = enteroAleatorio(-15,15);
		while ((e2 == 1) || (e2 == 0))
			e2 = enteroAleatorio(-15,15);
		
		document.getElementById("l21").innerHTML = l2;
		document.getElementById("e21").innerHTML = e2;
		document.getElementById("l22").innerHTML = l2;
		document.getElementById("e22").innerHTML = 1 - e2;		
	}
	
	function Respuesta2()
	{

    if (!activated[2]) return;
		document.getElementById("lr2").innerHTML = l2;
	}
	
	function Ejercicio3()
	{

    activated[3] = true;
		document.getElementById("l31").innerHTML = "";
		document.getElementById("e31").innerHTML = "";
		document.getElementById("l32").innerHTML = "";
		document.getElementById("e32").innerHTML = "";	
		document.getElementById("lr3").innerHTML = "";
				
		l3 = letras[enteroAleatorio(0,15)];
		e3 = enteroAleatorio(-15,15);
		while ((e3 == 1) || (e3 == 0))
			e3 = enteroAleatorio(-15,15);
		
		document.getElementById("l31").innerHTML = l3;
		document.getElementById("e31").innerHTML = e3;
		document.getElementById("l32").innerHTML = l3;
		document.getElementById("e32").innerHTML = (-1)* e3;					
	}
	
	function Respuesta3()
	{

    if (!activated[3]) return;
		document.getElementById("lr3").innerHTML = 1;
	}
	
	function Ejercicio4()
	{

    activated[4] = true;
		document.getElementById("l41").innerHTML = "";
		document.getElementById("e41").innerHTML = "";
		document.getElementById("l42").innerHTML = "";
		document.getElementById("lr4").innerHTML = "";
		document.getElementById("er4").innerHTML = "";
				
		l4 = letras[enteroAleatorio(0,15)];
		e4 = enteroAleatorio(-15,15);
		while ((e4 == 1) || (e4 == 0) || (e4 == -1))
			e4 = enteroAleatorio(-15,15);
		
		document.getElementById("l41").innerHTML = l4;
		document.getElementById("e41").innerHTML = e4;
		document.getElementById("l42").innerHTML = l4;
	}
	
	function Respuesta4()
	{

    if (!activated[4]) return;
		document.getElementById("lr4").innerHTML = l4;
		document.getElementById("er4").innerHTML = e4 + 1;
	}
	
	function Ejercicio5()
	{

    activated[5] = true;
		document.getElementById("l51").innerHTML = "";
		document.getElementById("e51").innerHTML = "";
		document.getElementById("l52").innerHTML = "";
		document.getElementById("e52").innerHTML = "";	
		document.getElementById("lr5").innerHTML = "";
		document.getElementById("er5").innerHTML = "";
		
		l5 = letras[enteroAleatorio(0,15)];
		e51 = enteroAleatorio(-15,15);
		while ((e51 == 1) || (e51 == 0))
			e51 = enteroAleatorio(-15,15);
		e52 = enteroAleatorio(-15,15);
		while (((e51 - e52) == 0) || ((e51 - e52) == 1) || (e52 == 1) || (e52 == 0))
			e52 = enteroAleatorio(-15,15);
		document.getElementById("l51").innerHTML = l5;
		document.getElementById("e51").innerHTML = e51;
		document.getElementById("l52").innerHTML = l5;
		document.getElementById("e52").innerHTML = e52;					
	}
	
	function Respuesta5()
	{

    if (!activated[5]) return;
		document.getElementById("lr5").innerHTML = l5;
		document.getElementById("er5").innerHTML = e51 - e52;
	}
	
	function Ejercicio6()
	{

    activated[6] = true;
		document.getElementById("l61").innerHTML = "";
		document.getElementById("e61").innerHTML = "";
		document.getElementById("l62").innerHTML = "";
		document.getElementById("e62").innerHTML = "";	
		document.getElementById("lr6").innerHTML = "";
			
		l6 = letras[enteroAleatorio(0,15)];
		e6 = enteroAleatorio(-15,15);
		while ((e6 == 1) || (e6 == 0))
			e6 = enteroAleatorio(-15,15);
		
		document.getElementById("l61").innerHTML = l6;
		document.getElementById("e61").innerHTML = e6;
		document.getElementById("l62").innerHTML = l6;
		document.getElementById("e62").innerHTML = e6 - 1;				
	}
	
	function Respuesta6()
	{

    if (!activated[6]) return;
		document.getElementById("lr6").innerHTML = l6;
	}
	
	function Ejercicio7()
	{

    activated[7] = true;
		document.getElementById("l71").innerHTML = "";
		document.getElementById("e71").innerHTML = "";
		document.getElementById("l72").innerHTML = "";
		document.getElementById("e72").innerHTML = "";	
		document.getElementById("lr7").innerHTML = "";
			
		l7 = letras[enteroAleatorio(0,15)];
		e7 = enteroAleatorio(-15,15);
		while ((e7 == 1) || (e7 == 0))
			e7 = enteroAleatorio(-15,15);
		
		document.getElementById("l71").innerHTML = l7;
		document.getElementById("e71").innerHTML = e7;
		document.getElementById("l72").innerHTML = l7;
		document.getElementById("e72").innerHTML = e7;	
	}
	
	function Respuesta7()
	{

    if (!activated[7]) return;
		document.getElementById("lr7").innerHTML = 1;
	}
	
	function Ejercicio8()
	{

    activated[8] = true;
		document.getElementById("pl8").innerHTML = "";
		document.getElementById("l8").innerHTML = "";
		document.getElementById("e81").innerHTML = "";
		document.getElementById("pr8").innerHTML = "";
		document.getElementById("e82").innerHTML = "";	
		document.getElementById("lr8").innerHTML = "";
		document.getElementById("er8").innerHTML = "";
			
		l8 = letras[enteroAleatorio(0,15)];
		e81 = enteroAleatorio(-11,11);
		while ((e81 == 1) || (e81 == 0))
			e81 = enteroAleatorio(-11,11);
		e82 = enteroAleatorio(-11,11);
		while ((e82 == 1) || (e82 == 0))
			e81 = enteroAleatorio(-11,11);
		
		document.getElementById("pl8").innerHTML = "(";
		document.getElementById("l8").innerHTML = l8;
		document.getElementById("e81").innerHTML = e81;
		document.getElementById("pr8").innerHTML = ")";
		document.getElementById("e82").innerHTML = e82;	
	}
	
	function Respuesta8()
	{

    if (!activated[8]) return;
		document.getElementById("lr8").innerHTML = l8;
		document.getElementById("er8").innerHTML = e81*e82;
	}
	
	function Ejercicio9()
	{

    activated[9] = true;
		var num1,num2;
		
		document.getElementById("pl9").innerHTML = "";
		document.getElementById("l91").innerHTML = "";
		document.getElementById("l92").innerHTML = "";
		document.getElementById("pr9").innerHTML = "";
		document.getElementById("e9").innerHTML = "";	
		document.getElementById("lr91").innerHTML = "";
		document.getElementById("er91").innerHTML = "";
		document.getElementById("lr92").innerHTML = "";
		document.getElementById("er92").innerHTML = "";
		
		num1 = enteroAleatorio(0,15);
		l91 = letras[num1];
		
		num2 = enteroAleatorio(0,15);
		while (num2 == num1)
			num2 = enteroAleatorio(0,15);
		l92 = letras[num2];
		
		e9 = enteroAleatorio(-15,15);
		while ((e9 == 1) || (e9 == 0))
			e9 = enteroAleatorio(-15,15);
		
		document.getElementById("pl9").innerHTML = "(";
		document.getElementById("l91").innerHTML = l91;
		document.getElementById("l92").innerHTML = l92;
		document.getElementById("pr9").innerHTML = ")";
		document.getElementById("e9").innerHTML = e9;	
		
		
	}
	
	function Respuesta9()
	{

    if (!activated[9]) return;
		document.getElementById("lr91").innerHTML = l91;
		document.getElementById("er91").innerHTML = e9;
		document.getElementById("lr92").innerHTML = l92;
		document.getElementById("er92").innerHTML = e9;
	}
	
	function Ejercicio10()
	{

    activated[10] = true;
		var num1,num2;
		
		document.getElementById("pl10").innerHTML = "";
		document.getElementById("l101").innerHTML = "";
		document.getElementById("l102").innerHTML = "";
		document.getElementById("pr10").innerHTML = "";
		document.getElementById("e10").innerHTML = "";	
		document.getElementById("lr101").innerHTML = "";
		document.getElementById("er101").innerHTML = "";
		document.getElementById("lr102").innerHTML = "";
		document.getElementById("er102").innerHTML = "";
		
		num1 = enteroAleatorio(0,15);
		l101 = letras[num1];
		
		num2 = enteroAleatorio(0,15);
		while (num2 == num1)
			num2 = enteroAleatorio(0,15);
		l102 = letras[num2];
		
		e10 = enteroAleatorio(-15,15);
		while ((e10 == 1) || (e10 == 0))
			e10 = enteroAleatorio(-15,15);
		
		document.getElementById("pl10").innerHTML = "(";
		document.getElementById("l101").innerHTML = l101;
		document.getElementById("l102").innerHTML = l102;
		document.getElementById("pr10").innerHTML = ")";
		document.getElementById("e10").innerHTML = e10;	
		
		
	}
	
	function Respuesta10()
	{

    if (!activated[10]) return;
		document.getElementById("lr101").innerHTML = l101;
		document.getElementById("er101").innerHTML = e10;
		document.getElementById("lr102").innerHTML = l102;
		document.getElementById("er102").innerHTML = e10;
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
