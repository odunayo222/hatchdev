//interface for stack
interface IStack<T> {
  push(value: T): void;
  pop(): T | undefined;
  size(): number;
  peek(): T | undefined;
}


//stack class
class Stack<T> implements IStack<T> {
  private stack: T[] = [];

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  size(): number {
    return this.stack.length;
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
}
