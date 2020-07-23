/**  SPREAD OPERATOR 
 */

//EJERCICIO: SUMAR LOS NUMEROS DE UN ARRAY MEDIANTE UNA FUNCION 

let numbers = [2, 5, 8] //Primero creo el array 

const sumar =(n1, n2, n3)=>{ //Segundo creo la funcion 
    return n1 + n2 + n3
}

//FORMA A CON EL METODO APPLY()
let result = sumar.apply(this,numbers); //Tercero creo una variable para guardar el resultado. Llamo a la funcion sumar. y le aplico el método aplly(). Por parametros
//se pasa this que se refiere al objeto actual, y el array. 
console.log(result)

//Metodo apply(): invoca una determinada función que seria sumar(); asignando explícitamente el objeto this y un array o similar como parametros. 

//FORMA B CON (...)
let resultado = sumar(...numbers)  //transforma de [2, 5, 8] => 2,5,8 por ende se puede sumar asi. El operador descomprime el array. 
console.log(resultado)

//Con este operador(...) se pueden combinar dos arrays diferentes u objetos. 

let characters = ['ross', 'rachel', 'joey'];
let ages = [27, 25, 26];

//NO 
console.log([...characters],[...ages]); // ["ross", "rachel", "joey"] [27, 25, 26] 

//SI 
console.log([...characters,...ages]); // ["ross", "rachel", "joey", 27, 25, 26]
console.log([27,...characters, 25]); // [27, "ross", "rachel", "joey", 25]
console.log([...ages,...characters,...ages]); // 27, 25, 26, "ross", "rachel", "joey", 27, 25, 26]
console.log(['bla', ...ages]); //["bla", 27, 25, 26]

let user = {
    age:27 //propiedades
}

let userTwo = {
    ageTwo: 34
}

let users = {
    ...user,
    ...userTwo
}
console.log(users); //{age: 27, ageTwo: 34} NO SIRVE SI EL NOMBRE DE LAS PROPIEDADES (VARIABLES) ES EL MISMO PORQ SE PISARIA EL VALOR. 

let saludo = "Buen día sr. Robertazzi", dni = 32021205, acceso;

if (dni == 32021205){
    acceso = saludo;
} else{
    acceso = "no tiene acceso";
}
console.log(acceso);

//esto es lo mismo que arriba 
acceso      = dni == 32021205 ? saludo       : "No tiene acesso";
//respuesta = condicion       ? valor true   SINO   valor false;  //respuesta va a tener un valor true o false. 
console.log(acceso);

let object = {
    clave : 3
}

let objectTwo = {
    otraClave: 2
}

let newObject = {
    ...object,
    ...objectTwo
} 

console.log(newObject); //{clave: 3, otraClave: 2}