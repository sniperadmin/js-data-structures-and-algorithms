/**
 * @class SingleNode
 * This defines one node in a linked list
 * @param {number} data the actual node value
 * @param {SingleNode} next the node next to current
 */
class SingleNode {
  data: number
  prev: SingleNode | null;
  next: SingleNode | null;

  constructor(data: number) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Defines a single LinkedList
 * @class LinkedList
 * @param {SingleNode} head defines the anchor head node
 * @param {SingleNode} tail defines the anchor tail node
 * @param {SingleNode} current dynamic pointer (used for some internal indexing operations)
 * @param {number} size defines the length of the List
 */
class LinkedList {
  protected head: SingleNode | null;
  protected tail: SingleNode | null;
  protected current: SingleNode | null;
  protected prev: SingleNode | null;
  protected next: SingleNode | null;
  protected size: number

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.size = 0;
  }

  /**
   * @function getNode
   * Used to capture the current node in the list
   * @argument {number} index => the index of the desired node
   */
  public getNode(index: number) {
    let node = this.head!
    for (let i = 0; i < index; i++) {
      node = node.next!
    }
    return node
  }
}


/**
 * @class SinglyLinkedList
 * Defines a tyoe of LinkedList
 */
class SinglyLinkedList extends LinkedList {
  /**
   * @function traverse
   * @returns {void}
   */
  public traverse(): void {
    if (!this.head) {
      throw new Error('Current list is Empty!')
    } else {
      this.current = this.head
      while (this.current) {
        console.log(this.current.data);
        this.current = this.current.next;
      }
    }
  }

  /**
   * @function search
   * @argument {number} searchVal
   */
  public search(searchVal: number): Error | number | null {
    if (!this.head) throw new Error('Current list is Empty!');
    let index = 0
    this.current = this.head
    while (this.current) {
      if (this.current!.data === searchVal) return index;
      index++;
      this.current = this.current.next;
    }
    return this.current
  }

  /**
   * @function addNode
   * @argument {number} data => The actual value of a node
   * @returns {SingleNode}
   */
  public addNode(data: number): SingleNode {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return newNode;
  }

