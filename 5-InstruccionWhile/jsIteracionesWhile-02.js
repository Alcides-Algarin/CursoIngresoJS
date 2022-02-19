/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar() {

	let contador = 10;
	let acumulador= "";

	while (contador >= 1) {
		acumulador = acumulador + " " + contador;
		contador -= 1;
	}
	alert(acumulador);
}//FIN DE LA FUNCIÓN