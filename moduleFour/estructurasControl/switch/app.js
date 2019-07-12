/* 
inggesa
 ingresado un numero mostrar el dia de la semana que corresponde.
 */
let dia = 5;
switch (dia) {
    case 1:
        console.log('Hoy es Lunes');
        break;
    case 2:
        console.log('Hoy es Martes');
        break;
    case 3:
        console.log('Hoy es Miercoles');
        break;
    case 4:
        console.log('Hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es Viernes');
        break;
    case 6:
        console.log('Hoy es Sabado');
        break;
    case 0:
        console.log('Hoy es Domingo');
        break;

    default:
        console.log('el numero ingresado no pertenece a nungun dia de la semana');
        break;
}
