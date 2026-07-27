//Variables globales para los ejercicios de criterios de divisibilidad

const numero_criterio = [2,3,4,5,6,8,9,10,11]; //numeros con los que se aplicaran los criterios de divisibilidad
const es_divisible = [0,0,0,0,0,0,0,0,0]; //1 si el numero dado es divisible entre:2,3,4,5,6,8,9,10,11; 0 en caso contrario
const numero = [0,0,0,0,0,0,0,0,0]; //numero dado al usuario para determinar si es divisible entre el valor correspondiente
const etiqueta_numero = ["num_0","num_1","num_2","num_3","num_4","num_5","num_6","num_7","num_8"];//Etiquetas para el identificador del número generado
const etiqueta_respuesta = ["r_0","r_1","r_2","r_3","r_4","r_5","r_6","r_7","r_8"];//Etiquetas para el identificador de las respuestas
const respuesta = ["","","","","","","","",""]; //Respuesta del criterio correspondiente
var activated = [];



 // Para generar numeros enteros aleatorios
	function enteroAleatorio(a,b)
		/* Funcion para construir un entero aleatorio entre a y b*/
		{
			var x = a + Math.floor((b-a+1)*Math.random());
			return x;
		}

//Genera el ejercicio para divisibilidad entre numero_criterio[a]
	function EjercicioDivisible(a)
		{
			activated[a] = true;
			//Borra la respuesta del ejercicio anterior
			document.getElementById(etiqueta_numero[a]).innerHTML = "";
			document.getElementById(etiqueta_respuesta[a]).innerHTML = "";
			
			//Genera los parametros del ejercicio
			
			var aleatorio = enteroAleatorio(0,100);
			var residuo = 0;
			if (aleatorio < 50)
			{
				es_divisible[a] = 0;//El número que se va a generar es divisible entre numero_criterio[a].
			}
			else
			{
					es_divisible[a] = 1;
					residuo = enteroAleatorio(1, numero_criterio[a]-1);
			}
			numero[a] = numero_criterio[a] * enteroAleatorio(3,50) + residuo;
			
			//Escribe las expresiones matemáticas del ejercicio		
			document.getElementById(etiqueta_numero[a]).innerHTML = numero[a];
					
			}
				
//Genera la respuesta para divisibilidad entre numero_criterio[a]
	function RespuestaDivisible(a)
		{
			if (!activated[a]) return;
			//Asigna los valores de las variables para la respuesta
			if (es_divisible[a] == 1)
			{
				respuesta[a] = "No";
			}
			else
			{
				respuesta[a] = "Sí";
			}
			//Escribe las expresiones matematicas de la respuestas
			document.getElementById(etiqueta_respuesta[a]).innerHTML = respuesta[a];
		}
	