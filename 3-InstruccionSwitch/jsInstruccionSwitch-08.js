/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 8
	Enunciado:
	Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

	https://onlinegdb.com/QEpRSz83H

*******************************************************************************/
function mostrar() {
	//tomo el mes
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch (destinoIngresado) {

		case "Bariloche":
		case "Ushuaia":
			mensaje = "En " + destinoIngresado + " hace FRIO.";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje = "En " + destinoIngresado + " hace CALOR.";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
