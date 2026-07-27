// Variables globales para los ejercicios de MCD
var primos = [2, 3, 5, 7, 11];

var pr_1 = []; // Primos del ejercicio 1
var pow_1 = []; // Exponentes del ejercicio 1

var pr_2 = []; // Primos del ejercicio 2
var pow_2 = []; // Exponentes del ejercicio 2

var pr_3 = []; // Primos del ejercicio 3
var pow_3 = []; // Exponentes del ejercicio 3

var m_4, n1_4, n2_4; // Para el ejercicio 4
var m_5, n1_5, n2_5; // Para el ejercicio 5
var pr_6 = []; var pow_6 = []; var m_6, n1_6, n2_6; // Para el ejercicio 6
var p1_7, p2_7, m_7, n1_7, n2_7; // Para el ejercicio 7
var p1_8, p2_8, p3_8, p4_8, m_8, n1_8, n2_8; // Para el ejercicio 8
var p1_9, p2_9, p3_9, p4_9, pow_9 = [], m_9, n1_9, n2_9; // Para el ejercicio 9
var p1_10, p2_10, p3_10, p4_10, pow_10 = [], m_10 = 1, n1_10, n2_10; // Para el ejercicio 10

var activated = [];
// Para generar números enteros aleatorios
function enteroAleatorio(a,b){ // Genera números aleatorios entre a y b
	var x = a + Math.floor((b-a+1)*Math.random());
	return x;
}

// Función para regresar un arreglo que sea permutación
// aleatoria de otro
function permutarArreglo(A){
    // Obtiene la longitud del arreglo 
    var Alen = A.length;
    var lenm1 = Alen-1;

    // Crea una copia
    var B = [];
    B[lenm1] = 0;

    // Inicia un contador para saber cuántos elementos 
    // ya se ingresaron 
    var cont = 0;

    // Va generando números aleatorios 
    while(cont < Alen){
        // Genera un índice y obtiene un elemento
        var idx = enteroAleatorio(0, lenm1);
        var curr = A[idx];

        // Si ya estaba, debe generar otro 
        while(B.includes(curr)){
            idx = enteroAleatorio(0, lenm1);
            curr = A[idx];
        }

        // Lo arregla en la posición correspondiente 
        B[cont] = curr;
        cont++;
    }

    // Regresa el nuevo arreglo
    return B;
}

function escogerPrimosDistintos(cantidad){
    var perm = permutarArreglo(primos);
    var resultado = [];
    for(var i = 0; i < cantidad; i++)
        resultado[i] = perm[i];
    return resultado;
}

// Ejercicio 1
// Genera una permutación de los números primos
// El primer número se utiliza para ser el primo común.
// Los demás se usan para los otros números
// Se generan exponentes aleatorios entre 1 y 5 y el alumno 
// debe identificar el factor común.
function Ejercicio01(){

        activated[1] = true;
	// Borra todo lo que había antes en la respuesta 
	document.getElementById("r_1").innerHTML = "";
	document.getElementById("m1_1").innerHTML = "";

	// Variable para el contador 
	var i = 0;

	// Genera una permutación de los números primos 
	perm_primes = permutarArreglo(primos);
	console.log(perm_primes);

	// Hace una copia en el arreglo global
	for(i = 0; i < 5; i++)
		pr_1[i] = perm_primes[i];

	// Obtiene los exponentes de forma aleatoria
	for(i = 0; i < 6; i++)
		pow_1[i] = enteroAleatorio(1, 5);

	// Escribe todo
	// Factores del primer número
	document.getElementById("f1n1_1").innerHTML = pr_1[0];
	document.getElementById("f2n1_1").innerHTML = pr_1[1];
	document.getElementById("f3n1_1").innerHTML = pr_1[2];

	// Agrupa los nombres de los operadores y de los exponentes
	op_names = ["op1n1_1", "op2n1_1", "op1n2_1", "op2n2_1"];
	exp_names = ["e1n1_1", "e2n1_1", "e3n1_1", "e1n2_1", "e2n2_1", "e3n2_1"];

	// Agrega los operadores 
	for(i = 0; i < 4; i++)
		document.getElementById(op_names[i]).innerHTML = "&sdot;";

	// Si el exponente es 1, agrega comillas. Si no, sí lo agrega
	for(i = 0; i < 6; i++){
		curr_exp = pow_1[i];
		curr_name = exp_names[i];
		if(curr_exp == 1)
			document.getElementById(curr_name).innerHTML = "";
		else 
			document.getElementById(curr_name).innerHTML = curr_exp;
	}

	// La coma 
	document.getElementById("c1_1").innerHTML = ",";

	// Factores del segundo número
	document.getElementById("f1n2_1").innerHTML = pr_1[0];
	document.getElementById("f2n2_1").innerHTML = pr_1[3];
	document.getElementById("f3n2_1").innerHTML = pr_1[4];
}