  /**
   * @function addAtIndex
   * @argument {number} data => The actual value of a node
   * @argument {number} index => The index of the
   * @returns {void}
   */
  public addAtIndex(index: number, data: number) {
    if (index < 0 || index > this.size) throw new Error("Invalid index: " + index);
    ;
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

  /**
   * @function addAtHead
   * @argument {number} data => The actual value of a node
   * @returns {void}
   */
  public addAtHead(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (this.size === 0) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * @function addAtIndex
   * @argument {number} data => The actual value of a node
   * @returns {void}
   */
  public addAtTail(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (this.size === 0) {
      this.head = this.tail = newNode
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  public RecursiveReverse(head: SingleNode): SingleNode {
    if (!this.head || !this.head.next) return head;
    else {
      let nextNode = this.head.next
      this.head.next = null
      let newHead: SingleNode = this.RecursiveReverse(nextNode)
      nextNode.next = head
      return newHead;
    }
  }

  public IterativeReverse(head: SingleNode): SingleNode {
    if (!this.head || !this.head.next) return head;
    else {
      this.prev = null
      this.current = this.head
      let tmp = null

      while (this.current) {
        tmp = this.current.next
        this.current.next = this.prev
        this.prev = this.current
        this.current = tmp
      }
      return this.prev!
    }
  }

  /**
   * @function deleteAtIndex
   * @argument {number} index => The index of a node
   * @returns {void}
   */
  public deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) throw new Error('index is way over than the list size!');
    if (index == 0) this.head = this.head!.next;
    else {
      let prev = this.getNode(index - 1);
      prev.next = prev.next!.next

      if (index == this.size - 1) this.tail = prev
    }
    this.size--
  }

  /**
   * @function deleteEntireList
   * @returns {void}
   */
  public deleteEntireList(): void {
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


class CircularSinglyLinkedList extends LinkedList {
  /**
   * @function getNode
   * Used to capture the current node in the list
   * @argument {number} index => the index of the desired node
   */
  public addNode(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail!.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
  }

  /**
   * @function traverse
   * @returns {void}
   */
  public traverse(): void {
    if (!this.head) throw new Error('Empty Circular List!');
    console.log(this.head.data);
    this.current = this.head.next

    while (this.current !== this.head) {
      console.log(this.current!.data);
      this.current = this.current!.next;
    }
  }

  /**
   * @function search
   * @argument {number} searchVal
   * @returns {Error|number}
   */
  public search(searchVal: number): Error | number {
    if (!this.head) throw new Error('Empty CircularSinglyLinkedList!');
    if (this.head.data === searchVal) return 0;
    let index = 1

    this.current = this.head.next
    while (this.current !== this.head) {
      if (this.current!.data == searchVal) return index;
      index++;
      this.current = this.current!.next;
    }
    throw new Error("Search value not found!");
  }

  /**
   * @function addAtHead
   * @argument {number} data
   * @returns {void}
   */
  public addAtHead(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.tail.next = this.head
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail!.next = newNode;
    }
    this.size++;
  }

  /**
   * @function addAtTail
   * @argument {number} data
   * @returns {void}
   */
  public addAtTail(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.tail.next = this.head
    } else {
      this.tail!.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
    this.size++;
  }


  /**
   * @function addAtIndex
   * @argument {number} data
   * @argument {number} index
   * @returns {void}
   */
  public addAtIndex(index: number, data: number): void {
    if (index < 0 || index >= this.size) throw new Error("Invalid index");
    if (index == 0) this.addAtHead(data)
    else if (index == this.size - 1) this.addAtTail(data)
    else {
      let newNode: SingleNode = new SingleNode(data);
      let prev = this.getNode(index - 1);
      prev.next = newNode;
      newNode.next = prev.next;
    }
    this.size++;
  }

  /**
   * @function deleteAtIndex
   * @argument {number} index
   * @returns {void}
   */
  public deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) throw new Error("Invalid index");
    if (index == 0) this.head = this.head!.next;
    else {
      let prev = this.getNode(index - 1);
      prev.next = prev.next!.next;
      if (index == this.size - 1) this.tail = prev
    }
    this.size--;
  }

  /**
   * @function deleteEntireList
   * @returns {void}
   */
  public deleteEntireList() {
    if (!this.tail) this.tail!.next = null;
    this.head = this.tail = null;
    this.size = 0
  }

  /**
   * @function log
   * Used to capture the current node in the list
   * @argument {void}
   */
  public log() {
    if (!this.head) throw new Error('CircularSinglyLinkedList is Empty!');
    this.current = this.head.next

    while (this.current !== this.head) {
      console.log(this.current);
      this.current = this.current!.next;
    }
  }
}


class DoublyLinkedList extends LinkedList {
  /**
   * @function addAtHead
   * @argument {number} data
   * @returns {void}
   */

