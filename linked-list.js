/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    let next

    if (this.tail === null) this.tail === newNode;

    if (this.head) next = this.head

    this.head = newNode;
    this.head.next = next;
    
    if(this.length === 0) this.tail = this.head
    this.length += 1

  }

  /** pop(): return & remove last item. */

  pop() {
    // let val = this.head
    // let popVal = this.tail

    // if (!this.head) return
    // if (this.length === 1){
    //   this.tail = this.head
    // }

    // while (val.next !== null){
    //   val = val.next
    // }
    // this.tail = val
    // val.next = null
    // this.length -= 1
    
    // return popVal.val;

    // OR THIS:
    return this.removeAt(this.length -1)
  }

  /** shift(): return & remove first item. */

  shift() {
    // let shiftVal = this.head.val;
    // let val = this.head.next.val;

    // if(!this.head === null){
    //   throw new Error("Empty list!")
    // };

    // this.head = val;
    // this.length -= 1;

    // return shiftVal;

    // OR THIS:
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let currentNode = this.head
    let count = 0

    while(currentNode){
      if (count === idx) {
        currentNode.val = val
        return currentNode
      }

      count++;
      currentNode = currentNode.next
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if (idx >= this.length || idx < 0) {
    //   throw new Error("Invalid index.");
    // }

    // let currentNode = this.head
    // let previousNode
    // let node = new Node(val)

    // if (idx === 0){
    //   node.next = this.head;
    //   this.head = node;
    //   this.length += 1;

    // } else {
    //   currentNode = this.head;
    //   let count = 0;

    //   while (count < idx) {
    //     count ++;
    //     previousNode = currentNode;
    //     currentNode = currentNode.next;
    //   }

    //   node.next = currentNode;
    //   previousNode.next = node;
    //   this.length += 1;

    //   return undefined
    // }

    // SOLUTION:
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }


    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);


    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0

    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count += currentNode.val;
      currentNode = currentNode.next;
    }

    return count / this.length;
  }
}

let nums = new LinkedList()
nums.push(1)
nums.push(2)
nums.push(3)



module.exports = LinkedList;
