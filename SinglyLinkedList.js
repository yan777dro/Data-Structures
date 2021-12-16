// implementing  a singly link list.
/**
 * Methods:
 * insert();
 * remove();
 * print();
 * reverse();
 */
/**
 * time complexity
 * 
    Insertion: O(1)
    Removal: O(1) or O(n)
    Print: O(n)
    Reversal: O(n)
 */

//creating a node with a function

function createNode(value){  //this is our function to create a new node. It will be called when inserting a new node.

    return{
        value: value,
        next: null,
    };


}

class SinglyLinkedList{ 
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    
    }

    insert(value){
        this.length++;
        let Node =  createNode(value);

        if(this.tail){
            this.tail.next = Node;
            this.tail = Node;
            return Node;

        }

        this.head = this.tail = Node;

        return Node;

        //we can also insert a new Node from the head

        /***
        insert(value){
        this.length++;
        let Node = createNod(value);

        if(this.head){
            this.head.next = Node;
            this.head = Node;
            return Node;
        }

        this.head = this.tail = Node;
        return Node;
        }


         }
         */


    }

    remove(){  //remove from the tail
        if(this.tail){
           this.length--;

           while(this.head !== this.tail){ //the while loop will iterate until the node next to the tail is found.
               this.head = this.head.next;

           }

           this.tail = this.head;
           this.tail.next = null;

           return this.tail;

        }
        return undefined;


    }
    
    removeFromHead(){
    if (this.head) {
    this.length--;
    const remove = this.head;
    remove = this.head.next;
    return remove;
  }
  return undefined;
    }



    print(){
        let node = this.head;
        while(node){
            console.log(node.value);
            node = node.next;

        }
    }

    
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    while(node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }





}



const linkedList = new SinglyLinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);

linkedList.print();


