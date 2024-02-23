// for logical or '||' if the first value is truthy, it returns the first value, if the first value is falsy, it returns the second value
// for logical and '&&' if the first value is truthy, it returns the second value, if the first value is falsy, it returns the first value
//.then() and .catch() is how you call a promise and also the .finally
//try and catch can be used without the await. can be use for error handling i.e try the situuation catchthe error
//check out the null coalecsing operator
//Note that a constructor is used to construct an object



// let name = 'olisadebem';
// let newName = name || 'default name'; //consider the best use of falsy values
// console.log(newName); //olisadebem
// let newname2 = name && 'default name';
// console.log(newname2); //default name

//think about the above as fall backs


//fallback 
let name = undefined;

const defaultName = 'default name';
let newName = name || 'qwerty';
console.log(newName); //qwerty
let newName2 = name && defaultName;
console.log(newName2); //undefined


//undefined or null
let newName3 = name ?? defaultName
console.log(newName3) //default name



//Promise

//two major ways to create a promise 
//1. using the promise constructor
//create a promise 
const promise = new Promise((res, rej) => {
//    res(5000)
   rej('broken fellow')
})
//return your promise in a fxn
function testProm(){
    return promise
}
// consume your promise, call fxn and attach a .then and catch
testProm().then((a) => {
    console.log(a)
}).catch(function (err){
    console.log(err)
})
 
//example to ease all our problems
const lotteryGame = new Promise(function (resolve, reject) {
    console.log('Lottery is happening');

 setTimeout(() => {
    let lottery = 0.2;
    
    console.log(lottery); 
   
     if (lottery > 0.5){
        resolve('You won');
    } else {
        reject(new Error (`You lost `));
    }

}, 2000)

});
function lotteryTester(){
    return lotteryGame;
}

lotteryTester()
.then((res)=> {
    console.log(res);
}).catch((err) =>{
    //err.messaage
     console.error(err.stack)
     console.log(err.message)
});

//2. using the async and await keywords

function add(a, b){
    return a + b
}

async function addPromise(a, b){
  if(!b){
    throw new Error('b is not defined')
  }  
 return a + b;
}

let res = add(2, 3)
console.log(res)

addPromise(2, 3).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err.message)
})

// async functions were built to be used with await
//IIFE - Immedaitely Invoked function Expression and try and catch
(async function sayTheTruth(){
   try{
    console.log('Instant')
//    const data = await fetch('https://api.github.com/users/unicodeveloper')
//    const result = await data.json()
//    console.log(result.login)
   const res = await addPromise(2, 3)
   console.log(res)
      //we can now use an await   

}
   catch(err){
    console.log(err.message || err)
   }
})()

//obj
let obj = {
    name: 'olusetemi',
    age: 20,
}

//constructors
function Person(){
    //let this = {} //this happens inside your compiler and is hidden from your eyes to see
    this.name = name
    //return this... //this happens inside your compiler and is hidden from your eyes to see
}

//constructors
const wisdom = Person('wisdom')
console.log(wisdom)

//Classes
class Person2{
    constructor (name){
        this.name = name
    }
}

const wisdom2 = new Person('Wisdom')
console.log(wisdom2)

let az = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//new Array(1, 2,3 3, 4, 5, 6, 7, 8, 9)//this happens here behind the scenes in your compiler
console.log(typeof az)
let str1 = 'wisdom' // literal
//new String('wisdom')//this happens here behind the scenes in your compiler 
console.log(typeof str1)
str1.charAt() //converts to a proper string under the hood


let num = 20
//new Number(28)
num.toFixed(2)

let bool = true
//new Boolean(true)
let obj2 = {
  name: 'wisdom',
  age: 20,
}

//new Object({name: 'wisdom', age: 20})


