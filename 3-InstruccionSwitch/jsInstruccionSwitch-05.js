/*******************************************************************************
Alcides Algarin
Instrucción 'Switch': EJ. 5
	Enunciado:
	Al ingresar una hora, informar:
	si está entre las 7 y las 11 : "Es de mañana."

	https://onlinegdb.com/I4E5jaIF0
	
*******************************************************************************/

function mostrar()
{
	//tomo la hora
	let horaDelDia;
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;

		default:
			break;
	}

}//FIN DE LA FUNCIÓN