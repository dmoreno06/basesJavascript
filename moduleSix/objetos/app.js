function describerPersona(per) {

    
    console.log(`${per.nombre} tiene una edad de ${per.edad} y mide ${per.estaturas}`);
    
}
let personas = {
    nombre:'Marcela',
    edad: 56,
    estaturas: 1.69
};

describerPersona(personas);

