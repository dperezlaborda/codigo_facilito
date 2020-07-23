const { reject } = require("bluebird");

function calcular(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,500,7);  //500 milisegundos
    })
}

function segundoCalculo(numero){   //2da promesa tiene el resultado de la primera, que seria el numero 7. 
    console.log(numero);  //7 
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 200, 'segunda promesa')  //200 milisegundos 
    })
}

calcular().then(segundoCalculo).then(console.log); 
//Primero se ejecuta la funcion calcular() que retorno la primera promesa dicha promesa se resuelve y toma en 500 milisegundos el valor de 7
//Segundo sobre dicha promesa (la primera) ejecutamos el metodo .then() y se envia por argumento la segunda funcion. Quiere decir que cuando
//se resuelva la primera promesa se ejecutará segundoCalculo(numero) e irá como argumento el resultado de la primera, 7, una vez que termina
//retornará una nueva promesa para que se vea la imprimimos mediante el .then(console.log). 


//ambas funciones devulven (return) nuevas promesas. Serian 2 promesas 

/** en la terminal: node encandenar_promesas.js
 * imprime: 7                --> el numero sale del console.log(numero), es el resultado que obtiene de la primera promesa. 
 *          segunda promesa  --> el resultado que obtiene de la segunda promesa 
 */