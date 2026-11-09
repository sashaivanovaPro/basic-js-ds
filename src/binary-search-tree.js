const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/** An unbalanced binary search tree with unique values. */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return;
      }

      const direction = data < current.data ? 'left' : 'right';

      if (!current[direction]) {
        current[direction] = new Node(data);
        return;
      }

      current = current[direction];
    }
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return current;
      }

      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;

    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
