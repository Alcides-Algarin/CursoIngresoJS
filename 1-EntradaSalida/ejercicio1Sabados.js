/*


Se piden tres nombre de producto, y los precios de cada  
producto ingresado, 

    * Sacar el precio bruto (la suma de los tres sin impuestos),
    * El promedio de los precios y 
    * el precio final total más iva (21%), 
    * pedir un porcentaje de descuento y aplicarlo al precio final, 
    * mostrar todos los datos calculados e ingresados por alert. 
        (solo un alert en el código)


        https://onlinegdb.com/07PfBdRDK
*/


function SacarResto()
{
    let precioBruto;
    let precioFinal;
    let precioFinalTotal;
    let promedio;
    let porcentajeDescuento;

	let nombreProducto1;
	let precioProducto1;
	
    let nombreProducto2;
	let precioProducto2;

    let nombreProducto3;
	let precioProducto3;

    
	nombreProducto1 = prompt("Ingrese nombre del producto 1: ");
	precioProducto1 = prompt("Ingrese precio del producto 1: ");


	nombreProducto2 = prompt("Ingrese nombre del producto 2: ");
	precioProducto2 = prompt("Ingrese precio del producto 2: ");


	nombreProducto3 = prompt("Ingrese nombre del producto 3: ");
	precioProducto3 = prompt("Ingrese precio del producto31: ");

    porcentajeDescuento = prompt("Ingrese descuento a aplicar: ");


    precioProducto1 = parseFloat(nombreProducto1);
    precioProducto2 = parseFloat(nombreProducto2);
    precioProducto3 = parseFloat(nombreProducto2);
    porcentajeDescuento = parseFloat(porcentajeDescuento);


    

	precioBruto = precioProducto1 + precioProducto2 + precioProducto3;  
    promedio = precioBruto / 3;
    precioFinal = precioBruto + precioBruto * 0.21;
    precioFinalTotal = precioFinal - (precioFinal * (porcentajeDescuento / 100));

    alert("Precio bruto: " + precioBruto + "\nPromedio: " + promedio + "\nPrecioFinal sin descuento: " + precioFinal + " \nPrecio final total con descuento aplicado: " + precioFinalTotal);
    
}