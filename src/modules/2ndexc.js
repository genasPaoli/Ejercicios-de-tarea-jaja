/*

Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/
export function ejercicioDos() {

    const arNmbrs = [1, 3, 6, 34, 92, 87];

    const pordosNmbrs = arNmbrs.map((x) => x * 2);

    console.log(pordosNmbrs);


    return {
        titulo: "Ejercicio 2: Map (Duplicar)",
        descripcion: "Duplicar cada número del array",
        arrayOriginal: arNmbrs,
        resultado: pordosNmbrs,
        explicacion: "map() transforma cada elemento multiplicando por 2"
    };

}

//The map() method of Array instances creates a new array 
// populated with the results of calling a provided function
// on every element in the calling array.