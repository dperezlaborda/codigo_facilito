//El constructor() es el lugar perfecto para incializar el objeto. Es donde irian los valores del mismo. Se puede ejecutar funciones, etc. 

class Music{
    constructor(artist, album, year = 2017, gen = 'rock-pop'){   //se pasan por parametro. 
        this.artist = artist;     //con this. se declaran las propiedades
        this.album = album;
        this.year = year;       //en el constructor se pueden poner valores x defecto y se pasan por parametros =2017 dentro del ();
        this.gen = gen;
    }
}

new Music('Album nuevo'); //se crea una nueva instancia en base a la clase Music. 
