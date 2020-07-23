/** Prototipos: javascript los usa. 
 */

let user = {name: 'Dolores'};

typeof user;  //"object"; Es un obj. xq en js porque esta escrito en {}

let animal = Object.create(null)//esta seria el prototipo de perro. Seria el padre. 

animal.vivo = true;
animal.estaVivo = function(){ if(this.vivo) console.log('esta vivo');}
let perro = Object.create(animal)  // se crea un obj. a traves de otro obj. 

perro.estaVivo(); // esta vivo

/**se corrobora que los prototipos de los objs y funciones son iguales, esto sirve para modificar los objetos creados de la funcion
 * incluso desp de haber sido generados. Es posible modificar todos los objetos creados a partir de esa funcion ya generada. 
*/

function User(){} //se crea una funcion 

let user = new User();  //se crea un objeto

console.log(user.__proto__); //es el prototipo de una funcion
console.log(User.prototype); //es el protitpo de un obj. 

user.__proto__ == User.prototype; //true, quiere decir que ambos objs. son iguales. El protipo de la funcion paso a ser el prototipo del objeto. 

//Herencia a traves de funciones. 

function User(){}

User.prototype.saludar = function(){  //lo que se hereda
    console.log('hello')
}

function Admin(){}    //aca se estan heredando los atributos de User a Admin. 
Admin.prototype = new User();

let dolores = new Admin();

dolores.saludar();