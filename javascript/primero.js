//LAS BASES DE JS. 

//Javascript es un lenguaje debilmente y dinamicamente tipado. 
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

//FUNCIONES:
/*
 * Son un bloque de código que se utiliza varias veces y se ejecuta cada vez que se llama. 
 */

function saluda(){
    console.log("gua gua");
}

saluda();

function(){} // funciones anonimas

function saludo(){
    return "Hola a todos"; //devuelve algo, nada despues de return se ejecutará 
    console.log("hola") // esto no se ejecutará.
}

//Scope: es una coleccion de objetos, variables y funciones que estan a tu alcance en algun punto del codigo. Todo lo que este a tu alcance durante todo el codigo
// es un scope global, es todo aquello que se define x fuera del bloque de una funcion. Las funciones crean su scope local, el cual nace y muere en la misma funcion.

let nombre = "Lola";  //Scope global

function nombrar(){
    //Scope local
    return("hola" + nombre);
}

nombrar();

var rockstars = "David Bowie";

function switchRockstars(){
    var rockstars = "Elvis";
    console.log(rockstars)
}

switchRockstars();   //Elvis, esto quiere decir que la variable inicia su valor dentro de la funcion y finaliza cuando la funcion se cierra. Es más recomendable. SCOPE LOCAL
console.log(rockstars); //David Bowie, al ser una variable global (quiere decir que esta x fuera de la funcion) se ejecuta durante todo el codigo, no se recomienda usar. SCOPE GLOBAL

function hola(){
    var name = "Dolores"; //si borro el "var" cuando llamo por fuera de la funcion a la variable no tira error. 
}

hola();
console.log(name); //ERROR: como la variable esta dentro de la funcion hola(), quiere decir que esta siendo declarada en el scope local no funciona si es llamada x fuera. 

//Quiere decir que si uno NO usa let, var o const para declarar una variable esta automaticamente se asigna al scope global, poreso no tira error si borro var en el ej anterior. 

/* Diferencia entre let y var !!
 *  Las variables declaradas con const y let dentro de un ciclo o condición esta variable sólo estará disponible dentro del bloque de la estructura (osea dentro del clico o condición)
 *  Usar const solo para declarar una constante
 *  Usar var si queres declarar en el scope global o en el scope local dentro de una funcion. 
 *  Para todo el resto usa let. Por defecto tratar de usar siempre let.
 */

//Con var: tiene alcance dentro de la función más próxima.  
function mayorDeEdad(edad){
    if(edad >= 18){
      var resultado = "Eres mayor de edad"
    }else{
      var resultado = "Eres menor de edad"
    }
    console.log(resultado)
}

mayorDeEdad(7); //"Eres menor de edad"

//Con let y const: su alcance se limita al bloque más próximo, aca seria dentro de las {} del if y else.  
function mayorDeEdad(edad){
    //let resultado;                      //Si declaro dentro de la funcion por fuera de la condición, es scope global dentro de la funcion. Por ende funcionaria el código. 
    if(edad >= 18){
      let resultado = "Eres mayor de edad"
    }else{
      let resultado = "Eres menor de edad"
    }
    console.log(resultado)
}

mayorDeEdad(7); //ReferenceError: resultado is not defined

//Argumentos: llenan los parametros, aca seria el 2. Estos pueden ser de cualquier tipo de datos, string, numeros, etc. 
//Parámetros: es la variable que se pone dentro de (), el parametro seria numero.Tiene que ser completado cuando se llama a una funcion. Reciben argumentos. Se pueden usar mas de uno. 

function cuadrado(numero){ //parametro
    return numero * numero; 
}

cuadrado(2); //argumento

function cuadrado(numero){ //parametro
    return numero * numero; 
}

cuadrado(); // NaN, cuando esta vacio el argumento el valor es undefined. 

function cuadrado(numero = 0 ){  
    return numero * numero; 
}

cuadrado(); //0, porque el valor del parametro x default se declaro con 0. 

