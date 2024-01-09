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

// The Person class has a constructor that takes name and age as parameters and initializes these properties.
// There is a method called greet that logs a greeting message, including the person's name.
// Implement a static method called compareAge that takes two Person objects and compares their ages. It should return a message indicating which person is older or if they are the same age.
// Now, use this Person class to create two instances and demonstrate the functionality of the greet method and the compareAge static method.



class Person{
    constructor(){
        this.name = name;
        this.age = age;
    }
   
  

    compareAge(){
             
    }















    greet(salutaions){
        console.log(`hello ${'name'} + I am ${'age'}`)
         }

}
