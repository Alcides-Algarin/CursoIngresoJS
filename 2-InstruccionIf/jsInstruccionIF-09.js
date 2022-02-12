/*
	Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

https://onlinegdb.com/vj1t0D8ck
*/

function mostrar()
{
	
	let nroRandom;

	//Genero el número RANDOM entre 1 y 10 
	nroRandom = Math.round(Math.random() * 10) +1;

	alert(nroRandom);

}//FIN DE LA FUNCIÓN