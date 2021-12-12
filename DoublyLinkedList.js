//a doubly linked list is like a singly link list but with a pointer to the previous node.

/**
 * time complexity
 * 
    Insertion: O(1)
    Removal: O(1) or O(n)
    Print: O(n)
 */

function createNode(value){

    return{
        value: value,
        next: null,
        previous: null,

    };

}


class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


insert(value){
    this.length++;
    if(this.tail){
        let Node = createdNode(value);
        this.tail.next = Node;
        Node.previous = this.tail;
        this.tail = Node;
        return Node;

    }
}



insertFromHead(value){
    this.length++;
    let node = createNode(value);
    if(this.head){
        this.head.next = node;
        node.previous = this.head;
        this.head = node;
        return node;
    }

}

remove(){

    if(this.tail){
        this.length--;
        const remove = this.tail;
        this.tail = this.tail.previous;

        if(this.tail){
            this.tail.next = null;

        } else {
            this.head = null;
        }

        return undefined;
    }

}

removeFromHead(){
    if(this.head){
        this.length--;

        const remove = this.head;
        this.head = this.head.next;

        if(this.head){
            this.head.previous = null;


        } else{
            this.tail = null;

        }

        return undefined;


    }

}


print(){
    let node = this.head;
    while(node){
        '${node.previous?.value} ${node.value} ${node.next?.value}'

        //print the current node value and the values of the previous and next pointers.

    };
}

node = node.next;
}