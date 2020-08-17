/*
const person = {
    name : 'Kanik',
    age : 22,
    hobbies : ['Cooking','Playing Games'],
    greet : () =>{
        alert(`Hi ${person.name}`)
    }  
};

person.isAdmin = 'true'

// Delete something from person
delete person.age;

person.greet();
*/
/*
const personDetail = {
    'first name' : 'Kanik',
    'second name': 'Vijay',
    age : 22,
    hobbies : ['Cooking','Playing Games'],
    greet : () =>{
        // only way to access these keys
        alert(`Hi ${personDetail['first name']}`)
    }  
};
personDetail.isAdmin = 'true'
personDetail.greet();
*/

const personDetail = {
    'first name' : 'Kanik',
    'second name': 'Vijay',
    age : 22,
    hobbies : ['Cooking','Playing Games'],
    greet : () =>{
        // only way to access these keys
        alert(`Hi ${personDetail['first name']}`)
    } ,
    1 : "Hello" ,
};
personDetail.isAdmin = 'true'
personDetail.greet();