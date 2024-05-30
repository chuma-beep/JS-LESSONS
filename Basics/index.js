// // js variables
  

// // var num1  = 10 * 2;
// // console.log(num1);

// // let num2 = 20 * 2;
// // console.log(num2)

// // const num3 = 30 * 2;
// // console.log(num3)

// // function add(a , b){
// //    return a + b
// // }
// // console.log(add(4, 10))

// // func =(a, b) =>{
// //    return a + b
// // }
// // console.log(func( 3, 4))


// //Js.info task
// // let admin;
// // let name = 'john';
// // admin = name;
// // console.log(admin)



// //OBJECTS

// //we can convert a string in an obj to num when we calculate it like this
// //js.info
// // let obj = {
// //    toString(){
// //       return "2";
// //    }
// // };
// // console.log(obj * 4)

// //but if we use + operator it'll accept a string
// // let obj1 = {
// //    toString(){
// //       return "2";
// //    }
// // };
// // console.log(obj + 4)

// //there are three types of hints 

// // "string" (for alert and other operations that need a string)
// // "number" (for maths)
// // "default" (few operators, usually objects implement it the same way as "number")

// let str = "Hello";

// str.test = 5;

// console.log(str.test);
// console.log(str)

// //objects
// // let user = {
// //    name: "wisdom",
// //    age: 28,
// //    'loves jesus': true
// // };

// // let key  = "age"

// // console.log(user.age)
// // console.log(key)

// // let user2 = {};

// // // set
// // user["likes birds"] = true;

// // // get
// // console.log(user2["likes birds"]); // true

// // // delete
// // delete user2["likes birds"];

// // console.log(user2)


// //computed properties
// // let fruit = console.log("Which fruit to buy?", "apple");

// // let bag = {
// //   [fruit]: 5, // the name of the property is taken from the variable fruit
// // };

// // console.log( bag.fruit ); // 5 if fruit="apple"

// // [fruit] means that the property name should be taken from fruit.

// // the above works the same as the below


// // let fruit = console.log("which fruit to buy?", "apple");
// // let bag = {};


// //take property name from the fruit variale
// bag[fruit] = 5;

// // you can do property value short hand

// function makeUser(name, age) {
//    return {
//      name: name,
//      age: age,
//      // ...other properties
//    };
//  }
 
//  let user1 = makeUser("John", 30);
//  console.log(user1.name); // wisdom


// //in objects there are no limitation to property names
// //other types are automatically converted to strings

// //e.g.


// let obj3  = {
//     0: "test"
// };

// console.log( obj3["0"] );
// console.log( obj3[0] );


// //what is the special nature of `__proto__`
// let obj4 = {};
// obj4.__proto__ = 5;
// console.log(obj4.__proto__);


// //property existence test, 'in' operator

// let user3 = {};
// console.log( user.noSuchProperty === undefined );

// //in checks if a property has an existing value
// // this is the syntax
// //"key" in object

// //eg

// let user5 = { name: "Wisdom", age: 30};

// console.log( "age" in user5 );
// console.log("omai!" in user)

// //on the left of in must be a property name
// //where does "in" triumph over "undefined"?


// //the `for..in` loop
// //this walks over all keys 


// let user6 = {
//    name: "wisdom",
//    age: 28,
//    isAdmin: true
// }


// for (let key in user6){
//    //keys
//    console.log( key );
//   console.log(user6[key])
// }

// //the `for` construct allows us to declare the looping variable inside the loop
// //we could also use another varaible name instead of `key`
//    //eg `for(let skill in issue)` 
//    // but most widely used case is "for (let prop in obj)";


//    //Ordered like an Object 
//    //it's ordered in a special fashion
//  let codes = {
//    "41": "Switzerland",
//    "44": "Great Britain",
//    // ..,
//    "1": "USA"
//  };

//  for (let code in codes){
//    console.log(code)
//  }

//  //interger properties are sort others appear in creation fashion

//  //what are interger proerties?

//  //if keys are not integer how are they listed?


