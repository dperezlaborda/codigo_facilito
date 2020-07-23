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