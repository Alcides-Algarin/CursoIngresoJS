/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

https://onlinegdb.com/11WdI446E
*/
function mostrarAumento()
{

	let sueldo;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	document.getElementById("txtIdResultado").value = sueldo + sueldo * 0.1;

	
}
