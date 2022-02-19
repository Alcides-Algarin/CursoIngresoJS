/*
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
además de los datos ya ingresados , solicitar el nombre .

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
        https://onlinegdb.com/81TQBPcUn

    E) Si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
        https://onlinegdb.com/GgmQ0izxB
    F) si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
        https://onlinegdb.com/FQsrB76Ce
    G) si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de     QUEEN’
        https://onlinegdb.com/AvcH_u7Lw

    H) Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
        https://onlinegdb.com/qMH6PNjjh
    I) Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
        https://onlinegdb.com/l1YAHarri
    J) Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’
        https://onlinegdb.com/2OE7aNPZw


*/

function mostrar() {
    let edad;
    let nombre;
    let mensaje;

    mensaje = "";
    edad = parseInt(document.getElementById("txtIdEdad").value);
    nombre = document.getElementById("txtIdNombre").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    if (edad < 13) {
        if (nombre == "Ricardo") {
            mensaje = "Feliz dia!! " + nombre + ", muy chiquito para ese nombre.";
        } else {
            mensaje = "Feliz dia!!";
        }

    } else {
        if (edad < 18) {
            if (edad == 17) {
                mensaje = "último año!!!";
            } else {
                if (nombre == "Violeta") {
                    mensaje = nombre + ", como un color. Usted es adolescente.";
                } else {
                    mensaje = "usted es adolescente.";
                }
            }
            if(estadoCivil == "Divorciado"){
                mensaje = mensaje + ". " + estadoCivil + ", toda una vida por delante."
            }

        } else if (edad >= 18) {
            if (edad == 33) {
                mensaje = "Como cristo.";
            } else if (edad == 88) {
                if (nombre == "Alfredo") {
                    mensaje = nombre + " Como el de QUEEN. Lindo Numero.";
                } else {
                    mensaje = "Lindo Numero.";
                }

            } else if (edad > 60) {
                if (nombre == "Alfredo") {
                    mensaje = nombre + " Como el de QUEEN. A jubilarse.";
                } else {
                    mensaje = "A jubilarse.";
                }
            } else {
                mensaje = "Tienes edad de laburar.";
            }

            if(estadoCivil == "Soltero" && edad <= 60){
                mensaje = mensaje + ". A salir."
            
            }
        }

        if(estadoCivil == "Casado"){
            mensaje = mensaje + " " + estadoCivil +". Esta casado y quiere casa.";
        }
    }

    if (edad % 2 == 0) {
        mensaje = mensaje + ". Tienes edad par."
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN