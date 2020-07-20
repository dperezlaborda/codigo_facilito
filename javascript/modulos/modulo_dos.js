export const name = 'Dolores';  //exporto la variable a otro modulo deentro de la misma carpeta js. 
export let edad = 27;
export const trabajo = 'buscando'; 

edad = 30;

const contarVocales = (text) =>{
    const vocales = ['a', 'e', 'i', 'o', 'u']; //Primero creo un array de vocales
    let contarVocales = 0; //se inicia el contador en cero
    for(let letras of text.toLowerCase()){   //loopea (recorre) el text introducido para buscar las vocales
        if(vocales.includes(letras)){        
            contarVocales++;  //el contador va sumando las vocales 
        }
    }
    return contarVocales;
}

export default contarVocales; 

//Mostrar en consola los números pares del 0 al 100 utilizando la estructura for

for (let i = 0; i<=100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
