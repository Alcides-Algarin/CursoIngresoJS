/*
	Al ingresar una edad menor a 18 años y un estado civil 
	distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

https://onlinegdb.com/23RC1yG7i

*/

function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje;

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if( edad < 18 && estadoCivil != "Soltero" ){
		mensaje = "Es muy pequeño para NO ser soltero.";
	}else {
		mensaje = "No veo errores en su logica"
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN