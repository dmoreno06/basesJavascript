/*
*crear una funcion que permita determinar
*la calificacion de 3 alumnos
*uno con nota de 5, otro con 3.5,
y el ultimo con nota 2.6
*/
function notaEstudiante(nota, nombre) {
    let notaLetra = '';

    if (nota >= 4 && nota <= 5) {
        notaLetra = 'E';
        console.log('La nota definitva del estudiante ' + nombre + ' es: ' + notaLetra);
    } else {
        if (nota >= 3 && nota < 4) {
            notaLetra = 'A';
            console.log('La nota definitva del estudiante ' + nombre + ' es: ' + notaLetra);
        }
        else {
            if (nota >= 1 && nota < 3) {
                notaLetra = 'D';
                console.log('La nota definitva del estudiante ' + nombre + ' es: ' + notaLetra);
            }
        }
    }
}
notaEstudiante(5,'Juan');
notaEstudiante(3.5,'Camil@');
notaEstudiante(2.6,'Andrea');