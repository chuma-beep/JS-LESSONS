// //flattening
// //use reduce method in combination with concat to flatten an array of arrays in to a single array.
// // that has a elements of the orignal arrays


// //solved using a function

// function reduce(arr){
//     let start = [];
//     for (let element of arr){
//         start = start.concat(element);
//     }
//     return start;
// }
// console.log(reduce([[1, 2, 3], [4, 5], [6]]));


// //solved using array method.
// let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((flat, current) => flat.concat(current), []));




// //your own loop
// //write  a higher order function loop that provides something like a foor loopstatement
// //takes a value
// //takes a tes function 
// //an update function and a body funtion

//     function loop(start, test, update, body){
//     for (let value = start; test(value); value = update(value)){
//         body(value);
//     }
//     }

//     loop(3, n => n> 0, n => n - 1, console.log);


    ///everything challenge 
    //use array.every() method as a  - 
   // as a function that takes  an array and a predicate funciton as parameters 

   //layout
   function every(array, test){
      for (let element of array){
{
    if (!test(element)) return false
}   }
  return true;
   }

   function every2(array, test){
    return !array.some(element => ! test(element));
   }
   
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));