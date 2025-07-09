//   2. Promesa que puede fallar
      //   Crea una función que reciba un número y devuelva
      //  una promesa que:
      //   Se resuelva si el número es par.
      //   Se rechace si es impar.

function comprobarPar(numero) {
return new Promise((resolve, reject) => {
    if (numero % 2 == 0) {
    resolve("Es par!");
    } else {
    reject("Es impar");
    }
});
}

comprobarPar(24).then(console.log).catch(console.error);