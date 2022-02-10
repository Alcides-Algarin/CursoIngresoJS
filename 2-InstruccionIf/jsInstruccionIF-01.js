/*
Alcides Algarin
EJ: Instruccion IF - 1
Enunciado:
	Al ingresar una edad que sea igual a 15, 
	mostrar el mensaje "niña bonita".
	
	https://onlinegdb.com/D2HBQVaUx

 */

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;

	if(edad == 15){

		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN