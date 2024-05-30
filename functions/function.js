//functions example

add = (a, b) => {
    if (b === undefined) return +a
    else return a + b;
}

console.log(add(1, 2))
console.log(add(1))



//round to function
function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  
  console.log(roundTo(4.5, 2));
  // → 5
  console.log(roundTo(4.5, 2));
  // → 4


//Closure example

function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

//bindings

let c1 = {
    y: 4,
    x: 10
};

let c2 = {
    y: 57,
    x: 234
};

function printCoordinates(){
    console.log(this.x + ", " + this.y);
}

let c1_func = printCoordinates.bind(c1);
let c2_func = printCoordinates.bind(c2);



//recursion example
function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3));
  // → 8

  //recursion puzzle
    function findSolution(target) {
        function find(current, history) { //inner function does the  actual recursion
        if (current == target) { // if current is equal to target, return history
            return history;
        } else if (current > target) { //if current is greater than target, return null
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || //recursively call find with current + 5
                 find(current * 3, `(${history} * 3)`); // recursively call find with current * 3
        }
        }
        return find(1, "1"); //start with 1
    }

    //growing functions

    function printFarmInventory(cows, chickens) {
        let cowString = String(cows);
        while (cowString.length < 3) {
          cowString = "0" + cowString;
        }
        console.log(`${cowString} Cows`);
        let chickenString = String(chickens);
        while (chickenString.length < 3) {
          chickenString = "0" + chickenString;
        }
        console.log(`${chickenString} Chickens`);
      }


      //closure is the abillity to treat functions as values and pass them around
    


       
      //function that retruns minumum of two numbers

      function min (a , b){
        if(a < b){
          return a;
        }
      }



//count Bs

function count(string, B){
  let counted = 0;
   for(i = 0; i < string.length; i++){
    if (string[i] == B){
     counted += 1;
    }
   }
   return counted 
  }
  function countBs(string){
    return count(string, "B")
  }

  console.log(count("BBC"))

  console.log(count("kakkerlax", "k"))

  //My secound try 

  function countC(string, B){
  let counter = 0;
  for (i = 0; i < string.length; i++){
    if (string[i] == B){
      counter += 1
    }
  }
  return counter
  }

console.log(countC("BoBBBBBooby", "B"))

//function to return the least of two numbers

function min(a, b){
 if (a > b) {
  return a;
 } else {
  return b
 }
}

console.log(min(2, 5) == 2)
console.log(min(3, -1) == -1)
console.log(min(1, 1) == 1)


//find power

// function pow(){

// }


// console.log(pow(3, 2) = 3 * 3 = 9)
// console.log(pow(3, 3) = 3 * 3 * 3 = 27)
// console.log(pow(1, 100) = 1 * 1 * ...* 1 = 1)





// consider this puzzle base don recursion
// start = 1
// repeated adddtion of 5 or multiplication by 3
// an infinte set of nuimbers can be produced.

function findSolution(target){
  function find(current, history){
    if (current == target){
      return history;
    } else if (current > target){
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ??
             find(current * 3, `(${history} * 3)`);
}
  }
  return find(1, "1");
}
console.log(findSolution(24))




//zeropad


function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);


//minimun
