//Variables globales para los ejercicios de resta

var r1_1,r2_1,r_1;
var r1_2,r2_2,r_2,t_2;
var r1_3,r2_3,r_3;
var activated = [];


 // Para generar numeros enteros aleatorios
	function enteroAleatorio(a,b)
		/* Funcion para construir un entero aleatorio entre a y b*/
		{
			var x = a + Math.floor((b-a+1)*Math.random());
			return x;
		}

	
	
	function Ejercicio1()
		//resta de dos numeros de un digito
		{
		activated[1] = true;
		//Borra el ejercicio anterior
		document.getElementById("r_1").innerHTML = "";
				
		//Genera los parametros del ejercicio
		r1_1 = enteroAleatorio(0,9);
		r2_1 = enteroAleatorio(0,9);
		
		//Escribe las expresiones matemáticas del ejercicio		
		document.getElementById("rs1_1").innerHTML = r1_1;
		document.getElementById("op_1").innerHTML = "-";
		document.getElementById("rs2_1").innerHTML = r2_1;	
	}
	function Respuesta1()
	{
		if (!activated[1]) return;
		// Calcula la respuesta
		r_1 = r1_1 - r2_1;

		//Escribe las expresiones matematicas de la respuestas
		if (r_1 < 0) 				
			document.getElementById("r_1").innerHTML = "El resultado no es un número natural";
		else
			document.getElementById("r_1").innerHTML = r_1;
	}
		
	function Ejercicio2()
		//Resta de un numero de un digito y uno de dos digitos
		{
		activated[2] = true;

		// Borra la respuesta del ejercicio anterior
		document.getElementById("r_2").innerHTML = "";

			//Genera los parametros del ejercicio
			r1_2 = enteroAleatorio(0,9);
			r2_2 = enteroAleatorio(0,99);
			
			if (enteroAleatorio(0,100) < 50)
			{
				t_2 = r1_2;
				r1_2 = r2_2;
				r2_2 = t_2;
				
			}
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("rs1_2").innerHTML = r1_2;
			document.getElementById("op_2").innerHTML = "-";
			document.getElementById("rs2_2").innerHTML = r2_2;	
		}
	function Respuesta2()
		{
		if (!activated[2]) return;
			
			//Escribe las expresiones matematicas de la respuestas
			// Calcula la respuesta
			r_2 = r1_2 - r2_2;

			//Escribe las expresiones matematicas de la respuestas
			if (r_2 < 0) 				
				document.getElementById("r_2").innerHTML = "El resultado no es un número natural";
			else
				document.getElementById("r_2").innerHTML = r_2;
		}	
	function Ejercicio3()
		//resta de dos números de dos dígitos
		{
		activated[3] = true;
		// Borra la respuesta del ejercicio anterior
		document.getElementById("r_3").innerHTML = "";
		
			//Genera los parametros del ejercicio
			r1_3 = enteroAleatorio(10,99);
			r2_3 = enteroAleatorio(10,99);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("rs1_3").innerHTML = r1_3;
			document.getElementById("op_3").innerHTML = "-";
			document.getElementById("rs2_3").innerHTML = r2_3;	
		}
	function Respuesta3()
		{
		if (!activated[3]) return;
			
			//Escribe las expresiones matematicas de la respuestas
			// Calcula la respuesta
			r_3 = r1_3 - r2_3;

			//Escribe las expresiones matematicas de la respuestas
			if (r_3 < 0) 				
				document.getElementById("r_3").innerHTML = "El resultado no es un número natural";
			else
				document.getElementById("r_3").innerHTML = r_3;
		}