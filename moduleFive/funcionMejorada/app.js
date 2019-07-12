function imprimirTabla(base,limite) {
    for (let i = 0; i <= limite; i++) {
        let resultado = base * i;
        console.log(base + 'x' + i + '=' + resultado);
    }
}
imprimirTabla(3,3+'\n');
imprimirTabla(7,3+'\n');
imprimirTabla(9,3+'\n');
imprimirTabla(11,3+'\n');
imprimirTabla(12,3);
