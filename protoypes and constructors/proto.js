//what are js prototypes and constructors
//prototypes are the mechanism by which js objects inherit features from one another
//js is a prototype-based language
//every js object has a prototype property, which makes inheritance possible in js
//the prototype property of an object is where we put methods and properties that we want other objects to inherit
//the constructor property is a reference to the object that was used to construct the object
//the constructor property returns a reference to the object's constructor function
//the constructor property is a reference to the function that created the instance's prototype
//the constructor property is a reference to the object's prototype
//the constructor property is a reference to the object's prototype's constructor
//the constructor property is a reference to the object's prototype's constructor function


//e.g
//object
let me  = {
    name: "wisdom"
};

//object constructor
// the new keyword is used to create an instance of an object
new Object();
//object prototype
Object.prototype;
//the protoype is transferred to the object's constructor when the object is created





// //class


// class person{
//     constructor(name){
//         this.name = name;
// }
// }





const myHouse = new person("wisdom");