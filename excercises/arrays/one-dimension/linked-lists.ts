/**
 * @class SingleNode
 * This defines one node in a linked list
 * @param {number} data the actual node value
 * @param {SingleNode} next the node next to current
 */
class SingleNode {
  data: number
  next: SingleNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}


/**
 * @class SinglyLinkedList
 * Defines a single linked
 * @param {O} head defines the anchor head node
 * @param {O} tail defines the anchor tail node
 */
class SinglyLinkedList {
  private head: SingleNode | null;
  private tail: SingleNode | null;
  private current: SingleNode | null;
  private size: number

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.size = 0;
  }

  public getNode(index: number) {
    let node = this.head!
    for (let i = 0; i < index; i++) {
      node = node.next!
    }
    return node
  }

  public traverse() {
    if (!this.head) {
      return 'Current list is Empty!'
    } else {
      this.current = this.head
      while (this.current) {
        console.log(this.current.data);
        this.current = this.current.next;
      }
    }
  }

  public search(searchVal: number) {
    if (!this.head) return 'Current list is Empty!';
    let index = 0
    this.current = this.head
    while (this.current) {
      if (this.current!.data === searchVal) return index;
      index++;
      this.current = this.current.next;
    }
  }

  /**
   * @function addNode
   * @return {SingleNode}
   * @argument {number} data => The actual value of a node
   */
  public addNode(data: number): SingleNode {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return newNode;
  }

  public addAtIndex(index: number, data: number) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.addAtHead(data)
    else if (index === this.size) this.addAtTail(data)
    else {
      const prev = this.getNode(index - 1)
      const node = new SingleNode(data)
      node.next = prev.next
      prev.next = node
      this.size++;
    }
  }

  public addAtHead(data: number) {
    let newNode: SingleNode = new SingleNode(data);
    if (this.size === 0) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode;
    }
    this.size++;
  }

  public addAtTail(data: number) {
    let newNode: SingleNode = new SingleNode(data);
    if (this.size === 0) {
      this.head = this.tail = newNode
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  public deleteAtIndex(index: number) {
    if (index < 0 || index >= this.size) throw new Error('index is way over than the list size!');
    if (index == 0) this.head = this.head!.next;
    else {
      let prev = this.getNode(index - 1);
      prev.next = prev.next!.next

      if (index == this.size - 1) this.tail = prev
    }
    this.size--
  }

  public deleteEntireList() {
    this.head = this.tail = null;
  }

  public log() {
    if (!this.head) {
      return 'Current list is Empty!'
    } else {
      this.current = this.head
      while (this.current) {
        console.log(this.current.data);
        this.current = this.current.next;
      }
    }

  }
}

const testList = new SinglyLinkedList()
testList.addNode(4);
testList.addNode(5);
testList.addAtHead(6);
testList.addAtTail(10);
testList.addAtIndex(1, 55);
console.log(testList.getNode(1))


console.log(testList)

testList.deleteAtIndex(2)
testList.log();
testList.deleteEntireList()
console.log(testList)