// importamos prompt de forma tradicional
const prompt = require('prompt-sync')() // usar sola para ver consola interna en node.js
console.log("Bienvenido al programa ESPECIAL, donde deberás adivinar un número");
console.log("El número está entre 1 y 100");
console.log("¡Puedes intentarlo cuantas veces quieras!");
console.log("")

// declaramos un número
let numero;
// declaramos un array para almacenar los numeros que ingrese el usuario:
let numerosIngresados = [];
// generamos un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// lógica de bucle, no sale hasta que el número del usuario sea correcto
do {
    // solicitamos al usuario que ingrese un número:
    do {
        numero = parseInt(prompt("Adivina el número. Ingresa el número que crees que es correcto: "));
        if (numero < 1 || numero > 100 || isNaN(numero) ) {
            console.log("Error. El dato ingresado debe ser un número que debe estar entre 1 y 100");
        }
    } while (numero < 1 || numero > 100 || isNaN(numero));

    // añadimos el numero ingresado por el usuario al array
    numerosIngresados.push(numero);

    // caso si el numero aleatorio no es igual al numero ingresado por usuario
    console.log("");
    // console.log("El número aleatorio generado es " + numeroAleatorio); // no debiese mostrarse, solo para testeo.
    console.log("El número ingresado es " + numero);
    console.log("Intentos: " + numerosIngresados.length);
    console.log("Haz ingresado ya los números: " + numerosIngresados);
    console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");

} while (numero != numeroAleatorio);

// respuesta cuando el usuario adivina el número
console.log("");
console.log("El número aleatorio generado es " + numeroAleatorio);
console.log("El número ingresado es " + numero);
console.log("Intentos: " + numerosIngresados.length);
console.log("Haz ingresado ya los números: " + numerosIngresados);
console.log("Felicidades, adivinaste el número secreto");

// si se debe imprimir el resultado por el DOM de un archivo html, debes crearlo en el mismo directorio de tu proyecto.
/*
document.getElementById("numero").innerHTML = 
    `El numero ingresado es: ${numero} `;

document.getElementById("felicitaciones").innerHTML = 
    `Felicidades, adivinaste el número secreto `;
*/    




