// function average(a, b) {
//     return a + b / 2;
// }

// console.log(average(2, 10));   // -> 7 expected: 6
// console.log(average(5, 5));    // -> 7.5 expected: 5

// console.log(average(2, 10));   // -> 7 expected: 6
// console.log(average(5, 5));    // -> 7.5 expected: 5


// //debugger
// console.log("Before debugger");
// debugger;
// console.log("After debugger");



function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "Hello !";
}

console.log("before outer() call");
console.log(outer());
console.log("after outer() call");

//Quokka will show the output of the console.log right next to your code
{{ }}