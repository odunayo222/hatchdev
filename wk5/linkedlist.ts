class LNode<T> {
    data: T;
    next: LNode<T>;

    constructor(val: T) {
        this.data = val;
    }
}

class LinkedList <T> {
    head: LNode<T>;
    add(val: T) {
        const newNode = new LNode(val);
        
        //if we don't have head
        if(!this.head) {
            this.head = newNode;
            return;
        }
        // if we have head

        // [] => [] => [] => [] => [] => null
        let currentNode = this.head;
        while(currentNode.next !== undefined) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    print() {
        //print each nodes
    //     let currentNode = this.head;
    //     let result = '';
    //     while(currentNode !== undefined) { 
    //         result += `${currentNode.data} => `;
    //         currentNode = currentNode.next;
    //     }
    //     return result + 'null';
    // }

    let arr: T[] = [];
    let currentNode = this.head;
    while(currentNode !== undefined) {
        arr.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return arr;
    }

prepend(val: T) {
    const newNode = new LNode(val);
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
}

}


const linkedList = new LinkedList<number>();
linkedList.add(1);
linkedList.add(43);
linkedList.add(23);

linkedList.prepend(100)
// linkedList;
console.log(linkedList.print())