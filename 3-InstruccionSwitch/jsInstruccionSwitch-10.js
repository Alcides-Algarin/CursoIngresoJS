/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 10 
	Enunciado:
	Una agencia de viajes nos piden informar si hacemos viajes a lugares 
	según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

	En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

	En Verano: Se viaja a Mar del plata y Cataratas solamente

	En Otoño: Se viaja a todos los destinos.

	En primavera: solo no se viaja a Bariloche

	https://onlinegdb.com/q0aRrgkTJ


*******************************************************************************/
function mostrar() {

	let destinoIngresado;
	let estacionDelAnio;
	let mensaje;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;


	switch (estacionDelAnio) {
		case "Invierno":
			switch (destinoIngresado) {

				case "Bariloche":
					mensaje = "Es " + estacionDelAnio + " y puede viajar a " + destinoIngresado;
					break;

				default:
					mensaje = "Es " + estacionDelAnio + " y no se viaja a " + destinoIngresado;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) {

				case "Cataratas":
				case "Mar del plata":
					mensaje = "Es " + estacionDelAnio + " y puede viajar a " + destinoIngresado;
					break;

				default:
					mensaje = "Es " + estacionDelAnio + " y no se viaja a " + destinoIngresado;
					break;
			}
			break;

		case "Otoño":
			mensaje = "Es " + estacionDelAnio + " y puede viajar a " + destinoIngresado;
			break;

		case "Primavera":
			switch (destinoIngresado) {

				case "Bariloche":
					mensaje = "Es " + estacionDelAnio + " y no se viaja a " + destinoIngresado;
					break;

				default:
					mensaje = "Es " + estacionDelAnio + " y se viaja a " + destinoIngresado;
					break;
			}
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
