/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

https://onlinegdb.com/Hcmm5MSKy
*/
function sumar()
{
	let numeroIngresadoUno;
	let numeroIngresadoDos;
	let resultado;

	numeroIngresadoUno = document.getElementById("txtIdNumeroUno").value;
	numeroIngresadoDos = document.getElementById("txtIdNumeroDos").value;

	numeroIngresadoUno = parseInt(numeroIngresadoUno);
	numeroIngresadoDos = parseInt(numeroIngresadoDos);

	resultado = numeroIngresadoUno + numeroIngresadoDos;

	alert("La suma es " + resultado );
}