function Respuesta01(){

        if (!activated[1]) return;
	// El factor común es simplemente el primer número primo 
	document.getElementById("m1_1").innerHTML = "El factor común es";
	document.getElementById("r_1").innerHTML = pr_1[0];
}


// Ejercicio 2
// Genera una permutación de los números primos
// Los primeros dos números se utilizan para ser los primos comunes.
// Los demás se usan para los otros números
// Se generan exponentes aleatorios entre 1 y 5 y el alumno 
// debe identificar el factor común.
function Ejercicio02(){

        activated[2] = true;
	// Borra todo lo que había antes en la respuesta 
	var ans_names = ["m1_2", "r1_2", "rc1_2", "r2_2"]; 
	for(var i=0; i<4; i++)
		document.getElementById(ans_names[i]).innerHTML = "";

	// Variable para el contador 
	var i = 0;

	// Genera una permutación de los números primos 
	var perm_primes = permutarArreglo(primos);
	console.log(perm_primes);

	// Hace una copia en el arreglo global (solo necesita 4 primos)
	for(i = 0; i < 4; i++)
		pr_1[i] = perm_primes[i];

	// Obtiene los exponentes de forma aleatoria
	for(i = 0; i < 6; i++)
		pow_1[i] = enteroAleatorio(1, 5);

	// Escribe todo
	// Factores del primer número
	document.getElementById("f1n1_2").innerHTML = pr_1[0];
	document.getElementById("f2n1_2").innerHTML = pr_1[1];
	document.getElementById("f3n1_2").innerHTML = pr_1[2];

	// Agrupa los nombres de los operadores y de los exponentes
	var op_names = ["op1n1_2", "op2n1_2", "op1n2_2", "op2n2_2"];
	var exp_names = ["e1n1_2", "e2n1_2", "e3n1_2", "e1n2_2", "e2n2_2", "e3n2_2"];

	// Agrega los operadores 
	for(var i = 0; i < 4; i++)
		document.getElementById(op_names[i]).innerHTML = "&sdot;";

	// Si el exponente es 1, agrega comillas. Si no, sí lo agrega
	for(var i = 0; i < 6; i++){
		var curr_exp = pow_1[i];
		var curr_name = exp_names[i];
		if(curr_exp == 1)
			document.getElementById(curr_name).innerHTML = "";
		else 
			document.getElementById(curr_name).innerHTML = curr_exp;
	}

	// La coma 
	document.getElementById("c1_2").innerHTML = ",";

	// Factores del segundo número
	document.getElementById("f1n2_2").innerHTML = pr_1[0];
	document.getElementById("f2n2_2").innerHTML = pr_1[1];
	document.getElementById("f3n2_2").innerHTML = pr_1[3];
}

function Respuesta02(){

        if (!activated[2]) return;
	// Los factores comunes son simplemente los primeros dos números primos
	// Primero el texto y la coma
	document.getElementById("m1_2").innerHTML = "Los factores comunes son";
	document.getElementById("rc1_2").innerHTML = ",";

	// Ahora sí, los números primos
	document.getElementById("r1_2").innerHTML = pr_1[0];
	document.getElementById("r2_2").innerHTML = pr_1[1];
}


