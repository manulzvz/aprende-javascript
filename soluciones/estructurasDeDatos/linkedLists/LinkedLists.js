//  LinkedLists.js

import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // append(value): Agrega un nodo al final
  append(value) {
    // Crea un nuevo nodo con el valor dado
    const newNode = new Node(value);
    // Si la lista esta vacia, el nodo se convierte en el Head
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    // Si no esta vacia, recorre la lista hasta el ultimo nodo y enlaza el nuevo nodo al final
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // prepend(value): Agrega un nodo al inicio
  prepend(value) {
    // Crea un nuevo nodo con el valor dado
    const newNode = new Node(value);
    // El nuevo nodo apunta al nodo que era el primero (headNode)
    newNode.nextNode = this.headNode;
    // El headNode es ahora el nuevo nodo
    this.headNode = newNode;
  }

  // size(): Devuelve el número de nodos
  get size() {
    // Recorre la lista contando cada nodo hasta llegar al final (null)
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    // Devuelve el total contado
    return count;
  }

  // head(): Devuelve el primer nodo
  get head() {
    return this.headNode;
  }

  // tail(): Devuelve el último nodo
  get tail() {
    // Si la lista esta vacia retorna null
    if (!this.headNode) return null;
    // Si no, recorre la lista hasta encontrar el nodo cuyo nextNode es null
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    // Retorna ese nodo
    return current;
  }

  // at(): Devuelve el nodo en la posición indicada
  at(index) {
    // Empieza desde el primer nodo
    let current = this.headNode;
    // Avanza nodo por nodo hasta llegar al indice deseado
    // Si llega al indice, retorna ese nodo.
    let count = 0;
    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }
    // Si el indice es mayor al numero de nodos en la lista retorna null
    return null;
  }

  // pop(): Elimina el último nodo
  pop() {
    // Si la lista esta vacia, no hace nada
    if (!this.headNode) return;
    // Si la lista solo tiene un nodo, la lista queda vacia
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    // Si hay mas, recorre hasta el penultimo nodo y le pone nextNode = null (eliminando el ultimo)
    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // contains(): Devuelve true si el valor está en la lista
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // find(): Devuelve el índice del nodo con ese valor, o null si no existe
  find(value) {
    // Recorre la lista desde el primer nodo y si el valor corresponde retorna el indice
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    // En caso de no encontrarlo regresa null
    return null;
  }

  // toString(): Devuelve la lista en formato: ( valor ) -> ( valor ) -> null
  toString() {
    let current = this.headNode;
    let str = "";
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += "null";
    return str;
  }

  // insertAt(value, index): Inserta un nodo en la posición indicada.
  insertAt(value, index) {
    if (index < 0) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let prev = this.at(index - 1);
    if (!prev) return; // Si el índice es mayor que el tamaño de la lista, no hace nada
    const newNode = new Node(value);
    newNode.nextNode = prev.nextNode;
    prev.nextNode = newNode;
  }

  // removeAt(index): Elimina el nodo en la posición indicada.
  removeAt(index) {
    if (index < 0 || !this.headNode) return;
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    let prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
  }
}

export default LinkedList;
