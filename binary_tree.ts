class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T>{

    root: TreeNode<T> | null;

    constructor(){
        this.root = null;
    }

    insert(value: T){
        const newNode = new TreeNode(value);

        if(!this.root){
            this.root = newNode;
            return;
        }
        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0){
            let curr = queue.shift();

            if(curr!.left === null){
                curr!.left = newNode;
                return;
            }else if(curr!.right === null){
                curr!.right = newNode;
                return;
            }else{
                queue.push(curr!.left);
                queue.push(curr!.right);
            }
        }
    }

    // BFS Traversal Method
    bfsTraversal(): T[] {
        if (!this.root) return [];
        let result: T[] = [];
        let queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node!.value);

            if (node!.left) queue.push(node!.left);
            if (node!.right) queue.push(node!.right);
        }

        return result;
    }

    // Method to search for a node and return its parent and the node itself
    searchWithParent(value: T): { parent: TreeNode<T> | null, node: TreeNode<T> | null } {
        if (!this.root) return { parent: null, node: null };
        let queue: Array<{ parent: TreeNode<T> | null, node: TreeNode<T> }> = [];
        queue.push({ parent: null, node: this.root });

        while (queue.length > 0) {
            let { parent, node } = queue.shift()!;

            if (node.value === value) {
                return { parent, node };
            }

            if (node.left) queue.push({ parent: node, node: node.left });
            if (node.right) queue.push({ parent: node, node: node.right });
        }

        return { parent: null, node: null };
    }
}

// Example usage:
const tree = new BinaryTree<number>();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.bfsTraversal()); // [1, 2, 3, 4, 5]

const searchResult = tree.searchWithParent(3);
console.log(searchResult.node?.value); // 3
console.log(searchResult.parent?.value); // 1