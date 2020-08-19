/*
    1. Pure Function : Pure function are the function which generates output ont the bases of input. And the does not affect any thing outside.
    2. Factory Function : Factory function are the function which generate another function .
    3. Closures Function : This Function changes it value according to the closest value.
    4. Recursion : Same as Other language.
*/

// Pure Function 
function add(num1,num2) {
    return num1 + num2 ;
}

console.log(add(5,1));   // Output was fixed and we know that this will remain same at this input
console.log(add(297,198));

// Impure Function : Output is not Predictable 
function addRandom(num1) {
    return num1 + Math.random() ;
}

console.log(addRandom(5));  // Output was not fixed and we don't know . And the output will change every time
console.log(addRandom(297));

// Side Effect : It changes value for all new itterations

let previousResult = 0;

function addMore(num1,num2) {
    const sum = num1 + num2 ;
    previousResult = sum;
    return sum;
}

console.log(addMore(5,1));   // Output was fixed and we know that this will remain same at this input
console.log(addMore(297,198));


// Factory Function Example  :

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}


const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));


//Closures Function examples : 
// Example : 1
let multiplier = 1.1;

function createTaxCalculator1(tax) {
    function calculateTax(amount) {
        console.log(multiplier)
        return amount * tax * multiplier;
    }
    return calculateTax;
}


const calculateVatAmount1 = createTaxCalculator1(0.19);
const calculateIncomeTaxAmount1 = createTaxCalculator1(0.25);

multiplier = 1.2 // whole calculation can be performed by using new value . this is because we update the value of multiplier before use

console.log(calculateVatAmount1(100));
console.log(calculateIncomeTaxAmount1(200));

multiplier = 2.1 // whole calculation can be performed by using new value . this is because we update the value of multiplier before use

console.log(calculateVatAmount1(100));
console.log(calculateIncomeTaxAmount1(200));

// Example 2 : 

let userName = 'Kanik Vijay'

function greetUser() {
    console.log(`Hi ${userName} !`);
}

//greetUser(); // Output : Hi Kanik Viajy !

userName = 'Ashu Viajy';

greetUser();  // Output : Hi Ashu Viajy !


let userNameNew = 'Kanik Vijay'

function greetUser1() {
    let name = userNameNew
    console.log(`Hi ${name} !`);
}

//greetUser1(); // output : Hi Kanik Vijay ! 

userNameNew = 'Ashu Viajy';

greetUser1();  // Output : Hi Ashu Viajy !


// Recursion Example : 
// Example Without Recursion : 

function power (x,n) {
    let result = 1;
    for (i = 0; i<n ; i++){
        result *= x;
    }
    return result
}

console.log(power(2,3))

// Example 1 With Recursion  :

function powerof (x,n) {
    if (n === 1){
        return x ;
    }
    return x * power(x,n-1);
}

console.log(powerof(2,3))

// Example 2 With Recursion  :

const myself = {
    name:'Kanik Viajy',
    friends : [
        {
            name : 'Ashu',
            friends : [
                {
                    name : 'vinay',

                }
            ]
        },
        {
            name : 'Jay',
        }
    ]
};

function printFriendsName(persons){
    const collectedNames = [];

    if (!persons.friends){
        return [];
    }
    for (const friend of persons.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...printFriendsName(friend));
    }
    return collectedNames;
}


console.log(printFriendsName(myself));
