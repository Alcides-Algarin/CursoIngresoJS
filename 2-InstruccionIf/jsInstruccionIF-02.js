/*
	Al ingresar una edad debemos informar 
	solo si la persona es mayor de edad

	https://onlinegdb.com/LeHy19LFD
*/

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){

		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN