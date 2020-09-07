// Ejercicio 1

console.log("Hola Mundo");

//Ejercicio 2

// alert("Me llamo Raúl");

//Ejercicio 3

var nombre = "Raúl";
var apellido = "Torrico";

console.log(nombre+" "+apellido);

//Ejercicio 4

var numero1 = 2;
var numero2 = 3;
var resultado = numero1 + numero2;

console.log(resultado);

//Ejercicio 5

function examen(){
    var nota = document.getElementById("notaExam").value;
    if (nota >= 5){
        alert("Enhorabuena, has aprobado el examen con nota "+nota);
    }
    else {
        alert("Ohh, has suspendido el examen con nota "+nota);
  
    }
}

//ejercicio 6
    var str = "Tinc un cotxe de color blau";
    console.log(str);
    var rempVerd = str.replace(/blau/, "verd");
    var remplO = str.replace(/o/g, "u");

    console.log(rempVerd);
    console.log(remplO);

// ejercicio 7

let moviliario = ["silla", "mesa", "ordenador", "libreta"];

for (let i = 0; i < moviliario.length; i++) {
    console.log("El objeto "+moviliario[i]+" esta en la posición "+i);
}

//Ejercicio 8

function calculadora(operacion){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    console.log(operacion);

    if (operacion == "suma") {
        var resultado = numero1 + numero2;
        console.log(resultado);
    }
    else if(operacion == "resta"){
        var resultado = numero1 - numero2;
    }
    else if(operacion == "mult"){
        var resultado = numero1 * numero2;
    }
    console.log(resultado);
    document.getElementById("calculadora").value=resultado;
}