let names = ["James", "Ron", "Lisa", "Tom", "Lucy", "Lily"]


//array methods


//what is the traditional method to loop through an array?
//it will be to loop throuh the array using a for loop
//e.g. for(let i = 0; i < names.length; i++){}

//but we can use a the map method to loop through the array
//like so:
//things to note: here we use each as a variable to represent each element in the array
//the map method returns a new array
// let upperCasedNames = names.map(each => {
//   return each.toUpperCase()})
// console.log(upperCasedNames);

// what if we want to capitalize the first letter of each name?
//

function Capitalize(names){
    let firstLetter = names[0];
    let rest = names.slice(1);
    return `${firstLetter.toUpperCase() + rest.toLowerCase()}`;
}

console.log((Capitalize('JUDITH')));


//we can use a callback function to capitalize the first letter of each name
// in a short from like this
let capitalizedNames = names.map(Capitalize);
console.log(capitalizedNames);


//function that multiplies numbers by 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double  = x => x * x;
const add5 = x => x + 5;

//we use map to apply the double and add5 function to each element in the array
//result of a map will always be an array
let result = numbers.map(double).map(add5);
console.log(result);


const summation = (prev, curr) => prev + curr;


//sort with help of reduce
// let sum = numbers.reduce(summation);

// console.log(sum);

//sort with help of map
let sum = numbers.reduce(summation);

console.log(sum);

//example of how filter works
//filter takes a callback function as an argument

const filterEven = value => value % 2 === 0;
const filterOdd = value => value % 2 !== 0;
let even = numbers.filter(filterEven);
let odd = numbers.filter(filterOdd);
console.log(even);
console.log(odd);


let fruits = ["apple", "banana", "mango", "orange", "pear", "pineapple", "strawberry"];

//count the fruits 
const callfuntion = (prev, curr, currIndex, arr) => {
 console.log(prev, curr, currIndex, arr);
 //prev[curr] = 1;
 //we want it to overide
if(prev[curr]){
    prev[curr] += 1
}else{
    prev[curr] = 1;
} 

 console.log(prev);  
return prev;
};
let count = fruits.reduce(callfuntion, {});