  public addAtHead(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * @function addAtIndex
   * @argument {number} index
   * @argument {number} data
   * @returns {void}
   */
  public addAtIndex(index: number, data: number): void {
    if (index < 0 || index > this.size) throw new Error("Invalid index: " + index);
    if (index == 0) this.addAtHead(data)
    if (index == this.size) this.addAtTail(data)
    else {
      let newNode: SingleNode = new SingleNode(data);
      const prevNode = this.getNode(index - 1)
      prevNode.next!.prev = newNode;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = prevNode.next;
    }
    this.size++;
  }

  /**
   * @function addAtTail
   * @argument {number} data
   * @returns {void}
   */
  public addAtTail(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * @function traverse
   * @argument {number} data
   * @returns {void}
   */
  traverse(data: number): void {
    if (!this.head) throw new Error('Empty Circular List!');
    console.log(this.head.data);
    this.current = this.head.next

    while (!this.current) {
      console.log(this.current!.data);
      this.current = this.current!.next;
    }
  }

  /**
   * @function search
   * @argument {number} searchVal
   * @returns {void}
   */
  public search(searchVal: number): Error | number {
    if (!this.head) throw new Error('Empty Circular List!');
    let index = 0;
    this.current = this.head;
    while (this.current) {
      if (this.current.data === searchVal) return index;
      this.current = this.current!.next;
      index++;
    }
    throw new Error("Invalid search value!");
  }

  /**
   * @function deleteAtIndex
   * @argument {number} index
   * @returns {void}
   */
  public deleteAtIndex(index: number): void {
    if (index < 0 || index > this.size) throw new Error("Invalid index: " + index);
    if (index == 0) {
      this.head = this.head!.next
      this.head!.prev = null
    } else {
      let prevNode = this.getNode(index - 1);
      prevNode.next = prevNode.next!.next
      if (prevNode.next!.next) prevNode.next!.next.prev = prevNode;
      if (this.size === index - 1) this.tail = prevNode;
    }
    this.size--;
  }

  /**
   * @function deleteEntireList
   * @returns {void}
   */
  public deleteEntireList(): void {
    if (!this.head) throw new Error('Empty List!');
    this.current = this.head
    while (this.current) {
      let cachedCurrent = this.current
      this.current = this.current.next;
      cachedCurrent.next = null
    }
    this.head = this.tail = null
  }
}


class CircularDoublyLinkedList extends LinkedList {
  /**
   * @function addAtHead
   * @argument {number} data
   * @returns {void}
   */

  public addAtHead(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = this.tail = newNode
      this.prev = this.tail
      this.next = this.head
    }
    else {
      newNode.prev = this.tail
      this.tail!.next = newNode;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }


  /**
   * @function addAtIndex
   * @argument {number} index
   * @argument {number} data
   * @returns {void}
   */
  public addAtIndex(index: number, data: number): void {
    if (index < 0 || index > this.size) throw new Error("Invalid index: " + index);
    if (index == 0) this.addAtHead(data)
    if (index == this.size) this.addAtTail(data)
    else {
      let newNode: SingleNode = new SingleNode(data);
      const prevNode = this.getNode(index - 1)
      prevNode.next!.prev = newNode;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = prevNode.next;
    }
    this.size++;
  }

  /**
   * @function addAtTail
   * @argument {number} data
   * @returns {void}
   */
  public addAtTail(data: number): void {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.tail.next = this.head
      this.head.next = this.tail
    } else {
      newNode.next = this.head;
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.head.prev = newNode;
    }
    this.size++;
  }

  /**
   * @function traverse
   * @argument {number} data
   * @returns {void}
   */
  traverse(data: number): void {
    if (!this.head) throw new Error('Empty Circular List!');
    console.log(this.head.data);
    this.current = this.head.next

    while (this.current !== this.head) {
      console.log(this.current!.data);
      this.current = this.current!.next;
    }
  }

  /**
   * @function search
   * @argument {number} searchVal
   * @returns {void}
   */
  public search(searchVal: number): Error | number {
    if (!this.head) throw new Error('Empty Circular List!');
    if (this.head.data == searchVal) return 0;

    let index = 1;

    this.current = this.head.next;

    while (this.current) {
      if (this.current.data === searchVal) return index;
      this.current = this.current!.next;
      index++;
    }
    throw new Error("Invalid search value!");
  }

  /**
   * @function deleteAtIndex
   * @argument {number} index
   * @returns {void}
   */
  public deleteAtIndex(index: number): void {
    if (index < 0 || index > this.size) throw new Error("Invalid index: " + index);
    if (index == 0) {
      this.head = this.head!.next
      this.tail!.next = this.head
      this.head!.prev = this.tail
    } else {
      let prevNode = this.getNode(index - 1);
      prevNode.next = prevNode.next!.next
      if (prevNode.next!.next) prevNode.next!.next.prev = prevNode;
      if (this.size === index - 1) this.tail = prevNode;
    }
    this.size--;
  }

  /**
   * @function deleteEntireList
   * @returns {void}
   */
  public deleteEntireList(): void {
    if (!this.head) throw new Error('Empty List!');
    else if (this.head) this.head.prev = null
    else if (this.tail) this.tail.next = null

    this.current = this.head
    while (this.current) {
      let cachedCurrent = this.current
      this.current = this.current.next;
      cachedCurrent.next = null
    }
    this.head = this.tail = null
  }
}



/**
 * Trying classes
 */
const testList = new SinglyLinkedList()
testList.addNode(4);
testList.addNode(5);
testList.getNode(2);
testList.addAtHead(6);
testList.addAtTail(10);
testList.addAtIndex(1, 55);
console.log(testList.getNode(1))


console.log(testList)

testList.deleteAtIndex(2)
testList.log();
testList.deleteEntireList()
console.log(testList)