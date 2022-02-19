
/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 4
	Enunciado:
	al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.

	https://onlinegdb.com/5ZshOrRNL

*******************************************************************************/
function mostrar() {
	//tomo el mes
	let mesDelAnio = document.getElementById("txtIdMes").value;
	let mensaje;

	switch (mesDelAnio) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = mesDelAnio + " tiene 31 dias.";
			break;

		case "Febrero":
			mensaje =  mesDelAnio + " tiene 28 dias.";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje =  mesDelAnio + " tiene 30 dias.";
			break;
	}


	alert(mensaje);


}//FIN DE LA FUNCIÓN