class StackUsingArray {
  private array: number[] | null[];
  private topOfStack;

  constructor() {
    this.array = []
    this.topOfStack = -1
  }

  public createStack(size: number) {
    this.array = new Array(size).fill(undefined)
    return this.array
  }

  public push(data: number) {
    if (this.array.length - 1 == this.topOfStack) {
      throw new Error("Stack Overflow!");
    } else {
      this.array[this.topOfStack + 1] = data;
      this.topOfStack++;
      return this.array
    }
  }

  public pop() {
    if (this.topOfStack == -1) throw new Error("Stack Underflow!");
    else {
      let temp = this.array[this.topOfStack];
      this.array[this.topOfStack] = null;
      this.topOfStack--;
    }
    return this.array
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

