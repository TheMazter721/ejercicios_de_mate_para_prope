// Variables globales para los ejercicios de simplificación de fracciones
var primos = [2, 3, 5, 7, 11];

var m_1, n1_1, n2_1; // Para el ejercicio 1
var m_2, n1_2, n2_2; // Para el ejercicio 2
var pr_3 = []; var pow_3 = []; var m_3, n1_3, n2_3; // Para el ejercicio 3
var pr_4 = []; var m_4, n1_4, n2_4; // Para el ejercicio 4
var pr_5 = []; var m_5, n1_5, n2_5; // Para el ejercicio 5
var pr_6 = [], pow_6 = [], m_6, n1_6, n2_6; // Para el ejercicio 6
var pr_7 = [], pow_7 = [], m_7 = 1, n1_7, n2_7; // Para el ejercicio 7

var m_8, n1_8, n2_8; // Para el ejercicio 8
var m_9, n1_9, n2_9; // Para el ejercicio 9
var pr_10 = []; var pow_10 = []; var m_10, n1_10, n2_10; // Para el ejercicio 10
var pr_11 = []; var m_11, n1_11, n2_11; // Para el ejercicio 11
var pr_12 = []; var m_12, n1_12, n2_12; // Para el ejercicio 12
var pr_13 = [], pow_13 = [], m_13, n1_13, n2_13; // Para el ejercicio 13
var pr_14 = [], pow_14 = [], m_14, n1_14, n2_14; // Para el ejercicio 14

// Para generar números enteros aleatorios

var activated = [];
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

// Arreglo para guardar las respuestas de los ejercicios
var respuestas = [];

// Función para guardar la respuesta de un ejercicio en el arreglo de respuestas
function guardarRespuesta(n, num, den){
    respuestas[n] = [num, den];
}

function limpiarRespuestas(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.innerHTML = "&ZeroWidthSpace;";
    }
}

// Función para que el innerHTML de un elemento
// sea un punto. Similar a la función limpiarRespuestas
function mostrarPuntos(ids){
	for(var i = 0; i < ids.length; i++){
		var elem = document.getElementById(ids[i]);
		if(elem)
			elem.innerHTML = "&sdot;";
	}
}

