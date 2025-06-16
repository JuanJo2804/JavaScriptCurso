const readline = require('readline');


  // Lógica para el llavero troquelado

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el ancho del llavero en cm: ', (anchoCms) => {
  rl.question('Ingrese la cantidad horizontal: ', (cantidadHorizontal) => {
    rl.question('Ingrese el espacio entre llaveros en cm: ', (espacioEntreCms) => {
      // Convertir los valores a números
      const ancho = parseFloat(anchoCms);
      const cantidad = parseInt(cantidadHorizontal, 10);
      const espacio = parseFloat(espacioEntreCms);

      // Realizar la operación
      const resultado = 2 + (ancho * cantidad) + ((cantidad - 1) * espacio);

      console.log(`El largo en Cms es: ${resultado}cms`);
      rl.close();
    });
  });
});

  // Validar y procesar la información ingresada
