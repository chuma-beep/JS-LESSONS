//how do we use async and await to make JavaScript Promises easier to work with?
//async and await are built on top of promises

//eg

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })



//using async and await
//you need to use the async keyword before a function
//the await keyword is used before your code that is going to asyncronous
//make sure to use try and catch to handle errors
//you can also use .then and .catch to handle errors
//but try and catch is cleaner
//make sure to use await before each asyncronous function
//e.g.

async function doWork(){
    try{
     const response =  await makeRequest('Google')
     console.log('Response Received')
     const processedResponse= await processRequest(response)
        console.log(processedResponse)
    } catch (err){
       console.log(err)
    }
}

doWork()