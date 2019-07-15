//filtrar nombres

function filtrar(arr,letra) {

   let nuevoArr =[];

   for (let d = 0; d < arr.length; d++) {
      let nombre =arr[d];

      if (nombre[0] === letra) {
         nuevoArr.push(nombre);
      }

   }
   return nuevoArr
}
let studiosGhibli = ['LA TUMBA DE LAS LUCIÉRNAGAS', 'HARU EN EL REINO DE LOS GATOS', 'EL VIENTO SE LEVANTA', 'EL RECUERDO DE MARNIE'];
let titulos= filtrar(studiosGhibli,'L');
console.log(titulos);