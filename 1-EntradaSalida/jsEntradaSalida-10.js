/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let sueldo;

	sueldo = document.getElementById("txtIdImporte").value;

	sueldo = parseInt(sueldo);

	document.getElementById("txtIdResultado").value = sueldo - sueldo * 0.25;

	
}
