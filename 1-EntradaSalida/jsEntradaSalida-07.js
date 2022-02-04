/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"

https://onlinegdb.com/hQy5A20U_
*/

let numeroIngresadoUno;
let numeroIngresadoDos;
let resultado;

function sumar() {

	numeroIngresadoUno = document.getElementById("txtIdNumeroUno").value;
	numeroIngresadoDos = document.getElementById("txtIdNumeroDos").value;

	numeroIngresadoUno = parseInt(numeroIngresadoUno);
	numeroIngresadoDos = parseInt(numeroIngresadoDos);

	resultado = numeroIngresadoUno + numeroIngresadoDos;
	alert("La suma es: " + resultado);
}

function restar() {

	numeroIngresadoUno = document.getElementById("txtIdNumeroUno").value;
	numeroIngresadoDos = document.getElementById("txtIdNumeroDos").value;

	numeroIngresadoUno = parseInt(numeroIngresadoUno);
	numeroIngresadoDos = parseInt(numeroIngresadoDos);

	resultado = numeroIngresadoUno - numeroIngresadoDos;
	alert("La resta es: " + resultado);

}

function multiplicar() {

	numeroIngresadoUno = document.getElementById("txtIdNumeroUno").value;
	numeroIngresadoDos = document.getElementById("txtIdNumeroDos").value;

	numeroIngresadoUno = parseInt(numeroIngresadoUno);
	numeroIngresadoDos = parseInt(numeroIngresadoDos);

	resultado = numeroIngresadoUno * numeroIngresadoDos;
	alert("La multiplicacion es: " + resultado);

}

function dividir() {

	numeroIngresadoUno = document.getElementById("txtIdNumeroUno").value;
	numeroIngresadoDos = document.getElementById("txtIdNumeroDos").value;

	numeroIngresadoUno = parseInt(numeroIngresadoUno);
	numeroIngresadoDos = parseInt(numeroIngresadoDos);

	resultado = numeroIngresadoUno / numeroIngresadoDos;
	alert("La division es: " + resultado);

}

