import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


const Movie = ({ title, releaseDate, imdbID, imageUrl }) => {
  const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
    async function fetchMovie() {
      const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=2cc30c4d`);
      setMovie(data);
    }
    fetchMovie();
  }, []);

    return (
        <div className="movie">
            <Link to={`/movies/${imdbID}`}>
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