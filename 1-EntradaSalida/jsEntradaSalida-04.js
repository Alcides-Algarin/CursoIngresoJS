/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
https://onlinegdb.com/4bBh802_A

*/
function mostrar()
{
	let nombreIngresado;
	
	nombreIngresado = prompt("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;

}

