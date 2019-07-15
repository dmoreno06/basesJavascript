//determinar cual es el numero mayor de un arreglo

let numeros = [1,8,15,2,9,5,11,6];
let nMayor = -9999999;

for (let d = 0; d <= numeros.length; d++) {
    if(numeros[d] >= nMayor){
        nMayor=numeros[d];
    }
    
}
console.log(nMayor);

