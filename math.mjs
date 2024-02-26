console.log('hello from math.js')
console.log(window)

//exports is an object that gets returned when a file is imported
// exports.PI = 22/7;
//mjs
//another approach is to export a real variable
window.PI = 22/7;

// exports.random = () => {
//     return Math.random();
// }

// export const random = () => {
//     return Math.random();

window.random = () => {
       return Math.random();
   }
    

//named export 
//Math.max
window.max = (...arr) => {
    console.log(arr);
    console.log(typeof arr);
    console.log(Array.isArray(arr));
    return Math.max(...arr); 
}

// module.exports = {
//     add: (a, b) => {
//         return a + b
//     },
//     sub: (a, b) => {
//         return a - b
//     }
// }

//if you don't to do the  above do the following

// const math = {
//     add: (a, b) => {
//         return a + b
//     },
//     sub: (a, b) => {
//         return a - b
//     }
// }

//default export
export default Math;
//module.exports = math;
//es6 modules are always in strict mode
//es6 (import/export) mjs



