console.log('hello from math.js')

//add function to be exported
//  exports.add = (a, b) => {
//      return a + b
// }

// //sub function to be exported
// exports.sub = (a, b) => {
//     return a - b
// }

let math = {
    add: (a, b) => {
        return a + b
    },
    sub: (a, b) => {
        return a - b
    }
}

module.exports = math;