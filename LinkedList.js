import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

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
       this.tail.next = new LinkedListNode(value , null)
       this.length++;
    }


    //insert at index
    insertAtIndex (value,index) {
        
    }


    //remove at index


    //remove from head


    //remove from tail


    //print all

    //convert to array



}