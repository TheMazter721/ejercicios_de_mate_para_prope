//Variables globales para los ejercicios factorización con primos
const primos = [2,3,5,7,11];

var tipo1_1, num1_1,r1_1,p1_1,p2_1; // Para el ejercicio 1
var num1_2, r1_2, p1_2, p2_2; // Para el ejercicio 2
var num1_3, r1_3, p1_3, p2_3, pow1_3; // Para el ejercicio 3
var num1_4, p1_4, p2_4, pow1_4; // Para el ejercicio 4
var num1_5, p1_5, p2_5, pow1_5, pow2_5; // Para el ejercicio 5
var num1_6, p1_6, p2_6, p3_6; // Para el ejercicio 6
var num1_7, p1_7, p2_7, p3_7, pow1_7; // Para el ejercicio 7
var num1_8, p1_8, p2_8, p3_8, pow1_8, pow2_8, pow3_8; // Para el ejercicio 8

var activated = [];
	// Para generar números enteros aleatorios
	function enteroAleatorio(a,b)
		/* Función para construir un entero aleatorio entre a y b*/
		{
			var x = a + Math.floor((b-a+1)*Math.random());
			return x;
		}

	//Genera un número primo entre 2 y 11 o un número que es producto de dos primos distintos entre 2 y 11
	function Ejercicio01()
		{

        activated[1] = true;
			//Borra la respuesta del ejercicio anterior
			document.getElementById("r_1").innerHTML = "";
			
			//Genera los parámetros del ejercicio
			var aleatorio1=enteroAleatorio(0,100);
			
			var aleatorio2,aleatorio3 = 0;
						
			tipo1_1 = 0;
			if(aleatorio1 < 50)//genera un número primo menor o igual a 11
			{
				tipo1_1 = 1;
				aleatorio2 = enteroAleatorio(0,4);
				num1_1 = primos[aleatorio2];
			}
			else //Genera un producto de dos números primos
			{
				aleatorio2 = enteroAleatorio(0,4);
				while (aleatorio2 == aleatorio3)
					aleatorio3 = enteroAleatorio(0,4);
				p1_1 = primos[aleatorio2];
				p2_1 = primos[aleatorio3];
				num1_1 = p1_1 * p2_1;				
			}

			//Escribe las expresiones matemáticas del ejercicio				
			document.getElementById("n_1").innerHTML = num1_1;
		}
	function Respuesta01()
		{

        if (!activated[1]) return;
			//Asigna los valores de las variables para la respuesta
			if (tipo1_1 == 1)
				r1_1 = "Es un número primo.";
			else
				r1_1 = "Es un producto de dos números primos: " + num1_1 + " = " + p1_1 + "&middot;" + p2_1;
			
			//Escribe las expresiones matemáticas de la respuestas
			document.getElementById("r_1").innerHTML = r1_1;
		}

// Para el Ejercicio 2 
// Genera un producto de dos primos distintos entre 2 y 11
	function Ejercicio02()
		{

        activated[2] = true;
			//Borra la respuesta anterior del ejercicio
			document.getElementById("r_2").innerHTML = "";
			
			// Variables para los dos números primos
			var primeidx1, primeidx2 = 0;

			primeidx1 = enteroAleatorio(0,4); // Genera el primer índice
			while (primeidx1 == primeidx2) // Los índices deben ser distintos
				primeidx2 = enteroAleatorio(0,4);

			// Obtiene los dos números primos
			p1_2 = primos[primeidx1];
			p2_2 = primos[primeidx2];

			// El número es el producto de los dos números primos
			num1_2 = p1_2 * p2_2;				
			

			//Escribe las expresiones matemáticas del ejercicio				
			document.getElementById("n_2").innerHTML = num1_2;
		}
	function Respuesta02()
		{

        if (!activated[2]) return;
			r1_2 = num1_2 + " = " + p1_2 + "&middot;" + p2_2;
			
			//Escribe las expresiones matemáticas de la respuestas
			document.getElementById("r_2").innerHTML = r1_2;
		}