function nombreCompleto(nombre, apellido = "" ){ // si declaro mas de un parametro, los que tienen valor 0 || undefined deben ir primeros. 
    return nombre + apellido; 
}
nombreCompleto("Pupi"); 

function sumaTodos(){
    return arguments[0] + arguments[1];
}

console.log(sumaTodos(1,2, 3, 4, 5));

/**
 * Las funciones pueden retonar otra funcion. 
 */

function executor(funcion){
    funcion(); //los parentensis son solo para llamar a la funcion 
}

function decirHola(){
    console.log("Hola")
}

executor(decirHola); 

executor(function(){   //function es una funcion sin nombre.
    console.log("hello");
})

/**
 * this = es una variable especial que representa al obj. cuyo codigo se esta ejecutando en el momento, el valor de this cambia segun el contexto. 
 * Es muy dinámico. El valor de this es aquel que invoco la funcion. El contexto es el objeto que manda a llamar a la funcion. 
 */

console.log(this) //scope global, this es window, que seria todo. 

let objeto = {
    demo: function(){
        console.log(this); 
    }
}

let executor = {
    execute: function(f){ f();}
}

executor.execute(objeto.demo);

let user = {   // es un obj
    name: 'Dolo',  //propiedades
    lastname: 'Perez',
    username: function(){  //username es una funcion 
        console.log(this.name + ' ' + this.lastname)  //sino pongo this. la funcion no funcion y tira que username es undefined. 
    }
}

user.username(); // Dolo Perez

/** ARROW FUNCTIONS: es otra manera de escribir las funciones, esta es mas correcta. Tienen dos caracteristicas: 
 *  - Tienen una sintaxis mas corta que la declaracion de function()
 *  - No modifican el valor de this(contexto)
 */

const saludar = () =>{            //es mejor poner const, ya que las funciones deberian ser constantes. 
    console.log("Hola mundo");    //las llaves se omitin solo si la funcion es una linea de codigo. 
}

function suma(a,b){        
    return a + b;
}

suma = (a, b) => a + b

let gato = {   //gato es un obj. 
    raza: 'siames',
    sexo: 'Macho',
    nombre: 'Pepito',
    datos: function(){
        setTimeout(function(){    //ejecuta la funcion que enviamos como 1er argumento despues de q pase el tiempo especificado en el 2do argumento, que serian 1000. 
            console.log(this.raza + ' ' + this.sexo + ' ' + this.nombre)
        }, 1000);   //2do argumento 
    }
}

gato.datos(); // undefined undefined undefined, devuelve esto porque el contexto se cambio dentro de la funcion de setTimeout.  

let gato = {   //gato es un obj. 
    raza: 'siames',
    sexo: 'Macho',
    nombre: 'Pepito',
    datos: function(){
        setTimeout( () => {    //ejecuta la funcion que enviamos como 1er argumento despues de q pase el tiempo especificado en el 2do argumento, que serian 1000. 
            console.log(this.raza + ' ' + this.sexo + ' ' + this.nombre)
        }, 1000);   //2do argumento 
    }
}

gato.datos(); // saimes Macho Pepito, entonces si uno quiere conservar el valor de this dentro del contexto se debe utilizar la sintaxis de las arrow functions.

/** Metodos de this: 
 * - Los que ejecutan la funcion de manera inmediata : call / aply. Estos asignan el valor de this. Usan el 1er argumento como valor de this. 
 * - Los que construyen una funcion que puede ejecutarse despues: bind. 
 */

function executor(funcion){
    funcion.call(gato);   //todos los argumentos que se envien despues de call se ejecutan. El valor de gato sera el valor de this. 
}

let gato = {
    raza: 'mestizo',
    sexo: 'Hembra',
    gatoDatos: function(){
        console.log(this.raza + ' ' + this.sexo);
    }
}

executor(gato.gatoDatos);

function executor(funcion){
    funcion();   //todos los argumentos que se envien despues de call se ejecutan. El valor de gato sera el valor de this. 
}

