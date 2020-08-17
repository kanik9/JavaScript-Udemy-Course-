// Global Variables :
// Html Elements :
const addMovieModel = document.getElementById('add-modal');
    /*
    1. const addMovieModel = document.querySelector('#add-model');
    2. const addMovieModel = document.body.children[1];
    */
const startAddMovieBtn = document.querySelector('header button');
    /*
    1. const startAddMovieBtn = document.querySelector('header').lastElementChild;
    */
const backDrop = document.getElementById("backdrop");
    /*
    1. const backDrop = document.body.firstChild;
    */

const cancleAddMovieBtn = addMovieModel.querySelector(".btn--passive");
const confirmAddMovieBtn = cancleAddMovieBtn.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll('input');
const entryTextSection = document.getElementById("entry-text");
const listRoot = document.getElementById('movie-list');
const deleteMovieModel = document.getElementById("delete-modal");


// Script using variables : 

const movies = [];



// Comman Function :

const toggleBackDrop = () =>{
    backDrop.classList.toggle('visible');
};

const updateUI = () => {
    if (movies.length === 0){
        entryTextSection.style.display = 'block';
    }
    else {
        entryTextSection.style.display = 'none';
    }
};

const cencleMovieDeletionModel = () => {
    toggleBackDrop();
    deleteMovieModel.classList.remove('visible');
};


const deleteMovieHandler =movieId =>{
    let movieIndex = 0;
    for (const movie of movies){
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    listRoot.children[movieIndex].remove();
    cencleMovieDeletionModel();
    updateUI();
};

const startdeleteMovieHandler =  (movieId) => {
    deleteMovieModel.classList.add('visible');
    toggleBackDrop();
    const cencleDeleteBtn =  deleteMovieModel.querySelector(".btn--passive");
    let confirmDeleteBtn =  deleteMovieModel.querySelector(".btn--danger");

    confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true));
    confirmDeleteBtn =  deleteMovieModel.querySelector(".btn--danger");
    

    //confirmDeleteBtn.removeEventListener('click', deleteMovieHandler.bind(null,movieId)); This will not help to do the work
    cencleDeleteBtn.removeEventListener('click', cencleMovieDeletionModel);
    cencleDeleteBtn.addEventListener('click', cencleMovieDeletionModel);
    confirmDeleteBtn.addEventListener('click', deleteMovieHandler.bind(null,movieId));

};


const renderNewMovieElement = (id,title, imageUrl, rating) =>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2> ${title}</h2>
        <p> ${rating} out of 5 </p>
    </div>
    `;
    newMovieElement.addEventListener('click',startdeleteMovieHandler.bind(null, id));
    listRoot.append(newMovieElement);
};

const closeMovieModel = () => {
    addMovieModel.classList.remove('visible');
};


const showMovieModel = () =>{
    // this method always look all clas from classList but toggle only visible class. 
    addMovieModel.classList.toggle('visible');
    toggleBackDrop();
};

const clearMovieInput = () =>{
    /*
    1. Normal Solution :
        userInputs[0].value = "";
        userInputs[1].value = "";
        userInputs[2].value = "";
    */

    // Dynamic solution :
    for (const ele of userInputs){
        ele.value = "";
    }
    
};


const cancleAddMovieHandler = () => {
    closeMovieModel();
    toggleBackDrop();
    clearMovieInput();
};


const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value ;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || 
    imageUrlValue === '' || 
    ratingValue === '' ||
    parseInt(ratingValue) < 1 ||
    parseInt(ratingValue) > 5 
    ){
        alert("Invalid Input Please fill it correctly")
        return
    }
    const newMovie =  {
        id : Math.random().toString(),
        title  : titleValue,
        image  : imageUrlValue,
        rating : ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModel();
    toggleBackDrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id,newMovie.title, newMovie.image, newMovie.rating)
    updateUI();
    
};

const backDropClickHandler = () => {
    closeMovieModel();
    cencleMovieDeletionModel();
    clearMovieInput();
}



// Calling part ;


startAddMovieBtn.addEventListener('click', showMovieModel);
backDrop.addEventListener('click', backDropClickHandler);
cancleAddMovieBtn.addEventListener('click', cancleAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);




/*
    1 Funtions : 
        1. .trim() : It a function which is use to trim the white spaces from input.
        2. .splice() : It is a function which is use to delete element from array
*/