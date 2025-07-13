//  main.js

import HashMap from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.length());

//  Overwriting a few nodes
test.set("kite", "rosa");
test.set("lion", "dorado");

console.log(test.length());
console.log(test.capacity);

// Overloading load levels of hash map
test.set('moon', 'silver')

console.log(test.capacity);
