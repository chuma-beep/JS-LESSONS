

//setemi also talked about tenary operators
//what is an immediately invoked function??


//arrow function




let addArrow = (num1, num2) => {
    return num1 + num2;
}

console.log(typeof addArrow);

// short arrowfucntion -> one liners // these are common when we talk about/use the call back function
let addOneliner = (num1, num2) => (num1 == undefined || num2 == undefined) ? "Please provide two numbers" : num1 + num2;

let val = addOneliner();
console.log(val);


// const UpperCase = (name)=> name.toUppercase()
// console.log(UpperCase("setemi"));

const UpperCase = (name) =>{
    return name.toUpperCase();

}

//layer of defence 
if (typeof num1 === 'string' || typeof num2 === 'string') {
    console.log('I can only add two numbers');

     //return 
     throw new Error('impossible')
}








{{  }}
