
function addMovie(event) {
    event.preventDefault(); //Prevents default submission
    
    const inputField = document.querySelector('input')
    
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movie.appendChild(deleteBtn) // Adds the delete button to the list of events

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent('X')
    
    const ul = document.querySelector('ul')
    ul.appendChild(movie)

    inputField.value = ''
}

function deleteMovie(event) {
    event.PreventDefault();

}

const form = document.querySelector('form')
form.addEventListener('submit', addMovie);
form.addEventListener('click', deleteMovie);