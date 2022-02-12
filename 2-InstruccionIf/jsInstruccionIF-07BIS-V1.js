/*
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
    A) Si es menor de 13 , mostrar el mensaje “feliz día”.
        https://onlinegdb.com/v8eZW33wB
    B) Si es adolescente el mensaje es “usted es adolescente”)
        i_ si tiene 17 años además mostrar el mensaje “último año!!!”
        https://onlinegdb.com/hIRrMxTq3
    C) Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
        i_   Si tiene 33 años , además mostrar el mensaje “como cristo”
        ii_  Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
        iii_ Si tiene 88, además mostrar el mensaje “lindo número''
        https://onlinegdb.com/mSKkPccLz
    D)  si la edad es par , además mostrar , “sos par!!”.
        https://onlinegdb.com/bGGrk-5RI
        https://onlinegdb.com/81TQBPcUn corregido

*/

function mostrar()
{
	let edad;
	let mensaje;

	mensaje = "";
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//estadoCivil = document.getElementById("estadoCivil").value;

	if( edad < 13){
		mensaje = "Feliz dia!!";
        
	}else if(edad < 18){
        if(edad == 17){
            mensaje = "último año!!!";
        }else{
            mensaje ="usted es adolescente";
        }
    }else if(edad >= 18){
        if(edad == 33){
            mensaje = "Como cristo";
        }else if(edad == 88){
            mensaje = "Lindo Numero";
        }else if(edad > 60){
            mensaje = "A jubilarse";
        }else {
            mensaje = "Tienes edad de laburar";
        }

    }
    if(edad%2 == 0){
        mensaje = mensaje + ". Tienes edad par."
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN