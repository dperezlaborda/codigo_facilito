const request = require('request');  //antes debo instalar en la terminal npm install request
const { resolve, reject } = require('bluebird');


function leer(url){
    return new Promise(function(resolve, reject){
        //la funcion asincrona debe ejecutarse dentro del executer
        //resolve ('todo piola, se cumplió la promesa');
        request(url, function(err, response){
            if(err){
                reject(err);
            }else{
                resolve(response);
            }
        });
        //reject (new Error('No se cumplió la promesa'));
    });
}

leer('https://renee.com.ar/')
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    });

let p1 = new Promise((resolve, reject)=> setTimeout(resolve, 800, 'Hello world'));    
//le estamos diciendo a setTimeout que llame a resolve despues de 800 segs y se enviara el 3 parametro, q seria 'Hello world' como valor de resuelta la promesa.  
let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 900, 'Hello world again'));

p1.then(console.log);
