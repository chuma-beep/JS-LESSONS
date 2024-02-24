//Object keys point to values
//Object values can be traced from keys

//Object.keys() can be used to iterate over the keys of an object and access the corresponding values
//Object.values() can be used to iterate over the values of an object for further processing and manipulation


const Man = { name: "wisdom", age: 27, city: "lagos" };
const keys = Object.keys(Man);
const value = Object.values(Man);
console.log(keys); //["name", "age", "city"]
console.log(value); //["wisdom", 27, "lagos"]
