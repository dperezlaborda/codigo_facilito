/** ARREGLOS/ARRAYS: esta compuesto de variables. 
 * Es una coleccion de datos agrupados en una sola estructura. Es un grupo ordenado de bloques. 
 * Usar cuando los datos que se van a usar tienen que ser ordenados ya sea de manera aleatoria o no. 
 * - Se pueden almacenar cualquier tipo de dato; strings, numeros, booleanos, otros arrays, etc.
 * - La longitud es igual a la cantidad de elementos. (length) No tienen una longitud estatica. Si un array tiene 3 elementos su longitud seria 3. 
 * - Las posiciones inician en 0. (index)
 * - La última posición es la longitud, menos 1.
 */

let numbers = [1, 2, 3, 4, 5] // para evitar poner let numerOne = 1; let numberTwo = 2; let numberThree = 3. 

let miArray = [10, 15, 20] // index: 0, 1, 2.  

//METODO MAS USADO PARA RECORRER ARRAYS. 
for (let i= 0; i<array.length; i++){ // se va a recorrer (i = 0) desde que arranca en cero, en toda su longitud(length) y se va a ir de uno en uno. 
   console.log(miArray[i]);
} 