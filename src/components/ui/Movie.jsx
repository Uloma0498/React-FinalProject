import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, releaseDate, rating, imageUrl }) => {
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
            <p className="movie__rating">Rating: {rating}/10</p>
        </div>
    )
}

export default Movie;