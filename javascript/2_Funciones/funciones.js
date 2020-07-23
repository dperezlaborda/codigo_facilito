/*FUNCIONES:
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