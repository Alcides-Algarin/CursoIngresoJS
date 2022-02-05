/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

https://onlinegdb.com/rtkPx6hkY
*/

let precio1;
let precio2;
let precio3;
let suma;
let promedio;
let precioFinal;

function Sumar () 
{
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;

    alert("La suma es " + suma);
}
function Promedio () 
{
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    suma = precio1 + precio2 + precio3;
    
    promedio = suma / 3;


    alert("El promedio es " + promedio);
	
}
function PrecioFinal () 
{    
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;

    precioFinal = suma + suma * 0.21;

    alert("La suma es " + precioFinal);
}