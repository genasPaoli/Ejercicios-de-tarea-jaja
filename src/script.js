

import { ejercicioUno } from "./modules/1stexc.js"
import { ejercicioDos } from "./modules/2ndexc.js";
import { ejercicioTres } from "./modules/3rdexc.js";
import { ejercicioCuatro } from "./modules/4thexc.js";


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
    const datos = ejercicioDos();  
    console.log('Resultado ejercicio 2:', datos.resultado);
    mostrarResultado(datos);
});

document.getElementById('thrdBttn').addEventListener('click', () => {
    const datos = ejercicioTres();
    console.log('Resultado ejercicio 3:', datos.resultado);
    mostrarResultado(datos);
});

document.getElementById('frthBttn').addEventListener('click', () => {
    const datos = ejercicioCuatro();
    console.log('Resultado ejercicio 4:', datos.resultado);
    mostrarResultado(datos);
});