const { ListNode } = require('../extensions/list-node.js');

/** A FIFO queue backed by a singly linked list. */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const node = this.head;
    this.head = node.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    return node.value;
  }

  /** Return a plain-object snapshot of the linked list, preserving value references. */
  getUnderlyingList() {
    const sentinel = { next: null };
    let tail = sentinel;
    let current = this.head;

    while (current) {
      tail.next = { value: current.value, next: null };
      tail = tail.next;
      current = current.next;
    }

    return sentinel.next;
  }
}

module.exports = {
  Queue,
};
