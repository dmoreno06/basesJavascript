let carro = {
    marca: 'Toyota',
    tipo: 'Sedan',
    color: 'Rojo',
    puertas: 4
};

class Carro {

    constructor(marca, tipo, color, puertas) {
        this.marca = marca;
        this.tipo = tipo;
        this.color = color;
        this.puertas = puertas;
        this.fechaCreacion = 'hoy';
    }
}

let objCarro = new Carro('Mazda','Sedan','blanco',5);

console.log(carro);
console.log(objCarro);
