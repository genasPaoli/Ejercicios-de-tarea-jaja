

import { ejercicioUno } from "./modules/1stexc.js"

import { ejercicioDos } from "./modules/2ndexc.js";


const resultadoDiv = document.getElementById('resultado')

function mostrarResultado(objeto) {
      resultadoDiv.innerHTML = `
 <h2>${objeto.titulo}</h2>
        <p><strong>Descripción:</strong> ${objeto.descripcion}</p>
        <p><strong>Array original:</strong> [${objeto.arrayOriginal?.join(', ') || objeto.resultado}]</p>
        <p><strong>Resultado:</strong> [${objeto.resultado.join(', ')}]</p>
        <p><em>${objeto.explicacion}</em></p>
    `;

}

document.getElementById('frstBttn').addEventListener('click', () => {
    const datos = ejercicioUno();
    console.log('Resultado ejercicio 1', datos.resultado);
    mostrarResultado(datos)
});

document.getElementById('scndBttn').addEventListener('click', () => {
    const datos = ejercicioDos();   // ¡Aquí se ejecuta!
    console.log('Resultado ejercicio 2:', datos.resultado);
    mostrarResultado(datos);
});