// Ejercicio 3
// Se generan dos números primos 
// Posteriormente, se generan potencias aleatorias como 
// enteros entre 1 y 5. El alumno debe identificar la potencia mínima 
// en cada factor primo. Se incluirán potencias iguales.
function Ejercicio03(){

        activated[3] = true;
	// Borra todo lo que había antes en la respuesta 
	var ans_names = ["m1_3", "p1r_3", "m2_3", "e1r_3", 
		"m3_3", "p2r_3", "m4_3", "e2r_3"
	]; 
	var ans_len = ans_names.length;
	for(var i=0; i<ans_len; i++)
		document.getElementById(ans_names[i]).innerHTML = "";

	// Variable para el contador 
	var i = 0;

	// Genera dos números primos distintos 
	var primeidx = [];

	primeidx[0] = enteroAleatorio(0, 4);

	// Se asegura de que los primos sean distintos 
	primeidx[1] = enteroAleatorio(0, 4);
	while(primeidx[0] == primeidx[1])
		primeidx[1] = enteroAleatorio(0, 4);

	// Obtiene los números primos
	for(i=0; i<2; i++)
		pr_3[i] = primos[primeidx[i]];

	// Obtiene los exponentes de forma aleatoria 
	for(i=0; i<4; i++)
		pow_3[i] = enteroAleatorio(1, 5);

	// Escribe todo
	// Factores del primer número
	document.getElementById("f1n1_3").innerHTML = pr_3[0];
	document.getElementById("f2n1_3").innerHTML = pr_3[1];

	// Agrupa los nombres de los operadores y de los exponentes
	var op_names = ["op1n1_3", "op1n2_3"];
	var op_len = op_names.length;
	var exp_names = ["e1n1_3", "e2n1_3", "e1n2_3", "e2n2_3"];
	var exp_len = exp_names.length;

	// Agrega los operadores 
	for(i = 0; i < op_len; i++)
		document.getElementById(op_names[i]).innerHTML = "&sdot;";

	// Si el exponente es 1, agrega comillas. Si no, sí lo agrega
	for(i = 0; i < exp_len; i++){
		var curr_exp = pow_3[i];
		var curr_name = exp_names[i];
		if(curr_exp == 1)
			document.getElementById(curr_name).innerHTML = "";
		else 
			document.getElementById(curr_name).innerHTML = curr_exp;
	}

	// La coma 
	document.getElementById("c1_3").innerHTML = ",";

	// Factores del segundo número
	document.getElementById("f1n2_3").innerHTML = pr_3[0];
	document.getElementById("f2n2_3").innerHTML = pr_3[1];
}

function Respuesta03(){

        if (!activated[3]) return;
	// Variables para los contadores 
	var i = 0;
	var j = 0;

	// Variables para las respuestas 
	var minp = [];

	// Primero el texto
	// El texto en común 
	var common_txt = ["La potencia mínima de", "es"];
	var common_names = [["m1_3", "m3_3"], ["m2_3", "m4_3"]];

	for(i=0; i<2; i++){
		var curr_txt = common_txt[i];
		for(j=0; j<2; j++){
			var curr_name = common_names[i][j]
			document.getElementById(curr_name).innerHTML = curr_txt
		}
	}

	// Agrega los números primos 
	var prime_names = ["p1r_3", "p2r_3"];
	for(i=0; i<2; i++){
		var curr_name = prime_names[i];
		document.getElementById(curr_name).innerHTML = pr_3[i];
	}

	// Obtiene los menores exponentes 
	for(i=0; i<2; i++){
		if(pow_3[i]<=pow_3[i+2])
			minp[i] = pow_3[i];
		else 
			minp[i] = pow_3[i+2];
	}
	// Nombres para los exponentes 
	var exp_names = ["e1r_3", "e2r_3"];

	// Agrega los exponentes 
	for(i=0; i<2; i++){
		var curr_name = exp_names[i];
		document.getElementById(curr_name).innerHTML = minp[i];
	}
}

