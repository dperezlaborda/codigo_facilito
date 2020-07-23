/** METODOS ACCEDORES: se comportan como si estuvieras modificando directamente la propiedad. Entonces se usan para modificar y mostrar la pdad. 
 * - getters: se usan para modificar las propiedades mismas. Cuando se usan los getters no se usan los () para llamarla. Controla como se muestra.
 * - setters: controla los detalles de como se modifica. 
 */
//abstraccion, hay que hacer los obj. eficientes. Encapsulacion.

class User{
    constructor(username){this._username = username;}   //no puede tener el mismo nombre de los getter o setter. Se recomienda el guion bajo para nombrar el this.

    get mayus(){   //esto es un metodo 
        return this._username.toUpperCase();  //se pasa a mayus.
    }

    set mayus(username){   //solo pueden recibir un argumento, no pueden recibir 0 ni mas de uno. Este argumento se utiliza para modificar la propiedad. 
        this._username = username;
    }
}

let user = new User('cedric');  //se crea el objeto. 
user.mayus = 'mabel';  //para usar el setter. Necesito el objeto para llamarlo. 
console.log(user.mayus);  //no se usa las () xq se esta usando un getter. 

/* Metodos que no necesitan de un obj. para ser ejecutados. Son dos:
 * - estaticos: static
 * - de clase:
 */

class Vendedor{
    static create(){}
}

class MasVentas{
    static quienHizoMasVentas(vendedor1, vendedor2){     //es la construccion personalizada de objetos. 
        //comparar las ventas
    }
} 

Vendedor.create();  //no necesita un obj para usar el metodo. 