// Función general para escribir la respuesta del ejercicio n
function Respuesta(n){

    if (!activated[n]) return;

    // Obtiene todas las etiquetas utilizando el valor de n
    var intr = "intr_" + n;
    var nr = "nr_" + n;
    var dr = "dr_" + n;
    var signor = "signor_" + n;

    // Saca el numerador y denominador de la respuesta del arreglo de respuestas
    var num = respuestas[n][0];
    var den = respuestas[n][1];


    // Ahora que ya tiene todas las etiquetas, ya puede usar todos
    // los condicionales
    // Si la respuesta es 0, simplemente pone cero
    if(num === 0){
        document.getElementById(intr).innerHTML = "0";
        document.getElementById(nr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(dr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(signor).innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es 1, simplemente pone el numerador como entero
    else if(den === 1){
        document.getElementById(intr).innerHTML = Math.abs(num);
        document.getElementById(nr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(dr).innerHTML = "&ZeroWidthSpace;";

        // Si el numerador es negativo, pone el signo negativo.
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0)
            document.getElementById(signor).innerHTML = "- ";
        else
            document.getElementById(signor).innerHTML = "&ZeroWidthSpace;";
    }
    // Si el denominador es distinto de 1, pone la fracción
    else{
        document.getElementById(intr).innerHTML = "&ZeroWidthSpace;";
        document.getElementById(nr).innerHTML = Math.abs(num);
        document.getElementById(dr).innerHTML = den;

        // Si el numerador es negativo, pone el signo negativo
        // El signo negativo debe llevar un espacio para verse bien
        // en la página
        if(num < 0)
            document.getElementById(signor).innerHTML = "- ";
        else
        document.getElementById(signor).innerHTML = "&ZeroWidthSpace;";
    }
}

// Ejercicio 1
// Se generan dos números cuyo MCD es un número entre 2 y 5, digamos A y B
// El alumno debe simplificar la fracción A/B.
// Al ser el Ejercicio 1, la respuesta se guarda en el arreglo de respuestas en la posición 1
// Además, los subíndices de los elementos HTML que contienen la respuesta son "intr_1", "nr_1", "dr_1" y "signor_1".
// También se debe mostrar el MCD en la respuesta, que se encuentra en la variable m_1
function Ejercicio01(){

    activated[1] = true;
	// Borra todo lo de la respuesta anterior 
	limpiarRespuestas(["intr_1", "nr_1", "dr_1", "signor_1"]);

	// Genera el MCD (un número entre 2 y 5)
	m_1 = enteroAleatorio(2, 5);

	// Genera n1 (2 o 4)
	n1_1 = 2*enteroAleatorio(1, 2);

	// Genera n2 (3 o 5)
	n2_1 = 2*enteroAleatorio(1, 2) + 1;

	// Obtiene A y B 
	var nums = [m_1*n1_1, m_1*n2_1];
	var nums_names = ["n1_1", "n2_1"];

	// Los añade al HTML 
	for(i=0;i<2;i++){
		curr_name = nums_names[i];
		document.getElementById(curr_name).innerHTML = nums[i];
	}

	// Guarda la respuesta en el arreglo de respuestas
	guardarRespuesta(1, n1_1, n2_1);
}

// Ejercicio 2:
// Es muy similar al Ejercicio 1, pero ahora el MCD es un número entre 1 y 50.
function Ejercicio02(){

    activated[2] = true;
	// Borra todo lo de la respuesta anterior 
	limpiarRespuestas(["intr_2", "nr_2", "dr_2", "signor_2"]);

	// Genera el MCD como un divisor común
	n1_2 = enteroAleatorio(1, 50);
	var maxK = Math.floor(200 / n1_2);
	if(maxK < 1)
		maxK = 1;
	var k = enteroAleatorio(1, maxK);
	n2_2 = n1_2 * k;
	
	// Mantener el número menor en la primera posición
	var nums = [n1_2, n2_2];
	var nums_names = ["n1_2", "n2_2"];

	for(var i = 0; i < 2; i++){
		var curr_name = nums_names[i];
		document.getElementById(curr_name).innerHTML = nums[i];
	}

	// En este caso, la respuesta es 1/k, ya que n2_2 = n1_2 * k. Por lo tanto, la fracción simplificada es 1/k.
	guardarRespuesta(2, 1, k);
}

// Ejercicio 3:
// Se generan dos números que son productos de potencias de dos primos distintos. 
// El alumno debe simplificar la fracción formada por estos dos números.
// La respuesta se guarda en el arreglo de respuestas en la posición 3
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_3", "nr_3", "dr_3" y "signor_3".
function Ejercicio03(){

    activated[3] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_3", "nr_3", "dr_3", "signor_3"]);

	// Escoge dos primos distintos

	var primes = escogerPrimosDistintos(2);
	pr_3[0] = primes[0];
	pr_3[1] = primes[1];

	for(var i = 0; i < 4; i++)
		pow_3[i] = enteroAleatorio(1, 3);

	var exp11 = pow_3[0];
	var exp12 = pow_3[1];
	var exp21 = pow_3[2];
	var exp22 = pow_3[3];

	n1_3 = Math.pow(pr_3[0], exp11) * Math.pow(pr_3[1], exp12);
	n2_3 = Math.pow(pr_3[0], exp21) * Math.pow(pr_3[1], exp22);

	var min1 = exp11 <= exp21 ? exp11 : exp21;
	var min2 = exp12 <= exp22 ? exp12 : exp22;
	m_3 = Math.pow(pr_3[0], min1) * Math.pow(pr_3[1], min2);

	document.getElementById("n1_3").innerHTML = n1_3;
	document.getElementById("n2_3").innerHTML = n2_3;

	// Ahora, se obtiene el numerador y el denominador de la fracción simplificada. Para ello,
	// basta con dividir n1_3 y n2_3 entre m_3.
	var num = n1_3 / m_3;
	var den = n2_3 / m_3;

	// Guarda la respuesta en el arreglo de respuestas
	guardarRespuesta(3, num, den);
}

// Ejercicio 4:
// Se generan dos números que son productos de potencias de dos primos distintos. 
// El alumno debe simplificar la fracción formada por estos dos números.
// La respuesta se guarda en el arreglo de respuestas en la posición 4
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_4", "nr_4", "dr_4" y "signor_4".
function Ejercicio04(){

    activated[4] = true;
	limpiarRespuestas(["intr_4", "nr_4", "dr_4", "signor_4"]);

	var primes = escogerPrimosDistintos(2);
	pr_4[0] = primes[0];
	pr_4[1] = primes[1];

	m_4 = enteroAleatorio(1, 20);
	n1_4 = m_4 * pr_4[0];
	n2_4 = m_4 * pr_4[1];

	document.getElementById("n1_4").innerHTML = n1_4;
	document.getElementById("n2_4").innerHTML = n2_4;

	// La fracción simplificada es simplemente pr_4[0] / pr_4[1]
	guardarRespuesta(4, pr_4[0], pr_4[1]);
}

// Ejercicio 5:
// Se generan dos números que son productos de dos primos distintos. 
// El alumno debe simplificar la fracción formada por estos dos números.
// La respuesta se guarda en el arreglo de respuestas en la posición 5
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_5", "nr_5", "dr_5" y "signor_5".
function Ejercicio05(){

    activated[5] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_5", "nr_5", "dr_5", "signor_5"]);

	var primes = escogerPrimosDistintos(4);
	pr_5[0] = primes[0];
	pr_5[1] = primes[1];
	pr_5[2] = primes[2];
	pr_5[3] = primes[3];

	m_5 = enteroAleatorio(1, 20);
	n1_5 = m_5 * pr_5[0] * pr_5[1];
	n2_5 = m_5 * pr_5[2] * pr_5[3];

	document.getElementById("n1_5").innerHTML = n1_5;
	document.getElementById("n2_5").innerHTML = n2_5;

	// La fracción simplificada es simplemente pr_5[0] * pr_5[1] / (pr_5[2] * pr_5[3])
	guardarRespuesta(5, pr_5[0] * pr_5[1], pr_5[2] * pr_5[3]);
}

// Ejercicio 6:
// Se generan dos números que son productos de potencias de cuatro primos distintos. 
// El alumno debe simplificar la fracción formada por estos dos números.
// La respuesta se guarda en el arreglo de respuestas en la posición 6
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_6", "nr_6", "dr_6" y "signor_6".
function Ejercicio06(){

    activated[6] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_6", "nr_6", "dr_6", "signor_6"]);

	var primes = escogerPrimosDistintos(4);
	pr_6[0] = primes[0];
	pr_6[1] = primes[1];
	pr_6[2] = primes[2];
	pr_6[3] = primes[3];

	for(var i = 0; i < 4; i++)
		pow_6[i] = enteroAleatorio(1, 3);

	m_6 = enteroAleatorio(1, 20);
	n1_6 = m_6 * Math.pow(pr_6[0], pow_6[0]) * Math.pow(pr_6[1], pow_6[1]);
	n2_6 = m_6 * Math.pow(pr_6[2], pow_6[2]) * Math.pow(pr_6[3], pow_6[3]);

	document.getElementById("n1_6").innerHTML = n1_6;
	document.getElementById("n2_6").innerHTML = n2_6;

	// La fracción simplificada es simplemente (pr_6[0]^pow_6[0] * pr_6[1]^pow_6[1]) / (pr_6[2]^pow_6[2] * pr_6[3]^pow_6[3])
	guardarRespuesta(6, Math.pow(pr_6[0], pow_6[0]) * Math.pow(pr_6[1], pow_6[1]), Math.pow(pr_6[2], pow_6[2]) * Math.pow(pr_6[3], pow_6[3]));
}


// Ejercicio 7:
// Se generan dos números que son productos de potencias de cuatro primos distintos.
// El alumno debe simplificar la fracción formada por estos dos números.
// La respuesta se guarda en el arreglo de respuestas en la posición 7
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_7", "nr_7", "dr_7" y "signor_7".
function Ejercicio07(){

    activated[7] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_7", "nr_7", "dr_7", "signor_7"]);

	var primes = escogerPrimosDistintos(4);
	pr_7[0] = primes[0];
	pr_7[1] = primes[1];
	pr_7[2] = primes[2];
	pr_7[3] = primes[3];

	for(var i = 0; i < 4; i++)
		pow_7[i] = enteroAleatorio(1, 3);

	n1_7 = Math.pow(pr_7[0], pow_7[0]) * Math.pow(pr_7[1], pow_7[1]);
	n2_7 = Math.pow(pr_7[2], pow_7[2]) * Math.pow(pr_7[3], pow_7[3]);

	document.getElementById("n1_7").innerHTML = n1_7;
	document.getElementById("n2_7").innerHTML = n2_7;

	// Son primos relativos, así que la fracción simplificada es simplemente n1_7 / n2_7
	guardarRespuesta(7, n1_7, n2_7);
}

// Ejercicio 8:
// Tiene la misma lógica del Ejercicio 1. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 8
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_8", "nr_8", "dr_8" y "signor_8".
function Ejercicio08(){

    activated[8] = true;
	// Borra todo lo de la respuesta anterior 
	limpiarRespuestas(["intr_8", "nr_8", "dr_8", "signor_8"]);

	// Genera el MCD (un número entre 2 y 5)
	m_8 = enteroAleatorio(2, 5);

	// Genera n1 (2 o 4)
	n1_8 = 2*enteroAleatorio(1, 2);

	// Genera n2 (3 o 5)
	n2_8 = 2*enteroAleatorio(1, 2) + 1;

	// Obtiene A y B 
	var nums = [m_8*n1_8, m_8*n2_8];
	var nums_names = ["n1_8", "n2_8"];

	// Los añade al HTML
	for(i=0;i<2;i++){
		curr_name = nums_names[i];
		document.getElementById(curr_name).innerHTML = nums[i];
	}

	// Guarda la respuesta en el arreglo de respuestas
	guardarRespuesta(8, -n1_8, n2_8);

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_8").innerHTML = "- ";
}

// Ejercicio 9:
// Tiene la misma lógica del Ejercicio 2. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 9
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_9", "nr_9", "dr_9" y "signor_9".
function Ejercicio09(){

    activated[9] = true;
	// Borra todo lo de la respuesta anterior 
	limpiarRespuestas(["intr_9", "nr_9", "dr_9", "signor_9"]);

	// Genera el MCD como un divisor común
	n1_9 = enteroAleatorio(1, 50);
	var maxK = Math.floor(200 / n1_9);
	if(maxK < 1)
		maxK = 1;
	var k = enteroAleatorio(1, maxK);
	n2_9 = n1_9 * k;
	
	// Mantener el número menor en la primera posición
	var nums = [n1_9, n2_9];
	var nums_names = ["n1_9", "n2_9"];

	for(var i = 0; i < 2; i++){
		var curr_name = nums_names[i];
		document.getElementById(curr_name).innerHTML = nums[i];
	}

	// En este caso, la respuesta es -1/k, ya que n2_9 = n1_9 * k. Por lo tanto, la fracción simplificada es -1/k.
	guardarRespuesta(9, -1, k);

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_9").innerHTML = "- ";
}

// Ejercicio 10:
// Tiene la misma lógica del Ejercicio 3. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 10
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_10", "nr_10", "dr_10" y "signor_10".
function Ejercicio10(){

    activated[10] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_10", "nr_10", "dr_10", "signor_10"]);

	var primes = escogerPrimosDistintos(2);
	pr_10[0] = primes[0];
	pr_10[1] = primes[1];

	for(var i = 0; i < 4; i++)
		pow_10[i] = enteroAleatorio(1, 3);

	var exp11 = pow_10[0];
	var exp12 = pow_10[1];
	var exp21 = pow_10[2];
	var exp22 = pow_10[3];

	n1_10 = Math.pow(pr_10[0], exp11) * Math.pow(pr_10[1], exp12);
	n2_10 = Math.pow(pr_10[0], exp21) * Math.pow(pr_10[1], exp22);

	document.getElementById("n1_10").innerHTML = n1_10;
	document.getElementById("n2_10").innerHTML = n2_10;

	// Ahora, se obtiene el numerador y el denominador de la fracción simplificada. Para ello,
	// basta con dividir n1_10 y n2_10 entre m_10.
	var min1 = exp11 <= exp21 ? exp11 : exp21;
	var min2 = exp12 <= exp22 ? exp12 : exp22;
	m_10 = Math.pow(pr_10[0], min1) * Math.pow(pr_10[1], min2);

	var num = n1_10 / m_10;
	var den = n2_10 / m_10;

	// Guarda la respuesta en el arreglo de respuestas
	guardarRespuesta(10, -num, den);

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_10").innerHTML = "- ";
}

// Ejercicio 11:
// Tiene la misma lógica del Ejercicio 4. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 11
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_11", "nr_11", "dr_11" y "signor_11".
function Ejercicio11(){

    activated[11] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_11", "nr_11", "dr_11", "signor_11"]);

	var primes = escogerPrimosDistintos(2);
	pr_11[0] = primes[0];
	pr_11[1] = primes[1];

	m_11 = enteroAleatorio(1, 20);
	n1_11 = m_11 * pr_11[0];
	n2_11 = m_11 * pr_11[1];

	document.getElementById("n1_11").innerHTML = n1_11;
	document.getElementById("n2_11").innerHTML = n2_11;

	// La fracción simplificada es simplemente pr_11[0] / pr_11[1]
	guardarRespuesta(11, -pr_11[0], pr_11[1]);

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_11").innerHTML = "- ";
}

// Ejercicio 12:
// Tiene la misma lógica del Ejercicio 5. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 12
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_12", "nr_12", "dr_12" y "signor_12".
function Ejercicio12(){

    activated[12] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_12", "nr_12", "dr_12", "signor_12"]);

	var primes = escogerPrimosDistintos(4);
	pr_12[0] = primes[0];
	pr_12[1] = primes[1];
	pr_12[2] = primes[2];
	pr_12[3] = primes[3];

	m_12 = enteroAleatorio(1, 20);
	n1_12 = m_12 * pr_12[0] * pr_12[1];
	n2_12 = m_12 * pr_12[2] * pr_12[3];

	document.getElementById("n1_12").innerHTML = n1_12;
	document.getElementById("n2_12").innerHTML = n2_12;

	// La fracción simplificada es simplemente pr_12[0] * pr_12[1] / (pr_12[2] * pr_12[3])
	guardarRespuesta(12, -pr_12[0] * pr_12[1], pr_12[2] * pr_12[3]);

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_12").innerHTML = "- ";
}

// Ejercicio 13:
// Tiene la misma lógica del Ejercicio 6. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 13
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_13", "nr_13", "dr_13" y "signor_13".
function Ejercicio13(){

    activated[13] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_13", "nr_13", "dr_13", "signor_13"]);

	var primes = escogerPrimosDistintos(4);
	pr_13[0] = primes[0];
	pr_13[1] = primes[1];
	pr_13[2] = primes[2];
	pr_13[3] = primes[3];

	for(var i = 0; i < 4; i++)
		pow_13[i] = enteroAleatorio(1, 3);

	m_13 = enteroAleatorio(1, 20);
	n1_13 = m_13 * Math.pow(pr_13[0], pow_13[0]) * Math.pow(pr_13[1], pow_13[1]);
	n2_13 = m_13 * Math.pow(pr_13[2], pow_13[2]) * Math.pow(pr_13[3], pow_13[3]);

	document.getElementById("n1_13").innerHTML = n1_13;
	document.getElementById("n2_13").innerHTML = n2_13;

	// La fracción simplificada es simplemente (pr_13[0]^pow_13[0] * pr_13[1]^pow_13[1]) / (pr_13[2]^pow_13[2] * pr_13[3]^pow_13[3])
	guardarRespuesta(13, -Math.pow(pr_13[0], pow_13[0]) * Math.pow(pr_13[1], pow_13[1]), Math.pow(pr_13[2], pow_13[2]) * Math.pow(pr_13[3], pow_13[3]));

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_13").innerHTML = "- ";
}

// Ejercicio 14:
// Tiene la misma lógica del Ejercicio 7. Solamente se agrega
// un signo menos al HTML. La respuesta se guarda en el arreglo de respuestas en la posición 14
// Los subíndices de los elementos HTML que contienen la respuesta son "intr_14", "nr_14", "dr_14" y "signor_14".
function Ejercicio14(){

    activated[14] = true;
	// Borra las respuestas anteriores
	limpiarRespuestas(["intr_14", "nr_14", "dr_14", "signor_14"]);

	var primes = escogerPrimosDistintos(4);
	pr_14[0] = primes[0];
	pr_14[1] = primes[1];
	pr_14[2] = primes[2];
	pr_14[3] = primes[3];

	for(var i = 0; i < 4; i++)
		pow_14[i] = enteroAleatorio(1, 3);

	n1_14 = Math.pow(pr_14[0], pow_14[0]) * Math.pow(pr_14[1], pow_14[1]);
	n2_14 = Math.pow(pr_14[2], pow_14[2]) * Math.pow(pr_14[3], pow_14[3]);

	document.getElementById("n1_14").innerHTML = n1_14;
	document.getElementById("n2_14").innerHTML = n2_14;

	// Son primos relativos, así que la fracción simplificada es simplemente n1_14 / n2_14
	guardarRespuesta(14, -n1_14, n2_14);

	// Agrega un signo menos en el HTML (le agrega un espacio para que se vea bien)
	document.getElementById("signo1_14").innerHTML = "- ";
}

