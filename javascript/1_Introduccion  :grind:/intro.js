//LAS BASES DE JS. 

//Javascript es un lenguaje debilmente y dinamicamente tipado..
//Tipado: hace referencia a las variables que puede tener o no un tipo. Por ej.  let edad = 24, let se usa para todas la variables, estas variables pueden tener
//string, numeros, etc. por ende let no te establece un tipo de dato. Let es un tipado dinamico, se puede modificar su tipo de dato todo el tiempo. 
//Javascript es case sensitive, distingue entre mayus y minusculas. 
//Variables: Se acceden a traves de un identificador pueden modificar su valor a medida que se ejecuta el codigo. let o var. Ocupan un lugar en la memoria
//Constantes: Se acceden a traves de un identificador pero NO pueden modificar su valor. const Ocupan un lugar en la memoria.

//Datos booleans; true or false. Verdadero o falso. 
//Cualquier datos x default es true, los datos que son false son: undefined, NaN, null, 0, -0, "", false; 
24 == "24";   // apesar de que uno sea un dato de valor numerico y el otro un string reconoce que ambos son 24 xeso devuelve true.
true

24 === "24"; // la comparacion acá es mas estricta y reconoce que uno es un string y el otro un numero xeso devuelve false.
false

24 === 24; //al ser una comparacion estricta los datos deben ser del mismo valor para que devuelva true.
true

24 !== "24"; //el tipo de dato es diferente, uno es un valor numerico y el otro un string.
true

24 !== 24; //la igualdad se va a dar cuando el valor del dato sea igual, quiere decir que el tipo y valor del numero tienen que ser el mismo. 
false 

// &&: and
// ||: or
30 == 30 && "hola" == "hola"; //para que devulve true las dos comparaciones deben ser correctas. 
true

30 == 15 && "hola" == "hola"; //si una de las dos comparaciones no es correcta devuelve false. 
false

30 == 30 || "hola" == "hola"; 
true

30 == 30 || 40 == 50; //or al ser "o" si una de las dos comparaciones es correcta devuelve true.
true

30 == 15 || 40 == 40; // solo devuelve false si ambas comparaciones son incorrectas.
true

// !:es un negador 

!(30 == 30) // las comparaciones son correctas pero si le digo que no son correctas devuelve false. 
false

!(30 == 15)
true

/** Condicionales: 
 * if(expresion booleana){
 *     condicion cumplida;                          
 * }
 */

let calificacion = 5;

if(calificacion == 10){             //1era condicion, cuando se cumple una condicion ya no sigue corriendo el codigo. 
  console.log("Excelente");
}else if(calificacion >= 7){        //2da condicion
  console.log("Muy Bien");
}else if(calificacion > 5){         //3era condicion
  console.log("Puedes mejorar");
}else{                              
  console.log("No aprobaste");
}

/** LOOP, ciclos:
 * El ciclo for esta diseñado para repetir un numero o un bloque varias veces
 * El ciclo while repite la accion mientras que la expresion booleana se cumpla.
 * El ciclo do{}while(), se ejecuta primero el codigo y luego se ejecuta la condicion de expresion booleana.(HACER MIENTRAS)
 * 
 * La diferencia que tiene esta estructura con el while es que siempre se 
 * ejecuta al menos una vez y luego pregunta por la condición.
 */

for(let i = 0; i<= 10; i++){   //es una instruccion que se ejecuta antes de iniciar el ciclo, dato booleano que mientras sea true el ciclo continua, la instruccion que se ejecuta desp de cada iteración.  
    if(i>=5) break;                   
    console.log(i);
}

for (let i = 0; i<=10; i++){
    if(i % 2 == 0);
    console.log(i);
}

while(prompt()){//(expresion booleana)
 console.log("bla bla")
} 

do {
    // esto se ejecuta al menos una vez
    } while (condicion);

/** 
 *  Undefined : indica que a una variable no se le asignó un valor o no se a declarado. Es un tipo de dato.
 *  Null: es un objeto especial de js que indica la ausencia de valor. No es un tipo de dato.  
 *  NaN: no es un numero (not a number)
 */

null === undefined; // claramente se ve que para el programa no es lo mismo. 
false

"blabla" * 3;
NaN; 

100 / 0;
Infinity

/** Ejercicios: 
 *  1. Tomando como entrada un numero entero, imprimir si es par o impar. 
 *  2. Recibir dos numeros usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos. 
 *  3. Programar el juego del numero mágico en el que se define un numero y el usuario trata de adivinarlo, si el número que ingresó el usuario es menor, imprimir
 *      "El número mágico es mayor", si el número que ingresó es mayor, imprimir "El número mágico es menor". 
 */

let par = 10;

if (par %2 == 0){                //si la variable par es divisible x 2 debe devolver el string "es par"
    console.log("es par")
}else{
    console.log("es impar")
}

let numOne = parseInt(prompt("Ingresa un numero"));
let numTwo = parseInt(prompt("Ingresa otro numero"));

//sumarlos
let suma = numOne + numTwo
console.log(suma);
//restarlos
let resta = numOne - numTwo
console.log(resta);
//dividirlos
let div = numOne/numTwo;
console.log(div);
//multiplicaros
let multi = numOne*numTwo
console.log(multi);

let magicNum = 34;
let pregunta = parseInt(prompt("Piensa un numero del 0 al 100"))

if(pregunta > 34 && pregunta < 100){
    console.log("El número mágico es menor")
}else if(pregunta < 34){
    console.log("El número mágico es mayor")
}else if(pregunta == 34){
    console.log("Que culo, adivinaste")
}else{
    console.log("Por favor ingresa un numero de 0 a 100")
}

let max = 100;
let min = 1;
let _magicNum = parseInt(Math.random()*(max-min)+min);

while(true){
    let userNum = prompt("Elige un numero entre 1 y 100")
    if(userNum == _magicNum){
        alert("Adivinaste")
        break;
    }else if( userNum > _magicNum && userNum <100){
        alert("El número mágico es menor")
    }else if( userNum < _magicNum){
        alert("El número mágico es mayor")
    }else if( userNum === "no quiero jugar mas"){
        alert("Gracias por jugar");
        break;
    }else{
        alert("Elige un numero y que sea menor de 100")
    }
}