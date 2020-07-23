/Como implementar herencia en las clases. Quiere decir que se pueda reutilizar la misma funcionalidad respetando el diseño previo de los objetos. 

//1) Como se puede ver se repite la funcion(metodo) de play y duration, se deberian poner juntas y no repetir codigo. 
class Vimeo{
    play(){this.video.play();}
    duration(){this.video.duration / 100;}
    open(){this.redirectToVimeo(this.video);}
}

class Youtube{
    play(){this.video.play();}
    duration(){this.video.duration / 100;}
    open(){this.redirectToYoutube(this.video);}
}

//2) Por eso se pueden poner dentro de una clase padre. 

class Player{     //clase padre
    play(){this.video.play();}
    duration(){this.video.duration / 100;}
}

class Vimeo extends Player{   //clase hija, hereda todos los metodos que se declaran en la clase padre, poreso no hace falta poner play() y duration()
    open(){this.redirectToVimeo(this.video);}
}

class Youtube extends Player{ //clase hija
    open(){this.redirectToYoutube(this.video);}
}

let video = new Youtube();
video.play();

//Tambien se puede heredar de funciones constructoras 

function User(){}     //funcion constructer
class Admin extends User{}

class User{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola " + this.nombre);
    }
}

class Admin extends User{
    constructor(nombre){
        super(nombre); //llamamos a la funcion super NO obj. super. Con super ejecutamos el constructor de la clase que heredamos. Y recibe los arg. que enviamos en la clase padre.  
    }
    saludar(){     //se puede transcribir el mismo metodo en la clase Admin
        super.saludar(); //se accede al metodo de la clase padre
        //console.log("Hola usuario");   para no repetir el mismo codigo se usa super, con este objeto se puede tener acceso a los metodos de la clase padre.     
        console.log("Hola administrativo");
    }
}

let admin = new Admin('Dolores.'); //se crea el obj
admin.saludar(); //necesito llamar al obj. para usar el metodo. 