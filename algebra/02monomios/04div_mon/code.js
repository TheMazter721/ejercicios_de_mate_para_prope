// Variables globales para los ejercicios de mcm
var primos = [2, 3, 5, 7, 11];

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
              "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
              "z"];

// La siguiente función permite generar n letras distintas de forma aleatoria. Para ello, primero genera 
// un arreglo con todas las letras del alfabeto, y luego lo permuta de forma aleatoria. Finalmente, regresa las primeras n letras del arreglo permutado.
function nLetrasDistintas(n){
    var perm = permutarArreglo(letras);
    var resultado = [];
    for(var i = 0; i < n; i++)
        resultado[i] = perm[i];
    return resultado;
}



var n_1;
var n1_2, n2_2, common_2;
var n1_3, n2_3, n3_3, n4_3, m_3;
var p1_4, p2_4, p3_4, p4_4;
var pow14_4, pow24_4, pow34_4, pow44_4, pow54_4, pow64_4;
var p1_5, p2_5, p3_5, p4_5;
var n1_5, n2_5, n3_5, n4_5, n5_5, n6_5, n7_5, n8_5, m_5;
var p1_6, p2_6, p3_6, p4_6;
var n1_6, n2_6, n3_6, n4_6, n5_6, n6_6, n7_6, n8_6, m_6, l_6;

// Para generar números enteros aleatorios
function enteroAleatorio(a,b){ // Genera números aleatorios entre a y b
	var x = a + Math.floor((b-a+1)*Math.random());
	return x;
}

// Función para regresar un arreglo que sea permutación
// aleatoria de otro
function permutarArreglo(A){
    var Alen = A.length;
    var lenm1 = Alen - 1;
    var B = [];
    B[lenm1] = 0;
    var cont = 0;

    while(cont < Alen){
        var idx = enteroAleatorio(0, lenm1);
        var curr = A[idx];
        while(B.includes(curr)){
            idx = enteroAleatorio(0, lenm1);
            curr = A[idx];
        }
        B[cont] = curr;
        cont++;
    }
    return B;
}

function escogerPrimosDistintos(cantidad){
    var perm = permutarArreglo(primos);
    var resultado = [];
    for(var i = 0; i < cantidad; i++)
        resultado[i] = perm[i];
    return resultado;
}

function primerosMultiplos(numero, cantidad){
    var lista = [];
    for(var i = 1; i <= cantidad; i++)
        lista.push(numero * i);
    return lista;
}

function primerMultiploComun(a, b, cantidad){
    var primerosA = primerosMultiplos(a, cantidad);
    var primerosB = primerosMultiplos(b, cantidad);
    for(var i = 0; i < primerosA.length; i++){
        if(primerosB.includes(primerosA[i]))
            return primerosA[i];
    }
    return a * b;
}

