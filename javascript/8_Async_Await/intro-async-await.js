//ASYNC/ AWAIT
//ASYNC: siempre retorna una promesa 

const sumar = async (valor1, valor2) => {
    return valor1 + valor2;
}

async function sumar(valor1, valor2){
    return valor1 + valor2;
}

//AWAIT: hace que la ejecucion del código espere a que la promesa se resuelva evita que escribas then o que constatemente estes creando mas funciones. 
//para usarlo se debe hacer dentro de una funcion async. 

const juntarResultados = async () =>{
    let resultado = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 430, 'hola la primera promesa esta cumplida')  //resuelve la promesa en 430segs y devuelve el string. 
    });

    let resultadoDos = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 250, 'y la segunda promesa se cumplió')
    });
    console.log(resultado + ' ' + resultadoDos);
}

juntarResultados(); // 'hola la primera promesa esta cumplida y la segunda promesa se cumplio'

const sumar = async () =>{
    let resultado = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 2, 40)  
    });
    let resultadoDos = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 2, 20)
    });
    console.log(resultado + resultadoDos);
}

sumar(); //60

let baseUrl = 'https://github.com/dperezlaborda'

const showGitHub = async () =>{
    let response = await fetch(`${baseUrl}`);  //marcas las peticiones: quiere decir que se que retornará una promesa 
    let respon = await response.json();
    console.log(respon)
}

showGitHub();