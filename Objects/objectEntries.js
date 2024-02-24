//Object.entries() is a method that returns an array of key value pairs
// eacch elelment in the retruned array is itslef an array with two elements
// the first element is the key and the second element is the value
// it only includes enumerable properties
//non-enumerable properties are not included
//follows the same order as a for...in loop


//Example 1
const object = { name: "wisdom", age: 27, city: "lagos" };
Object.entries(object)
//output
//[["name", "wisdom"], ["age", 27], ["city", "lagos"]]

//Example 2
const object2 = { name: "wisdom", age: 27, city: "lagos" };
for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
}
//benenfits
//it is a more concise way to iterate over an object
// conveinent loopign over an object
//object destructuring can be used to easily extract key value pairs in separate variables
// it can be used to apply transformations to  both keys and values using the map method
//it can be used to convert an object to a map

