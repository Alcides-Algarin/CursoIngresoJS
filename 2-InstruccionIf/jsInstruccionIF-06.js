/*
	Al ingresar una edad debemos informar si la 
	persona es mayor de edad (mas de 18 años) o 
	adolescente (entre 13 y 17 años) 
	o niño (menor a 13 años).

	https://onlinegdb.com/Iep9ypPOI


*/

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 18){
		alert("Es mayor de edad");
	}else if(edad >= 13 && edad <=17){
		alert("Es adolecente");
	}else{
		alert("Es un niño");
	}

}//FIN DE LA FUNCIÓN