function mcd(a, b){
    a = Math.abs(a);
    b = Math.abs(b);
    while(b){
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function mcm(a, b){
    if(a === 0 || b === 0)
        return 0;
    return Math.abs((a * b) / mcd(a, b));
}

function limpiarRespuestas(ids){
    for(var i = 0; i < ids.length; i++){
        var elem = document.getElementById(ids[i]);
        if(elem)
            elem.innerHTML = "&ZeroWidthSpace;";
    }
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

// Función para que el innerHTML de un elemento
// sea una coma. Similar a la función limpiarRespuestas
function mostrarComas(ids){
	for(var i = 0; i < ids.length; i++){
		var elem = document.getElementById(ids[i]);
		if(elem)
			elem.innerHTML = ",";
	}
}

// Función para que el innerHTML de un elemento
// sea un punto. Similar a la función limpiarRespuestas
function mostrarPuntos(ids){
	for(var i = 0; i < ids.length; i++){
		var elem = document.getElementById(ids[i]);
		if(elem)
			elem.innerHTML = ".";
	}
}

class Monomio {
    constructor(
        coeficiente = null,
        literales = null,
        exponentes = null,
        idCoeficiente = "coef_1",
        idsLiterales = ["lit1_1", "lit2_1"],
        idsExponentes = ["exp1_1", "exp2_1"]
    ) {
        // Asignación de atributos de IDs para el DOM
        this.idCoeficiente = idCoeficiente;
        this.idsLiterales = idsLiterales;
        this.idsExponentes = idsExponentes; // (Se asume que la segunda lista de IDs es para exponentes)

        // 1. Manejo de Literales
        if (literales === null) {
            this.cantidadLiterales = 2;
            // Utiliza la función externa solicitada para obtener 2 letras aleatorias
            this.literales = nLetrasDistintas(2);
        } else {
            this.literales = literales;
            this.cantidadLiterales = literales.length;
        }

        // 2. Manejo del Coeficiente (Por defecto entero > 1, ej: entre 2 y 10)
        if (coeficiente === null) {
            this.coeficiente = Math.floor(Math.random() * 9) + 2;
        } else {
            this.coeficiente = coeficiente;
        }

        // 3. Manejo de Exponentes (Por defecto enteros aleatorios entre 1 y 5)
        if (exponentes === null) {
            this.exponentes = Array.from(
                { length: this.cantidadLiterales },
                () => Math.floor(Math.random() * 5) + 1
            );
        } else {
            this.exponentes = exponentes;
        }
    }

    // --- MÉTODOS AUXILIARES ---

    // Genera una estructura del tipo { 'x': 2, 'y': 3 } para comparar términos sin importar el orden
    _obtenerMapaVariables() {
        let mapa = {};
        for (let i = 0; i < this.cantidadLiterales; i++) {
            let lit = this.literales[i];
            let exp = this.exponentes[i];
            mapa[lit] = (mapa[lit] || 0) + exp;
        }
        return mapa;
    }

    // --- MÉRITO DE SEMEJANZA ---

    esSemejante(otroMonomio) {
        const mapaThis = this._obtenerMapaVariables();
        const mapaOtro = otroMonomio._obtenerMapaVariables();

        const llavesThis = Object.keys(mapaThis);
        const llavesOtro = Object.keys(mapaOtro);

        if (llavesThis.length !== llavesOtro.length) return false;

        for (let lit of llavesThis) {
            if (mapaOtro[lit] !== mapaThis[lit]) {
                return false;
            }
        }
        return true;
    }

    // --- MÉTODOS ARITMÉTICOS ---

    sumar(otroMonomio) {
        if (!this.esSemejante(otroMonomio)) {
            throw new Error("No se pueden sumar monomios no semejantes.");
        }
        return new Monomio(
            this.coeficiente + otroMonomio.coeficiente,
            [...this.literales],
            [...this.exponentes],
            this.idCoeficiente,
            this.idsLiterales,
            this.idsExponentes
        );
    }

    restar(otroMonomio) {
        if (!this.esSemejante(otroMonomio)) {
            throw new Error("No se pueden restar monomios no semejantes.");
        }
        return new Monomio(
            this.coeficiente - otroMonomio.coeficiente,
            [...this.literales],
            [...this.exponentes],
            this.idCoeficiente,
            this.idsLiterales,
            this.idsExponentes
        );
    }

    multiplicar(otroMonomio) {
        let nuevoCoeficiente = this.coeficiente * otroMonomio.coeficiente;
        
        // Sumar exponentes de bases iguales
        let mapaCombined = this._obtenerMapaVariables();
        let mapaOtro = otroMonomio._obtenerMapaVariables();

        for (let lit in mapaOtro) {
            mapaCombined[lit] = (mapaCombined[lit] || 0) + mapaOtro[lit];
        }

        let nuevasLiterales = Object.keys(mapaCombined);
        let nuevosExponentes = Object.values(mapaCombined);

        return new Monomio(nuevoCoeficiente, nuevasLiterales, nuevosExponentes);
    }

    dividir(otroMonomio) {
        let nuevoCoeficiente = this.coeficiente / otroMonomio.coeficiente;

        // Restar exponentes de bases iguales
        let mapaCombined = this._obtenerMapaVariables();
        let mapaOtro = otroMonomio._obtenerMapaVariables();

        for (let lit in mapaOtro) {
            mapaCombined[lit] = (mapaCombined[lit] || 0) - mapaOtro[lit];
        }

        let nuevasLiterales = [];
        let nuevosExponentes = [];

        for (let lit in mapaCombined) {
            if (mapaCombined[lit] !== 0) { // Si el exponente da 0, x^0 = 1 (se elimina la literal)
                nuevasLiterales.push(lit);
                nuevosExponentes.push(mapaCombined[lit]);
            }
        }

        return new Monomio(nuevoCoeficiente, nuevasLiterales, nuevosExponentes);
    }

    // --- MÉTODO DE INYECCIÓN EN DOM (HTML) ---

    escribeMonomio() {
        // 1. Inyectar Coeficiente
        const elemCoef = document.getElementById(this.idCoeficiente);
        if (elemCoef) {
            // Convención algebraia: Si el coeficiente es 1, opcionalmente se oculta o se escribe
            // Además, si el coeficiente es -1, se puede mostrar como "-" en lugar de "-1"
            if (this.coeficiente === 1) {
                elemCoef.textContent = ""; // O podrías poner "1" si prefieres mostrarlo
            } else if (this.coeficiente === -1) {
                elemCoef.textContent = "-";
            } else {
                elemCoef.textContent = this.coeficiente;
            }
        }

        // 2. Inyectar Literales
        for (let i = 0; i < this.idsLiterales.length; i++) {
            const elemLit = document.getElementById(this.idsLiterales[i]);
            if (elemLit) {
                elemLit.textContent = this.literales[i] !== undefined ? this.literales[i] : "";
            }
        }

        // 3. Inyectar Exponentes
        for (let i = 0; i < this.idsExponentes.length; i++) {
            const elemExp = document.getElementById(this.idsExponentes[i]);
            if (elemExp) {
                let exp = this.exponentes[i];
                if (exp !== undefined) {
                    // Si el exponente es 1, no se suele mostrar en álgebra
                    elemExp.textContent = exp === 1 ? "" : exp;
                } else {
                    elemExp.textContent = "";
                }
            }
        }
    }
}