let gato = {
    raza: 'mestizo',
    sexo: 'Hembra',
    gatoDatos: function(){
        console.log(this.raza + ' ' + this.sexo);
    }
}

executor(gato.gatoDatos.bind(gato));//bind le esta diciendo que genere una nueva funcion cuyo contexto es gato. Y esa funcion se la envia a la funcion de executor. 
// executor es una funcion que se le envia como argumento otra funcion especial que tiene definido quien será this de antemano, 
// no importa en el contexto que este. Ya tiene predefinido this y no se va a cambiar. 

/** ARREGLOS/ARRAYS: esta compuesto de variables. 
 * Es una coleccion de datos agrupados en una sola estructura. Es un grupo ordenado de bloques. 
 * Usar cuando los datos que se van a usar tienen que ser ordenados ya sea de manera aleatoria o no. 
 * - Se pueden almacenar cualquier tipo de dato; strings, numeros, booleanos, otros arrays, etc.
 * - La longitud es igual a la cantidad de elementos. (length) No tienen una longitud estatica. Si un array tiene 3 elementos su longitud seria 3. 
 * - Las posiciones inician en 0. (index)
 * - La última posición es la longitud, menos 1.
 */

let numbers = [1, 2, 3, 4, 5] // para evitar poner let numerOne = 1; let numberTwo = 2; let numberThree = 3. 

let miArray = [10, 15, 20] // index: 0, 1, 2.  

//METODO MAS USADO PARA RECORRER ARRAYS. 
for (let i= 0; i<array.length; i++){ // se va a recorrer (i = 0) desde que arranca en cero, en toda su longitud(length) y se va a ir de uno en uno. 
   console.log(miArray[i]);
} 

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

/* JSON: OBJETOS 
 *  es un objeto
 */

let movie = {                     //el nombre del obj
    title: 'Advengers',
    year: 2017,                 //propiedades serian: title, year, cast y los atributos serian los string. Los atributos pueden reasignarse 
    cast:['Scarlett', 'Robert'],  //se pueden poner arrays.
    watch: function(user){        //se puede asignar a una propiedad una funcion. watch seria un metodo. 
        console.log(user + ' ' + 'esta viendo la pelicula')
    }
}

//imprimir solo el titulo. 
console.log(movie['title']); // movie.title

console.log(movie.title);

//imprimir el metodo.
movie.watch('Dolores') //si o si debo pasar x parametro un valor 

//reasignar
movie.title = 'Woder Woman'
console.log(movie.title);

//modificar la funcion 
movie['watch'] = function(){}; 

//funcion que define la estructura de un obj. Se usa la palabra reservada new. 

function Movie(titulo, genero, year){    //se debe pasar por parametros los this. La constructura debe ser siempre en mayus. 
    this.titulo = titulo;  //con this se declaran las propiedades y los metodos para el objeto creado. Se pueden modificar.Luego se asigna el valor, ya sea string, int, etc a traves del new. 
    this.genero = genero;
    this.year = year;
    this.mirarPeli = function(user){    //metodo que seria una funcion
        console.log(user + ' ' + 'esta mirando');
    }
}

let movieNueva = new Movie();    //genero un nuevo objeto en base a Movie(); Se pasa por parametro el valor. 
movieNueva.mirarPeli('Miranda') //Miranda esta mirando

let movieDos = new Movie('Bastardos sin gloria');
let movieTres = new Movie('Toy Story ')

console.log(movieDos.titulo);
console.log(movieTres.titulo);

let movieCuatro = new Movie('Shrek', 'comedia', 2010); 

/** Las clases, se usa la palabra reservada class:
 * Se pueden declarar de tres maneras, una class declaration (la mas usada), luego dos class expression. 
 */

class Movie{  //class declaration, la mas recomendada. 
    constructor(title, genero, year){ //es un metodo, y las propiedades se enlistan dentro del constructor. 
        this.title = title;
        this.genero = genero;
        this.year = year;
    } 
    mirar(user){  //mirar es un metodo, user es un parametro. 
        console.log(user + ' esta mirando');
    }
} 