function Ejercicio04(){

        activated[4] = true;
	// Borra todo lo de la respuesta anterior 
	ans_names = ["m1_4", "r_4"]
	ans_len = ans_names.length;
	for(i=0; i<ans_len; i++){
		var curr_name = ans_names[i];
		document.getElementById(curr_name).innerHTML = "";
	}

	// Genera el MCD (un número entre 2 y 5)
	m_4 = enteroAleatorio(2, 5);

	// Genera n1 (2 o 4)
	n1_4 = 2*enteroAleatorio(1, 2);

	// Genera n2 (3 o 5)
	n2_4 = 2*enteroAleatorio(1, 2) + 1;

	// Obtiene A y B 
	var nums = [m_4*n1_4, m_4*n2_4];
	var nums_names = ["n1_4", "n2_4"];

	// Los añade al HTML 
	for(i=0;i<2;i++){
		curr_name = nums_names[i];
		document.getElementById(curr_name).innerHTML = nums[i];
	}
	// Agrega la coma 
	document.getElementById("c1_4").innerHTML = ",";
}

function Respuesta04(){

        if (!activated[4]) return;
	// Agrega el texto 
	document.getElementById("m1_4").innerHTML = "El MCD es"

	// Agrega el MCD 
	document.getElementById("r_4").innerHTML = m_4;
}

function Ejercicio05(){

        activated[5] = true;
	// Borra todo lo de la respuesta anterior 
	var ans_names = ["m1_5", "r_5"];
	var ans_len = ans_names.length;
	for(var i = 0; i < ans_len; i++){
		var curr_name = ans_names[i];
		document.getElementById(curr_name).innerHTML = "";
	}

	// Genera el MCD como un divisor común
	n1_5 = enteroAleatorio(1, 50);
	var maxK = Math.floor(200 / n1_5);
	if(maxK < 1)
		maxK = 1;
	var k = enteroAleatorio(1, maxK);
	n2_5 = n1_5 * k;
	
	// Mantener el número menor en la primera posición
	var nums = [n1_5, n2_5];
	var nums_names = ["n1_5", "n2_5"];

	for(var i = 0; i < 2; i++){
		var curr_name = nums_names[i];
		document.getElementById(curr_name).innerHTML = nums[i];
	}
	// Agrega la coma 
	document.getElementById("c1_5").innerHTML = ",";
}

function Respuesta05(){

        if (!activated[5]) return;
	// Agrega el texto 
	document.getElementById("m1_5").innerHTML = "El MCD es";

	// Agrega el MCD 
	document.getElementById("r_5").innerHTML = n1_5;
}

function Ejercicio06(){

        activated[6] = true;
	document.getElementById("m1_6").innerHTML = "";
	document.getElementById("r_6").innerHTML = "";

	var primes = escogerPrimosDistintos(2);
	pr_6[0] = primes[0];
	pr_6[1] = primes[1];

	for(var i = 0; i < 4; i++)
		pow_6[i] = enteroAleatorio(1, 3);

	var exp11 = pow_6[0];
	var exp12 = pow_6[1];
	var exp21 = pow_6[2];
	var exp22 = pow_6[3];

	n1_6 = Math.pow(pr_6[0], exp11) * Math.pow(pr_6[1], exp12);
	n2_6 = Math.pow(pr_6[0], exp21) * Math.pow(pr_6[1], exp22);

	var min1 = exp11 <= exp21 ? exp11 : exp21;
	var min2 = exp12 <= exp22 ? exp12 : exp22;
	m_6 = Math.pow(pr_6[0], min1) * Math.pow(pr_6[1], min2);

	document.getElementById("n1_6").innerHTML = n1_6;
	document.getElementById("c1_6").innerHTML = ",";
	document.getElementById("n2_6").innerHTML = n2_6;
}

function Respuesta06(){

        if (!activated[6]) return;
	document.getElementById("m1_6").innerHTML = "El MCD es";
	document.getElementById("r_6").innerHTML = m_6;
}

