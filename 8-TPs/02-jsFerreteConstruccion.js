/*
TP 2.

Enunciado:
Para el departamento de Construcción:
    A. mostrar la cantidad de alambre a comprar si se 
    ingresara el largo y el ancho de un terreno rectangular 
    y se debe alambra con tres hilos de alambre.

    B. mostrar la cantidad de alambre a comprar si se 
    ingresara el radio de un terreno circular y se debe 
    alambra con tres hilos de alambre.

    C. Para hacer un contrapiso de 1m x 1m se necesitan 
    2 bolsas de cemento y 3 de cal, debemos mostrar cuantas 
    bolsas se necesitan de cada uno para las medidas del 
    terreno rectangular.

    https://onlinegdb.com/k2SmKeV4e
*/
let largo;
let ancho;
let radio;
let perimetro;
let superficie;


function Rectangulo () 
{
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;

    alert("Necesitara " + perimetro*3 + " metros de alambre para el terreno rectangular.");

}


function Circulo () 
{

    radio = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio);

    perimetro = 3.14 * radio;

    alert("Necesitara " + perimetro*3 + " metros de alambre para el terreno circular.");
    	
}


function Materiales () 
{

    let totalCemento;
    let totalCal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    superficie = largo * ancho;

    totalCemento = (superficie * 2)/1;

    totalCal = (superficie * 3)/1;

    alert("Se necesitara " + totalCemento + " bolsas de Cto y " + totalCal + " bolsas de cal.");

}