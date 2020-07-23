//for of: se aplica a cualquier objeto iterable como arrays, string, map, etc. 

let numbers = [1, 5, 7, 10];

for (number of numbers){   //numberr: es una variable que se crea a partir del for y adquiere el valor de los elementos del array. 
    console.log(number)
}

function saludarATodos(){   
    for(name of arguments){       //OJO LOS ARGUMENTS NO FUNCIONAN CON LAS ARROW FUNCTIONS. 
        console.log('Bienvenido/a ' + name)
    }
}

saludarATodos('Serena', 'Dan', 'Chuck ');

//for in: itera sobre las propiedades envez de los valores. 

let user = {
    name: 'Dolores',  //name: propiedad, 'Dolores' es valor
    age: 27,
    height: 156,
    birth: '02/03/1993'
}

for(propiedad in user){
    console.log(propiedad)  //name age, height, birth 
}

/** EN CONCLUSION:
 * FOR OF: ITERA SOBRE LOS VALORES
 * FOR IN: ITERA SOBRE LAS PROPIEDADES
 */