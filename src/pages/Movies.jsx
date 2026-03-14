import React, { useEffect, useState } from "react";
import Movie from "../components/ui/Movie";
import axios from "axios";
import { useParams } from "react-router-dom";


const Movies = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(`https://www.omdbapi.com/?s=fast&apikey=2cc30c4d`);
      setMovies(data.Search.slice(0, 6) || []);
      setLoading(false);
    }
    fetchMovies();
  }, []);

  function filterMovies(filter) {
    if (filter === "NEWEST_TO_OLDEST") {
    setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
  } else if (filter === "OLDEST_TO_NEWEST") {
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
                  <option value="DEFAULT" disabled> Sort </option>
                  <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                  <option value="OLDEST_TO_NEWEST">Oldest to Newest</option> 
                </select>
              </div>
              { 
                loading ? (
                  new Array(6).fill().map((_, index) => (
                    <div className="movie" key={index}>
                <div className="movie__title">
                  <div className="movie__title--skeleton"></div>
                </div>
                <figure className="movie__img--wrapper">
                  <img src="path/to/placeholder-image.jpg" className="movie__img--skeleton"/>
                </figure>
              </div>
                  ))
              ) : (
                <div className="movies" >
                {movies.map((movie) => (
                  <Movie
                    key={movie.imdbID}
                    imdbID={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    imageUrl={movie.Poster}
                   />
                ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Movies;