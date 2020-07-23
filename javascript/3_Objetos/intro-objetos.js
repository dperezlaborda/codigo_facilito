/*
 * this = es una variable especial que representa al obj. cuyo codigo se esta ejecutando en el momento, el valor de this cambia segun el contexto. 
 * Es muy dinámico. El valor de this es aquel que invoco la funcion. El contexto es el objeto que manda a llamar a la funcion. 
 */

console.log(this) //scope global, this es window, que seria todo. 

let objeto = {
    demo: function(){
        console.log(this); 
    }
}

let executor = {
    execute: function(f){ f();}
}

executor.execute(objeto.demo);

let user = {   // es un obj
    name: 'Dolo',  //propiedades
    lastname: 'Perez',
    username: function(){  //username es una funcion 
        console.log(this.name + ' ' + this.lastname)  //sino pongo this. la funcion no funcion y tira que username es undefined. 
    }
}

user.username(); // Dolo Perez

let gato = {   //gato es un obj. 
    raza: 'siames',
    sexo: 'Macho',
    nombre: 'Pepito',
    datos: function(){
        setTimeout(function(){    //ejecuta la funcion que enviamos como 1er argumento despues de q pase el tiempo especificado en el 2do argumento, que serian 1000. 
            console.log(this.raza + ' ' + this.sexo + ' ' + this.nombre)
        }, 1000);   //2do argumento 
    }
}

gato.datos(); // undefined undefined undefined, devuelve esto porque el contexto se cambio dentro de la funcion de setTimeout.  

let gato = {   //gato es un obj. 
    raza: 'siames',
    sexo: 'Macho',
    nombre: 'Pepito',
    datos: function(){
        setTimeout( () => {    //ejecuta la funcion que enviamos como 1er argumento despues de q pase el tiempo especificado en el 2do argumento, que serian 1000. 
            console.log(this.raza + ' ' + this.sexo + ' ' + this.nombre)
        }, 1000);   //2do argumento 
    }
}

gato.datos(); // saimes Macho Pepito, entonces si uno quiere conservar el valor de this dentro del contexto se debe utilizar la sintaxis de las arrow functions.

/* JSON: OBJETOS 
 *  es un objeto
 */

let movie = {                     //el nombre del obj
    title: 'Advengers',
    year: 2017,                 //propiedades serian: title, year, cast y los atributos serian los string. Los atributos pueden reasignarse 
    cast:['Scarlett', 'Robert'],  //se pueden poner arrays.
    watch: function(user){        //se puede asignar a una propiedad una funcion. watch seria un metodo. 
        console.log(user + ' ' + 'esta viendo la pelicula')
    }
}

//imprimir solo el titulo. 
console.log(movie['title']); // movie.title

console.log(movie.title);

//imprimir el metodo.
movie.watch('Dolores') //si o si debo pasar x parametro un valor 

//reasignar
movie.title = 'Woder Woman'
console.log(movie.title);

//modificar la funcion 
movie['watch'] = function(){}; 

//funcion que define la estructura de un obj. Se usa la palabra reservada new. 

function Movie(titulo, genero, year){    //se debe pasar por parametros los this. La constructura debe ser siempre en mayus. 
    this.titulo = titulo;  //con this se declaran las propiedades y los metodos para el objeto creado. Se pueden modificar.Luego se asigna el valor, ya sea string, int, etc a traves del new. 
    this.genero = genero;
    this.year = year;
    this.mirarPeli = function(user){    //metodo que seria una funcion
        console.log(user + ' ' + 'esta mirando');
    }
}

let movieNueva = new Movie();    //genero un nuevo objeto en base a Movie(); Se pasa por parametro el valor. 
movieNueva.mirarPeli('Miranda') //Miranda esta mirando

let movieDos = new Movie('Bastardos sin gloria');
let movieTres = new Movie('Toy Story ')

console.log(movieDos.titulo);
console.log(movieTres.titulo);

let movieCuatro = new Movie('Shrek', 'comedia', 2010); 