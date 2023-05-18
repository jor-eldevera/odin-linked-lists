import LinkedList from "./LinkedList.js";

let list = new LinkedList();
console.log(list.at(0).toString());
list.at(0).setValue(8);
console.log(list.at(0).toString());
list.append(3);
console.log(list.toString());
list.prepend(9);
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
list.pop();
console.log(list.toString());
list.append(5);
list.append(4);
console.log(list.toString());
console.log(list.contains(5));
console.log(list.contains(12));
console.log(list.find(4));
console.log(list.find(12));

list.insertAt(12, 0);
console.log(list.toString());
list.insertAt(7, 4);
console.log(list.toString());