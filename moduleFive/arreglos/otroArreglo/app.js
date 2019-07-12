let personas = ['Marian','Paola','Laura'];
let salarios = [8000000,3400000,4800000];

for (let d = 0; d < personas.length; d++) {
    const persona = personas[d];
    let gana = salarios[d];
    console.log('La empleada ' + persona + ' Tiene un salario mensal de: ' + gana);
    
}