let movieCinco = new Movie('Halloween', 'Terror', 1993); //se agregan los datos mediante parametros. 
let movieSeis = new Movie('Africa Mia', 'Drama', 1980);

console.log(movieCinco.year); //se imprime el año
console.log(movieSeis)// Movie {title: "Africa Mia", genero: "Drama", year: 1980}, se imprime todo el objeto. 

movieCinco.mirar('Luis'); //Luis esta mirando

let Movie = class{} //class expression
let Movie = class Movie{} //class expression

//cada obj. es una instancia de la clase que se creo. 

//El constructor() es el lugar perfecto para incializar el objeto. Es donde irian los valores del mismo. Se puede ejecutar funciones, etc. 

class Music{
    constructor(artist, album, year = 2017, gen = 'rock-pop'){   //se pasan por parametro. 
        this.artist = artist;     //con this. se declaran las propiedades
        this.album = album;
        this.year = year;       //en el constructor se pueden poner valores x defecto y se pasan por parametros =2017 dentro del ();
        this.gen = gen;
    }
}

new Music('Album nuevo'); //se crea una nueva instancia en base a la clase Music. 

//Como implementar herencia en las clases. Quiere decir que se pueda reutilizar la misma funcionalidad respetando el diseño previo de los objetos. 

//1) Como se puede ver se repite la funcion(metodo) de play y duration, se deberian poner juntas y no repetir codigo. 
class Vimeo{
    play(){this.video.play();}
    duration(){this.video.duration / 100;}
    open(){this.redirectToVimeo(this.video);}
}

class Youtube{
    play(){this.video.play();}
    duration(){this.video.duration / 100;}
    open(){this.redirectToYoutube(this.video);}
}

//2) Por eso se pueden poner dentro de una clase padre. 

class Player{     //clase padre
    play(){this.video.play();}
    duration(){this.video.duration / 100;}
}

class Vimeo extends Player{   //clase hija, hereda todos los metodos que se declaran en la clase padre, poreso no hace falta poner play() y duration()
    open(){this.redirectToVimeo(this.video);}
}

class Youtube extends Player{ //clase hija
    open(){this.redirectToYoutube(this.video);}
}

let video = new Youtube();
video.play();

//Tambien se puede heredar de funciones constructoras 

function User(){}     //funcion constructer
class Admin extends User{}

class User{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola " + this.nombre);
    }
}

class Admin extends User{
    constructor(nombre){
        super(nombre); //llamamos a la funcion super NO obj. super. Con super ejecutamos el constructor de la clase que heredamos. Y recibe los arg. que enviamos en la clase padre.  
    }
    saludar(){     //se puede transcribir el mismo metodo en la clase Admin
        super.saludar(); //se accede al metodo de la clase padre
        //console.log("Hola usuario");   para no repetir el mismo codigo se usa super, con este objeto se puede tener acceso a los metodos de la clase padre.     
        console.log("Hola administrativo");
    }
}

let admin = new Admin('Dolores.'); //se crea el obj
admin.saludar(); //necesito llamar al obj. para usar el metodo. 

/** METODOS ACCEDORES: se comportan como si estuvieras modificando directamente la propiedad. Entonces se usan para modificar y mostrar la pdad. 
 * - getters: se usan para modificar las propiedades mismas. Cuando se usan los getters no se usan los () para llamarla. Controla como se muestra.
 * - setters: controla los detalles de como se modifica. 
 */
//abstraccion, hay que hacer los obj. eficientes. Encapsulacion.

class User{
    constructor(username){this._username = username;}   //no puede tener el mismo nombre de los getter o setter. Se recomienda el guion bajo para nombrar el this.

    get mayus(){   //esto es un metodo 
        return this._username.toUpperCase();  //se pasa a mayus.
    }

    set mayus(username){   //solo pueden recibir un argumento, no pueden recibir 0 ni mas de uno. Este argumento se utiliza para modificar la propiedad. 
        this._username = username;
    }
}

