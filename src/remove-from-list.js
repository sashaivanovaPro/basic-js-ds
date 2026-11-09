/** Remove every node whose value equals k, preserving the remaining nodes. */
function removeKFromList(l, k) {
  const sentinel = { next: l };
  let current = sentinel;

  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return sentinel.next;
}

module.exports = {
  removeKFromList,
};
