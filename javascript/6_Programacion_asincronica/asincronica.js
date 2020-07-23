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