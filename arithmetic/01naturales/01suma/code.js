//Variables globales para los ejercicios de suma

//Para el segundo sumando de las tablas
const sumando = [0,0,0,0,0,0,0,0,0,0]; //Valor del sumando en la tabla correspondiente
const respuesta = [0,0,0,0,0,0,0,0,0,0]; //Respuesta de la tabla correspondiente
const etiqueta1 = ["s1_0","s1_1","s1_2","s1_3","s1_4","s1_5","s1_6","s1_7","s1_8","s1_9"];//Etiqueta en suma.html para el valor en la tabla
const etiqueta2 = ["s2_0","s2_1","s2_2","s2_3","s2_4","s2_5","s2_6","s2_7","s2_8","s2_9"];//Etiqueta para el sumando en la tabla
const etiqueta_op=["op_0","op_1","op_2","op_3","op_4","op_5","op_6","op_7","op_8","op_9"];//Etiqueta para el operador en cada tabla
const etiqueta_rs=["r_0","r_1","r_2","r_3","r_4","r_5","r_6","r_7","r_8","r_9"];//Etiqueta para la respuesta en cada tabla

var s1_10,s2_10,r_10;
var s1_11,s2_11,r_11;
var s1_12,s2_12,s3_12,r_12;

/* El siguiente arreglo, llamado activated,
se inicia vacío. Es una medida para que, al entrar
al Ejercicio n, se active el correspondiente elemento del arreglo activated poniéndolo como true.
En todas las funciones para las respuestas, si activated[n] no es true, entonces no se debe hacer nada. */
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
			// Se activa el ejercicio correspondiente
			activated[a] = true;
			//Borra la respuesta del ejercicio anterior
			document.getElementById(etiqueta_rs[a]).innerHTML = "";
			
			//Genera los parametros del ejercicio
			sumando[a] = enteroAleatorio(0,9);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById(etiqueta1[a]).innerHTML = a;
			document.getElementById(etiqueta_op[a]).innerHTML = "+";
			document.getElementById(etiqueta2[a]).innerHTML = sumando[a];		
		}
	function RespuestaTabla(a)
		{
			//Verifica si el ejercicio está activado
			if(!activated[a]) return;

			//Asigna los valores de las variables para la respuesta
			respuesta[a] = a + sumando[a];
			
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById(etiqueta_rs[a]).innerHTML = respuesta[a];
		}
	
	function Ejercicio10()
		//Suma de un número de dos digitos con uno de un digito
		{
			// Activa el ejercicio correspondiente
			activated[10] = true;
			//Borra el ejercicio anterior
			document.getElementById("r_10").innerHTML = "";
		
			//Genera los parametros del ejercicio
			s1_10 = enteroAleatorio(10,50);
			s2_10 = enteroAleatorio(0,9);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("s1_10").innerHTML = s1_10;
			document.getElementById("op_10").innerHTML = "+";
			document.getElementById("s2_10").innerHTML = s2_10;	
		}
	function Respuesta10()
		{
			// Si el ejercicio no está activado, no hace nada
			if(!activated[10]) return;
			//Asigna los valores de las variables para la respuesta
			r_10 = s1_10 + s2_10;
			
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById("r_10").innerHTML = r_10;
		}
		
	function Ejercicio11()
		//Suma de dos números de dos digitos
		{
			// Activa el ejercicio correspondiente
			activated[11] = true;
			//Borra el ejercicio anterior
			document.getElementById("r_11").innerHTML = "";
		
			//Genera los parametros del ejercicio
			s1_11 = enteroAleatorio(10,45);
			s2_11 = enteroAleatorio(10,45);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("s1_11").innerHTML = s1_11;
			document.getElementById("op_11").innerHTML = "+";
			document.getElementById("s2_11").innerHTML = s2_11;	
		}
	function Respuesta11()
		{
			// Si el ejercicio no está activado, no hace nada
			if(!activated[11]) return;
			//Asigna los valores de las variables para la respuesta
			r_11 = s1_11 + s2_11;
			
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById("r_11").innerHTML = r_11;
		}
	
	function Ejercicio12()
		//Suma de tres números de un digitos
		{
			// Activa el ejercicio correspondiente
			activated[12] = true;
			//Borra el ejercicio anterior
			document.getElementById("r_12").innerHTML = "";
		
			//Genera los parametros del ejercicio
			s1_12 = enteroAleatorio(0,9);
			s2_12 = enteroAleatorio(0,9);
			s3_12 = enteroAleatorio(0,9);
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById("s1_12").innerHTML = s1_12;
			document.getElementById("op1_12").innerHTML = "+";
			document.getElementById("s2_12").innerHTML = s2_12;	
			document.getElementById("op2_12").innerHTML = "+";
			document.getElementById("s3_12").innerHTML = s3_12;
		}
	function Respuesta12()
		{
			// Si el ejercicio no está activado, no hace nada
			if(!activated[12]) return;
			//Asigna los valores de las variables para la respuesta
			r_12 = s1_12 + s2_12 + s3_12;
			
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById("r_12").innerHTML = r_12;
		}