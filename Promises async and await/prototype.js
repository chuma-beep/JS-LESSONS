//prototype manipulation
//the code below is not advisable but it's possible
String.prototype.altSchool = function(){
    return this.toUpperCase()
}
let name = 'wisdom' //literal 1 - use constructor to construct a new varaile, 
                    //2- converts the constructor object to a primitive data type
                    //attach properties and methods to the new primitive data type
console.log(typeof name)

console.log(name.altSchool()) 

//constructors
