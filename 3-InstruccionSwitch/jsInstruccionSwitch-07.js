/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 7
	Enunciado:
	Al selecionar un destino , indicar el punto cardinal de 
	nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

	https://onlinegdb.com/NFKeSa078

*******************************************************************************/
function mostrar() {
	//tomo el mes
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch (destinoIngresado) {

		case "Bariloche":
			mensaje = destinoIngresado + " se encuentra al oeste.";
			break;
		case "Cataratas":
			mensaje = destinoIngresado + " se encuentra al norte.";
			break;
		case "Mar del plata":
			mensaje = destinoIngresado + " se encuentra al este.";
			break;
		case "Ushuaia":
			mensaje = destinoIngresado + " se encuentra al sur.";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
