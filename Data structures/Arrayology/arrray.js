//deep comparison challenge using recursion
function deepEqual(a, b) {
    //checks for equality
    if (a === b)
    return true;
  
    //checks for null
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") 
        return false;
  
        //declares a varaible and sets it so that it check he keys of properties are found on the objects
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    //comparison
    if (keysA.length != keysB.length)
     return false;
  //recursive
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) 
      return false;
    }
  
    return true;
  }
  

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
