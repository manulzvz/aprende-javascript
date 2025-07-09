// 2. Secuencia de operaciones asíncronas
      // Simula 3 funciones que devuelven promesas y 
      // ejecútalas en orden usando await.

function tareaUno() {
return new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 1 completa."), 1000)
);
}

function tareaDos() {
return new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 2 completa."), 1500)
);
}

function tareaTres() {
return new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 3 completa."), 2000)
);
}

async function ejecutarTareas() {
const resultadoUno = await tareaUno();
console.log(resultadoUno);

const resultadoDos = await tareaDos();
console.log(resultadoDos);

const resultadoTres = await tareaTres();
console.log(resultadoTres);
}

ejecutarTareas();
      