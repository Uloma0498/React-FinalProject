document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const query = document.getElementById('search-input').value;

    fetch(`https://www.omdbapi.com/?apikey=2cc30c4d&s=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.Search);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p>No movies found.</p>';
        return;
    }

    movies.slice(0, 1).forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<h3>${movie.Title}</h3><p><b>Year:</b>${movie.Year}</p><img src="${movie.Poster}" alt="${movie.Title} Poster" />`;
        resultsDiv.appendChild(movieDiv);
    });
}



// Store all movies globally
let allMovies = [];

// Define renderMovies BEFORE main()
function renderMovies(movies) {
  const moviesContainer = document.querySelector(".movies");
  
  const moviesHTML = movies
    .map((movie) => {
      return `
        <div class="movie">
          <figure class="movie__img--wrapper">
            <img class="movie__img" src="${movie.Poster}" alt="${movie.Title}" />
          </figure>
          <h3>${movie.Title}</h3>
          <p><b>Year:</b> ${movie.Year}</p>
        </div>
      `;
    })
    .join("");
  moviesContainer.innerHTML = moviesHTML;
}

function filterMovies(event) {
  const filter = event.target.value;
  let movies = [...allMovies]; // Create a copy
  
  if (filter === "NEWEST_TO_OLDEST") {
    movies.sort((a, b) => b.Year - a.Year);
  } else if (filter === "OLDEST_TO_NEWEST") {
    movies.sort((a, b) => a.Year - b.Year);
  } else if (filter === "A_Z") {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filter === "Z_A") {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));
  }
  
  renderMovies(movies);
}

async function main() {
  const response = await fetch("https://www.omdbapi.com/?apikey=2cc30c4d&s=fast");
  const data = await response.json();
  console.log(data);
  allMovies = data.Search; // Store globally
  renderMovies(allMovies);
}

main();


//fake data 


Poster: "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
Title: "The Fast and the Furious"
Type: "movie"
Year: "2001"
imdbID: "tt0232500"

Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
Title: "Fast & Furious 6"
Type: "movie"
Year: "2013"
imdbID: "tt1905041"