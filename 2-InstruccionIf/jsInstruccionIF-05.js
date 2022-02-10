/*
	Al ingresar una edad solo debemos 
	informar si la persona NO es adolescente.

	https://onlinegdb.com/NdwgQ-kYF


*/

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(!(edad >= 13 && edad <=17)){
		alert("NO es adolecente");
	}

}//FIN DE LA FUNCIÓN