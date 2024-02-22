// //this how you declare a promise
//     //let promise = new Promise(function (resolve, reject) {}


// //promise
// let promiseFulfil = new Promise(function (resolve, reject) {
//     // understand that result and reject are functions
//     // if (resolve) {
//         setTimeout(resolve('hiddle'), 3000);
//     // } else {
//     //     reject();
//     // }
// });

// promiseFulfil.then((data) => {
//   console.log(data);
// })

// //promise
// let promiseReject = new Promise(function (resolve, reject) {
//     // understand that result and reject are functions
//     // if (resolve) {
//     //     setTimeout(resolve(), 3000);
//     // } else {
//     //     reject();
//     // }

//     reject("error");
// });

// promiseReject.catch((error) => {
//     console.log(error);
// })


// // function sample() {
// //    let promise =  new Promise(function (resolve, reject){
// //         setTimeout(resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3000)
// //         })


// //     return promise
// // }

// //example: fecth from an api
// function sample() {
//    let promise =  new Promise(function (resolve, reject){
//         (fetch('https://api.github.com/users/olusetemi'))
//         })
    
//     return promise
// }

// sample().then((data) => {
//     console.log(data);
//     return data.json();
//     }).then((data) => {
//         console.log(data);
//     })


///create a promise 
const promise = new Promise(function(resolve, reject) {
 resolve('I FIRED');
 reject(new Error('Promise  rejected'));
})

function testPromise(){
        return promise.catch(error => {
            console.log(res);
        }).catch(error => {
        console.log(error.message);
    })
}

testPromise();


///follow these steps to understand what setemi did
//create a promise
const sampleProm = new Promise(function(resolve, reject) {
    //either resolve or reject 
    resolve('I am here');
})
//put the promise in a function and return the promise
function testSampleProm() {
  return sampleProm
}

//use .then to handle the resolve and .catch to handle the reject

testSampleProm
