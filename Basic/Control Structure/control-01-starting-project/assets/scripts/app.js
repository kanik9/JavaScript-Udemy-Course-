const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType){

  const enteredNumber = getUserNumberInput();
  if (calculationType == "ADD" ||
      calculationType == "SUB" ||
      calculationType == "MULTIPLY" ||
      calculationType == "DIV" &&
      enteredNumber
      ){
          
          const initialResult = currentResult;
          let mathOperator;
          if (calculationType === 'ADD'){
            currentResult += enteredNumber;
            mathOperator = '+';
          }
          else if(calculationType == "SUB"){
            currentResult -= enteredNumber;
            mathOperator = '-'
          }
          else if(calculationType == "MULTIPLY"){
            currentResult *= enteredNumber;
            mathOperator = '*'
          }
          else if(calculationType == "DIV"){
            currentResult /= enteredNumber;
            mathOperator = '/'
          }
          createAndWriteOutput(mathOperator, initialResult, enteredNumber);
          writeToLog(calculationType, initialResult, enteredNumber, currentResult);
      }
  else {
    return ;
  }



  /*
  - One more method :

  const enteredNumber = getUserNumberInput();
  if (calculationType == "ADD" &&
      calculationType == "SUB" &&
      calculationType == "MULTIPLY" &&
      calculationType == "DIV" ||
      enteredNumber){
          
          const initialResult = currentResult;
          let mathOperator;
          if (calculationType === 'ADD'){
            currentResult += enteredNumber;
            mathOperator = '+';
          }
          else if(calculationType == "SUB"){
            currentResult -= enteredNumber;
            mathOperator = '-'
          }
          else if(calculationType == "MULTIPLY"){
            currentResult *= enteredNumber;
            mathOperator = '*'
          }
          else if(calculationType == "DIV"){
            currentResult /= enteredNumber;
            mathOperator = '/'
          }
          createAndWriteOutput(mathOperator, initialResult, enteredNumber);
          writeToLog(calculationType, initialResult, enteredNumber, currentResult);
      }
  else {
    return ;
  }


*/


 /*
 
 OLD CODE

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  }
  else if(calculationType == "SUB"){
    currentResult -= enteredNumber;
    mathOperator = '-'
  }
  else if(calculationType == "MULTIPLY"){
    currentResult *= enteredNumber;
    mathOperator = '*'
  }
  else if(calculationType == "DIV"){
    currentResult /= enteredNumber;
    mathOperator = '/'
  }
  else{
    return ;
  }*/
  /* 
  Replace else with this :
  1. Loggically AND
  if (calculationType == "ADD" &&
      calculationType == "SUB" &&
      calculationType == "MULTIPLY" &&
      calculationType == "DIV"){
        // This code run to check the input is similar to all of these other wise this if statement retun out of the function
        return ;
      }
  2. Loggically OR
  if (calculationType == "ADD" ||
      calculationType == "SUB" ||
      calculationType == "MULTIPLY" ||
      calculationType == "DIV"){
        // This code run to check the input is similar to one of these other wise this if statement retun out of the function
        return ;
      }
  */
  
}


function add() {
   calculateResult('ADD');
}

function subtract() {
  calculateResult('SUB');
}

function multiply() {
  calculateResult("MULTIPLY ");
}

function divide() {
  calculateResult("DIV");
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
