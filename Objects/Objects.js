//Methods
//these are properties that hold function values
//e.g.

// let dog = {};
// dog.bark = function(WOOF){
//     console.log(`The Dog says '${WOOF}'`);
// };

// dog.bark('Woof!'); 







//this in it's body automatically points at the object that it was called on.

function speak(line){
    console.log(`The ${this.type} Dog says '${line}'`);
}
let whiteDog = {type: "white", speak};
let hungryDog = {type: "hungry", speak};

whiteDog.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
hungryDog.speak("I could use a steak right now.");
