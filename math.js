// console.log('hello from math.js')
// console.log(window)
//exports is an object that gets returned when a file is imported
// exports.PI = 22/7;
console.log("hello from math js")
//another approach is to export a real variable
// window.PI = 22/7;

// exports.random = () => {
//     return Math.random();
// }

// window.random = () => {
//     return Math.random();
// }



// //Math.max
// window.max = (...arr) => {
//     console.log(arr);
//     console.log(typeof arr);
//     console.log(Array.isArray(arr));
//     return Math.max(...arr); 
// }

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


console.log('Hello from math.js');

console.log(window)
export const PI = 22/7;
// window.METHOD = () => {
//   console.log('Hello from math.js');
// };

export const random = () => {
  return Math.random();
};

// Math.max
export const max = (arr) => {
  console.log(arr);
  console.log(typeof arr);
  console.log(Array.isArray(arr));
  return Math.max(...arr);
}


const math = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};


export default math;

//module.exports = math;