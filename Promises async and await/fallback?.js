const lotterGame = new Promise(function (resolve, reject) {
    console.log('Lottery is happening');

 setTimeout(() => {
    let lottery = Math.random().toFixed(1);
    
    console.log(lottery); 
   
     if (lottery > 0.5){
        resolve('You won');
    } else {
        reject(new Error (`You lost `));
    }

}, 2000)

});

lotterGame.then((res)=> console.log(res)).catch((err) => console.log(err));