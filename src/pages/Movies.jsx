import React, { useState } from "react";
import Movie from "../components/ui/Movie";
import { movies } from "../data";


const Movies = ({ movies: initialMovies, onSelectMovie }) => {
  const [movies, setMovies] = useState(initialMovies);

  function filterMovies(filter) {
    if (filter === "A_Z") {
    setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
  } if (filter === "Z_A") {
    setMovies(movies.slice().sort((a, b) => b.Title.localeCompare(a.Title)));
  } if (filter === "NEWEST_TO_OLDEST") {
    setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
  } if (filter === "OLDEST_TO_NEWEST") {
    setMovies(movies.slice().sort((a, b) => a.Year - b.Year));
  }
}

  return (
    <div id="movies">
      <main id="movies__main">
        <section>
          <div className="movies__container">
            <div className="row">
              <div className="movies__header">
                <h2 className="section__title movies__header--title">All Movies</h2>
                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)} className="movies__header--filter">
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="A_TO_Z">A to Z</option>
                  <option value="Z_TO_A">Z to A</option>
                  <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                  <option value="OLDEST_TO_NEWEST">Oldest to Newest</option> 
                </select>
              </div>
              <div className="movies">
                {movies.map((movie) => (
                  <Movie
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Movies;