import LinkedList from "./LinkedList.js";

const ll = new LinkedList();
ll.create([1,2,3,4,5,6,7])
ll.getAllValue()
ll.insertAtIndex(123,1)
ll.pop();
ll.pop();
ll.getAllValue()
console.log(ll.length)
ll.removeAtIndex(1)
console.log(ll.toArray())
console.log(ll.length)
