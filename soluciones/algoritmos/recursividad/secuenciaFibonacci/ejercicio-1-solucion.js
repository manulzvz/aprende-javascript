// Iterative function solution

function fibs (num) {
    let result = [];
    // Last Fibonacci numbers
    let a = 0;
    let b = 1;
    for (let i = 0; i < num; i++) {
        result.push(a);
        [a, b] = [b, a+b];
    }
    return result;
}
console.log(fibs(8));

// Recursive Solution

function fibsRec (num) {
    console.log("This was printed recursively");
    if (num < 2) {
        return num;
    } else {
        return (fibsRec(num-1) + fibsRec(num-2))
    }
}

console.log(fibsRec(7));