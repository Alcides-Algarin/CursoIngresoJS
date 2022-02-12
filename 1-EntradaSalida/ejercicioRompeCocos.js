






function mostrar()
{
    let diametroMayor;
    let diametroMenor;
    let ladoMenor;
    let ladoMayor;
    let longitudEstructura;
    let areaTotal;
    let adicionalCola;
    
    
	diametroMenor = parseInt(prompt("Ingrese diametro menor: "));
	//diametroMayor = parseInt(prompt("Ingrese diametro mayor: "));

    ladoMenor = Math.pow((diametroMenor/2), 2);
    ladoMayor = Math.sqrt((diametroMenor/2)**2 + (2/3 * diametroMayor)**2);
    //Math.pow((diametroMenor/2), 2);

    alert(ladoMenor);


}