let user = new User('cedric');  //se crea el objeto. 
user.mayus = 'mabel';  //para usar el setter. Necesito el objeto para llamarlo. 
console.log(user.mayus);  //no se usa las () xq se esta usando un getter. 

/* Metodos que no necesitan de un obj. para ser ejecutados. Son dos:
 * - estaticos: static
 * - de clase:
 */

class Vendedor{
    static create(){}
}

class MasVentas{
    static quienHizoMasVentas(vendedor1, vendedor2){     //es la construccion personalizada de objetos. 
        //comparar las ventas
    }
} 

Vendedor.create();  //no necesita un obj para usar el metodo. 

/** Prototipos: javascript los usa. 
 */

let user = {name: 'Dolores'};

typeof user;  //"object"; Es un obj. xq en js porque esta escrito en {}

let animal = Object.create(null)//esta seria el prototipo de perro. Seria el padre. 

animal.vivo = true;
animal.estaVivo = function(){ if(this.vivo) console.log('esta vivo');}
let perro = Object.create(animal)  // se crea un obj. a traves de otro obj. 

perro.estaVivo(); // esta vivo

/**se corrobora que los prototipos de los objs y funciones son iguales, esto sirve para modificar los objetos creados de la funcion
 * incluso desp de haber sido generados. Es posible modificar todos los objetos creados a partir de esa funcion ya generada. 
*/

function User(){} //se crea una funcion 

let user = new User();  //se crea un objeto

console.log(user.__proto__); //es el prototipo de una funcion
console.log(User.prototype); //es el protitpo de un obj. 

user.__proto__ == User.prototype; //true, quiere decir que ambos objs. son iguales. El protipo de la funcion paso a ser el prototipo del objeto. 

//Herencia a traves de funciones. 

function User(){}

User.prototype.saludar = function(){  //lo que se hereda
    console.log('hello')
}

function Admin(){}    //aca se estan heredando los atributos de User a Admin. 
Admin.prototype = new User();

let dolores = new Admin();

dolores.saludar();

/** Programación asíncronica:  
 * algunas operaciones que tardan mucho tiempo en funcionar, 
 * pasan a segundo plano mientras terminen de manera que nada 
 * bloquea la funcion. Se llama Event Loop
 * 
 * - callback: es una funcion que se pasa como argumento a una operación asincrona 
 * con la expectativa de que dicha función será ejecutada una vez la operación termine. 
 * 
 * - callback hell: se evitan con las promesas. 
*/

//instalar npm install request-promise en la carpeta q quiera. 
//
//const request = require ('request'); 
//
//request('http://google.com', function(){
//   console.log('Termine la peticion de google')
//
//console.log('Yo voy despues, en el codigo, de la peticion de google')

//se transcribe el código de arriba

/** PROMESAS: representa un valor que desp, eventualmente existirá. Puede ser el resultado de una funcion o un error. Esto quiere decir que el valor
 * se entregará más adelante. Promete que va a entregar algo. A diferencia de los callback las promesas si son un tipo de objetos. 
 *  - then: tienen un metodo al cual le enviamos una funcion
 *  Estados de las promesas:
 * - fullfiled: completado, la promesa se cumplio con exito.
 * - rejected: rechazada, la promesa no se cumplió. 
 * - pending: pendiente, la promesa no se ha cumplido. 
 * - setled: la promesa termino con error o con exito. 
 */
const rp = require('request-promise');
const { try } = require('bluebird');

rp('http://google.com')
    .then(function(html){     //esta funcion se ejecutará sino hay errores. .then es un metodo 
        console.log('termine la peticion de google')
    }).catch(function(err){   //si la promesa falla se ejecutará el error.   .catch es otro metodo
        console.log(err);
    })

function asincrono(){
    return new Promise(function(res, rej){  //res: resolve y se debe llamar si la promesa se cumplió. rej:rejected, se llama cuando la promesa es rechazada. 
        res('Todo salió bien');

        rej(new Error('No se cumplió la promesa'));
    })
}

