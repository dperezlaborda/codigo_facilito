import { name, edad, trabajo } from './modulo_dos.js'; //el from especifica en que carpeta se encuentra el modulo. Estos valores que estoy importando se llaman "read only". 
import contarVocales from './modulo_dos.js'; 

console.log(name, edad, trabajo);

console.log(contarVocales('hola hola hello world')); //12
