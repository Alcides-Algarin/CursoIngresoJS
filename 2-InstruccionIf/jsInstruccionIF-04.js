/*
	Al ingresar una edad debemos informar 
	si la persona es adolescente, 
	edad entre 13 y 17 anios (inclusive) .

	https://onlinegdb.com/ZkWdNPJJ7

*/

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <=17){
		alert("Es adolecente");
	}

}//FIN DE LA FUNCIÓN