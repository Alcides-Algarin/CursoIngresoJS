/*

ALCIDES ALGARIN
TP 4

    4.	Para el departamento de iluminación:

    Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

        A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

        B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"  
            se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

        C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
            se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

        D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
            si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

        E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
            brutos en informar del impuesto con el siguiente mensaje:    
            ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

            https://onlinegdb.com/utxbvK46G
 */
function CalcularPrecio() {

    const PRECIO_UNITARIO = 35;
    let marcaLampara;
    let cantidadLamparas;
    let porcentajeDescuento;
    let importe;
    let importeFinal;
    let ingresoBruto;
    let mensaje;


    marcaLampara = document.getElementById("Marca").value;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);



    if(cantidadLamparas >= 6){//A
        porcentajeDescuento = 50;

    }else if(cantidadLamparas == 5){//B
        if(marcaLampara == "ArgentinaLuz"){
            porcentajeDescuento = 40;

        }else {
            porcentajeDescuento = 30;

        }

    }else if(cantidadLamparas == 4){//C
        if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas"){
            porcentajeDescuento = 25;

        }else {
            porcentajeDescuento = 20;

        }

    }else if(cantidadLamparas == 3){//D
        if(marcaLampara == "ArgentinaLuz"){
            porcentajeDescuento = 15;

        }else if(marcaLampara == "FelipeLamparas"){
            porcentajeDescuento = 10;

        }else {
            porcentajeDescuento = 5;

        }

    }else{
        porcentajeDescuento = 0;
    }

    importe = cantidadLamparas * PRECIO_UNITARIO;
    importeFinal = importe - (importe * porcentajeDescuento/100);

    if (importeFinal > 120){//E
        ingresoBruto = importeFinal * 0.1;
        importeFinal = importeFinal + ingresoBruto;
        mensaje = "Precio con descuento: $" + importeFinal + " Usted pago $" + ingresoBruto + " de IIBB."
    }else{
        mensaje = "Precio con descuento: $" + importeFinal;
    }

    document.getElementById("txtIdprecioDescuento").value = mensaje; 

}
