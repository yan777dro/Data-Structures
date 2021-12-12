/** Implementing a Stack
 * 
 * A Stack is a data structure based on the LIFO ( Last In First Out) principle. The  last node to go in is the first to go out.
 * This of a stack of documents or a deck of cards. The push() method adds a node (document/card) to the stack and the pop() method removes the
 * it.
 * 
 * The time complexity for both push() and pop() remain O(1).
 */

function createNode(value){
    return{
        value: value,
        next: null,

    };

}

class Stack{
    constructor(){
        this.first = null;  
        this.last = null;;
        this.size = 0;
    }


    push(value){
    
        let node = createdNode(value);

        if(!this.first){
            this.first = node;
            this.last = node;
        } else{
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }

        this.size++
        return this.size;


    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
          this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return temp.value;
      }

}