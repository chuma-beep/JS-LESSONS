function Person(name){
    this.name = name;
    console.log(this);
}


const temi = new Person('Temi');
console.log(temi);


//classes are syntactic sugar because they are just a different way of writing constructor functions
//and are converted to constructor functions when the code is run
//they are not hoisted
//below is an example of a class

class PersonClass {
    constructor(name){
        this.name = name;
        console.log(this);
    }
}


const temi2 = new PersonClass('Temi');
console.log(temi2);


//note
//this is a keyword that is used to refer to the object that is executing the current function
//it is a reference to the object that owns the current code
//it is used to access properties and methods of the object

function add(a, b, c){
    console.log(a, b, c)
    //we don't have a value for this in a fucntion or object,
    // the value will be the global window variable
    // globalThis - node || window - browser
    console.log(this)
}

add.call({name: 'Temi'}, 1, 2, 3);
add.apply({name: 'Temi'}, [1, 2]);



let demon ={
    a: 1,
    b: 2,
    add: function(){
        console.log(this.a + this.b);
        return this.a + this.b;
    }
}

demon.add();//3


const fire = {
    ...demon,
    a: 10,
    b: 20
}


const water = {
    ...demon,
    a: undefined,
    b: undefined
}

console.log(water)
water.add.call({a:99, b: 1});//
water.add.apply({a:99, b: 1});//

fire.add();//30
demon.add();//3

const module2 = {
    x: 42,
    getX: function(){
        return this.x;
    }
}

const unboundGetX = module2.getX;
console.log(unboundGetX());// Expexted output = undefined

const boundGetX = unboundGetX.bind(module2);
console.log(boundGetX());//42

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn){
    this.forEach(function (elem, i){
        elem.on(name, fn)
    });
}


