// Variables and Constants 

/* 
   In Javascript we can create variables like this. Javascript is case sensitive
   Synatx :
            let variable_name = value; 

   Note :- 1. let keyword is use to define variable in javascript.
           2. variable decleared by let are changable. It means value of those variables can be changed

   Syntax :
             const variable_name = value;

    Note :- 1. const keyword is also use to define variable in javascript.
            2. But the value of the variable can not be changes.
*/  

/*
    Name convention in javascript :
    1. Allowed : 
       - Best Practice camelCase    : let userName
       - Only letters and digits    : let ageGroup5
       - Starting with $ is allowed : let $kindOfSpecial
       - starting with _ is allowed : let _internalValue
    
    2. Not Allowed/Not Recommended:
       - Allowed but bed practice   : let user_name
       - Starting digit not allowed : let 21players
       - Not Special characters!    : let user-b
       - Keywords not allowed       : let let  

    Note :- 1.  In Javascript semi-colon(;) is optional . But better to use it in code. But don't put (;) at the end of function.
            2.  In Javascript developer can reasign the const variable to let variable and use it
                But the const variable value can not changeed. The Browser throug a error 
                "Assignment to const variable" .
            3.  In Javascript \n is used to provide line break in string.
            4.  In Javascript before use any varriable developer must have to define it first. Other vise browser gives error : 
                'ReferenceError : Cannot access 'variableName' before initialization'  
            5.  But point number 4 is not applicable on function, because Javascript read whole script from top to bottom and 
                pull the functions from any where in the script and place them at the top of the script.
            6.  In Javascript 'parseInt' and 'parseFloat' are two function which is use to type convert. string convert in int 
                and float .
            7.  In Javascript '.toString()' function is use to convert into string .
            8.  In Javascript index of array also strat from 0.
            9.  In Javascript Developer shouldn't assign undefined as a value manually.
            10. In Javascript we can get the type of variable by using 'typeof' method.
            11. In Javascript 'null' is a 'object type'.
            12. In Javascript 'defer' is the keyword which tell the html/browser that load the java script at starting of the html but
                execute it after the parsing the html(reading the html).
            13. In Javascript 'async' is the keyword which tell the html/browser that load the js file first and execute it also first.
                But the important point is that the loaded js file have no relation with html. Otherwise browser shows error.
            14. In html script tag execute inlinelly .

*/

/*
    Data Type in javascript :
       Datatpe          : Example       

    1. Number           : 2,-3,22.44
    2. string(text)     : 'hi', "hi", `hi`
    3. Booleans         : true/false
    4. Objects          : {'name': 'abc', 'age':31} it is also same as dictonary in python
    5. Arrays           : same as python [1,2,3,4], ['hi','bye'], [1.02,1.336]
    6. null             : It can be assigned to a variable
    7. undefined        : It is a value that indicates that nothing's there but at the same time , it's also a separate data type 
    8. NAN              : Technically it's of type number and can therefore be used in calculation. It yields a new NAN and it's the result of invalid calculation (3*'hi')


    Operators ; 
    1. +                : plus
    2. -                : Substract
    3. *                : Multiply
    4. /                : divide  (3/2 = 1.5)
    5. **               : power   (2**3 = 8)

    operator with equal
    1. +=               : a = a+ b 
    2. -=               : a = a-b
    3. *=               : a = a*b
    4. /=               : a = a/b
    
    increnment/decrenment operator 
    1. After operation : 
        1. ++               :  a+1 = a++
        2. --               :  a-1 = a--
    
    2. Before operation : 
         1. ++               :  1+a = ++a phale add the change
         2. --               :  1-a = --a

*/

/* 
    Functions in javascript ; 

    Synatx : For define function :

                function functionName(parameters){
                    code segement
                }
            For Call Function :
                
                functionName(parameter); 
    Note : Developer define the function anywhere in the script . Javascript manage it .
*/

/*
In JavaScript developer can define variables in two ways .
    1. Globally: 
            - It means define all the variable at the top of the script .
    2. Locally :
            - It means inside the function .
    Note : Best way to define the variables at the top of the script . But for good code in case of function 
           local variable are good .

*/

// code for calculator .

const defaultResult = 0

let  currentResult = defaultResult;
let logEntries = [];


// Gets input from the user field
function getUserNumberInput(){
    return parseInt(userInput.value);
}


// helper function 
function createAndWriteOutput(Operator, resultBeforeCalc, resultAfterCalc){
    const calDescription = `${resultBeforeCalc} ${Operator} ${resultAfterCalc}`;
    outputResult(resultAfterCalc, calDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
     newResult){
        const logEntryResult = {
            operation :operationIdentifier,
            prevResult : prevResult,
            number : operationNumber,
            result : newResult
        };
        logEntries.push(logEntryResult);
        console.log(logEntries);
        
     }



function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult +=  enteredNumber;
    createAndWriteOutput('+',initialResult, currentResult);
    logEntry = writeToLog('ADD',initialResult,enteredNumber,currentResult);
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult, currentResult);
    logEntry = writeToLog('SUB',initialResult,enteredNumber,currentResult);
    
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*',initialResult, currentResult);
    logEntry = writeToLog('MUL',initialResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber;
    createAndWriteOutput('/',initialResult, currentResult);
    logEntry = writeToLog('DIV',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


/*

let calculationDescription = `(${defaultResult + 10} * 3 / 2 -1`;
this only work in this manner . the work of $ sign in this is place the value of defaultResult.Just like f string in python

- this is known as template litterel
- Developer also provide line space in this method . Browser treat like a single line but it provide more 
  readabilty to developer in large string
*/

let errorMessage =  `An Error Occured !`

// call a function from vendor.js

