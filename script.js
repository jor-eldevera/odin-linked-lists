import LinkedList from "./LinkedList.js";

let list = new LinkedList();
console.log(list.at(0).toString());
list.at(0).setValue(8);
console.log(list.at(0).toString());
list.append(3);
console.log(list.toString());