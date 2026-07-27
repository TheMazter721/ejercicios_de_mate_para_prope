/* El siguiente arreglo, llamado activated,
se inicia vacío. Es una medida para que, al entrar
al Ejercicio n, se active el correspondiente elemento del arreglo activated poniéndolo como true.
En todas las funciones para las respuestas, si activated[n] no es true, entonces no se debe hacer nada. */
var activated = [];

//Variables globales para los ejercicios de orden entre dos números naturales
var n1_1,n2_1,nr1_1,nr2_1;
var n1_2,n2_2,nr1_2,nr2_2;
var n1_3,n2_3,nr1_3,nr2_3;
var n1_4,n2_4,nr1_4,nr2_4;
var n1_5,n2_5,nr1_5,nr2_5;
var n1_6,n2_6,nr1_6,nr2_6;


 // Para generar numeros enteros aleatorios
	function enteroAleatorio(a,b)
		/* Funcion para construir un entero aleatorio entre a y b*/
		{
			var x = a + Math.floor((b-a+1)*Math.random());
			return x;
		}

	
	
	function Ejercicio1()
		//Genera dos numeros aleatorios de un digito para compararlos usando el signo >
		{
			// Activa el ejercicio 1
			activated[1] = true;
			//Borra el ejercicio anterior
			document.getElementById("n1_1").innerHTML = "";
			document.getElementById("op1_1").innerHTML = "";
			document.getElementById("n2_1").innerHTML = "";
			document.getElementById("nr1_1").innerHTML = "";
			document.getElementById("op2_1").innerHTML = "";
			document.getElementById("nr2_1").innerHTML = "";
		
			//Genera los parametros del ejercicio
			n1_1 = enteroAleatorio(0,9);
			n2_1 = enteroAleatorio(0,9);
			while (n2_1 == n1_1)
				n2_1 = enteroAleatorio(0,9);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("n1_1").innerHTML = n1_1;
			document.getElementById("op1_1").innerHTML = ",";
			document.getElementById("n2_1").innerHTML = n2_1;	
		}
	function Respuesta1()
		{
			// Si el ejercicio 1 no ha sido activado, no hace nada
			if (!activated[1]) return;

			//Asigna los valores de las variables para la respuesta
			if (n1_1 > n2_1)
			{
				nr1_1 = n1_1;
				nr2_1 = n2_1;
			}
			else
			{
				nr1_1 = n2_1;
				nr2_1 = n1_1;
			}				
			
			//Escribe las expresiones matematicas de la respuesta
			document.getElementById("nr1_1").innerHTML = nr1_1;
			document.getElementById("op2_1").innerHTML = ">";
			document.getElementById("nr2_1").innerHTML = nr2_1;
		}
		
	function Ejercicio2()
		//Genera dos números aleatorios de dos dígitos para compararlos usando el signo >
		{
			// Activa el ejercicio 2
			activated[2] = true;

			//Borra el ejercicio anterior
			document.getElementById("n1_2").innerHTML = "";
			document.getElementById("op1_2").innerHTML = "";
			document.getElementById("n2_2").innerHTML = "";
			document.getElementById("nr1_2").innerHTML = "";
			document.getElementById("op2_2").innerHTML = "";
			document.getElementById("nr2_2").innerHTML = "";
		
			//Genera los parámetros del ejercicio
			n1_2 = enteroAleatorio(10,99);
			n2_2 = enteroAleatorio(10,99);
			while (n2_2 == n1_2)
				n2_2 = enteroAleatorio(10,99);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("n1_2").innerHTML = n1_2;
			document.getElementById("op1_2").innerHTML = ",";
			document.getElementById("n2_2").innerHTML = n2_2;	
		}
	function Respuesta2()
		{
			// Si el ejercicio 2 no ha sido activado, no hace nada
			if (!activated[2]) return;
			//Asigna los valores de las variables para la respuesta
			if (n1_2 > n2_2)
			{
				nr1_2 = n1_2;
				nr2_2 = n2_2;
			}
			else
			{
				nr1_2 = n2_2;
				nr2_2 = n1_2;
			}				
			
			//Escribe las expresiones matematicas de la respuesta
			document.getElementById("nr1_2").innerHTML = nr1_2;
			document.getElementById("op2_2").innerHTML = ">";
			document.getElementById("nr2_2").innerHTML = nr2_2;
		}
	
	function Ejercicio3()
		//Genera dos numeros aleatorios de tres dígitos para compararlos usando el signo >
		{
			// Activa el ejercicio 3
			activated[3] = true;
			//Borra el ejercicio anterior
			document.getElementById("n1_3").innerHTML = "";
			document.getElementById("op1_3").innerHTML = "";
			document.getElementById("n2_3").innerHTML = "";
			document.getElementById("nr1_3").innerHTML = "";
			document.getElementById("op2_3").innerHTML = "";
			document.getElementById("nr2_3").innerHTML = "";
		
			//Genera los parámetros del ejercicio
			n1_3 = enteroAleatorio(100,999);
			n2_3 = enteroAleatorio(100,999);
			while (n2_3 == n1_3)
				n2_3 = enteroAleatorio(100,999);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("n1_3").innerHTML = n1_3;
			document.getElementById("op1_3").innerHTML = ",";
			document.getElementById("n2_3").innerHTML = n2_3;	
		}
	function Respuesta3()
		{
			// Si el ejercicio 3 no ha sido activado, no hace nada
			if (!activated[3]) return;

			//Asigna los valores de las variables para la respuesta
			if (n1_3 > n2_3)
			{
				nr1_3 = n1_3;
				nr2_3 = n2_3;
			}
			else
			{
				nr1_3 = n2_3;
				nr2_3 = n1_3;
			}				
			
			//Escribe las expresiones matematicas de la respuesta
			document.getElementById("nr1_3").innerHTML = nr1_3;
			document.getElementById("op2_3").innerHTML = ">";
			document.getElementById("nr2_3").innerHTML = nr2_3;
		}
	function Ejercicio4()
		//Genera dos numeros aleatorios de un digito para compararlos usando el signo <
		{
			// Activa el ejercicio 4
			activated[4] = true;

			//Borra el ejercicio anterior
			document.getElementById("n1_4").innerHTML = "";
			document.getElementById("op1_4").innerHTML = "";
			document.getElementById("n2_4").innerHTML = "";
			document.getElementById("nr1_4").innerHTML = "";
			document.getElementById("op2_4").innerHTML = "";
			document.getElementById("nr2_4").innerHTML = "";
		
			//Genera los parametros del ejercicio
			n1_4 = enteroAleatorio(0,9);
			n2_4 = enteroAleatorio(0,9);
			while (n2_4 == n1_4)
				n2_4 = enteroAleatorio(0,9);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("n1_4").innerHTML = n1_4;
			document.getElementById("op1_4").innerHTML = ",";
			document.getElementById("n2_4").innerHTML = n2_4;	
		}
	function Respuesta4()
		{
			// Si el ejercicio 4 no ha sido activado, no hace nada
			if (!activated[4]) return;

			//Asigna los valores de las variables para la respuesta
			if (n1_4 < n2_4)
			{
				nr1_4 = n1_4;
				nr2_4 = n2_4;
			}
			else
			{
				nr1_4 = n2_4;
				nr2_4 = n1_4;
			}				
			
			//Escribe las expresiones matematicas de la respuesta
			document.getElementById("nr1_4").innerHTML = nr1_4;
			document.getElementById("op2_4").innerHTML = "<";
			document.getElementById("nr2_4").innerHTML = nr2_4;
		}
		
	function Ejercicio5()
		//Genera dos numeros aleatorios de dos dígitos para compararlos usando el signo <
		{
			// Activa el ejercicio 5
			activated[5] = true;

			//Borra el ejercicio anterior
			document.getElementById("n1_5").innerHTML = "";
			document.getElementById("op1_5").innerHTML = "";
			document.getElementById("n2_5").innerHTML = "";
			document.getElementById("nr1_5").innerHTML = "";
			document.getElementById("op2_5").innerHTML = "";
			document.getElementById("nr2_5").innerHTML = "";
		
			//Genera los parámetros del ejercicio
			n1_5 = enteroAleatorio(10,99);
			n2_5 = enteroAleatorio(10,99);
			while (n2_5 == n1_5)
				n2_5 = enteroAleatorio(10,99);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("n1_5").innerHTML = n1_5;
			document.getElementById("op1_5").innerHTML = ",";
			document.getElementById("n2_5").innerHTML = n2_5;	
		}
	function Respuesta5()
		{
			// Si el ejercicio 5 no ha sido activado, no hace nada
			if (!activated[5]) return;

			//Asigna los valores de las variables para la respuesta
			if (n1_5 < n2_5)
			{
				nr1_5 = n1_5;
				nr2_5 = n2_5;
			}
			else
			{
				nr1_5 = n2_5;
				nr2_5 = n1_5;
			}				
			
			//Escribe las expresiones matematicas de la respuesta
			document.getElementById("nr1_5").innerHTML = nr1_5;
			document.getElementById("op2_5").innerHTML = "<";
			document.getElementById("nr2_5").innerHTML = nr2_5;
		}
	
	function Ejercicio6()
		//Genera dos numeros aleatorios de tres dígitos para compararlos usando el signo <
		{
			// Activa el ejercicio 6
			activated[6] = true;

			//Borra el ejercicio anterior
			document.getElementById("n1_6").innerHTML = "";
			document.getElementById("op1_6").innerHTML = "";
			document.getElementById("n2_6").innerHTML = "";
			document.getElementById("nr1_6").innerHTML = "";
			document.getElementById("op2_6").innerHTML = "";
			document.getElementById("nr2_6").innerHTML = "";
		
			//Genera los parámetros del ejercicio
			n1_6 = enteroAleatorio(100,999);
			n2_6 = enteroAleatorio(100,999);
			while (n2_6 == n1_6)
				n2_6 = enteroAleatorio(100,999);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("n1_6").innerHTML = n1_6;
			document.getElementById("op1_6").innerHTML = ",";
			document.getElementById("n2_6").innerHTML = n2_6;	
		}
	function Respuesta6()
		{
			// Si el ejercicio 6 no ha sido activado, no hace nada
			if (!activated[6]) return;
			
			//Asigna los valores de las variables para la respuesta
			if (n1_6 < n2_6)
			{
				nr1_6 = n1_6;
				nr2_6 = n2_6;
			}
			else
			{
				nr1_6 = n2_6;
				nr2_6 = n1_6;
			}				
			
			//Escribe las expresiones matematicas de la respuesta
			document.getElementById("nr1_6").innerHTML = nr1_6;
			document.getElementById("op2_6").innerHTML = "<";
			document.getElementById("nr2_6").innerHTML = nr2_6;
		}