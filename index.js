import LinkedList from "./LinkedList.js";

const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtTail(50);

console.log(ll.getvalueAtIndex(2));
