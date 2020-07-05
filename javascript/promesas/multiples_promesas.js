let p1 = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hello world'));    
//le estamos diciendo a setTimeout que llame a resolve despues de 800 segs y se enviara el 3 parametro, q seria 'Hello world' como valor de resuelta la promesa.  
let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 600, 'Hello world again'));

let p3 = Promise.reject(); //no va el new porq creamos una promesa que tiene el metodo(función) .reject que desde el ppio esta rechazada. Da error. 

let saludar = () =>{
    console.log('Hola a todos')    
}

//p1.then(console.log);  //en la terminal se imprime: Hello World

//p1.then(function(){           //primero se ejecuta la promesa 1
//    p2.then(function(){       //luego se ejecuta la promesa 2
//        saludar();             //por ultimo se ejecuta la funcion saludo. 
//    })
//})

//en la terminal queda: Hello world --> que seria la primer promesa cumplida. Luego imprime Hola a todos --> que seria la funcion. 

//Todo lo anterior es un callback hell quiere decir que es una promesa adentro de otra y adentro funciones. Se puede resumir de la siguiente manera: 

//este codigo funciona igual que el otro y esta mas resumido y no es un hell. 

Promise.all([p1, p2, p3]).then(resultados=>{  //se pasan todas las promesas q quiero q se resuelvan //promise.all recibe como argumento un array de promesas
    console.log(resultados) //en la consola ['Hello world', 'Hello world again'];
    saludar();// los resultados es una variable que contiene un array que contiene todas las respuestas de las promesas. 
}).catch(()=> console.log('Ha fallado :( '));

//promise.all si una de las promesas falla el conjunto va a figurar como fallido, osea resultados sera un error. //.then es un metodo 


/** EN LA CONSOLA: escribo: node multiples_promesas.js 
 *                 imprime: Ha fallado :( 
 * 
 * Demuestra que si una de las promesas falla (p3) todo el conjunto figura como fallido por mas que las otras dos promesas (p1, p2) se cumplieron.  
 */

