// 1. Simula una operación asíncrona simple
      // Crea una función que devuelva una promesa que se 
      // resuelva después de 2 segundos con el mensaje: 
      // "Operación completada".

function operacionAsincrona() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve("Operacion Completada");
    }, 2000);
});
}

operacionAsincrona().then((resultado) => console.log(resultado));