// Para el Ejercicio 3 
// Genera un producto de un primo que sea 2 o 3 con una potencia del primo que no se haya elegido
	function Ejercicio03()
		{

        activated[3] = true;
			//Borra la respuesta anterior del ejercicio
			document.getElementById("r1_3").innerHTML = "";
			document.getElementById("r2_3").innerHTML = "";
			document.getElementById("r3_3").innerHTML = "";
			document.getElementById("op1_3").innerHTML = "";
			
			// Variables para elegir el número primo
			var choice = enteroAleatorio(0, 1);

			// Si es 0, el primer primo es 2. Si no, es 3.		
			if (choice == 0){
				p1_3 = 2;
				p2_3 = 3;}
			else{
				p1_3 = 3;
				p2_3 = 2;
			}
			
			// Después, elige una potencia entre 2 y 4
			pow1_3 = enteroAleatorio(2, 4)

			// Calcula el número 
			num1_3 = p1_3*p2_3**pow1_3;


			//Escribe las expresiones matemáticas del ejercicio				
			document.getElementById("n_3").innerHTML = num1_3;
		}
	function Respuesta03()
		{

        if (!activated[3]) return;
			// Agrega los elementos de la respuesta
			document.getElementById("r1_3").innerHTML = p1_3;
			document.getElementById("r2_3").innerHTML = p2_3;
			document.getElementById("r3_3").innerHTML = pow1_3;
			document.getElementById("op1_3").innerHTML = "&sdot;";
		}

// Para el Ejercicio 4 
// Genera un producto de un primo que sea 2 o 3,
// otro primo que sea 5 o 7, y una potencia que sea 2 o 3.
	function Ejercicio04()
		{

        activated[4] = true;
			//Borra la respuesta anterior del ejercicio
			document.getElementById("r1_4").innerHTML = "";
			document.getElementById("r2_4").innerHTML = "";
			document.getElementById("r3_4").innerHTML = "";
			document.getElementById("op1_4").innerHTML = "";
			
			// Se elige 2 o 3 para el segundo primo
			p2_4 = enteroAleatorio(2, 3);

			// Se elije 5 o 7 para el primer número primo de forma pilla 
			p1_4 = 5+2*enteroAleatorio(0, 1)
			
			// Después, elige una potencia que sea 2 o 3
			pow1_4 = enteroAleatorio(2, 3)

			// Calcula el número 
			num1_4 = p1_4*p2_4**pow1_4;


			//Escribe las expresiones matemáticas del ejercicio				
			document.getElementById("n_4").innerHTML = num1_4;
		}
	function Respuesta04()
		{

        if (!activated[4]) return;
			// Agrega los elementos de la respuesta
			document.getElementById("r1_4").innerHTML = p1_4;
			document.getElementById("r2_4").innerHTML = p2_4;
			document.getElementById("r3_4").innerHTML = pow1_4;
			document.getElementById("op1_4").innerHTML = "&sdot;";
		}

