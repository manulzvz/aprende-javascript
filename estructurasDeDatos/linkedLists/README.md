# 🧩 Implementación de una Linked List en JavaScript (Modular)

Este proyecto muestra cómo implementar una estructura de datos **Linked List (lista enlazada)** en JavaScript moderno, utilizando una arquitectura modular con tres archivos:  

- `Node.js`: Define la clase `Node`, que representa cada elemento de la lista.  
- `LinkedList.js`: Define la clase `LinkedList`, con los métodos principales para manejar la lista.  
- `main.js`: Archivo principal donde se prueba la funcionalidad de la lista enlazada.

---

## 📦 Estructura del proyecto

```

/linked-list/
│
├── Node.js           # Clase Node
├── LinkedList.js     # Clase LinkedList con métodos
└── main.js           # Archivo principal para ejecutar y probar

````

---

## ⚙️ Paso a paso para crear tu propia Linked List

### 1. Crear la clase `Node` (`Node.js`)

Este archivo define el nodo que almacena los datos y la referencia al siguiente nodo:

```js
// Node.js
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
````

---

### 2. Crear la clase `LinkedList` (`LinkedList.js`)

Aquí se definen los métodos de la lista: agregar nodos, eliminar, imprimir, etc.

```js
// LinkedList.js
import { Node } from './Node.js';

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  printList() {
    let current = this.head;
    let output = '';
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    console.log(output + 'null');
  }
}
```

---

### 3. Usar la lista en el archivo principal (`main.js`)

Aquí probamos la funcionalidad de nuestra lista:

```js
// main.js
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.printList(); // Output: 10 -> 20 -> 30 -> null
```

---

## ✅ Objetivos de este ejercicio

* Comprender la estructura y funcionamiento de una **Linked List**.
* Aprender a usar módulos en JavaScript (`import/export`).
* Practicar separación de responsabilidades en tu código.
* Fortalecer habilidades en estructuras de datos fundamentales.

---

## 💡 Ideas para extender

* Agrega un método `prepend()` para insertar al inicio.
* Agrega un método `delete(value)` para eliminar un nodo específico.
* Implementa una función para contar los elementos de la lista.

---

## 📚 Recursos recomendados

* [MDN - import/export](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
* [Estructuras de datos en JavaScript - FreeCodeCamp](https://www.freecodecamp.org/learn/)


