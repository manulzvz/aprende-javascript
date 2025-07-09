//  5. Consulta a una API pública (ej. JSONPlaceholder)
      //  usando fetch con async/await

async function obtenerUsuarios() {
try {
    const respuesta = await fetch(
    "https://jsonplaceholder.typicode.com/users"
    );
    const usuarios = await respuesta.json();
    console.log(usuarios);
} catch (error) {
    console.log(`Error al obtener usuarios: ${error}`);
}
}

obtenerUsuarios();
