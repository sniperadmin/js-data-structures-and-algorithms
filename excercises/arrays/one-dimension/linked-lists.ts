/**
 * @class SingleNode
 * This defines one node in a linked list
 * @param {number} data the actual node value
 * @param {SingleNode} next the node next to current
 */
class SingleNode {
  data: number;
  next: SingleNode | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

/**
 * @class SinglyLinkedList
 * Defines a single linked
 * @param {SingleNode} head defines the anchor head node
 * @param {SingleNode} tail defines the anchor tail node
 */
class SinglyLinkedList {
  private head: SingleNode | null;
  private tail: SingleNode | null;
  private current: SingleNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
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
    return newNode;
  }

  public log() {
    if (!this.head) {
      console.log('Current list is Empty!');
      return
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

testList.log();
