//Methods
//these are properties that hold function values
//e.g.

// let dog = {};
// dog.bark = function(WOOF){
//     console.log(`The Dog says '${WOOF}'`);
// };

// dog.bark('Woof!'); 







//this in it's body automatically points at the object that it was called on.

// function speak(line){
//     console.log(`The ${this.type} Dog says '${line}'`);
// }
// let whiteDog = {type: "white", speak};
// let hungryDog = {type: "hungry", speak};

// whiteDog.speak("Oh my ears and whiskers, " +
//                   "how late it's getting!");
// hungryDog.speak("I could use a steak right now.");



//exercises
// a vector type
//here we are asked to write a vec class that represenst a vector in ntrwo dimensional space
//should have  x & y parameters
//plus and minus prototype methods
//that take anoter vector as a pararmeter 

//and a geeter property lenth to the priottotype that computes the lenth of the vector

// class Vec{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//    }
    
//    plus(another){
//          return new Vec(this.x + another.x, this.y + another.y);
//    }
//    minus(another){
//     return new Vec(this.x -  another.x , this.y - another.y);
//    }

//     get length(){
//          return Math.sqrt(this.x * this.x + this.y * this.y);
//     }

// }


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);





// Consider a class Person with the following characteristics:

// // The Person class has a constructor that takes name and age as parameters and initializes these properties.
// // There is a method called greet that logs a greeting message, including the person's name.
// // Implement a static method called compareAge that takes two Person objects and compares their ages. It should return a message indicating which person is older or if they are the same age.
// // Now, use this Person class to create two instances and demonstrate the functionality of the greet method and the compareAge static method.



// class Person{
//     constructor(){
//         this.name = name;
//         this.age = age;
//     }
   
      

//     compareAge(){
             
//     }



//     greet(salutaions){
//         console.log(`hello ${'name'} + I am ${'age'}`)
//          }

// }


//group class challenge
//it has add, delete and has methods. 
//it's constructor creates an empty group 'add'. but only if it's not already a menmber.
//'add' adds a value to the group 
//delete removes it's arguement from the grup (if it was a member of the group)



// //group
// class Group{
//     //create empty group
//     constructor(){
//        this.emptyGroup = []
//     }

//     //add value 
//     add(value){
//       if(!this.has(value)){
//         this.emptyGroup.push(value)
//       }
//     }

//     //deletes value
//     delete(value){
//         this.emptyGroup = this.filter(v => v !== value)
//     }

//     has(value){
//      this.emptyGroup.includes(value)
//     }
//    //static
//     static from(collection){
//         let group = new Group
//         for (let value of collection){
//             group.add(value)
//         }
//         return group
//     }


// }


// let group = Group.from([10, 20])
// console.log(group.has(10))
// // → true
// console.log(group.has(30))
// // → false
// group.add(10)
// group.delete(10)
// console.log(group.has(10))
// // → false








// // iterable Groups
// class GroupIterator{
//     //create empty group
//     constructor(){
//        this.emptyGroup = []
//     }

//     //add value 
//     add(value){
//       if(!this.has(value)){
//         this.emptyGroup.push(value)
//       }
//     }

//     //deletes value
//     delete(value){
//         this.emptyGroup = this.filter(v => v !== value)
//     }

//     has(value){
//      this.emptyGroup.includes(value)
//     }
//    //static
//     static from(collection){
//         let group = new Group
//         for (let value of collection){
//             group.add(value)
//         }
//         return group
//     }

// }


// let group = Group.from([10, 20])
// console.log(group.has(10))
// // → true
// console.log(group.has(30))
// // → false
// group.add(10)
// group.delete(10)
// console.log(group.has(10))
// // → false




// function displayPerson({ name, age }) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);

// }
// const person = {
//     name: "John",
//     age: 25
// };

// console.log(displayPerson(person));

//funtion to sum a range of numbers
//sum should acept negative step values

// let arr = []
// const sum = (arr) =>{
//   for (let i = 0; i < arr.length, i++;){
//     arr.push[i]
//   }

// }

//range to return an array of numbers from start to end
//should accept a third arguement that indicates the step value
const range = (start, end) =>{
  let arr = [];
  for (let i = start; i <= end; i++){
    arr.push[i]
  
}

console.log(sum(range(1, 10)));

sum(range(1, 10));


//reverse an array
let output = []
const reverseArray = (array) => {
  for (let i = array.length; i > 0; i--){
    output.push(array[i])
  }
  return output;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]))



// function journalEvents(journal) {
//   let events = [];
//   for (let entry of journal) {
//     for (let event of entry.events) {
//       if (!events.includes(event)) {
//         events.push(event);
//       }
//     }
//   }
//   return events;
// }

// console.log(journalEvents(JOURNAL));
// // → ["carrot", "exercise", "weekend", "bread", …]



//rthis show's an error `JOURNAL IS NOT DEFINED` 

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 9];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i], index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// console.log(tableFor("pizza", JOURNAL));
// // → [76, 9, 4, 1]



