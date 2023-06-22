const readlineSync = require('readline-sync');

const numeroDia = parseInt(readlineSync.question("Ingrese un numero del 1 al 7: "));

let dia;  

switch (numeroDia) {
    case 1: 
        dia = "lunes";
        break;
    case 2 : 
        dia = "martes"
        break;
    case 3 :
        dia = "miercoles";
        break;
    case 4 :
        dia = "jueves";
        break;
    case 5 :
        dia = "viernes";
        break;
    case 6 :
        dia = "sabado";
        break;
    case 7 : 
        dia = "domingo";
        break;
    default :
    console.log ("Número inválido.");
}
if (numeroDia >0 && numeroDia <= 7 )
 console.log ("Hoy es " + dia );