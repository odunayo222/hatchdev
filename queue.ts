//implement a queue
interface Queue<T> {
    enqueue(value: T): void;
    dequeue(): T | undefined;
    size(): number;
    peek(): T | undefined;
}
class Queue<T> implements Queue<T> {
    private queue: T[] = [];
    enqueue(value: T): void {
        this.queue.push(value);
    }
    dequeue(): T | undefined {
        return this.queue.shift();
    }
    size(): number {
        return this.queue.length;
    }
    peek(): T | undefined {
        return this.queue[0];
    }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());