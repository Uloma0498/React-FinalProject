import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const MovieDetails = () => {
  const [imdbID, setImdbID] = useState("");

  async function fetchMovieDetails() {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=2cc30c4d`);
    setImdbID([data]);
  }

  useEffect(() => {
    fetchMovieDetails();
  }, [imdbID]);

  return (
    <div id="movies">
     <main id="movies__main">
        <div className="movies__container">
         <div className="row">
           <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="movie__selected--title--top">Movies</h2>
              </Link>
           </div>
            
             { imdbID.map((movie) => (
              <div className="movie__selected" key={movie.imdbID}>
                 <figure className="movie__selected--figure">
                   <img 
                   src={movie.Poster} 
                   alt={movie.Title} 
                   className="movie__selected--img"
                    />
                 </figure>
                 <div className="movie__selected--description">
                   <h2 className="movie__selected--title">{movie.Title}</h2>
                   <p className="movie__selected--release">Year: {movie.Year}</p>
                   <p className="movie__selected--rating">Rating: {movie.imdbRating}</p>
                   <div className="movie__summary">
                     <div className="movie__summary--title">
                       Summary
                     </div> 
                     <p className="movie__summary--para">
                       {movie.Plot}
                     </p>
                   </div>
                 </div>
              </div>
             ))}
                <button className="btn">
                  Add to Watchlist
                </button>
             </div>
             </div>
            </main>
         </div>
  )
}

export default MovieDetails;