import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, releaseDate, imdbID, imageUrl }) => {
    return (
        <div className="movie">
            <Link to="/movies/1">
              <figure className="movie__img--wrapper">
                    <img 
                    src={imageUrl}
                    alt={title} 
                    className="movie__img"
                     />
              </figure>
            </Link>
            <div className="movie__title">
                <Link to="/movies/1" className="movie__title--link">
                {title}
                </Link>
            </div>
            <div className="movie__year">{releaseDate}</div>
            <div className="movie__imdbID">{imdbID}</div>
        </div>
    )
}

export default Movie;