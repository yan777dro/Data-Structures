/**
 * queue works on the FIFO principle, First In First Out. For example a phone queue, the first call in is the first call answered
 * 
 * operations time complexity O(1)
 */
class Node {
    
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Queue {
   
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    
    enqueue(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    
    dequeue(){
        if(!this.first) return null

        var temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const quickQueue = new Queue

quickQueue.enqueue("value1")
quickQueue.enqueue("value2")
quickQueue.enqueue("value3")

console.log(quickQueue.first) 
       
console.log(quickQueue.last) 
console.log(quickQueue.size) 

quickQueue.enqueue("value4")
console.log(quickQueue.dequeue()) 
