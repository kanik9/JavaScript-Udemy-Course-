
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