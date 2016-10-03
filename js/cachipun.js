//cachipun.js
//necesito una jugada y el valor de esa jugada va a ser piedra papel o tijera

var jugadaUser;
var jugadaCompu;

var jugadaUser=prompt("¿piedra, papel o tijera?");
console.log(jugadaUser);

var numRandom= Math.random ()*2;
var numRedondo= Math.round (numRandom);
console.log(numRedondo);

/*0:piedra, 1:papel, 2:tijera*/

if (numRedondo == 0) {
	jugadaCompu = "piedra";
}else if (numRedondo == 1) {
	jugadaCompu="tijera";
}else {
	jugadaCompu="papel";
}

alert("ahora le toca al computador elegir");
console.log(jugadaCompu);
alert("el computador eligio:"+jugadaCompu);

if (jugadaUser == "piedra"){
	if (jugadaCompu == "piedra") {
		alert("Empate");
	}else if (jugadaCompu == "tijera") {
		alert("Felicitaciones has ganado");
	}else {
		alert("oh no, la computadora gano");
	}

}else if (jugadaUser == "tijera"){
	if(jugadaCompu == "tijera"){
		alert("es un empate");
	}else if (jugadaCompu == "papel") {
		alert("felicitaciones has ganado");
	}else{
		alert("Gano la compu");
	}
}else {// si no es piedra ni tijera es papel
	if (jugadaCompu == "papel") {
		alert("Oh hubo un empate");
	}else if (jugadaCompu == "piedra") {
		alert("Felicitaciones has ganado");
	}else{
		alert("Oh no, la computadora ha ganado");
	}
}