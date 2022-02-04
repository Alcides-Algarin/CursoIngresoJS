/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

https://onlinegdb.com/X4iQ1RTGj
*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresado;

	nombreIngresado= document.getElementById("txtIdNombre").value;
	edadIngresado = document.getElementById("txtIdEdad").value;

	alert("Ustded se llama " + nombreIngresado + " y tiene " + edadIngresado +  " años");
	//alert(`Ustded se llama ${nombreIngresado} y tiene ${edadIngresado} años`);
}

