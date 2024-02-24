//what's up promises in js
//promises are a way to handle asynchronous operations in js
//promises are objects that represent the eventual completion or failure of an asynchronous operation

//promises work similar to real-life promises
//when we make a promise, it is a guarantee that we will do something in the future
//we can either keep the promise or break it
//when we keep the promise, we resolve it
//when we break the promise, we reject it
//promises are also similar to event listeners or callbacks
//but with promises, we can only resolve or reject once
//we can also chain multiple promises together

//for example
const userLeft = true;
const userWatchingCatMeme = true;



let p = new Promise ((resolve, reject) =>{
    let a = 1 + 2;
    if (a == 2){
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})

function watchTutorialPromise(){
    // let userLeft = false;
    // let userWatchingCatMeme = false;

    return new Promise((resolve, reject) => {
        if (userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}



watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
}) 

//what does promise.all do?
//lets say we have 

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
})


//we can use promise.all to run all the promises at the same time

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})
//this will log all the messages at the same time
//note that there's also a Promise.race
//which when used will only return the first promise that resolves or rejects