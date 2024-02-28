// //const {test, describe, expect} = require('jest/globals')

// //Unit test,  integartion test, jest, vitest - other(mochai, jasmine), end to end test - E2E, cypress, selenium,
// // puppeteer, playwright 
// //TDD - Test Driven Development
// //BDD - Behaviour Driven Development



// function add(a, b){
//   // if (typeof a !== 'number' || typeof b !== 'number'){
//   //   throw new Error('a and b must be numbers')
//   // }
//     return a + b;
// };


// function sub(a, b){
//     return a - b;
// };


// console.log(add(2, 3));


// // test("It should add two numbers together", () => {
// //   const result = add(3, 7);
// //   if (result !== 10) {
// //     throw new Error(`Expected 10 but got  ${result}`);
// //   }
// // } );

// //write your own expect
// function expect(actual){
//   return {
//     toBe:(expected) => {
//       if (actual !== expected){
//          throw new Error(`Expected ${expected} but got ${actual}`)
//       }
//       toEqual:(expected) => {
//         if (actual !== expected){
//            throw new Error(`Expected ${expected} but got ${actual}`)
//         }
//     }
//   }
// }
// }


// function test(title, callback){
//     try{
//         callback();
//         console.log(`${title} passed`)
//     }catch(error){
//         console.log(`${title} failed`)
// }
// }


// //you need have an idea of what is failing. tests are extremly important


// describe('add', () => {
//     test('It should add two numbers', () => {
//      const obj = {a: 1, b:2}
//       //assertion library
//       expect(obj).toHave(2)
//     })

// })

//     //     test.only('only 2 numbers are allowed', () => {
// //       expect(() => add(3, '7')).toThrow('a and b must be numbers');
// //     })
// //   })
// // }


function getPersonInfo(one, two, three){
  console.log(one);
  console.log(two);  
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`