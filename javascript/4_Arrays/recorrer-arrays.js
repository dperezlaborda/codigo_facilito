/**
 * Metodos para recorrer arrays:
 * - forEach: se ejecuta la funcion una vez por cada elemento. Si en un array hay 4 elementos la funcion se ejecutará 4 veces. Es mas lento que el for.
 * - filter: nos permite filtrar elementos, se sacan elementos del array. Sirve para eliminar un elemento especifico del array. Retorna un nuevo array. Sirve para eliminar uno o varios elementos del array. 
 * - find: sirve para saber si un elemento existe o no dentro de un array. 
 * - map: genera un nuevo array con una operacion definida. Quiere decir que la aplica una funcion a cada elemento y devuelve un nuevo array. 
 */

let colores = ['azul', 'rojo', 'violeta', 'verde', 'amarillo', 'magenta', 'cyan', 'celeste'] //en este caso si hay 8 elementos, se ejecutará 8 veces. 

colores.forEach(function(elemento){
    console.log(elemento);
});  //la funcion recibe un argumento (); seria elemento, este arg. representa el elemento que en ese momento se esta iterando. 

//eliminar rojo
colores = colores.filter((el) => el != 'rojo'); //pasan todos los colores se filtran porque son todos diferentes al string "rojo" sino encuentra el elemento devuelve true// NO HACE FALTA PONER () a el.

let pcGames = ['Call of duty', 'Sims', 'Fear', 'Roller Coaster']
pcGames = pcGames = pcGames.find(el => el == 'Sims');

//elevar al cuadrado cada numero.

let numbers = [2, 20, 45, 100];

let cuadrados = numbers.map(number => number * number);
console.log(cuadrados);

let numeros = ['2', '3', '5', '25']
numeros = numeros.map(numero => parseInt(numero)); 