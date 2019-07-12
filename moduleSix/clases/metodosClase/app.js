class Carro {

    constructor(marca, tipo, color, puertas) {
        this.marca = marca;
        this.tipo = tipo;
        this.color = color;
        this.puertas = puertas;

        this.fechaCreacion = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    //metodos
    encenderCarro() {
        if (this.encendido) {
            console.error('El carro enta encendido');
        } else {
            this.encendido = true;
            console.log('El carro enta encendido');
        }
        return this;

    }

    realizarViaja(consumo) {
        if (this.encendido) {
            if (consumo > this.gasolina) {
                console.log('No puedo realizar el viaje: gasolina' + this.gasolina);

            } else {
                this.gasolina = this.gasolina - consumo;
                return 'le queda' + this.gasolina;
            }

        } else {
            console.log('El carro esta apagado');

        }

    }
}

let objCarro = new Carro('Mazda', 'Sedan', 'blanco', 5);

console.log(objCarro);
