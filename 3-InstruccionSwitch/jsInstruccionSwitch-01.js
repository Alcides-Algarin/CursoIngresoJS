
/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 1
	Enunciado:
	al seleccionar un mes informar.
	si es Enero: "que comiences bien el año!!!."
	si es Marzo: "a clases!!!."
	si es Julio: "se vienen las vacaciones!!!."
	si es Diciembre: "Felices fiesta!!!."

	https://onlinegdb.com/bq7HhF3xc

*******************************************************************************/
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;

	switch (mesDelAño) {
		case "Enero":
			mensaje = "Que comiences bien el año!!!.";
			break;

		case "Marzo":
			mensaje = "A clases.";
			break;

		case "Julio":
			mensaje = "Se vienen las vacaciones!!!.";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!!!.";
			break;

		default:
			break;
	}

	if (mensaje != undefined){
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN