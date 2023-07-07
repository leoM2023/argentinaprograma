let opciones = ["piedra","papel","tijeras"];

function obtenerJugadaComputadora(){
    let posicion = Math.floor(Math.random()*3);
    return opciones [posicion];
}
const readlineSync = require('readline-sync');


function obtenerJugadaUsuario(){
    let opcionUsuario = readlineSync.question("Ingrese su jugada: ");
    opcionUsuario = opcionUsuario.toLowerCase();
    while (!(opcionUsuario === "piedra" || opcionUsuario === "papel" || opcionUsuario === "tijeras")) {
        console.log ("La opcion ingresada es incorrecta. Por favor ingrese una opcion valida.");
        opcionUsuario = readlineSync.question("Ingrese su jugada: ");
    }
return opcionUsuario;

}

function determinarGanador (turnoCompu , turnousuario){
    let resultadoJugada;
    let jugadaCompu = turnoCompu;
    let jugadaUsuario = turnousuario;

    if (jugadaCompu === jugadaUsuario ){
        resultadoJugada = "Empate";
    }
    else if ((jugadaCompu === "piedra" && jugadaUsuario === "tijeras") || (jugadaCompu === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaCompu === "papel" && jugadaUsuario === "piedra")){
    resultadoJugada = "Gana la computadora";
    }
    else {resultadoJugada = "Gana el usuario"};
return resultadoJugada;   

}
let compu = obtenerJugadaComputadora();
let usuario = obtenerJugadaUsuario ();
let resultado = determinarGanador (compu,usuario);

console.log ("La computadora eligio: "+compu);
console.log ("El usuario eligio: "+usuario);
console.log ("El resultado fue: "+resultado);

