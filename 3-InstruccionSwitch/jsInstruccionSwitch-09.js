/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 9
	Enunciado:
	Una agencia de viajes debe sacar las tarifas de los viajes,	se cobra $15.000 
	por cada estadia como base, se pide el ingreso de una estacion del año y 
	localidad para vacacionar para poder calcular el precio final

		* En Invierno: bariloche tiene un aumento del 20% cataratas y 
		Cordoba tiene un descuento del 10%, Mar del plata tiene un descuento del 20%

		* En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
		tiene un aumento del 10% Mar del plata tiene un aumento del 20%

		* En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene 
		un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

	https://onlinegdb.com/7wK8ugdqQ

*******************************************************************************/
function mostrar() {

	let destinoIngresado;
	let estacionDelAnio;
	let mensaje;
	let precioVariable;
	let precioFinal;
	let precioBase = 15000;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;


	switch (estacionDelAnio) {
		case "Invierno":
			switch (destinoIngresado) {

				case "Bariloche":
					precioVariable = 20;
					break;

				case "Cataratas":
				case "Cordoba":
					precioVariable = -10;
					break;

				case "Mar del plata":
					precioVariable = -20;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) {

				case "Bariloche":
					precioVariable = -20;
					break;

				case "Cataratas":
				case "Cordoba":
					precioVariable = 10;
					break;

				case "Mar del plata":
					precioVariable = 20;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {

				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioVariable = 10;
					break;
				case "Cordoba":
					precioVariable = 0;
					break;	
			}
			break;
	}


	precioFinal = precioBase + (precioBase * precioVariable/100);
	mensaje = "El precio final para viajar a " + destinoIngresado + " en " + estacionDelAnio + " es de  $" + precioFinal;
	alert(mensaje);

}//FIN DE LA FUNCIÓN
