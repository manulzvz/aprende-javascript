//   1. Transforma el ejercicio anterior con async/await
      //   Usa async/await y try/catch para manejar el resultado.

      function comprobarPar(numero) {
        return new Promise((resolve, reject) => {
          if (numero % 2 == 0) {
            resolve("Es par!");
          } else {
            reject("Es impar");
          }
        });
      }

      async function validarNumero (numero) {
        try {
            const resultado = comprobarPar(numero);
            console.log(resultado);
        } catch (error) {
            console.error(error);
        }
      }

      validarNumero(7);
      