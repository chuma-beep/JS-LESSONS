//rest operator lets you give a function  an indefinite number of arguments as parameters
//spread operator lets you pass elements of an array as arguments to a function


//Example 1
//rest operator
function sum(...args) {
    //note that reduce is a higher order function
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55


//Example 2
//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const arr3 = [...arr1, ...arr2];

console.log(arr3); //["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

