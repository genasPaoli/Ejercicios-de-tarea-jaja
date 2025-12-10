const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

export function ejercicioCuatro() {

    const cursosComunes = student1Courses.filter(curso =>
        student2Courses.includes(curso)
    );

    if (cursosComunes.length > 0) {
        cursosComunes.forEach(curso => {
            console.log(curso);
        });
    } else {
        console.log("No hay cursos en comun");
    }
    return {
        titulo: "Ejercicio 4: Filter + Includes",
        descripcion: "Encontrar cursos comunes entre dos estudiantes",
        arrayOriginal: student1Courses, student2Courses,
        resultado: cursosComunes,
        explicacion: `Materias del estudiante 1: ${student1Courses.join(', ')}<br>
                      Materias del estudiante 2: ${student2Courses.join(', ')}<br><br>
                      <strong>Cursos en común:</strong> ${cursosComunes.length > 0 ? cursosComunes.join(', ') : 'Ninguno'}`
    };

}