//  //Tasks
//  let user7 = {
//       name: "John",
//       surname: "Smith"
//  }
//  user7.name = "pete"
// delete user7.name;

//  console.log(user7)


//  ///check for emtiness
// let schedule = {};

//  let isEmpty = (schedule) => {

//     for (let key in schedule){
//       if(key = undefined){
//          return false;
//       }
//       return true;
//     }
//  }


//  console.log(  isEmpty(schedule) );
  
//  schedule["8:30"] = "get up";

//  console.log( isEmpty(schedule) );


//  //Sum objective properties

//  let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
//  }

// console.log(salaries.John + salaries.Ann + salaries.Pete)

// let sum  = 0;

// for (let key in salaries){
//    sum += salaries[key]
// }
// console.log(sum)

// //Multiply Numeric Property Values by 2

// // let obj5 = {
// //    width: 200,
// //    height: 300,
// //    title: "My menu"
// //  };
 

// // let multiplyNumeric = (obj5) => {
// //   for (let key in obj5){
// //     if(typeof obj5[key] === 'number' ){
// //       console.log(obj5[key] *= 2);
// //     }
// //   }
// // }

// ///OBJECT REFERENCES AN COPYING


// let num = [33, 2, 8]
// num.sort()

// console.log(num)



// // comparison by reference 
// let c = {}
// let a = c;

// console.log(a == c);//true
// console.log(a === c) //true

// // even if two obj are  empty //they aren't equal
// //eg

// let d = {};
// let e = {};

// console.log(d == e)//false


// //Const Objects can be Modified
// const user8 = {
//    name: 'Wisdom'
// }

// user.name = 'West'
// console.log(user.name)


// //Cloning and Merging, Object.assign
// let player = {
//    name: "wisdom",
//    age: 40
// }


// let clone = {};

// //w ecna clone an objects properties like this
// for (let key in user){
//    clone[key] = user[key]
// }

// clone.name  = "Pete";
// console.log(clone.name);

// //Object.assign method



// // Object.assign(dest, ...sources)


// let ranker = {name: "westBrook"}

// let skill1 = {canWarp: true}
// let skill2 = {canShift: true}


// Object.assign(ranker, skill1, skill2)

// console.log(ranker.name)
// console.log(ranker.canWarp)
// console.log(ranker.canShift)

// //What is Nested Cloning 

// let  irregular = {
//     name: "wisdom",
//     sizes: {
//       height: 192,
//       width: 50
//     }
// };


// console.log(irregular.sizes.width)


// let  irregular1 = {
// name: "wisdom",
// sizes: {
//   height: 192,
//   width: 50
// }
// };
// let clone1 = Object.assign(
//    {}, irregular1
// );

// console.log(irregular1.sizes === clone1.sizes);

// //user and clone share sizes
// irregular1.sizes.width = 60; //property change from one place 
// console.log(clone1.sizes.width)//60, get the result from the other one


// /* what is 
//    -Deep Cloning 
//    -structured cloning
// */
// //they're the same thing

// let maker = {
//    name: "dimitri",
//    sizes:{
//    height: 200,
//    width :80
//    } 
// }

// let copy = structuredClone(maker)

// console.log( maker.sizes === copy.sizes);

// maker.sizes.width = 50;
// console.log(copy.sizes.width)

// //structured clone can also copy/clone most datatypes
// //it clones th eobject with all netsed properties

// let arr = [1, 2,3,4, 5,55]

// let arr2 = structuredClone(arr)

// console.log(arr2)

//will fail if object has  a function propoerty
//eg

// structuredClone({
//    f: function () {}
// });

//summary
//Objects are copied by refrence and stored by refrence
//object.assign makes a reral copy
//shallow copy can be made by nested objects 

//Garbage Collection






// //this object method
//  user = {
//    sayHi(){
//       console.log("Hello");
//    }
//  }




// let newUser1 = {
//    //....
// }

// function sayHi(){
//    console.log("Hello!");
// }