function Ejercicio07(){

        activated[7] = true;
	document.getElementById("m1_7").innerHTML = "";
	document.getElementById("r_7").innerHTML = "";

	var primes = escogerPrimosDistintos(2);
	p1_7 = primes[0];
	p2_7 = primes[1];

	m_7 = enteroAleatorio(1, 20);
	n1_7 = m_7 * p1_7;
	n2_7 = m_7 * p2_7;

	document.getElementById("n1_7").innerHTML = n1_7;
	document.getElementById("c1_7").innerHTML = ",";
	document.getElementById("n2_7").innerHTML = n2_7;
}

function Respuesta07(){

        if (!activated[7]) return;
	document.getElementById("m1_7").innerHTML = "El MCD es";
	document.getElementById("r_7").innerHTML = m_7;
}

function Ejercicio08(){

        activated[8] = true;
	document.getElementById("m1_8").innerHTML = "";
	document.getElementById("r_8").innerHTML = "";

	var primes = escogerPrimosDistintos(4);
	p1_8 = primes[0];
	p2_8 = primes[1];
	p3_8 = primes[2];
	p4_8 = primes[3];

	m_8 = enteroAleatorio(1, 20);
	n1_8 = m_8 * p1_8 * p2_8;
	n2_8 = m_8 * p3_8 * p4_8;

	document.getElementById("n1_8").innerHTML = n1_8;
	document.getElementById("c1_8").innerHTML = ",";
	document.getElementById("n2_8").innerHTML = n2_8;
}

function Respuesta08(){

        if (!activated[8]) return;
	document.getElementById("m1_8").innerHTML = "El MCD es";
	document.getElementById("r_8").innerHTML = m_8;
}

function Ejercicio09(){

        activated[9] = true;
	document.getElementById("m1_9").innerHTML = "";
	document.getElementById("r_9").innerHTML = "";

	var primes = escogerPrimosDistintos(4);
	p1_9 = primes[0];
	p2_9 = primes[1];
	p3_9 = primes[2];
	p4_9 = primes[3];

	for(var i = 0; i < 4; i++)
		pow_9[i] = enteroAleatorio(1, 3);

	m_9 = enteroAleatorio(1, 20);
	n1_9 = m_9 * Math.pow(p1_9, pow_9[0]) * Math.pow(p2_9, pow_9[1]);
	n2_9 = m_9 * Math.pow(p3_9, pow_9[2]) * Math.pow(p4_9, pow_9[3]);

	document.getElementById("n1_9").innerHTML = n1_9;
	document.getElementById("c1_9").innerHTML = ",";
	document.getElementById("n2_9").innerHTML = n2_9;
}

function Respuesta09(){

        if (!activated[9]) return;
	document.getElementById("m1_9").innerHTML = "El MCD es";
	document.getElementById("r_9").innerHTML = m_9;
}

function Ejercicio10(){

        activated[10] = true;
	document.getElementById("m1_10").innerHTML = "";
	document.getElementById("r_10").innerHTML = "";

	var primes = escogerPrimosDistintos(4);
	p1_10 = primes[0];
	p2_10 = primes[1];
	p3_10 = primes[2];
	p4_10 = primes[3];

	for(var i = 0; i < 4; i++)
		pow_10[i] = enteroAleatorio(1, 3);

	n1_10 = Math.pow(p1_10, pow_10[0]) * Math.pow(p2_10, pow_10[1]);
	n2_10 = Math.pow(p3_10, pow_10[2]) * Math.pow(p4_10, pow_10[3]);

	document.getElementById("n1_10").innerHTML = n1_10;
	document.getElementById("c1_10").innerHTML = ",";
	document.getElementById("n2_10").innerHTML = n2_10;
}

function Respuesta10(){

        if (!activated[10]) return;
	document.getElementById("m1_10").innerHTML = "El MCD es";
	document.getElementById("r_10").innerHTML = m_10;
}

