/*
Enunciado:
3. Para el departamento de Pinturas:

    A. Al ingresar una temperatura en Fahrenheit debemos 
    mostrar la temperatura en Centígrados con un mensaje 
    concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

    B. Al ingresar una temperatura en Centígrados debemos 
    mostrar la temperatura en Fahrenheit (ej.: "0 centígrados 
    son 32 Fahrenheit "). 

    https://onlinegdb.com/nFfcMJHVE
*/

let temperatura;
let gradosFahrenheit;
let gradosCentigrados;

function FahrenheitCentigrados () 
{
    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    gradosCentigrados = (temperatura - 32) * 5/9;
	
    alert(temperatura + "° Fahrenheit equivalen a " + gradosCentigrados + "° centigrados.");
}

function CentigradosFahrenheit () 
{
    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    gradosFahrenheit = 9/5 * temperatura + 32;
	
    alert(temperatura + "° centigrados equivalen a " + gradosFahrenheit + "° Fahrenheit.");	
}
