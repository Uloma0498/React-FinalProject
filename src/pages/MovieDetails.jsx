import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = ({ movies }) => {
  const { imdbID } = useParams();
  const movie = movies.find(movie => +movie.imdbID === +imdbID);

  return (
    <div id="movies__body">
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
             <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img 
                src={movies[0].Poster} 
                alt={movies[0].Title} 
                className="movie__selected--img"
                 />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movies[0].Title}</h2>
                <p className="movie__selected--release">Release Date: {movies[0].Year}</p>
                <p className="movie__selected--rating">Rating: {movies[0].imdbRating}/10</p>
                <div className="movie__summary">
                  <div className="movie__summary--title">
                    Summary
                  </div> 
                  <p className="movie__summary--para">
                    Dominic Toretto (Vin Diesel) is a Los Angeles street racer who makes a living hijacking trucks. When Brian O'Conner (Paul Walker), an undercover cop, is assigned to investigate the hijackings, he infiltrates Toretto's crew and becomes friends with him. However, as Brian gets closer to Toretto, he finds himself torn between his loyalty to his job and his loyalty to his new friend.
                  </p>
                </div>
                <button className="btn">
                  Add to Watchlist
                </button>
              </div>
             </div>
         </div>
        </div>
     </main>
    </div>
  )
}

export default MovieDetails;