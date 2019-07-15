//fuencion para determinar el nombre mas largo.

function masLargo(array) {

   let nombreLargo = '';

   for (let d = 0; d < array.length; d++) {
      let nombre = array[d];
      if (nombre.length > nombreLargo.length) {
         nombreLargo = nombre;
      }

   }
   return nombreLargo
}
let studiosGhibli = ['LA TUMBA DE LAS LUCIÉRNAGAS', 'HARU EN EL REINO DE LOS GATOS', 'EL VIENTO SE LEVANTA', 'EL RECUERDO DE MARNIE']


let tituloLargo = masLargo(studiosGhibli);
console.log(tituloLargo);
