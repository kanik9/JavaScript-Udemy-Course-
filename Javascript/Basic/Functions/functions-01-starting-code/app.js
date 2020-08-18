
/*
    1. OverView Of functions Module :  
        // Different ways of creating Functions
        // Anonymous Functions
        // CallBack Functions & Functions in Functions
        // Default Arguments & Reset Operators
        // bind()& more built in functions .

    2. Functions not included in this module :
        1. String :
                1. toUpperCase() : It is use to convert all lower case string character into upper case.
        2. Objects :
            1. Arrays :
            2. Objects :
        3. Function :
                1. .bind()  : It Create new function automaticaly according to the passed parameter .It is not execute it execute when the attached function is call 
                2. .apply() : It same as .bind but it execute function first.
                3. .call()  : Same as .apply


    Note : 1. In Javascript, Functions are "Code on Demand", it means functions is a code of block which is created when the demand came .
           2. In Javascript, Variables and Constants created in function "belong"to that function . They are known as local variables or block variables.
           3. In Javascript, Function can take parameters and can return value.
           4. In Javascript, Functions can be called multiple times (with different arguments)
           5. In Javascript, Functions can call directly or indirectly
           6. In Javascript, Functions can call and declaired anywhere 
           7. In Javascript, Functions is a special type of object which is known as function which have a pre configured properties
           8. In Javascript, Functions can be stored in variables and call by using the stored variable.
    
    Note : 
            1. In Javascript function declaration type function can be declared anywhere in the script and use it anywhere.
            2. In Javascript function Expression type function , developer first decleared it and the use it after the declaration .But developer use it before declear javascript engine show error.

*/


/*
    1. Methods of defining of functions :

        const person = {
            greet : function greet(){
                console.log("Hello Friends")
            }
        };

    2. In Javascript, Functions is a special type of object which is known as function.
        console.log(typeof startGame)
    
    3. Below this all are example of anonymous function :
            1. In Javascript, Functions can be stored in variables it is known 'Function Expression' and call by using the stored variable.
            In Function Expression Case semi-coln is important . it because in some case it will show some error
                Note : All the below declarations are the example of Anonymous Function type function
                        1. If Hacker wants to see the code he will find it eassly in this case 
                    1.
                        const start = function startGame(){
                                                console.log("Game is Starting...");

                                        };
                        startGameBtn.addEventListener('click', start)
                    2. 
                        const start = function (){
                                        console.log("Game is Starting...");
                                    };
                        startGameBtn.addEventListener('click', start)
                    3. 
                        startGameBtn.addEventListener('click', function(){
                            console.log("Game is Starting...");
                        }
                        );
                    4. If you call it in this event listener :
                        startGameBtn.addEventListener('click', function(){
                            console.log("Game is Starting...");
                        }
                        ()// Only this call the function 
                        );

            2. Function Declaration /Function Statement
                        function startGame(){
                            console.log("Game is Starting...")
                        }
            
            3. Developer can define function by using this '=>' without space in between them : This Type of function is known as arrow function
                        const getWinner = (cChoise, pChoise) => {
                                            if (cChoise === pChoise){
                                                return RESULT_DRAW
                                            }
                                            else if(
                                                cChoise === ROCK && pChoise === SCISSORS || 
                                                cChoise === PAPER && pChoise === ROCK || 
                                                cChoise === SCISSORS && pChoise === PAPER
                                                ){
                                                return RESULT_COMPUTER_WINS
                                            }
                                            else {
                                                return RESULT_PLAYER_WINS
                                            }

                                        }
            4. Shorter code of point 5 :
                        const getWinner = (cChoise, pChoise) => {
                            return cChoise === pChoise ? RESULT_DRAW :
                                (
                                    cChoise === ROCK && pChoise === SCISSORS || 
                                    cChoise === PAPER && pChoise === ROCK || 
                                    cChoise === SCISSORS && pChoise === PAPER
                                    ) ? RESULT_COMPUTER_WINS :
                                        RESULT_PLAYER_WINS
                                }
            5. Another Way : 
                        const getWinner = (cChoise, pChoise) => cChoise === pChoise ? RESULT_DRAW :
                                (
                                    cChoise === ROCK && pChoise === SCISSORS || 
                                    cChoise === PAPER && pChoise === ROCK || 
                                    cChoise === SCISSORS && pChoise === PAPER
                                    ) ? RESULT_COMPUTER_WINS :
                                        RESULT_PLAYER_WINS
                                
            6. Another Way :

                        1. No Arguments/parameters :
                                    Syntax :
                                            () => {...}
                        2. One Arguments/parameters :
                                    Syntax :
                                            arg => {...}
                        3. Only Single expression in a function :
                                    Syntax :
                                            (a,b) => a+b;
                        4. more that Only Single expression in a function :
                                    Syntax :
                                            (a,b) => {
                                                a *=2;
                                                return a+b;
                                            }


 

*/



