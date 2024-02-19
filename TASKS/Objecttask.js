//create an empty user object
let user = {};
//add the property name with the value John
user.name = "John";
//add the property surname with the value Smith
user.surname = "Smith";
//change the value of the name to Pete
user.name = "Pete";
console.log(user);
//remove the property name from the object
delete user.name;
console.log(user);




// function isEmpty(obj) {
  
// alert( isEmpty(schedule) ); 
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }
//   console.log(isEmpty(user)); 
//     console.log(user);






let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  //solution 1
  //  alert(salaries.John + salaries.Ann + salaries.Pete);


    //solution 2

    let sum = 0;
    for(let key in salaries){
        sum += salaries[key];
    }

    console.log(sum);


//multiply numeric properties by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
  
