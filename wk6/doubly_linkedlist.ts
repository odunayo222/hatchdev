class doublyLinkedlistNode<T> {
    data: T;
    prev: doublyLinkedlistNode<T>;
    next: doublyLinkedlistNode<T>;

    constructor(val: T) {
        this.data = val;
    }
}
class DoublyLinkedList<T> {
    head: doublyLinkedlistNode<T>;
    add(val: T, position?: number) {
        const newNode = new doublyLinkedlistNode(val);

        //if we don't have head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // if we have head

        let currentNode = this.head;
        while (currentNode.next !== undefined) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
    }
    
    print() {
        let arr: T[] = [];
        let currentNode = this.head;
        while(currentNode !== undefined) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return arr;
        
    }
}

//creating instance
let doublelinkls = new DoublyLinkedList<number>;
doublelinkls.add(2);
doublelinkls.add(3)
doublelinkls.add(4)

console.log(doublelinkls.print())
// console.log(doublelinkls);