//Crear mis propias promesas

function asincrono(){
    return new Promise(function(resolve, reject){ //aca se crea la promesa, este executer es una funcion recibe dos argeumentos: resolve, reject. Pueden tener el nombre q quieras

    });   //Este metodo (function) esta retornando una promesa
}


//resolve: se debe llamar cuando la funcion termino y fue exitosa. Recibe como argumento la peticion. Marca la promesa como fullfiled o completada
//reject: se debe llamar cuando la promesa no se cumplio. Recibe un error. 

/** Resolver múltiples promesas; es para evitar un callback hell.
 *  Un callback hell seria una promesa adentro de otra y etc. serian promesas y funciones anidadas. 
 *  Por eso se puede resolver todas las promesas en una sola linea de codigo. Ej:
*/

//ANTES, UN CALLBACK HELL

//estas son las dos promesas
let p1 = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hello world'));

let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 600, 'Hello world again'));

//esto es el metodo
let saludar = () =>{
    console.log('Hola a todos')    
}

//esto es el callback hell, una funcion dentro de otra. 
p1.then(function(){           //primero se ejecuta la promesa 1
    p2.then(function(){       //luego se ejecuta la promesa 2
        saludar();             //por ultimo se ejecuta la funcion saludo. 
    })
})

//DESPUES, SIN SER UN CALLBACK HELL. Es más clara la sintaxis.  

Promise.all([p1, p2]).then(resultados=>{  //se pasan todas las promesas q quiero q se resuelvan en forma de arrays. 
    saludar();//aca van los resultados de esas dos promesas. El metodo devuelve la respuesta una vez que ambas promesas esten resueltas o devuelvan un error. 
})

//CONCLUSION: AMBOS CODIGOS DAN EL MISMO RESULTADO EN LA TERMINAL QUE SERIA LA RESPUESTA DEL STRING DEL METODO SALUDAR(); 'HOLA A TODOS'.
//EN PROMISE.ALL SI UNA PROMESA FALLA TODO EL CONJUNTO X MAS QUE ESTE BIEN FALLA. 

/** EJEMPLO DE ENCADENAR PROMESAS: cuando iniciamos sesion en una red social: Todo son operaciones asincronas pero antes de iniciar la 2da se necesita que termine
 * la primera. 
 * 1ro: se necesita saber el usuario 
 * 2d0: se activan los resultados del usuario existente
 * 3ro: se buscan en la base de datos las publicaciones que son para este usuario 
 */

//SE PUEDE ENCADENAR TANTAS PROMESAS QUERAMOS.
//CONCLUSION: el lenguaje bloquea otras funciones mientras espera el resultado de promesas anteriores. Es multitarea. 

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

//for of: se aplica a cualquier objeto iterable como arrays, string, map, etc. 

let numbers = [1, 5, 7, 10];

for (number of numbers){   //numberr: es una variable que se crea a partir del for y adquiere el valor de los elementos del array. 
    console.log(number)
}

function saludarATodos(){   
    for(name of arguments){       //OJO LOS ARGUMENTS NO FUNCIONAN CON LAS ARROW FUNCTIONS. 
        console.log('Bienvenido/a ' + name)
    }
}

saludarATodos('Serena', 'Dan', 'Chuck ');

//for in: itera sobre las propiedades envez de los valores. 

let user = {
    name: 'Dolores',  //name: propiedad, 'Dolores' es valor
    age: 27,
    height: 156,
    birth: '02/03/1993'
}

for(propiedad in user){
    console.log(propiedad)  //name age, height, birth 
}

/** EN CONCLUSION:
 * FOR OF: ITERA SOBRE LOS VALORES
 * FOR IN: ITERA SOBRE LAS PROPIEDADES
 */

//ASYNC/ AWAIT
//ASYNC: siempre retorna una promesa 

const sumar = async (valor1, valor2) => {
    return valor1 + valor2;
}

async function sumar(valor1, valor2){
    return valor1 + valor2;
}

