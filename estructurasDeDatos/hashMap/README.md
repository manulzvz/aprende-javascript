# 🗂️ Proyecto: Implementa tu propio HashMap en JavaScript

Este proyecto te guiará paso a paso para construir una estructura de datos **HashMap** desde cero en JavaScript.  
Aprenderás sobre hashing, manejo de colisiones, crecimiento dinámico y buenas prácticas de diseño.

---

## 🧭 Pasos a Seguir

### 1. Crea la Clase `HashMap`

Define una clase que acepte dos parámetros opcionales: el **factor de carga** (`loadFactor`) y la **capacidad inicial** (`capacity`).

```js
class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    // Inicializa tus variables aquí
  }
}
````

---

### 2. Implementa el Método `hash(key)`

Este método convierte una clave en un índice para los buckets.
Usa el operador `%` en cada iteración para evitar desbordamientos.

```js
hash(key) {
  let hashCode = 0;
  const prime = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
  }
  return hashCode;
}
```

---

### 3. Inicializa los Buckets

Crea un arreglo de buckets donde almacenarás los pares `[key, value]`.

```js
this.buckets = Array.from({ length: capacity }, () => []);
```

---

### 4. Método `set(key, value)`

* Calcula el índice usando el hash.
* Busca si la clave existe en el bucket correspondiente:

  * Si existe, actualiza el valor.
  * Si no, agrega el nuevo par.
* Si el factor de carga se supera, **duplica la capacidad y reubica los elementos**.

---

### 5. Método `get(key)`

Devuelve el valor asociado a una clave o `null` si no existe.

---

### 6. Método `has(key)`

Devuelve `true` si la clave existe, `false` si no.

---

### 7. Método `remove(key)`

Elimina el par `[key, value]` asociado a la clave.
Devuelve `true` si lo elimina, `false` si la clave no existe.

---

### 8. Método `length()`

Devuelve la cantidad de elementos almacenados.

---

### 9. Método `clear()`

Elimina todos los elementos del hash map.

---

### 10. Métodos `keys()`, `values()`, `entries()`

* `keys()`: Devuelve un array con todas las claves.
* `values()`: Devuelve un array con todos los valores.
* `entries()`: Devuelve un array de pares `[key, value]`.

---

## 🧪 Ejemplo de Uso

```js
const map = new HashMap(0.75, 16);

map.set('apple', 'red');
map.set('banana', 'yellow');

console.log(map.get('apple'));     // 'red'
console.log(map.has('banana'));   // true
map.remove('apple');
console.log(map.length());        // 1
console.log(map.keys());          // ['banana']
```

---

## 💡 Consejos y Buenas Prácticas

* Usa solo **strings como claves**.
* Implementa el **crecimiento dinámico** cuando se supere el `loadFactor`.
* Maneja las **colisiones** almacenando múltiples pares por bucket (array de pares).
* No te preocupes por mantener el **orden de inserción**.
* Separa la lógica en métodos pequeños y reutilizables.

---

¡Sigue estos pasos y tendrás tu propio `HashMap` funcional en JavaScript!
Perfecto para practicar estructuras de datos desde cero 🚀



