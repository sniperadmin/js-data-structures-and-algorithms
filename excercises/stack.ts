class StackUsingArray {
  private array: any[] | null[];
  private topOfStack;

  constructor() {
    this.array = []
    this.topOfStack = -1
  }

  public createStack(size: any) {
    this.array = new Array(size).fill(undefined)
    return this.array
  }

  public push(data: any) {
    if (this.array.length - 1 == this.topOfStack) {
      throw new Error("Stack Overflow!");
    } else {
      this.array[this.topOfStack + 1] = data;
      this.topOfStack++;
      return this.array
    }
  }

  public pop() {
    const char = this.array[this.topOfStack];
    if (this.topOfStack == -1) throw new Error("Stack Underflow!");
    else {
      let temp = this.array[this.topOfStack];
      this.array[this.topOfStack] = null;
      this.topOfStack--;
    }
    return char
  }
  public peek() {
    if (this.topOfStack == -1) throw new Error("Empty Stack!")
    else return this.array[this.topOfStack];
  }
  public isEmpty() {
    return this.topOfStack === -1
  }
  public isFull() {
    return this.array.length - 1 === this.topOfStack
  }
  public deleteStack() {
    this.array = []
    this.topOfStack = -1
  }
}

const stack = new StackUsingArray()
console.log(stack.createStack(3))
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
// console.log(stack.push(4))

console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

console.log(stack.isEmpty())
console.log(stack.isFull())



class StackNode {
  private data: number
  private prev: null;
  private next: null;

  constructor(data: number) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}


class StackUsingLinkedList extends StackNode {
  private head: SingleNode | null;

  constructor(data: number) {
    super(data);
    this.head = null
  }
  public createStack(data: number) {

  }
  public push(data: number) {
    let newNode: SingleNode = new SingleNode(data);
    if (!this.head) this.head = newNode;
    else {
      newNode.next = this.head
      this.head = newNode;
    }
  }
  public pop() {
    if (!this.head) throw new Error('Empty List!');
    else {
      this.head = this.head.next
    }
  }
  public peek() {
    if (!this.head) throw new Error('Empty List!');
    else return this.head.data
  }
  public isEmpty() {
    return !this.head
  }
  public deleteStack() {
    this.head = null
  }
}

// -----------------------------------------------------

// Problem #1
/**
 * Given a string containing the characters '(',')','[',']', '{', '}'
 *  determine if the input string is validate
 * validation cases:
 * - open brackets must be closed by the same type
 * - open brackets must be closed in the correct order
 */

class HashTable {
  private table: any[];
  private size: number;

  constructor() {
    this.table = new Array(6);
    this.size = 0
  }

  _hash(key: string): number {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % this.table.length
  }

  display() {
    return this.table.forEach((values, index) => {
      const chainedVals = values.map(
        ([key, value]): string => `[ ${key}= ${value} ]`
      );
      return `${index}: ${chainedVals}`
    })
  }

  set(key: string, value: any) {
    const index = this._hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // find key/value pair
        if (this.table[index][i] === key) this.table[index][i][1] = value;
      }
      // if record not found
      this.table[index].push([key, value])
    } else {
      this.table[index] = []
      this.table[index].push([key, value])
    }
    this.size++
  }

  get(key: string) {
    const target = this._hash(key)
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) return this.table[target][i][1]
      }
    }
    return undefined;
  }

  remove(key: string) {
    const index = this._hash(key)

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1)
          this.size--
          return true
        }
      }
    } else {
      return false
    }
  }
}


function parentheses(input: string): boolean {
  const hashTable: HashTable = new HashTable()
  hashTable.set('(', '(')
  hashTable.set('{', '{')
  hashTable.set('[', '[')
  hashTable.set(')', ')')
  hashTable.set('}', '}')
  hashTable.set(']', ']')

  // define stack class
  const stack = new StackUsingArray()
  // create stack
  stack.createStack(input.length)

  const inputArr = input.split('')

  // push elements
  inputArr.map(i => {
    stack.push(i)
  })

  console.log(stack.pop());
  // looping
  inputArr.forEach(i => {
    if (hashTable.get(i)) {
      const pop = stack.pop()
      console.log(hashTable.get(i))
      console.log(pop)
      if (pop !== hashTable.get(i)) return false;
      else stack.push(i)
    }
  })
  console.log(stack)
  return stack.isEmpty()
}

console.log(parentheses('([])'))

// -------------------------------------------------------------
