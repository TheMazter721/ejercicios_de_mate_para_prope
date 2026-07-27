var a1;
var b1;
var c1;

var a2;
var b2;
var c2;

var a3;
var b3;
var c3;

var a4;
var b4;
var c4;

var a5;
var b5;
var c5;

var a6;
var b6;
var c6;

var a7;
var b7;
var c7;

var a8;
var b8;
var c8;

var a9;
var b9;
var c9;

var a10;
var b10;
var c10;

var a11;
var b11;
var c11;

var a12;
var b12;
var c12;
var a13;
var b13;
var c13;
var a14;
var b14;
var c14;
var d14;
var a15;
var b15;
var c15;
var d15;
var a16;
var b16;
var c16;
var d16;
var a17;
var b17;
var c17;
var d17;
var a18;
var b18;
var c18;
var d18;
var a19;
var b19;
var c19;
var d19;
var a20;
var b20;
var c20;
var d20;
var a21;
var b21;
var c21;
var d21;
var a22;
var b22;
var c22;
var d22;
var a23;
var b23;
var c23;
var d23;
var a24;
var b24;
var c24;
var d24;
var a25;
var b25;
var c25;
var d25;
var a26;
var b26;
var c26;
var d26;
var a27;
var b27;
var c27;
var d27;
var a28;
var b28;
var c28;
var d28;
var a29;
var b29;
var c29;
var d29;
var a30;
var b30;
var c30;
var d30;

// Variables globales para los Ejercicios 12 a 30


