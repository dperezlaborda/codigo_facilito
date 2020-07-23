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
