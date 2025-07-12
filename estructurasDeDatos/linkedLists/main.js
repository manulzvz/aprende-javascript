import LinkedList from "./LinkedLists.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("bird");

console.log(list.toString());

console.log(list.at(5));
