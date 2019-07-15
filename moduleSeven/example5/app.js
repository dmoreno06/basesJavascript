//crear una funcion que reciba 3 argumentos numericos

function numeros(n1, n2, n3) {

   let numeros = [n1, n2, n3];
   let nMayor = -9999999;

   for (let d = 0; d < numeros.length; d++) {
      if (numeros[d] >= nMayor) {
         nMayor = numeros[d];
      }

   }
   return nMayor
}
console.log(numeros(5, 3, 6));