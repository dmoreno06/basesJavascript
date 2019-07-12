let personaUno = {
    nombre: 'Diana',
    edad:'32',
    sexo:'F'
};
let personaDos = {
    nombre: 'Juan',
    edad:'42',
    sexo:'M'
};
let personaTres = {
    nombre: 'Marcela',
    edad:'23',
    sexo:'F'
};

let personas = [personaUno,personaDos,personaTres];
/*console.log(personans);*/


for (const persona of personas) {
    console.log(persona.nombre+'--tiene-'+persona.edad+'-años -y su sexo es-'+persona.sexo);   
}