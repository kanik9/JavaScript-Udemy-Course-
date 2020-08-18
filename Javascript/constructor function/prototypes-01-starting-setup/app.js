// constructor
// 'this' always refrence to the class not outside the class. 'this.name' this will show error outside the class
/*
class Person {
    name = 'Kanik Vijay';
    constructor(){
        this.age = 22;
    }
    greet() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
    }
}
*/
// they both are same at some extent

// Contructor function

function Person(){
    this.name = "Kanik Vijay";
    this.age = 22;
    this.greet = () => {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
    }
}


const person = new Person(); // if the Person function call without 'new' keywork Js engine show error . Because the function person doesn't return any value. This 'new' keywork execute Person function as a constructor function .   
person.greet();
console.log(person.__proto__);