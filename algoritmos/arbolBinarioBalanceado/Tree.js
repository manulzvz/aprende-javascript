// Tree.js
const Node = require('./Node.js');

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  cleanArray(array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  buildTree(array) {
    const cleanArr = this.cleanArray(array);
    return this._buildTreeRec(cleanArr, 0, cleanArr.length - 1);
  }

  _buildTreeRec(arr, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = this._buildTreeRec(arr, start, mid - 1);
    node.right = this._buildTreeRec(arr, mid + 1, end);
    return node;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (node === null) return new Node(value);
    if (value === node.data) return node;
    if (value < node.data) {
      node.left = this._insertRec(node.left, value);
    } else {
      node.right = this._insertRec(node.right, value);
    }
    return node;
  }

  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }

  _deleteRec(node, value) {
    if (node === null) return null;
    if (value < node.data) {
      node.left = this._deleteRec(node.left, value);
    } else if (value > node.data) {
      node.right = this._deleteRec(node.right, value);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let minLargerNode = node.right;
      while (minLargerNode.left) minLargerNode = minLargerNode.left;
      node.data = minLargerNode.data;
      node.right = this._deleteRec(node.right, minLargerNode.data);
    }
    return node;
  }

  find(value) {
    return this._findRec(this.root, value);
  }

  _findRec(node, value) {
    if (node === null) return null;
    if (value === node.data) return node;
    if (value < node.data) return this._findRec(node.left, value);
    return this._findRec(node.right, value);
  }

  levelOrderForEach(callback) {
    if (typeof callback !== "function") throw new Error("Callback required");
    const queue = [];
    if (this.root) queue.push(this.root);
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") throw new Error("Callback required");
    this._inOrder(this.root, callback);
  }
  _inOrder(node, callback) {
    if (!node) return;
    this._inOrder(node.left, callback);
    callback(node);
    this._inOrder(node.right, callback);
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") throw new Error("Callback required");
    this._preOrder(this.root, callback);
  }
  _preOrder(node, callback) {
    if (!node) return;
    callback(node);
    this._preOrder(node.left, callback);
    this._preOrder(node.right, callback);
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") throw new Error("Callback required");
    this._postOrder(this.root, callback);
  }
  _postOrder(node, callback) {
    if (!node) return;
    this._postOrder(node.left, callback);
    this._postOrder(node.right, callback);
    callback(node);
  }

  height(value) {
    const node = this.find(value);
    if (!node) return null;
    return this._heightRec(node);
  }
  _heightRec(node) {
    if (!node) return -1;
    return 1 + Math.max(this._heightRec(node.left), this._heightRec(node.right));
  }

  depth(value) {
    return this._depthRec(this.root, value, 0);
  }
  _depthRec(node, value, depth) {
    if (!node) return null;
    if (node.data === value) return depth;
    if (value < node.data) return this._depthRec(node.left, value, depth + 1);
    return this._depthRec(node.right, value, depth + 1);
  }

  isBalanced() {
    return this._isBalancedRec(this.root);
  }
  _isBalancedRec(node) {
    if (!node) return true;
    const lh = this._heightRec(node.left);
    const rh = this._heightRec(node.right);
    if (Math.abs(lh - rh) > 1) return false;
    return this._isBalancedRec(node.left) && this._isBalancedRec(node.right);
  }
}

module.exports = Tree;
