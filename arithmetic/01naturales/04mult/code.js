//Variables globales para los ejercicios de multiplicacion

//Para el segundo sumando de las tablas
const factor = [0,0,0,0,0,0,0,0,0,0]; //Valor del factor en la tabla correspondiente
const respuesta = [0,0,0,0,0,0,0,0,0,0]; //Respuesta de la tabla correspondiente
const etiqueta1 = ["s1_0","s1_1","s1_2","s1_3","s1_4","s1_5","s1_6","s1_7","s1_8","s1_9"];//Etiqueta en multiplicacion.html para el valor en la tabla
const etiqueta2 = ["s2_0","s2_1","s2_2","s2_3","s2_4","s2_5","s2_6","s2_7","s2_8","s2_9"];//Etiqueta para el factor en la tabla
const etiqueta_op=["op_0","op_1","op_2","op_3","op_4","op_5","op_6","op_7","op_8","op_9"];//Etiqueta para el operador en cada tabla
const etiqueta_rs=["r_0","r_1","r_2","r_3","r_4","r_5","r_6","r_7","r_8","r_9"];//Etiqueta para la respuesta en cada tabla

var s1_10,s2_10,r_10;
var s1_11,s2_11,r_11;
var s1_12,s2_12,s3_12,r_12;
var activated = [];


 // Para generar numeros enteros aleatorios
	function enteroAleatorio(a,b)
		/* Funcion para construir un entero aleatorio entre a y b*/
		{
			var x = a + Math.floor((b-a+1)*Math.random());
			return x;
		}

	function EjercicioTabla(a)
		{
		activated[a] = true;
		//Borra la respuesta del ejercicio anterior
		document.getElementById(etiqueta_rs[a]).innerHTML = "";
		
		//Genera los parametros del ejercicio
		factor[a] = enteroAleatorio(0,9);
		
		//Escribe las expresiones matemáticas del ejercicio		
		document.getElementById(etiqueta1[a]).innerHTML = a;
		document.getElementById(etiqueta_op[a]).innerHTML = "&middot;";
		document.getElementById(etiqueta2[a]).innerHTML = factor[a];		
	}
	function RespuestaTabla(a)
	{
		if (!activated[a]) return;
		// Calcula la respuesta
		respuesta[a] = a * factor[a];
			
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById(etiqueta_rs[a]).innerHTML = respuesta[a];
		}
	
	function Ejercicio10()
		//Multiplicacion de un número de dos digitos con un numero de un digito
		{
		activated[10] = true;
		//Borra el ejercicio anterior
		document.getElementById("r_10").innerHTML = "";
		
		//Genera los parametros del ejercicio
		s1_10 = enteroAleatorio(10,50);
		s2_10 = enteroAleatorio(0,9);
		
		//Escribe las expresiones matemáticas del ejercicio		
		document.getElementById("s1_10").innerHTML = s1_10;
		document.getElementById("op_10").innerHTML = "&middot;";
		document.getElementById("s2_10").innerHTML = s2_10;	
	}
	function Respuesta10()
	{
		if (!activated[10]) return;
		r_10 = s1_10 * s2_10;
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById("r_10").innerHTML = r_10;
		}
		
	function Ejercicio11()
		//Multiplicacion de un numero de tres digitos con uno de un digito
		{
		activated[11] = true;
		//Borra el ejercicio anterior
		document.getElementById("r_11").innerHTML = "";
		
		//Genera los parametros del ejercicio
		s1_11 = enteroAleatorio(100,500);
		s2_11 = enteroAleatorio(0,9);
		
		//Escribe las expresiones matemáticas del ejercicio		
		document.getElementById("s1_11").innerHTML = s1_11;
		document.getElementById("op_11").innerHTML = "&middot;";
		document.getElementById("s2_11").innerHTML = s2_11;	
	}
	function Respuesta11()
	{
		if (!activated[11]) return;
		r_11 = s1_11 * s2_11;
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById("r_11").innerHTML = r_11;
		}
	
	function Ejercicio12()
		//Multiplicacion de tres números de un digitos
		{
		activated[12] = true;
			//Genera los parametros del ejercicio
			s1_12 = enteroAleatorio(0,9);
			s2_12 = enteroAleatorio(0,9);
			s3_12 = enteroAleatorio(0,9);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("s1_12").innerHTML = s1_12;
			document.getElementById("op1_12").innerHTML = "&middot;";
			document.getElementById("s2_12").innerHTML = s2_12;	
			document.getElementById("op2_12").innerHTML = "&middot;";
			document.getElementById("s3_12").innerHTML = s3_12;
		}
	function Respuesta12()
		{
		if (!activated[12]) return;
			
			//Escribe las expresiones matematicas de la respuestas
			r_12 = s1_12 * s2_12 * s3_12;
			document.getElementById("r_12").innerHTML = r_12;
		}