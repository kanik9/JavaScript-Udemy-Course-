const buttons = document.querySelector('button');
/*
const buttonClickHandler = () => {
    alert('Button was Clicked!')
}

const anotherButtonClickHandler = () => {
    console.log('Button was Clicked!')
}


//clickBtn.onclick = buttonClickHandler;   // the limitation is that it can't call more than one function at a time.
clickBtn.addEventListener('click',buttonClickHandler);
setTimeout(() => {
    clickBtn.removeEventListener('click', buttonClickHandler);
}, 2000);

// Note : When you want to remove Event from button the in that case parameters must be same ''click', buttonClickHandler'. 
clickBtn.addEventListener('click', anotherButtonClickHandler);
*/

/*
const buttonClickHandler = event => {
    //event.target.disabled = true;
    console.log(event);
};


const anotherButtonClickHandler = () => {
    console.log('Button was Clicked!')
};

//const boundFn = buttonClickHandler.bind(this);

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', buttonClickHandler);
});


window.addEventListener('scroll', event => {
    console.log(event)
});
*/

/* Note : 
        1.Browser listen event in two Phases Capturing and Bubbling phase :
            1.1 capturing phase execute events in outer side to inner side . It means top-to-bottom approch
            1.2 bubbling phase execute events in inner to outer side . It means buttom-to-top . 
        2. By Default Browser Fallow 1.2 . If developer wants to pass 1.1 then in that case developer need to pass true after the function in eventlistener. then browser do capturing and then default.  
*/ 

/*
const form = document.querySelector('form');
form.addEventListener('submit',event => {
    event.preventDefault();
    console.log(event);
})
document.querySelector('div').addEventListener('click', event => {
    console.log("Clicked Div");
    console.log(event);
},true);


buttons.addEventListener('click',event => {
    event.stopPropagation();  // this will stop all events after this. if all the events are fallow same approch of execute 
    console.log("Clicked in Button!")
    console.log(event)
});
/*
const listItems = document.querySelectorAll('li');
listItems.forEach(listItem =>{
    listItem.addEventListener('click', event => {
        event.target.classList.toggle('highlight'); 
    })
})

const list = document.querySelector('ul');

list.addEventListener('click', event => {
    event.target.classList.toggle('highlight'); 
})


list.addEventListener('click', event => {
    event.target.closest('li').classList.toggle('highlight'); 
})
*/
