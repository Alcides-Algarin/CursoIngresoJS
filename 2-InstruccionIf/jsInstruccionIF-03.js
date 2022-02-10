/*
	Al ingresar una edad debemos informar 
	si la persona es mayor de edad, sino 
	informar que es un menor de edad.

	https://onlinegdb.com/1TCUTS8II

*/

function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("Es MAYOR de edad");
	}else{
		alert("Es MENOR de edad");
	}

}//FIN DE LA FUNCIÓN