var activated = [];
	function enteroAleatorio(a,b)
	/* Funcion para construir un entero aleatorio entre a y b*/
	{
		var x = a + Math.floor((b-a+1)*Math.random());
		return x;
	}
	
	function Ejercicio01()
	{

    activated[1] = true;
		document.getElementById("r1").innerHTML = "";
		a1 = enteroAleatorio(0,9);
		b1 = enteroAleatorio(0,9);
		c1 = enteroAleatorio(0,9);
		document.getElementById("a1").innerHTML = a1;
		document.getElementById("op1_1").innerHTML = "+";
		document.getElementById("par1_1").innerHTML = "(";
		document.getElementById("b1").innerHTML = b1;
		document.getElementById("op2_1").innerHTML = "+";
		document.getElementById("c1").innerHTML = c1;
		document.getElementById("par2_1").innerHTML = ")";		
	}
	
	function Respuesta01()
	{

    if (!activated[1]) return;
		document.getElementById("r1").innerHTML = a1 + b1 + c1;
	}

	function Ejercicio02()
	{

    activated[2] = true;
		document.getElementById("r2").innerHTML = "";
		a2 = enteroAleatorio(0,9);
		b2 = enteroAleatorio(0,9);
		c2 = enteroAleatorio(0,9);
		
		document.getElementById("par1_2").innerHTML = "(";		
		document.getElementById("a2").innerHTML = a2;
		document.getElementById("op1_2").innerHTML = "+";
		document.getElementById("b2").innerHTML = b2;
		document.getElementById("par2_2").innerHTML = ")";
		document.getElementById("op2_2").innerHTML = "+";
		document.getElementById("c2").innerHTML = c2;		
	}
	
	function Respuesta02()
	{

    if (!activated[2]) return;
		document.getElementById("r2").innerHTML = a2 + b2 + c2;
	}
	
	function Ejercicio03()
	{

    activated[3] = true;
		document.getElementById("r3").innerHTML = "";
		a3 = enteroAleatorio(0,9);
		b3 = enteroAleatorio(0,9);
		c3 = enteroAleatorio(0,9);
		document.getElementById("a3").innerHTML = a3;
		document.getElementById("op1_3").innerHTML = "+";
		document.getElementById("par1_3").innerHTML = "(";
		document.getElementById("b3").innerHTML = b3;
		document.getElementById("op2_3").innerHTML = "-";
		document.getElementById("c3").innerHTML = c3;
		document.getElementById("par2_3").innerHTML = ")";						
	}
	
	function Respuesta03()
	{

    if (!activated[3]) return;
		document.getElementById("r3").innerHTML = a3 + b3 - c3;
	}
	
	function Ejercicio04()
	{

    activated[4] = true;
		document.getElementById("r4").innerHTML = "";
		a4 = enteroAleatorio(0,9);
		b4 = enteroAleatorio(0,9);
		c4 = enteroAleatorio(0,9);
		
		document.getElementById("a4").innerHTML = a4;
		document.getElementById("op1_4").innerHTML = "-";
		document.getElementById("par1_4").innerHTML = "(";
		document.getElementById("b4").innerHTML = b4;
		document.getElementById("op2_4").innerHTML = "+";
		document.getElementById("c4").innerHTML = c4;
		document.getElementById("par2_4").innerHTML = ")";		
	}
	
	function Respuesta04()
	{

    if (!activated[4]) return;
		document.getElementById("r4").innerHTML = a4 - (b4 + c4);
	}
	
	function Ejercicio05()
	{

    activated[5] = true;
		document.getElementById("r5").innerHTML = "";
		a5 = enteroAleatorio(0,9);
		b5 = enteroAleatorio(0,9);
		c5 = enteroAleatorio(0,9);
		document.getElementById("a5").innerHTML = a5;
		document.getElementById("op1_5").innerHTML = "-";
		document.getElementById("par1_5").innerHTML = "(";
		document.getElementById("b5").innerHTML = b5;
		document.getElementById("op2_5").innerHTML = "-";
		document.getElementById("c5").innerHTML = c5;
		document.getElementById("par2_5").innerHTML = ")";				
	}
	
	function Respuesta05()
	{

    if (!activated[5]) return;
		document.getElementById("r5").innerHTML = a5 - (b5 -c5);
	}
	
	function Ejercicio06()
	{

    activated[6] = true;
		document.getElementById("r6").innerHTML = "";
		a6 = enteroAleatorio(0,9);
		b6 = enteroAleatorio(0,9);
		c6 = enteroAleatorio(0,19);
		
		document.getElementById("op1_6").innerHTML = "-";		
		document.getElementById("par1_6").innerHTML = "(";		
		document.getElementById("a6").innerHTML = a6;
		document.getElementById("op2_6").innerHTML = "+";
		document.getElementById("b6").innerHTML = b6;
		document.getElementById("par2_6").innerHTML = ")";
		document.getElementById("op3_6").innerHTML = "+";
		document.getElementById("c6").innerHTML = c6;		
	}
	
	function Respuesta06()
	{

    if (!activated[6]) return;
		document.getElementById("r6").innerHTML = (-1)*(a6 + b6) + c6;
	}
	
	function Ejercicio07()
	{

    activated[7] = true;
		document.getElementById("r7").innerHTML = "";
		a7 = enteroAleatorio(0,9);
		b7 = enteroAleatorio(0,9);
		c7 = enteroAleatorio(0,9);
		
		document.getElementById("op1_7").innerHTML = "-";		
		document.getElementById("par1_7").innerHTML = "(";		
		document.getElementById("a7").innerHTML = a7;
		document.getElementById("op2_7").innerHTML = "-";
		document.getElementById("b7").innerHTML = b7;
		document.getElementById("par2_7").innerHTML = ")";
		document.getElementById("op3_7").innerHTML = "+";
		document.getElementById("c7").innerHTML = c7;			
	}
	
	function Respuesta07()
	{

    if (!activated[7]) return;
		document.getElementById("r7").innerHTML = (-1)*(a7 - b7) + c7;
	}
	
	function Ejercicio08()
	{

    activated[8] = true;
		document.getElementById("r8").innerHTML = "";
		a8 = enteroAleatorio(0,9);
		b8 = enteroAleatorio(0,9);
		c8 = enteroAleatorio(0,9);
		
		document.getElementById("op1_8").innerHTML = "-";
		document.getElementById("a8").innerHTML = a8;
		document.getElementById("op2_8").innerHTML = "-";
		document.getElementById("par1_8").innerHTML = "(";
		document.getElementById("b8").innerHTML = b8;
		document.getElementById("op3_8").innerHTML = "+";
		document.getElementById("c8").innerHTML = c8;
		document.getElementById("par2_8").innerHTML = ")";	
	}
	
	function Respuesta08()
	{

    if (!activated[8]) return;
		document.getElementById("r8").innerHTML =(-1)*a8-(b8+c8);
	}
	
	function Ejercicio09()
	{

    activated[9] = true;
		document.getElementById("r9").innerHTML = "";
		a9 = enteroAleatorio(0,9);
		b9 = enteroAleatorio(0,9);
		c9 = enteroAleatorio(0,9);
		
		document.getElementById("op1_9").innerHTML = "-";		
		document.getElementById("par1_9").innerHTML = "(";		
		document.getElementById("a9").innerHTML = a9;
		document.getElementById("op2_9").innerHTML = "+";
		document.getElementById("b9").innerHTML = b9;
		document.getElementById("par2_9").innerHTML = ")";
		document.getElementById("op3_9").innerHTML = "-";
		document.getElementById("c9").innerHTML = c9;		
	}
	
	function Respuesta09()
	{

    if (!activated[9]) return;
		document.getElementById("r9").innerHTML = (-1)*(a9 + b9) - c9;
	}
	
	function Ejercicio10()
	{

    activated[10] = true;
		document.getElementById("r10").innerHTML = "";
		a10 = enteroAleatorio(0,9);
		b10 = enteroAleatorio(0,9);
		c10 = enteroAleatorio(0,9);
		
		document.getElementById("a10").innerHTML = a10;		
		document.getElementById("op1_10").innerHTML = "&middot;";		
		document.getElementById("b10").innerHTML = b10;
		document.getElementById("op2_10").innerHTML = "+";
		document.getElementById("c10").innerHTML = c10;
	}
	
	function Respuesta10()
	{

    if (!activated[10]) return;
		document.getElementById("r10").innerHTML = a10*b10 + c10;
	}
	
	function Ejercicio11()
	{

    activated[11] = true;
		document.getElementById("r11").innerHTML = "";
		a11 = enteroAleatorio(0,9);
		b11 = enteroAleatorio(0,5);
		c11 = enteroAleatorio(0,5);
		
		document.getElementById("a11").innerHTML = a11;		
		document.getElementById("op1_11").innerHTML = "&middot;";	
		document.getElementById("par1_11").innerHTML = "(";
		document.getElementById("b11").innerHTML = b11;
		document.getElementById("op2_11").innerHTML = "+";
		document.getElementById("c11").innerHTML = c11;
		document.getElementById("par2_11").innerHTML = ")";
	}
	
	function Respuesta11()
	{

    if (!activated[11]) return;
		document.getElementById("r11").innerHTML = a11*(b11 + c11);
	}
	
	function Ejercicio12()
	{

    activated[12] = true;
		document.getElementById("r12").innerHTML = "";
		a12 = enteroAleatorio(0,5);
		b12 = enteroAleatorio(0,7);
		c12 = enteroAleatorio(0,29);
		
		document.getElementById("a12").innerHTML = a12;		
		document.getElementById("op1_12").innerHTML = "&middot;";		
		document.getElementById("b12").innerHTML = b12;
		document.getElementById("op2_12").innerHTML = "-";
		document.getElementById("c12").innerHTML = c12;
	}
	
	function Respuesta12()
	{

    if (!activated[12]) return;
		document.getElementById("r12").innerHTML = a12*b12 - c12;
	}
	
	function Ejercicio13()
	{

    activated[13] = true;
		document.getElementById("r13").innerHTML = "";
		a13 = enteroAleatorio(0,9);
		b13 = enteroAleatorio(0,9);
		c13 = enteroAleatorio(0,9);
		
		document.getElementById("a13").innerHTML = a13;		
		document.getElementById("op1_13").innerHTML = "&middot;";	
		document.getElementById("par1_13").innerHTML = "(";
		document.getElementById("b13").innerHTML = b13;
		document.getElementById("op2_13").innerHTML = "-";
		document.getElementById("c13").innerHTML = c13;
		document.getElementById("par2_13").innerHTML = ")";
	}
	
	function Respuesta13()
	{

    if (!activated[13]) return;
		document.getElementById("r13").innerHTML = a13*(b13 - c13);
	}
	
	function Ejercicio14()
	{

    activated[14] = true;
		document.getElementById("r14").innerHTML = "";
		a14 = enteroAleatorio(0,9);
		b14 = enteroAleatorio(0,5);
		c14 = enteroAleatorio(0,5);
		d14 = enteroAleatorio(0,9);
		
		document.getElementById("a14").innerHTML = a14;		
		document.getElementById("op1_14").innerHTML = "+";	
		document.getElementById("b14").innerHTML = b14;
		document.getElementById("op2_14").innerHTML = "&middot;";
		document.getElementById("c14").innerHTML = c14;
		document.getElementById("op3_14").innerHTML = "+";
		document.getElementById("d14").innerHTML = d14;
	}
	
	function Respuesta14()
	{

    if (!activated[14]) return;
		document.getElementById("r14").innerHTML = a14 + b14*c14 + d14;
	}
	
	function Ejercicio15()
	{

    activated[15] = true;
		document.getElementById("r15").innerHTML = "";
		a15 = enteroAleatorio(0,9);
		b15 = enteroAleatorio(0,9);
		c15 = enteroAleatorio(0,5);
		d15 = enteroAleatorio(0,5);
		
		document.getElementById("a15").innerHTML = a15;		
		document.getElementById("op1_15").innerHTML = "+";
		document.getElementById("b15").innerHTML = b15;		
		document.getElementById("op2_15").innerHTML = "&middot;";	
		document.getElementById("par1_15").innerHTML = "(";
		document.getElementById("c15").innerHTML = c15;
		document.getElementById("op3_15").innerHTML = "+";
		document.getElementById("d15").innerHTML = d15;
		document.getElementById("par2_15").innerHTML = ")";
	}
	
	function Respuesta15()
	{

    if (!activated[15]) return;
		document.getElementById("r15").innerHTML = a15 + b15*(c15 + d15);
	}
	
	function Ejercicio16()
	{

    activated[16] = true;
		document.getElementById("r16").innerHTML = "";
		a16 = enteroAleatorio(0,5);
		b16 = enteroAleatorio(0,5);
		c16 = enteroAleatorio(0,5);
		d16 = enteroAleatorio(0,5);
		
		document.getElementById("par1_16").innerHTML = "(";		
		document.getElementById("a16").innerHTML = a16;
		document.getElementById("op1_16").innerHTML = "+";
		document.getElementById("b16").innerHTML = b16;
		document.getElementById("par2_16").innerHTML = ")";
		document.getElementById("op2_16").innerHTML = "&middot;";
		document.getElementById("par3_16").innerHTML = "(";
		document.getElementById("c16").innerHTML = c16;	
		document.getElementById("op3_16").innerHTML = "+";
		document.getElementById("d16").innerHTML = d16;	
		document.getElementById("par4_16").innerHTML = ")";
	}
	
	function Respuesta16()
	{

    if (!activated[16]) return;
		document.getElementById("r16").innerHTML = (a16 + b16)*(c16+d16);
	}
	
	function Ejercicio17()
	{

    activated[17] = true;
		document.getElementById("r17").innerHTML = "";
		a17 = enteroAleatorio(0,9);
		b17 = enteroAleatorio(0,5);
		c17 = enteroAleatorio(0,5);
		d17 = enteroAleatorio(0,9);
		
		document.getElementById("a17").innerHTML = a17;		
		document.getElementById("op1_17").innerHTML = "-";	
		document.getElementById("b17").innerHTML = b17;
		document.getElementById("op2_17").innerHTML = "&middot;";
		document.getElementById("c17").innerHTML = c17;
		document.getElementById("op3_17").innerHTML = "+";
		document.getElementById("d17").innerHTML = d17;
	}
	
	function Respuesta17()
	{

    if (!activated[17]) return;
		document.getElementById("r17").innerHTML = a17 - b17*c17 + d17;
	}
	
	function Ejercicio18()
	{

    activated[18] = true;
		document.getElementById("r18").innerHTML = "";
		a18 = enteroAleatorio(0,9);
		b18 = enteroAleatorio(0,9);
		c18 = enteroAleatorio(0,5);
		d18 = enteroAleatorio(0,5);
		
		document.getElementById("a18").innerHTML = a18;		
		document.getElementById("op1_18").innerHTML = "-";
		document.getElementById("b18").innerHTML = b18;		
		document.getElementById("op2_18").innerHTML = "&middot;";	
		document.getElementById("par1_18").innerHTML = "(";
		document.getElementById("c18").innerHTML = c18;
		document.getElementById("op3_18").innerHTML = "+";
		document.getElementById("d18").innerHTML = d18;
		document.getElementById("par2_18").innerHTML = ")";
	}
	
	function Respuesta18()
	{

    if (!activated[18]) return;
		document.getElementById("r18").innerHTML = a18 - b18*(c18 + d18);
	}
	
	function Ejercicio19()
	{

    activated[19] = true;
		document.getElementById("r19").innerHTML = "";
		a19 = enteroAleatorio(0,5);
		b19 = enteroAleatorio(0,5);
		c19 = enteroAleatorio(0,5);
		d19 = enteroAleatorio(0,5);
		
		document.getElementById("par1_19").innerHTML = "(";		
		document.getElementById("a19").innerHTML = a19;
		document.getElementById("op1_19").innerHTML = "-";
		document.getElementById("b19").innerHTML = b19;
		document.getElementById("par2_19").innerHTML = ")";
		document.getElementById("op2_19").innerHTML = "&middot;";
		document.getElementById("par3_19").innerHTML = "(";
		document.getElementById("c19").innerHTML = c19;	
		document.getElementById("op3_19").innerHTML = "+";
		document.getElementById("d19").innerHTML = d19;	
		document.getElementById("par4_19").innerHTML = ")";
	}
	
	function Respuesta19()
	{

    if (!activated[19]) return;
		document.getElementById("r19").innerHTML = (a19 - b19)*(c19 + d19);
	}
	
	function Ejercicio20()
	{

    activated[20] = true;
		document.getElementById("r20").innerHTML = "";
		a20 = enteroAleatorio(0,9);
		b20 = enteroAleatorio(0,5);
		c20 = enteroAleatorio(0,5);
		d20 = enteroAleatorio(0,9);
		
		document.getElementById("a20").innerHTML = a20;		
		document.getElementById("op1_20").innerHTML = "-";	
		document.getElementById("b20").innerHTML = b20;
		document.getElementById("op2_20").innerHTML = "&middot;";
		document.getElementById("c20").innerHTML = c20;
		document.getElementById("op3_20").innerHTML = "-";
		document.getElementById("d20").innerHTML = d20;
	}
	
	function Respuesta20()
	{

    if (!activated[20]) return;
		document.getElementById("r20").innerHTML = a20 - b20*c20 - d20;
	}
	
	function Ejercicio21()
	{

    activated[21] = true;
		document.getElementById("r21").innerHTML = "";
		a21 = enteroAleatorio(0,9);
		b21 = enteroAleatorio(0,9);
		c21 = enteroAleatorio(0,9);
		d21 = enteroAleatorio(0,9);
		
		document.getElementById("a21").innerHTML = a21;		
		document.getElementById("op1_21").innerHTML = "-";
		document.getElementById("b21").innerHTML = b21;		
		document.getElementById("op2_21").innerHTML = "&middot;";	
		document.getElementById("par1_21").innerHTML = "(";
		document.getElementById("c21").innerHTML = c21;
		document.getElementById("op3_21").innerHTML = "-";
		document.getElementById("d21").innerHTML = d21;
		document.getElementById("par2_21").innerHTML = ")";
	}
	
	function Respuesta21()
	{

    if (!activated[21]) return;
		document.getElementById("r21").innerHTML = a21 - b21*(c21 - d21);
	}
	
	function Ejercicio22()
	{

    activated[22] = true;
		document.getElementById("r22").innerHTML = "";
		a22 = enteroAleatorio(0,9);
		b22 = enteroAleatorio(0,9);
		c22 = enteroAleatorio(0,9);
		d22 = enteroAleatorio(0,9);
		
		document.getElementById("par1_22").innerHTML = "(";		
		document.getElementById("a22").innerHTML = a22;
		document.getElementById("op1_22").innerHTML = "-";
		document.getElementById("b22").innerHTML = b22;
		document.getElementById("par2_22").innerHTML = ")";
		document.getElementById("op2_22").innerHTML = "&middot;";
		document.getElementById("par3_22").innerHTML = "(";
		document.getElementById("c22").innerHTML = c22;	
		document.getElementById("op3_22").innerHTML = "-";
		document.getElementById("d22").innerHTML = d22;	
		document.getElementById("par4_22").innerHTML = ")";
	}
	
	function Respuesta22()
	{

    if (!activated[22]) return;
		document.getElementById("r22").innerHTML = (a22 - b22)*(c22 - d22);
	}
	
	function Ejercicio23()
	{

    activated[23] = true;
		document.getElementById("r23").innerHTML = "";
		a23 = enteroAleatorio(0,9);
		b23 = enteroAleatorio(0,9);
		c23 = enteroAleatorio(0,9);
		d23 = enteroAleatorio(0,9);
		
		document.getElementById("a23").innerHTML = a23;		
		document.getElementById("op1_23").innerHTML = "&middot;";		
		document.getElementById("b23").innerHTML = b23;
		document.getElementById("op2_23").innerHTML = "-";
		document.getElementById("c23").innerHTML = c23;
		document.getElementById("op3_23").innerHTML = "+";
		document.getElementById("d23").innerHTML = d23;
	}
	
	function Respuesta23()
	{

    if (!activated[23]) return;
		document.getElementById("r23").innerHTML = a23*b23 - c23 + d23;
	}
	
	function Ejercicio24()
	{

    activated[24] = true;
		document.getElementById("r24").innerHTML = "";
		a24 = enteroAleatorio(0,9);
		b24 = enteroAleatorio(0,9);
		c24 = enteroAleatorio(0,9);
		d24 = enteroAleatorio(0,9);
		
		document.getElementById("a24").innerHTML = a24;		
		document.getElementById("op1_24").innerHTML = "&middot;";	
		document.getElementById("par1_24").innerHTML = "(";
		document.getElementById("b24").innerHTML = b24;
		document.getElementById("op2_24").innerHTML = "-";
		document.getElementById("c24").innerHTML = c24;
		document.getElementById("par2_24").innerHTML = ")";
		document.getElementById("op3_24").innerHTML = "+";
		document.getElementById("d24").innerHTML = d24;
	}
	
	function Respuesta24()
	{

    if (!activated[24]) return;
		document.getElementById("r24").innerHTML = a24*(b24 - c24) + d24;
	}
	
	function Ejercicio25()
	{

    activated[25] = true;
		document.getElementById("r25").innerHTML = "";
		a25 = enteroAleatorio(0,9);
		b25 = enteroAleatorio(0,9);
		c25 = enteroAleatorio(0,5);
		d25 = enteroAleatorio(0,5);
		
		document.getElementById("a25").innerHTML = a25;		
		document.getElementById("op1_25").innerHTML = "&middot;";
		document.getElementById("b25").innerHTML = b25;		
		document.getElementById("op2_25").innerHTML = "-";	
		document.getElementById("par1_25").innerHTML = "(";
		document.getElementById("c25").innerHTML = c25;
		document.getElementById("op3_25").innerHTML = "+";
		document.getElementById("d25").innerHTML = d25;
		document.getElementById("par2_25").innerHTML = ")";
	}
	
	function Respuesta25()
	{

    if (!activated[25]) return;
		document.getElementById("r25").innerHTML = a25*b25 - (c25 + d25);
	}
	
	function Ejercicio26()
	{

    activated[26] = true;
		document.getElementById("r26").innerHTML = "";
		a26 = enteroAleatorio(0,9);
		b26 = enteroAleatorio(0,9);
		c26 = enteroAleatorio(0,9);
		d26 = enteroAleatorio(0,9);
		
		document.getElementById("a26").innerHTML = a26;
		document.getElementById("op1_26").innerHTML = "&middot;";
		document.getElementById("par1_26").innerHTML = "(";
		document.getElementById("b26").innerHTML = b26;
		document.getElementById("op2_26").innerHTML = "-";
		document.getElementById("par2_26").innerHTML = "(";
		document.getElementById("c26").innerHTML = c26;
		document.getElementById("op3_26").innerHTML = "+";
		document.getElementById("d26").innerHTML = d26;
		document.getElementById("par3_26").innerHTML = ")";	
		document.getElementById("par4_26").innerHTML = ")";	
	}
	
	function Respuesta26()
	{

    if (!activated[26]) return;
		document.getElementById("r26").innerHTML = a26*(b26 - (c26 + d26));
	}
	
	function Ejercicio27()
	{

    activated[27] = true;
		document.getElementById("r27").innerHTML = "";
		a27 = enteroAleatorio(0,9);
		b27 = enteroAleatorio(0,9);
		c27 = enteroAleatorio(0,9);
		d27 = enteroAleatorio(0,9);
		
		document.getElementById("op1_27").innerHTML = "-";	
		document.getElementById("a27").innerHTML = a27;		
		document.getElementById("op2_27").innerHTML = "&middot;";	
		document.getElementById("b27").innerHTML = b27;
		document.getElementById("op3_27").innerHTML = "-";
		document.getElementById("c27").innerHTML = c27;
		document.getElementById("op4_27").innerHTML = "-";
		document.getElementById("d27").innerHTML = d27;
	}
	
	function Respuesta27()
	{

    if (!activated[27]) return;
		document.getElementById("r27").innerHTML = (-1)*a27*b27 - c27 - d27;
	}
	
	function Ejercicio28()
	{

    activated[28] = true;
		document.getElementById("r28").innerHTML = "";
		a28 = enteroAleatorio(0,9);
		b28 = enteroAleatorio(0,9);
		c28 = enteroAleatorio(0,9);
		d28 = enteroAleatorio(0,9);
		
		document.getElementById("op1_28").innerHTML = "-";
		document.getElementById("a28").innerHTML = a28;		
		document.getElementById("op2_28").innerHTML = "&middot;";
		document.getElementById("par1_28").innerHTML = "(";		
		document.getElementById("b28").innerHTML = b28;
		document.getElementById("op3_28").innerHTML = "-";
		document.getElementById("c28").innerHTML = c28;
		document.getElementById("par2_28").innerHTML = ")";	
		document.getElementById("op4_28").innerHTML = "-";
		document.getElementById("d28").innerHTML = d28;
	}
	
	function Respuesta28()
	{

    if (!activated[28]) return;
		document.getElementById("r28").innerHTML = (-1)*a28*(b28 - c28) - d28;
	}
	
	function Ejercicio29()
	{

    activated[29] = true;
		document.getElementById("r29").innerHTML = "";
		a29 = enteroAleatorio(0,9);
		b29 = enteroAleatorio(0,9);
		c29 = enteroAleatorio(0,9);
		d29 = enteroAleatorio(0,9);
		
		document.getElementById("op1_29").innerHTML = "-";	
		document.getElementById("a29").innerHTML = a29;		
		document.getElementById("op2_29").innerHTML = "&middot;";	
		document.getElementById("b29").innerHTML = b29;
		document.getElementById("op3_29").innerHTML = "-";
		document.getElementById("par1_29").innerHTML = "(";
		document.getElementById("c29").innerHTML = c29;
		document.getElementById("op4_29").innerHTML = "-";
		document.getElementById("d29").innerHTML = d29;
		document.getElementById("par2_29").innerHTML = ")";
	}
	
	function Respuesta29()
	{

    if (!activated[29]) return;
		document.getElementById("r29").innerHTML = (-1)*a29*b29 - (c29 - d29);
	}
	
	function Ejercicio30()
	{

    activated[30] = true;
		document.getElementById("r30").innerHTML = "";
		a30 = enteroAleatorio(0,9);
		b30 = enteroAleatorio(0,9);
		c30 = enteroAleatorio(0,9);
		d30 = enteroAleatorio(0,9);
		
		document.getElementById("op1_30").innerHTML = "-";
		document.getElementById("a30").innerHTML = a30;
		document.getElementById("op2_30").innerHTML = "&middot;";
		document.getElementById("par1_30").innerHTML = "(";
		document.getElementById("b30").innerHTML = b30;
		document.getElementById("op3_30").innerHTML = "-";
		document.getElementById("par2_30").innerHTML = "(";
		document.getElementById("c30").innerHTML = c30;
		document.getElementById("op4_30").innerHTML = "-";
		document.getElementById("d30").innerHTML = d30;
		document.getElementById("par3_30").innerHTML = ")";	
		document.getElementById("par4_30").innerHTML = ")";	
	}
	
	function Respuesta30()
	{

    if (!activated[30]) return;
		document.getElementById("r30").innerHTML = (-1)*a30*(b30 - (c30 - d30));
	}
	
