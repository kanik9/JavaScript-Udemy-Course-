// Comman Variables : 
const ATTACK_VALUE = 10;  // It is a naming convention which indicates that it is a global value which never change throught the code
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK"; //MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; //MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG _ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";



const enteredValue = prompt("Maximum Life for you and the monster : ",'100')
// type convert and also handle error
let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <=0 ){
    chosenMaxLife = 100;
}



let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth  = chosenMaxLife;
let hasBonusLife = true; 
let battleLog = [];



// Common Function 

// this function set the health parameters in html code to max value which is chosenMaxLife
adjustHealthBars(chosenMaxLife);

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth  = chosenMaxLife;
    resetGame(chosenMaxLife);
}


function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const damagePlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth  -= damagePlayer;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        damagePlayer,
        currentMonsterHealth,
        currentPlayerHealth
        );

    if (currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead but the bonus life saved you!");   
    }

    if (currentMonsterHealth <=0 && currentPlayerHealth > 0){
        alert("You Won");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "PLAYER WON",
            currentMonsterHealth,
            currentPlayerHealth
            );
    }
    else if ( currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert("You Lost");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "MONSTER WON",
            currentMonsterHealth,
            currentPlayerHealth
            );
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert("Match Draw");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "DRAW",
            currentMonsterHealth,
            currentPlayerHealth
            );
    }
    if (currentMonsterHealth <=0 || currentPlayerHealth <= 0){
            reset();
    }
    
}


function attackMonster(mode) {
    // New Method : It is known as Ternary operators
    // USe this method for simple expression because if developer use this method for nested statement ,it is not easy to understand .
    let maxDamage =  mode === MODE_ATTACK ? ATTACK_VALUE :STRONG_ATTACK_VALUE;
    // let variable name = condition(mode === MODE_ATTACK) ? if condition true(ATTACK_VALUE) : else (STRONG_ATTACK_VALUE)
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK
    // let variable name = condition(mode === MODE_ATTACK) ? if condition true(LOG_EVENT_PLAYER_ATTACK) : else (LOG_EVENT_PLAYER_STRONG_ATTACK)
    /*
    Old Method 
    if (mode === MODE_ATTACK){
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    }
    else if (mode === MODE_STRONG_ATTACK){
        maxDamage = STRONG_ATTACK_VALUE
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    }
    */
    const damageMonster = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damageMonster;
    writeToLog(
        logEvent,
        damageMonster,
        currentMonsterHealth,
        currentPlayerHealth
        );
    endRound();
    
}




// Adding Attack Functionality
 

function attackHandler(){
    attackMonster(MODE_ATTACK);
}   

attackBtn.addEventListener('click', attackHandler);



// Adding Strong Attack Functionality

function strongAttackHandler(){
    attackMonster(MODE_STRONG_ATTACK)
}
strongAttackBtn.addEventListener('click',strongAttackHandler);



// Adding Heal Functionality

function healPlayerHandler(){
    let healHeath;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You Can't heal to more than your max initial Health.")
        healHeath = chosenMaxLife - currentPlayerHealth;
    }
    else {
        healHeath = HEAL_VALUE;
    }
    increasePlayerHealth(healHeath)
    currentPlayerHealth += healHeath;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healHeath,
        currentMonsterHealth,
        currentPlayerHealth
        );
    endRound();

}


healBtn.addEventListener('click', healPlayerHandler);


// Adding Show Logs Functionality and reset the game


function writeToLog(ev, val, monsterHealth, playerHealt){
    let logEntry = {
        event : ev,
        value : val,
        finalMonsterHealth : monsterHealth,
        finalPlayerHealth  : playerHealt
    }; 
    /*
    1. Switch case statement :

    switch(ev){
        case LOG_EVENT_PLAYER_ATTACK: // This will check === this condition it means type and value both are same
            logEntry.target = "MONSTER"
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER"
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = "PLAYER"
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = "PLAYER"
            break;
        case LOG_EVENT_GAME_OVER:
            break;
        battleLog.push(logEntry);
    }

    */

    if (ev === LOG_EVENT_PLAYER_ATTACK){
        logEntry.target = "MONSTER" // Shorter way to do this . This method first check that the taget key is present or not,if it present the update the value otherwise create it in it.
        /*
        Longer Way to do this is  :
            logEntry = {
                        event : ev,
                        value : val,
                        target : target_value,
                        finalMonsterHealth : monsterHealth,
                        finalPlayerHealth  : playerHealt
                        }; 
        */
    }
    else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry.target = "MONSTER"
    }
    else if (ev === LOG_EVENT_MONSTER_ATTACK){
        logEntry.target = "PLAYER"
    }
    else if (ev === LOG_EVENT_PLAYER_HEAL){
        logEntry.target = "PLAYER"
    }
    else if (ev === LOG_EVENT_GAME_OVER){       
    }
    battleLog.push(logEntry);
}


function printLogHandler(){
    console.log(battleLog);
}

logBtn.addEventListener('click', printLogHandler);


