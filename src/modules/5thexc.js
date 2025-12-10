//Exercise #5
//For each of the exercises below, assume you are starting with the following people array.


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.

console.log("Y los ganadores son:", people.toString());

//Write the command to remove "Dani" from the array.

const sinDani = people.splice(1,1);
console.log ("Dani se fue! ahora solo quedan:", sinDani.toString());

//Write the command to remove "Juan" from the array.
const sinJuan = people.splice(2,1);
console.log ("ahora se fue Juan!, ahora solo queda:", sinJuan.toString())

//Write the command to move "Luis" to the front of the array.

 const moveLuis = people.splice(1, 1)[0];   
    console.log(people.unshift(moveLuis).toString());    


//Write the command to add your name to the end of the array.

people.push("Genas");

console.log (people);

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.

let contador = 0;
while (contador < people.length) {
    console.log(people[contador]);
    if (people[contador] === "Maria") {
        break;
    }
    contador++;

}

//Write the command that gives the indexOf where "Maria" is located.

  let indiceMaria = 0;
    while (indiceMaria < people.length) {
        if (people[indiceMaria] === "Maria") {
            break;
        }
        indiceMaria++;
    }
    console.log("Índice de Maria:", indiceMaria);

//At the end of the exercise, there should be 4 people in the array.

   console.log("Array final:", people);

    return {
        titulo: "Ejercicio 5: Solo pop, push, shift, unshift, splice y while",
        descripcion: "Manipulación de array usando exclusivamente los métodos pedidos",
        arrayOriginal: ["Maria", "Dani", "Luis", "Juan", "Camila"],
        resultado: people,
        explicacion: `
            Usé SOLO los métodos que pediste:<br>
            • splice() → eliminar Dani y Juan<br>
            • splice() + unshift() → mover Luis al inicio<br>
            • push() → añadir "Serch"<br>
            • while + break → imprimir hasta Maria<br>
            • while manual → buscar índice de Maria<br>
            Resultado final: 4 personas
        `
    };
