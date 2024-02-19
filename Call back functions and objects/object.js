//object basics

let objectD = {}


objectD.name = "setemi";
objectD.age = 99;


objectD['job'] = 'instructor';



let obj2 = (name, age) => {
 let obj = {}
  obj[name]= name;
  obj.age = age;

  return obj;
}

let obj2Oneliner = (name, age) => ({name, age});

let obj3 = (name, age) =>( {
        name,
        age: age,

   });

   console.log(obj2("setemi", 99));

