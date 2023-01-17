# just-another-linked-list
A simple linked list implementation

## Basic usage

```javascript
import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();
//create with array
linkedList.create([1,2,3,4,5,6,7])

//get simple linkedlist representation 
linkedList.getAllValue() // returns a string

//Insert value at a particular index
linkedList.insertAtIndex(value,index)

//Pop value from linked list -> O(n)
linkedList.pop();

//insert at head of linked list
linkedList.insertAtHead(value)

//Get value at index
linkedList.getvalueAtIndex(index)

//Insert value at tail
linkedList.insertAtTail(value)

//remove from index
linkedList.removeAtIndex(index)

//pop method to remove element
linkedList.pop()

//convert linked list to array
linkedList.toArray()
```
