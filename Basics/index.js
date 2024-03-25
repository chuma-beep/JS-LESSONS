// js variables
  

var num1  = 10 * 2;
console.log(num1);

let num2 = 20 * 2;
console.log(num2)

const num3 = 30 * 2;
console.log(num3)

function add(a , b){
   return a + b
}
console.log(add(4, 10))

//Js.info task
let admin;
let name = 'john';
admin = name;
console.log(admin)



//we can convert a string in an obj to num when we calculate it like this
//js.info
let obj = {
   toString(){
      return "2";
   }
};
console.log(obj* 4)

//but if we use + operator it'll acepta string
let obj1 = {
   toString(){
      return "2";
   }
};
console.log(obj + 4)

//there are three types of hints 

// "string" (for alert and other operations that need a string)
// "number" (for maths)
// "default" (few operators, usually objects implement it the same way as "number")

let str = "Hello";

str.test = 5;

console.log(str.test);


//objects
let user = {
   name: "wisdom",
   age: 28,
   'loves jesus': true
};

let key  = "age"

console.log(user.age)


let user2 = {};

// set
user["likes birds"] = true;

// get
console.log(user2["likes birds"]); // true

// delete
delete user2["likes birds"];

console.log(user2)


// //computed properties
// let fruit = console.log("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"

//[fruit] means that the property name should be taken from fruit.

//the above works the same as the below


// let fruit = console.log("which fruit to buy?", "apple");
// let bag = {};


// //take property name from the fruit variale
// bag[fruit] = 5;

// you can do property value short hand

function makeUser(name, age) {
   return {
     name: name,
     age: age,
     // ...other properties
   };
 }
 
 let user1 = makeUser("John", 30);
 console.log(user.name); // wisdom

 