//AWAIT: hace que la ejecucion del código espere a que la promesa se resuelva evita que escribas then o que constatemente estes creando mas funciones. 
//para usarlo se debe hacer dentro de una funcion async. 

const juntarResultados = async () =>{
    let resultado = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 430, 'hola la primera promesa esta cumplida')  //resuelve la promesa en 430segs y devuelve el string. 
    });

    let resultadoDos = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 250, 'y la segunda promesa se cumplió')
    });
    console.log(resultado + ' ' + resultadoDos);
}

juntarResultados(); // 'hola la primera promesa esta cumplida y la segunda promesa se cumplio'

const sumar = async () =>{
    let resultado = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 2, 40)  
    });
    let resultadoDos = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 2, 20)
    });
    console.log(resultado + resultadoDos);
}

sumar(); //60

let baseUrl = 'https://github.com/dperezlaborda'

const showGitHub = async () =>{
    let response = await fetch(`${baseUrl}`);  //marcas las peticiones: quiere decir que se que retornará una promesa 
    let respon = await response.json();
    console.log(respon)
}

showGitHub();

//MANEJAR ERRORES EN PROMESAS, cuando una promesa falla se usa el catch. 
// se usan bloques try y catch

const promesaFalla = async () => {
    try{
        await Promise.reject("error");
    }catch(err){
        console.log(err);
    }
}

promesaFalla();

/** MODULOS: SON ARCHIVOS QUE NOS PERMITEN COMPARTIR ELEMENTOS DE CODIGO CON OTRO CODIGO. 
 * SON UNA FORMA A TRAVES DE LAS CUALES SE PUEDEN COMPARTIR, VARIABLES, CLASES, ETC. 
 * SON UNA ESTRATEGIA PARA DIVIR EL CODIGO. Con los modulos se evita crear varias etiquetas <script>
 * 
 * SE DIVIDE ASI: 
 * funciones --> clases --> modulos de js. 
 * 
 * export: Exporta uno o varios elementos (variables, funciones, clases...) del fichero actual.
 * import: Importa uno o varios elementos (variables, funciones, clases...) desde otro fichero .js
 * 
 * NO es posible usar export dentro de funciones, bucles o contextos específicos.
 * 
 * Si por un lado tenemos export , la palabra clave import es su opuesta.
 */

//ejemplos: 

let number = 5;

const saludar = () =>{
    'Hello!'
};

const sumar = (a, b) => {
    return(
        a + b
    );
}
sumar(10, 50); 

class Animal{};

//con export 

export {
    number
}; // Se crea un módulo y se añade la variable number

export {
    saludar,
    sumar as contar
}; // Se añade saludar y sumar al módulo

export {
    Animal as
    default
}; // Se añade Clase al módulo (default)

export {
    saludar as otroNombre
}; // Se añade otroNombre al módulo. 

//con import. Lo opuesto a export. 

import nombre from './file.js';	//Importa sólo el elemento por defecto de file.js en nombre. Se importa el elemento desde el file.js y se guarda en la variable nombre. 

import { nombre } from './file.js';//Importa sólo el elemento nombre de file.js

import { n1, n2 } from './file.js';//Importa los elementos indicados desde file.js

import './file.js'; //No importa elementos, pero ejecuta el código de file.js

// Incorrecto
import { elemento } from "module.mjs";
import { elemento } from "folder/module.mjs";

// Correcto
import { elemento } from "./module.mjs"; // misma carpeta del .js
import { elemento } from "/module.mjs"; // carpeta raíz
import { elemento } from "../module.mjs"; // carpeta anterior al .js

//SIEMPRE SE DEBE ACLARAR EN LA ETIQUETA DE <script> DE HTML QUE ESTAS EXPORTANDO UN MODULO: type="module" DE LO CONTRARIO SOLO EXPORTARÁ EL ARCHIVO JS. 

import def from 'bla bla';  //pueden ser la cantidad que quiera 

let valorPorDefecto = 250;

export default valorPorDefecto; // correcto; default es una variable, puede haber un solo valor default.
export default = valorPorDefecto; // incorrecto

