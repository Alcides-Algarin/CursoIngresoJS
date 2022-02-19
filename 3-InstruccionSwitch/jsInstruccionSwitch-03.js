
/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 3
	Enunciado:
	al seleccionar un mes informar.
	si es Febrero: " Este mes no tiene más de 29 días."
	si NO es Febrero: "Este mes tiene 30 o más días"

	https://onlinegdb.com/ZLQUzp_rV


*******************************************************************************/
function mostrar() {
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;

	switch (mesDelAño) {

		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default :
			mensaje = "Este mes tiene 30 o más días";
			break;

	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN