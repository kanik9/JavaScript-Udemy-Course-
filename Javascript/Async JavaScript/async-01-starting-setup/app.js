const button = document.querySelector('button');
const output = document.querySelector('p');
/*
function trackUserHandler() {
  console.log('Clicked!');
  // Built in Api which helps to get the current location of the user.
  navigator.geolocation.getCurrentPosition(posData => {
        setTimeout(() => {
            console.log(posData);
        },2000);
  },error => {
      console.log(error);
  }    
  );  
  setTimeout(() => {
      console.log('Timer Done!')
  },0)
  console.log('Getting Position ....')
}

button.addEventListener('click', trackUserHandler);


//let result = 0;

//for (i=0;i<100000000; i++){
//  result += i;
//}
//console.log(result);

*/

/*
Note : If we have such code where we have callbacks nested into each other this generate a unreadable code this is known as 'Callback Hell', Now to overcome this callback hell JavaScript have a solution for that and that is the concept of promises.
* So we can use 'than' method which helps to execute the Promise when the 'resolve' execute completely
This Promise Funcion is a predefine function which takes a function as an argument. And the function also takes two arguments , first is 'resolve', second is 'reject'.

const getPosition = (opts) => {
    const promis = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }, opts);
    });
    return promis
}

const setTimer = duration => {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")  // It can take any value as an input.
        },duration);
    });
    return promis;
    
}


function trackUserHandler() {
    let positionData;
    // Built in Api which helps to get the current location of the user.
    getPosition().then((posData) => {
        positionData = posData;
        return setTimer(2000);
    })
    .catch(err => {
        console.log(err);
    })
    .then(data => {
        console.log(data,positionData)
    }) ;
    setTimer(1000).then(() => {
        console.log('Timer Done!');
    })
    console.log('Getting Position ....')
  }
  
  button.addEventListener('click', trackUserHandler);
  
*/

// async and await : 


const getPosition = (opts) => {
    const promis = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }, opts);
    });
    return promis
}

const setTimer = duration => {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")  // It can take any value as an input.
        },duration);
    });
    return promis;
    
}

async function trackUserHandler() {
    let posData;
    let timerData
    // Built in Api which helps to get the current location of the user.
    try {
        posData =  await getPosition();
        timerData = await setTimer(2000);
        
    }catch{error} {
        console.log(error)
    }
    
    
    console.log(timerData,posData)

    /*
    //.then((posData) => {
    //    positionData = posData;
    //    return setTimer(2000);
    //})
    //.catch(err => {
    //    console.log(err);
        return 'on we go..'
    })
    .then(data => {
        console.log(data,positionData)
    }) ;
    */
}

button.addEventListener('click', trackUserHandler);