// user.sayHi = sayHi;

// user.sayHi();




//Method shortHand
// user = {
//    sayHi: function(){
//       console.log("Hello");
//    }
// };

// ///method shorthand..... better look??
// user = {
//    sayHi(){
//       console.log("hiya!")
//    }
// }





//this method
// let userq  = {
//    name: "john",
//    age: 30,

//    sayHi(){
//       // this

//       console.log(this.name);
//    }
// };

// userq.sayHi();
 


// //Constructor functions
// function Player1 () {
//   this.name 
//   this.age
// }
// let jess = new Player1('Jessica')
// let res = new Player1('Reinner')

// console.log(Player1)



// const obj2 = {
//    name: 'John',
//    greet: function() {
//      console.log('Hello, ' + this.name);
//    }
//  };
 
//  obj2.greet(); // Output: Hello, John




// function makeUser() {
//    return {
//      name: "John",
//      ref: this
//    };
//  }
 
//  let usr = makeUser();
 
//  console.log( usr.ref.name );





// calculator




// let calculator = {
//    // ... your code ...
//    sum() {
//       return this.a + this.b;
//    },   
//    mul(){
//       return this.a * this.b;
//    }
//  };
 
// //  calculator.read();
//  console.log( calculator.sum() );
//  console.log( calculator.mul() );

//REST PARAMETERS
function max(...numbers) {
   let result = -Infinity;
   for (let number of numbers) {
     if (number > result) result = number;
   }
   return result;
 }
 console.log(max(4, 1, 9, -2));
 // → 9



let numbers = [5, 1, 7];
console.log(max(...numbers));


console.log(false || true)
console.log(false || false)


//not is an exclamation mark (!);
//it's also a unary operator

let number = 0;
while ( number < 12){
   console.log(number);
   number = number + 2
}

// exponent 
//console.log(2 ** 10)


//do loop example
// let yourName;
// do {
//  yourName = prompt("who are you?");
// }while(!yourName);
// console("Hello " + yourName)





// //For Loops
// for (let number = 0; number <= 12; number = number + 2){
//    console.log(number)
// }

// let result = 1; 
// for (let counter = 0; counter < 10; counter = counter + 1 ){
//    result = result * 2;
//    console.log(result)
// }


// //break out of a loop
// for (let current = 20; ; current = current + 1)
// {
//    if (current % 7 == 0){
//       console.log(current);
//       break;
//    }
// }


//switch case example


// switch (prompt("What is the weather like?")) {
//    case "rainy":
//      console.log("Remember to bring an umbrella.");
//      break;
//    case "sunny":
//      console.log("Dress lightly.");
//    case "cloudy":
//      console.log("Go outside.");
//      break;
//    default:
//      console.log("Unknown weather type!");
//      break;
//  }

//here's how you loop trough a  traingle
for (let hash = '#'; hash.length < 8; hash += '#'){
console.log(hash)
}


//what about fizz buzz
for(let i = 0; i <= 100; i++){
   if (i % 3 == 0){
      console.log('fizz')
   } else if(i % 3 !== 0 ){
      console.log(i)
   }else if(i % 5 == 0){
      console.log('Buzz')
   }else if(i % 5 !== 0){
      console.log(i)
   }
}

for (let n = 0; n <= 100; n++){
   if (n % 3 || n % 5 == 0){
      console.log("FizzBuzz")
   }else if(n % 3 || n % 5 !== 0){
      console.log(n)
   }
}


//simple solution 
for (let n = 1; n <= 100; n++) {
   let output = "";
   if (n % 3 == 0) output += "Fizz";
   if (n % 5 == 0) output += "Buzz";
   console.log(output || n);
 }


//chess board
let size  = 8;
let board = '';

for (let y = 0; y < size; y++){//outer looop
   for (let x = 0; x < size ; x ++){//inner loop
      if ((x + y) % 2 == 0){
      board += " ";
      }else{
   board += "#"
      }
   }
 board += "\n";
}


console.log(board);