// Para el Ejercicio 5
// Genera un número que sea 2, 3 o 5, y una potencia que sea dos o 3
// Luego, genera otro número primo distinto.
// Si fue 2, 3 o 5, la potencia puede ser 2 o 3. Si fue 7 u 11, la potencia es 2.
	function Ejercicio05()
		{

        activated[5] = true;
			//Borra la respuesta anterior del ejercicio
			document.getElementById("r1_5").innerHTML = "";
			document.getElementById("r2_5").innerHTML = "";
			document.getElementById("r3_5").innerHTML = "";
			document.getElementById("r4_5").innerHTML = "";
			document.getElementById("op1_5").innerHTML = "";
			
			// Se eligen dos números primos distintos
			var primeidx1 = 0;
			var primeidx2 = 0;

			primeidx1 = enteroAleatorio(0, 2); // Índice para el primer primo

			// Hay que asegurarse de que el segundo primo sea distinto 
			primeidx2 = enteroAleatorio(0, 4)
			while(primeidx1 == primeidx2)
				primeidx2 = enteroAleatorio(0, 4);

			// Obtiene los números primos
			p1_5 = primos[primeidx1];
			p2_5 = primos[primeidx2];

			// Obtiene el exponente del primer primo
			pow1_5 = enteroAleatorio(2, 3);


			// Obtiene el exponente del segundo primo 
			// Si fue mayor que 5, el exponente es 2. Si no, es aleatorio 
			if(p2_5 > 5)
				pow2_5 = 2;
			else 
				pow2_5 = enteroAleatorio(2, 3);

			// Calcula el número 
			num1_5 = (p1_5**pow1_5)*(p2_5**pow2_5);

			//Escribe las expresiones matemáticas del ejercicio				
			document.getElementById("n_5").innerHTML = num1_5;
		}
	function Respuesta05()
		{

        if (!activated[5]) return;
			// Agrega los elementos de la respuesta
			document.getElementById("r1_5").innerHTML = p1_5;
			document.getElementById("r2_5").innerHTML = pow1_5;
			document.getElementById("r3_5").innerHTML = p2_5;
			document.getElementById("r4_5").innerHTML = pow2_5;
			document.getElementById("op1_5").innerHTML = "&sdot;";
		}

// Para el Ejercicio 6
// Genera tres números primos distintos 
function Ejercicio06(){

        activated[6] = true;
	// Borra la respuesta del ejercicio anterior 
	document.getElementById("f1_6").innerHTML = "";
	document.getElementById("f2_6").innerHTML = "";
	document.getElementById("f3_6").innerHTML = "";
	document.getElementById("op1_6").innerHTML = "";
	document.getElementById("op2_6").innerHTML = "";

	// Índices para la generación de los tres números primos
	var primeidx1 = 0;
	var primeidx2 = 0;
	var primeidx3 = 0;

	// Genera tres índices distintos 
	primeidx1 = enteroAleatorio(0, 4);

	primeidx2 = enteroAleatorio(0, 4);
	while(primeidx2 == primeidx1)
		primeidx2 = enteroAleatorio(0, 4);

	primeidx3 = enteroAleatorio(0, 4);
	while(primeidx3 == primeidx1 || primeidx3 == primeidx2)
		primeidx3 = enteroAleatorio(0, 4);

	// Obtiene los números primos 
	p1_6 = primos[primeidx1];
	p2_6 = primos[primeidx2];
	p3_6 = primos[primeidx3];

	// Obtiene el número final 
	num1_6 = p1_6*p2_6*p3_6;

	// Lo escribe en el documento 
	document.getElementById("n_6").innerHTML = num1_6;
}

function Respuesta06(){

        if (!activated[6]) return;
	// Escribe la respuesta 
	document.getElementById("f1_6").innerHTML = p1_6;
	document.getElementById("f2_6").innerHTML = p2_6;
	document.getElementById("f3_6").innerHTML = p3_6;
	document.getElementById("op1_6").innerHTML = "&sdot;";
	document.getElementById("op2_6").innerHTML = "&sdot;";
}

// Para el Ejercicio 7
// Genera tres números primos distintos y un exponente
// A partir de este ejercicio, NO SE CONSIDERA EL 11
function Ejercicio07(){

        activated[7] = true;
	// Borra la respuesta del ejercicio anterior 
	document.getElementById("f1_7").innerHTML = "";
	document.getElementById("f2_7").innerHTML = "";
	document.getElementById("f3_7").innerHTML = "";
	document.getElementById("e1_7").innerHTML = "";
	document.getElementById("op1_7").innerHTML = "";
	document.getElementById("op2_7").innerHTML = "";

	// Índices para la generación de los tres números primos
	var primeidx1 = 0;
	var primeidx2 = 0;
	var primeidx3 = 0;

	// Genera tres índices distintos 
	primeidx1 = enteroAleatorio(0, 3);

	primeidx2 = enteroAleatorio(0, 3);
	while(primeidx2 == primeidx1)
		primeidx2 = enteroAleatorio(0, 3);

	primeidx3 = enteroAleatorio(0, 3);
	while(primeidx3 == primeidx1 || primeidx3 == primeidx2)
		primeidx3 = enteroAleatorio(0, 3);

	// Obtiene los números primos 
	p1_7 = primos[primeidx1];
	p2_7 = primos[primeidx2];
	p3_7 = primos[primeidx3];

	// Obtiene un exponente para el primer primo 
	// Si es 2 o 3, puede ser 3
	// Si es 5 o 7, el exponente es dos 
	if(p1_7 < 4)
		pow1_7 = enteroAleatorio(2, 3);
	else 
		pow1_7 = 2;

	// Obtiene el número final 
	num1_7 = (p1_7**pow1_7)*p2_7*p3_7;

	// Lo escribe en el documento 
	document.getElementById("n_7").innerHTML = num1_7;
}

