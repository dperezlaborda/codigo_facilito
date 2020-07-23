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