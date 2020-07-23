//Escribe un programa que pida al usuario introducir un número entero mayor que 10, el cuadro de texto volverá a aparecer si el número es menor.

const addNumb = () =>{
    let user = 0;
    while(user <= 10){
        user = parseInt(prompt("Ingresa un numero mayor que 10"));
    }
}

addNumb(); 

// Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.

let number = 0
while(number <= 50 || number >=100){
    number =parseInt(prompt("Ingresa un numero entre 50 y 100"));
}   

/* En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. 
 * Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. 
 * Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido.
*/

//resp 1
const showTable = () =>{
    let number;
    let numberOne = 1;

    while(number <= 2 || number >= 10 || number== undefined){
        number = parseInt(prompt("Ingresa un numero entre 2 y 10"));
    }   

    while(numberOne <= 5){
        (console.log(number + " * " + numberOne + " = " + number * numberOne))
        numberOne++;    //no puedo poner 1++, poreso creo una variable y le asigno de valor 1, esto hace que el numero x el cual se multiplica vaya en ascenso. 
    };
}

showTable();

//resp 2
var number;
var numberOne = 1;

while(number <= 2 || number >= 10 || number== undefined){
    number = parseInt(prompt("Ingresa un numero entre 2 y 10"));
}   

while(numberOne <= 5){
    (console.log(number + " * " + numberOne + " = " + number * numberOne))
    numberOne++;    //no puedo poner 1++, poreso creo una variable y le asigno de valor 1, esto hace que el numero x el cual se multiplica vaya en ascenso. 
};

//Construye y muestra por consola un "triángulo" de 7 líneas como el siguiente:

const showTriangle = () =>{
    let star = "";
    let contador = 1; 

    while(contador <= 7){
        console.log(star)
        star = star + "*";
        contador++; 
    }
}

showTriangle();

//Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for

const numbers = () =>{
    for(let numero = 10; numero < 100; numero++){ //defino la variable; la condición (expression); accionar sobre ese valor por ej. que sume o reste 
        console.log(numero)
    }   
    
}

//De esta forma imprime uno x uno si quiero que imprima de 10 en 10 cambio el accionar dentro del for que seria: numero+=10; 

const numbers = () =>{
    for(let numero = 10; numero <= 100; numero+=10){ //defino la variable; la condición (expression); accionar sobre ese valor por ej. que sume o reste 
        console.log(numero)
    }   
    
}

//imprime: 10, 20, 30, 40, 50, 60, 70, 80, 90

//Mostrar en consola los números pares del 0 al 100 utilizando la estructura while, for y do while

const showNmb = () =>{
    number; 
    while(number < 0 || number ){
        console.log(number)
    }
}

showNmb();

/*
 1. Hacer un array que se llame "nombres" (un array vacio)
 2. pedirle al usuario que ingrese 5 nombres
 3. imprimirlos en el orden ingresado
 4. imprimirlos en el orden inverso
*/

const names = [];

const showNames = () =>{
    for(let i = 1; i<=5; i++){
        pregunta = prompt("Ingresa 5 personajes de disney Pixar")
        names.push(pregunta)
    }
}

showNames();

names;
names.reverse();
