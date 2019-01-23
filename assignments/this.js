/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - when used in the global scope, this will refer to the window object.
* 2. Implicit Binding - when used as a method on an object, this will refer to the object itself.
* 3. New Binding - when used in an object constructor, this will refer to the instance of the object being created.
* 4. Explicit Binding - methods such as .bind, .call, .apply allow us to overide existing bindings and point the this keyword to a stated object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function descript (){
    return `${this} <--- this is the object Window`
}

console.log(descript());

// Principle 2

// code example for Implicit Binding

const roadster = {
    model: "Roadster",
    make: "Tesla",
    age: 5,
    description: function (){return `This ${this.make} ${this.model} is ${this.age} years old`}
  };

console.log(roadster.description());


// Principle 3

// code example for New Binding

function Car (carArgs){
this.make = carArgs.make;
this.model= carArgs.model;
this.age = carArgs.age;
}

Car.prototype.descriptor = function(){
    return `This ${this.make} ${this.model} is ${this.age} years old`
}

let teslaModelS = new Car ({make: "Tesla", model: "Model S", age: 2});

console.log(teslaModelS.descriptor());


// Principle 4

// code example for Explicit Binding

function Accessory (accessoriesArgs){
    Car.call(this, accessoriesArgs)
    this.item = accessoriesArgs.item;
}

Accessory.prototype = Object.create(Car.prototype);

let teslaDash = new Accessory ({make: "Tesla", model: "Model X part", age: 0, item: "Dashboard"})

console.log(teslaDash.descriptor());