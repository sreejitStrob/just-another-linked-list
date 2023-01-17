import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    //create from array
    create(data) {

        for (let x in data) {
            this.insertAtTail(data[x]);
        }
        return
    }

    //insert at head
    insertAtHead(value) {
        const newNode = new LinkedListNode(value, this.head);

        if (this.head == null) {
            this.tail = newNode
        }

        this.head = newNode
        this.length++;
    }


    //print at index
    getvalueAtIndex(index) {
        if (index < 0 || index > this.length)
            return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }


    //insert at tail
    insertAtTail(value) {
        if (this.head == null) {
            this.insertAtHead(value);
            return
        }
        const newTailNode = new LinkedListNode(value, null)
        this.tail.next = newTailNode
        this.tail = this.tail.next
        this.length++;
    }


    //insert at index
    insertAtIndex(value, index) {
        if (index < 0 || index > this.length)
            return null

        let prev = this.getvalueAtIndex(index - 1)
        prev.next = new LinkedListNode(value, prev.next)
        this.length++;
    }


    //remove at index
    removeAtIndex(index) {
        if (index < 0 || index > this.length)
            return null

        let prev = this.getvalueAtIndex(index - 1)
        prev.next = prev.next.next
        this.length--;
    }


    //remove from head
    removeFromHead() {
        this.head = this.head.next
        this.length--;
    }


    //remove from tail
    pop() {
        let prev = this.getvalueAtIndex(this.length - 2);
        prev.next = null
        this.length--;
        return
    }


    //print all
    getAllValue() {
        let output = ''
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            output = `${output}${current.value} -> `
            current = current.next;
        }
        console.log(`${output}null`)
    }

    //convert to array
    toArray() {
        let current = this.head
        let linkedListToArray = []
        for (let i = 0; i < this.length; i++) {
            let output = current.value
            linkedListToArray.push(output) 
            current = current.next;     
        }
        return linkedListToArray
    }



}