/*
// How developer can pass infinite number of args like python we can use *args for list type and **kwargs for infinite variables


- For taking multiple input use '...' . This 3 dots are known as rest operator which takes multiple argument as a input and the create array inside the function . When Developer use '...' he doesn't think about input.
Note : rest operator argument must be the last argument in function. Because if you use it at first place then all the input are represented by this .
1. First Method : Prefer to use it because it is understandable. This method include in ES6
    1.1 : 
            const sumUp = (...number) =>{
                let sum =0;
                for (const num of number){
                    sum +=num
                }
                return sum;
            };
    1.2 : 
            const sumUp = function(...number) =>{
                let sum =0;
                for (const num of number){
                    sum +=num
                }
                return sum;
            };
2. It is old . And the upper one is new . This method is present in ES5
    2.1 :
            const sumUp = () =>{
                let sum =0;
                for (const num of arguments){ // it also create array like object
                    sum +=num
                }
                return sum;
            };
    2.2 :   
            const sumUp = function() =>{
                let sum =0;
                for (const num of arguments){ // it also create array like object
                    sum +=num
                }
                return sum;
            };
console.log(sumUp(1,2,3,4,5,6,7,8,9,10,11,12,13))

*/


/*

// Function inside function

    const sumUp = (...numbers) => {
        const validators = (number) =>{
            return isNaN(number) ? 0 : number ; 
        };
        let sum = 0;
        for (const num of number){
            sum += validators(num);
        }
        return sum;
    };

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */




// Create game of Rock, Paper, Scissors.

// Global Decaration of variables :

const startGameBtn = document.getElementById('start-game-btn');
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS"
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

const DEFAULT_USER_CHOISE = ROCK;


let gameIsRunning = false



// Functions :

const getPlayerChoise = () => {
    const selection = prompt(`${ROCK} , ${PAPER} , ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ){
        alert(`Invalid Choise! we chose ${DEFAULT_USER_CHOISE} for you`);
        return DEFAULT_USER_CHOISE;
    }
    else {
        return selection;
    }

}

const getComputerChoise = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34){
        return ROCK;
    }
    else if(randomValue <0.67 ){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
}


const getWinner = (cChoise, pChoise) => {
    if (cChoise === pChoise){
        return RESULT_DRAW
    }
    else if(
        cChoise === ROCK && pChoise === SCISSORS || 
        cChoise === PAPER && pChoise === ROCK || 
        cChoise === SCISSORS && pChoise === PAPER
        ){
        return RESULT_COMPUTER_WINS
    }
    else {
        return RESULT_PLAYER_WINS
    }

}



// Events Perform By Function :



startGameBtn.addEventListener('click', () => {
    if (gameIsRunning){
        return
    }
    gameIsRunning = true;
    console.log("Game is Starting...");
    const playerChoise = getPlayerChoise();
    console.log(playerChoise);
    const computerChoise = getComputerChoise();
    console.log(computerChoise);
    const winner = getWinner(computerChoise, playerChoise);
    console.log(winner);
    let message = `You Picked ${playerChoise} and Computer Choose ${computerChoise},`;
    if (winner === RESULT_DRAW){
        message +=  `and the match is ${RESULT_DRAW}` ;
    }
    else if (winner === RESULT_PLAYER_WINS){
        message +=  `and the match is ${RESULT_PLAYER_WINS}`;
    }
    else {
        message += ` and the match is ${RESULT_COMPUTER_WINS}`;
    }
    alert(message);
    gameIsRunning = false;
}
)




// Not related to this file but for concept :


const combine = (resultHandler, operation, ...number) =>{
    const validators = (number) =>{
        return isNaN(number) ? 0 : number ; 
    };
    let sum =0;
    for (const num of number){
        if (operation === "ADD"){
            sum += validators(num); 
        }
        else {
            sum -= validators(num);
        }
    }
    console.log(sum)
    resultHandler(sum, operation)
};

const showResult = (messageText, result) =>{
    alert(messageText +' ' + result);
}


combine(showResult.bind(this,'The result after adding all numbers is :'), "ADD" ,1,5,'Hi',3,6,7,10);
combine(showResult.bind(this,'The result after adding all numbers is :'), "ADD" , 1,2,3,4,5,6,7,8,9,10,11,12);
combine(showResult.bind(this,'The result after subtracting all numbers is :'), "SUB" , 1,2,3,4,5,6,7,8,9,10,11,12);

