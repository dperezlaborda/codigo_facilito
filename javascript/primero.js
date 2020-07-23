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








const entrarAlBar = () =>{
    let secretPhrase = "";
    while(secretPhrase !== "puto el que lee"){
        secretPhrase = prompt("Bienvenido a JaVar, por favor escriba la frase secreta del dia");
        console.log(secretPhrase);
    }
}

entrarAlBar();


//Return en funciones generadores: Cuando se usa return en una funcion generadora este produce un valor respetando la sintaxis de
//un objeto que contiene la propiedad done y value. Todo lo que aparezca despues de un return no se generara, es decir el código
//no sigue corriendo ya que tiene la propiedad done como true. 

function* retornador(){
    return 3;   //se produce un valor para la próxima vez que mandamos a llamar next; 

    yield 5; // esto no va a correr porque el codigo finalizó cuando se dio el return. 
}

let g = retornador();

console.log(g.next()); //retorna en la consola: {value: 3, done: true}

/* RETURN VS. YIELD
 * return: se puede usar solamente una vez 
 * yield: se puede usar cuantas veces quiera 
 */

//Delegar generadores: quiere decir que una funcion generadora delega a otra funcion generadora. Un generador delega a otro generador la continuidad
//LA SINTAXIS: SE AGREGA UN * PARA NOTIFICAR AL CÓDIGO QUE ES SE DELEGA LA FUNCION A OTRO GENERADOR. 

function* counter(){   //el otro generador 
    for(var i=1; i<5; i++){
        yield i;
    }
}

let generador = counter();

function* retornador(){    
    yield* counter();   //con yield* llama a la otra funcion y delega la continuidad del codigo a otro generador que es counter()
}

let g = retornador();  //es el primer generador 
console.log(g.next());  //SE IMPRIME EN LA CONSOLA ESO:     {value: 1, done: false}   

/** EL CODIGO FUNCIONA ASI (DE ABAJO PARA ARRIBA):
 * 1ero Se llama a g que anteriormente se declara como una funcion que es un generador
 * 2do Dentro del generador retonardor(); se llama a yield* que a su vez delega la continuidad a otro generador
 * 3ero Se delega la continuidad a este otro generador counter();console.log(g.next());
 * 4to counter(); toma el control porque dentro tiene la funcion. Una vez que este termina la continuidad, que no se lo llama más, retornara algo el generador
 * retornador()
 * 5to Por ultimo uno puede llamar cuantas veces quiera a next(); y este ira sumando sus valores. Quiere decir que el value sera 2, 3, 4, etc. 
 */

//ej: 

function* counter(){   //5to 
    for(var i=1; i<5; i++){
        yield i;
    }
}

let generador = counter();

function* retornador(){    //3ero 
    yield* counter();  //4to

    console.log("regresé")  //5to 
}

let g = retornador(); //2do 
console.log(g.next()); //1ero todos los console.log
console.log(g.next());
console.log(g.next());

//Donde se usan los generadores: promesas, async await, redux-saga es un manejador de estado, se declaran una serie de pasos y se declaran a traves de generadores. 

/** SIMBOLOS EN JS: son unicos, sirven para cuando uno quiere crea un metodo que no se debe reemplazar nunca.
 * Se usan simbolos envez de cadenas para que nadie apesar de que le ponga el mismo nombre reemplaze el metodo. 
 * No son prácticos, solo en algunos casos muy particulares. 
 */

let primerSimbolo = Symbol('simbolito'); //unicamente estoy declarando el simbolo y lo que esta dentro de () es el nombre que le quiero poner
let segundoSimbolo = Symbol('simbolito');
console.log(primerSimbolo === segundoSimbolo); //false

let simbolo = Symbol('mi-primer-simbolo');

let obj = {};

obj[simbolo] = function(){
    console.log('Hola soy un simbolo');
}

obj[simbolo]();  //IMPRIME: Hola soy un simbolo

//ITERABLES CON ITERADORES: 
//ARRAYS, STRINGS, ALGUNOS OBJETOS. 






/*
 * Mostrar en consola los números desde el 100 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
 */

const cadaDiez = ()=>{
    let number = 100;
    while( number >= 0){
        number --;
        if(number % 10){
            console.log(number);
        }else{
            console.log(`** ${number} **`);
        }
    }
}

cadaDiez();

/* Escribir una funcion que reciba una frase e imprima la palabra mas larga de la misma*/

const imprPlbraMasLrg = () =>{
    
}

imprPlbraMasLrg("Bastardos sin gloria")

//Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado.

const devElNroMnr = (numbers) =>{
    numbers.split(" ");

}

devElNroMnr(prompt("Ingrese numeros"));

