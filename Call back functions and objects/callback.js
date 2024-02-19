

//setemi also talked about tenary operators
//what is an immediately invoked function??


//arrow function




let addArrow = (num1, num2) => {
    return num1 + num2;
}

//console.log(typeof addArrow);

// short arrowfucntion -> one liners // these are common when we talk about/use the call back function
let addOneliner = (num1, num2) => (num1 == undefined || num2 == undefined) ? "Please provide two numbers" : num1 + num2;

let val = addOneliner();
//console.log(val);


// const UpperCase = (name)=> name.toUppercase()
// console.log(UpperCase("setemi"));

const UpperCase = (name) =>{
    return name.toUpperCase();

}

//layer of defence 
if (typeof num1 === 'string' || typeof num2 === 'string') {
    //console.log('I can only add two numbers');

     //return 
     throw new Error('impossible')
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.length); 
console.log(array[0]);
array[2] = 99
console.log(array[2])


//Must know array methods
// push, pop
// shift, unshift
// splice, slice
//concat, join
//indexOf, lastIndexOf
//includes, find, findIndex
//filter, map, forEach
//sort, reverse
//at some, every, some
//reduce


let summation = () =>{
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }


    return sum;
}

let sum = summation();
//(prev, curr, index arr) =>{

//}


sum 


//what does reduce do?
const callMeBack = function (prev, curr, index, array) {
    console.log(prev, curr, index, array);
    //return prev + curr;

}

array.reduce(callMeBack);



//call back functions
//let value = addOneliner();
//console.log(value);



// //greetin function //check on the browser console
// function greeting(func, response) {
//  if (response == 'no') func();
//  if (response == 'yes') func('afternoon');
// }

// greeting((msg) => msg ? console.log(msg) : console.log('Good morning'), 'yes');

