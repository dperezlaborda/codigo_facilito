//MANEJAR ERRORES EN PROMESAS, cuando una promesa falla se usa el catch. 
// se usan bloques try y catch

const promesaFalla = async () => {
    try{
        await Promise.reject("error");
    }catch(err){
        console.log(err);
    }
}

promesaFalla();