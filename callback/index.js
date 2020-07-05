const request = require ('request');  //instalar request.  npm install request

request('http://google.com', function(){   //request: es un metodo asincrono que recibe como 2do argumento un callback (function) que no tiene nada. |
    console.log('Termine la peticion de google')  //esta no bloquea la ejecucion del codigo, poreso aparece segunda. El codigo sigue sin esperar que termine la peticion de google. 
});  

console.log('Yo voy despues, en el codigo, de la peticion de google')

//en la terminal queda asi: Yo voy despues, en el codigo, de la peticion de google // Termine la peticion de google. 

/** Queda asi porque la primera instruccion (console.log('Termine la peticion de google')) no bloquea la ejecucion del código. 
 * Esto permite aprovechar el codigo ya que nunca se frena.
 */

//esto quiere decir que una vez que se termine de cargar la pagina de google se envie un mensaje de function. 
/** En la terminal me paro en el archivo donde quiero ejecutar la accion y escribo: 
 * node nombre del archivo, en este caso seria: 
 * node index.js 
*/

function leer(url){
    return new Promise (function(res, rej){   //la funcion debe recibir dos argumentos. 

        request(url, function(err, response){
            if(err){
                rej(err);
            }else{
                res(response);
            }    
        });
    });
}

leer('http://codigofacilito.com')
    .then(function(response){
        console.log(response);
    })
    .catch(function(err){
        console.log(err);
    })