//charAt(); Devuelve un string y se pasa por () en numeros en donde deberia localizarlo. Devuelve cualquier cosa que este dentro del string ya sean espacios vacios o comas.
//Por ej: 

var seriesVistasEnCuarent = 'Euphoria, Dark y Gossip Girl'

console.log(seriesVistasEnCuarent.charAt(3)); //devuelve h
console.log(seriesVistasEnCuarent.charAt(9)); //devuelve el espacio vacio
console.log(seriesVistasEnCuarent.charAt(8)); //devulve ,

//VALORES READ ONLY: son valores que se importan y como solo esta leyendo la info que se exporta no se puede modificar el valor. 

//Una variable puede modificar su valor dentro del mismo modulo que fue declarada, no por fuera de este. Por eso se declara la variable const y no con let. Por ej:

//Dentro de un mismo modulo.

export let edad = 27;

edad = 30; //se modifica bien. 

//modulo 1

export let edad = 27;

//modulo 2: base

edad = 30; // tira error. 

//GENERADORS E ITERADORES: 
/* ITERADOR: ES CUALQUIER OBJETO QUE IMPLETA EL 'ITERATOR PROTOCOLE', SERIA CUALQUIER OBJETO QUE RECORRE UNA COLECCION (ARRAYS, OBJETOS, ETC)
 * Y DEVUELVE UN VALOR AL TERMINAR. 
 * Tanto los generadores como los iteradores nos permiten trabajar un dato a la vez. Estos datos a la vez es lo que el iterador o generador
 * va produciendo en el ejemplo value seria este caso. Puede ser un numero, funcion, array, etc. 
 */

//sintaxis de iterador: 

let iterador = { //objeto
    next(){ //sigue una funcion next, dentro de ella va lo que quiero que haga el iterador
        return{
            value: null,  //es cualquier dato que queremos que el iterador produzca
            done: true   //es un booleano, que indica si el iterador ha terminado de producir valores a iterar o no. Cuando es true el iterador se ha completado. Si es false, significa que sigue corriendo el iterador. 
        }
    } 
}; 

//un iterador que imprima valores del 1 al 5.

let iterador = {
    currentValue : 1,
    next(){   
        let result = {value: null, done: false};

        if(this.currentValue > 0 && this.currentValue <= 5){
            result = {value: this.currentValue, done: false};
            this.currentValue +=1; 
        }else{
            result = {done:true}
        }
        return result; 
    }
}

console.log(iterador.next()); //primero llama a la variable que esta definida y despues como lo único que puede llamar es una funcion y esa es next. 
//imprimi: {value: 1, done: false} //Si llama a next(); solo este va a estar indefinido porque nace dentro de una variable. 
console.log(iterador.next()); // si lo llamo nuevamente imprimi que el value es 2
console.log(iterador.next()); // si lo imprimo mas de 5 veces ya no hay valor porq se cumplió el iterador. done:true. 
//cada valor se itera y llama a next 

setTimeout(()=> console.log(iterador.next()), 5000) // Un iterador se corre una vez y listo, NO se puede reiniciar. Termina cuando no hay mas valor y retorna la propiedad done como true. 

//mismo ejercicio pero utilizo un ciclo que devuelva un true o false. Mientras ocurra determinada funcion haceme lo otro. 

let item = iterador.next();

while(!item.done){   //mientras el item no tengo su propiedad done como true continue corriendo el codigo      
    console.log(item.value) //se imprime en consola el valor de item    
    item = iterador.next();
}

//SE IMPRIME UNO POR UNO LOS NUMEROS: 1, 2, 3, 4, 5. 

//imprimir numeros del 1 al 10 con for. 

const entrarAlBar = () =>{
    let secretPhrase = "";
    while(secretPhrase !== "puto el que lee"){
        secretPhrase = prompt("Bienvenido a JaVar, por favor escriba la frase secreta del dia");
        console.log(secretPhrase);
    }
}

entrarAlBar();

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





