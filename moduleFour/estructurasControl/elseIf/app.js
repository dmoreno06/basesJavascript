/* cree un algoritmo que permita determinar la calificacion en letras de un alumno
si la nota se encuentra entre 4 a 5 = E
si la nota se encuentra entre 3 a 3.9 = A
si la nota se encuentra entre 1 a 2.9 = D
 */
let nota = 4.3;
let notaLetra='';

if(nota>=4  && nota<=5){
    notaLetra='E';
    console.log('La nota definitva del estudiante es: '+notaLetra);
}else{
    if(nota>=3  && nota<4){
        notaLetra='A';
        console.log('La nota definitva del estudiante es: '+notaLetra);
    }
    else{
        if(nota>=1  && nota<3){
            notaLetra='D';
            console.log('La nota definitva del estudiante es: '+notaLetra);
        }
    }
}