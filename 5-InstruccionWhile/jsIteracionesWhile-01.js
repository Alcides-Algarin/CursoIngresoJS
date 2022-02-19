/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {

	let contador = 0;
	let acumulador= "";

	while (contador <= 10) {
		acumulador = acumulador + " " + contador;
		contador += 1;
	}
	alert(acumulador);
}//FIN DE LA FUNCIÓN