function Respuesta07(){

        if (!activated[7]) return;
	// Escribe la respuesta 
	document.getElementById("f1_7").innerHTML = p1_7;
	document.getElementById("f2_7").innerHTML = p2_7;
	document.getElementById("f3_7").innerHTML = p3_7;
	document.getElementById("e1_7").innerHTML = pow1_7;
	document.getElementById("op1_7").innerHTML = "&sdot;";
	document.getElementById("op2_7").innerHTML = "&sdot;";
}


// Para el Ejercicio 8
// Genera tres números primos distintos tres exponentes 
// entre 1 y 3.
function Ejercicio08(){

        activated[8] = true;
	// Borra la respuesta del ejercicio anterior 
	document.getElementById("f1_8").innerHTML = "";
	document.getElementById("f2_8").innerHTML = "";
	document.getElementById("f3_8").innerHTML = "";
	document.getElementById("e1_8").innerHTML = "";
	document.getElementById("e2_8").innerHTML = "";
	document.getElementById("e3_8").innerHTML = "";
	document.getElementById("op1_8").innerHTML = "";
	document.getElementById("op2_8").innerHTML = "";

	// Índices para la generación de los tres números primos
	var primeidx1 = 0;
	var primeidx2 = 0;
	var primeidx3 = 0;

	// Genera tres índices distintos 
	primeidx1 = enteroAleatorio(0, 3);

	primeidx2 = enteroAleatorio(0, 3);
	while(primeidx2 == primeidx1)
		primeidx2 = enteroAleatorio(0, 3);

	primeidx3 = enteroAleatorio(0, 3);
	while(primeidx3 == primeidx1 || primeidx3 == primeidx2)
		primeidx3 = enteroAleatorio(0, 3);

	// Obtiene los números primos 
	p1_8 = primos[primeidx1];
	p2_8 = primos[primeidx2];
	p3_8 = primos[primeidx3];

	// Obtiene tres exponentes aleatorios 
	pow1_8= enteroAleatorio(1, 3);
	pow2_8= enteroAleatorio(1, 3);
	pow3_8= enteroAleatorio(1, 3);

	// Obtiene el número final 
	num1_8 = (p1_8**pow1_8)*(p2_8**pow2_8)*(p3_8**pow3_8);

	// Lo escribe en el documento 
	document.getElementById("n_8").innerHTML = num1_8;
}

function Respuesta08(){

        if (!activated[8]) return;
	// Escribe la respuesta 
	document.getElementById("f1_8").innerHTML = p1_8;
	document.getElementById("f2_8").innerHTML = p2_8;
	document.getElementById("f3_8").innerHTML = p3_8;
	document.getElementById("op1_8").innerHTML = "&sdot;";
	document.getElementById("op2_8").innerHTML = "&sdot;";

	// Solo agrega los exponentes mayores que 1 
	if(pow1_8 != 1)
		document.getElementById("e1_8").innerHTML = pow1_8;
	if(pow2_8 != 1)
		document.getElementById("e2_8").innerHTML = pow2_8;
	if(pow3_8 != 1)
		document.getElementById("e3_8").innerHTML = pow3_8;
}
