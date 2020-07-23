/** Las clases, se usa la palabra reservada class:
 * Se pueden declarar de tres maneras, una class declaration (la mas usada), luego dos class expression. 
 */

class Movie{  //class declaration, la mas recomendada. 
    constructor(title, genero, year){ //es un metodo, y las propiedades se enlistan dentro del constructor. 
        this.title = title;
        this.genero = genero;
        this.year = year;
    } 
    mirar(user){  //mirar es un metodo, user es un parametro. 
        console.log(user + ' esta mirando');
    }
} 

let movieCinco = new Movie('Halloween', 'Terror', 1993); //se agregan los datos mediante parametros. 
let movieSeis = new Movie('Africa Mia', 'Drama', 1980);

console.log(movieCinco.year); //se imprime el año
console.log(movieSeis)// Movie {title: "Africa Mia", genero: "Drama", year: 1980}, se imprime todo el objeto. 

movieCinco.mirar('Luis'); //Luis esta mirando

let Movie = class{} //class expression
let Movie = class Movie{} //class expression

//cada obj. es una instancia de la clase que se creo. 