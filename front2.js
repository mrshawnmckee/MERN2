class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLL {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    addFront(val) {
        let newNode = new Node(val);

        //If the list is empty
        if(!this.head) {
            this.head = newNode;
            return this;
        } else {
        //if the list is not empty
        newNode.next = this.head
        this.head = newNode;
            
        }
        this.length++
        return this
    }

    removeFront() {
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return null
    }

    front(){
        return this.head
    }

    display(){
        let runner = this.head

        let nextNode = ""

        while(runner !== null){ 
            if(runner.next !== null){
            nextNode = "Node"
        } else {
            nextNode = "Null"
        }//not at last node
            console.log("Data:" + runner.value + ", Node:" + nextNode )
            runner = runner.next
        }
    }
}

let SLL1 = new SLL(18)
SLL1.addFront(4)
SLL1.addFront(34)
SLL1.display()