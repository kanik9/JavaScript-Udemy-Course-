const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = []

const renderMovies = (filter = '') => {
    const movieList = document.getElementById("movie-list");
    if (movies.length === 0) {
        movieList.classList.remove("visible");
    }
    else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = "";

    const filteredMovies = !filter 
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter))


    filteredMovies.forEach((movie) =>{
        const movieEl = document.createElement('li');
        const {info, ...otherProps} = movie
        let text =  info.title + '-';
        for (const key in info){
            if (key !== 'title'){
                text =text + `${key} : ${info[key]}`;
            }
        };
        movieEl.textContent = text;  
        movieList.append(movieEl);
    }) 
}

const searchMovieHandler = () => {
    const userInput = document.getElementById("filter-title").value;
    console.log(userInput)
    renderMovies(userInput);
}



const addMovieHandler = () =>{
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
      title.trim() === ''||
      extraName.trim() === '' ||
      extraValue.trim() === ''
    ){
      return ;
    }
    const newMovie = {
      info : {
        title,
        [extraName] : extraValue
       }, // if the key and value is same then in that case JavaScript manage.
      id:Math.random().toString(),
      getFormattedTitle : () => {
        return info.title.toUpperCase();
      }
    };
    movies.push(newMovie);
    renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);