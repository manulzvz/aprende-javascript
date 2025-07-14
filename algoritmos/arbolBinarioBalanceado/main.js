// main.js
const Tree = require('./Tree.js');

function prettyPrint(node, prefix = '', isLeft = true) {
  if (node === null) return;
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

// Ejemplo de uso:
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log("Árbol balanceado:");
prettyPrint(tree.root);

console.log("¿Está balanceado?", tree.isBalanced());

console.log("Recorrido en orden:");
tree.inOrderForEach(node => console.log(node.data));

console.log("Insertando 10000...");
tree.insert(10000);
console.log("¿Está balanceado?", tree.isBalanced());

console.log("Eliminando 8...");
tree.deleteItem(8);
prettyPrint(tree.root);

console.log("Altura del nodo 23:", tree.height(23));
console.log("Profundidad del nodo 23:", tree.depth(23));

tree.levelOrderForEach(node => {
  console.log(node.data);
});
