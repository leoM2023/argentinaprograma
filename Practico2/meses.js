const readlineSync = require('readline-sync');

const numeroMes = readlineSync.question("Ingrese un numero de mes del 1 al 12:");
let mes;

console.log (numeroMes);
switch (numeroMes) {
    case "1" : 
        mes = "enero";
        break;
    case "2" : 
        mes = "febrero";
        break;
    case "3" :
        mes = "marzo";
        break;
    case "4" :
        mes = "abril";
        break;
    case "5" :
        mes = "mayo";
        break;
    case "6" :
        mes = "junio";
        break;
    case "7" : 
        mes = "julio";
        break;
    case "8" :
        mes = "agosto";
        break;
    case "9" :
        mes = "septiembre";
        break;
    case "10" :
        mes = "octubre";
        break;
    case "11" : 
        mes = "noviembre";
        break;
    case "12" : 
        mes = "diciembre";
        break;

}
  let cantidadDeDias;
  if (numeroMes === "2") {
    cantidadDeDias = 28; 
  } else if (numeroMes === "4" || numeroMes === "6" || numeroMes === "9" || numeroMes === "11") {
    cantidadDeDias = 30;
  }
  else cantidadDeDias = 31 ;

  console.log ("La cantidad de dias del mes de " + mes + " es " + cantidadDeDias);