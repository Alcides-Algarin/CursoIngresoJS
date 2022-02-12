/*
	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4

https://onlinegdb.com/q0rWOvd_z

*/


function mostrar()
{

	let notaRandom;
	let mensaje;
	
	//Genero el número RANDOM entre 1 y 10 
	notaRandom = Math.round(Math.random() * 10) +1;
	
	if(notaRandom >= 9){
		mensaje = "Nota: " +  notaRandom + " EXCELENTE";
	}else if(notaRandom >= 4){
		mensaje = "Nota: " +  notaRandom + " APROBÓ";
	}else{
		mensaje = "Nota: " + notaRandom + "  Vamos, la proxima se puede";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN