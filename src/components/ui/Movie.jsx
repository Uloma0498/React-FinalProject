import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Movie = ({ title, releaseDate, imdbID, imageUrl }) => {
    const [img, setImg] = useState();

    const mountedRef = useRef(true)

    useEffect(() => {
     const image = new Image();
     image.src = imageUrl;
     image.onload = () => {
       setTimeout(() => {
        if (mountedRef.current) {
       setImg(image)}; 
       }, 300)
       
     }
     return () => {
     mountedRef.current = false;
     }
    })
    

    return (
        <div className="movie">
            {
             img ? 
             <>
             <Link to={`/movies/${imdbID}`}>
              <figure className="movie__img--wrapper">
                    <img 
                    src={img.src}
                    alt={title} 
                    className="movie__img"
                     />
              </figure>
            </Link>
            <div className="movie__title">
                <Link to={`/movies/${imdbID}`} className="movie__title--link">
                {title}
                </Link>
            </div>
            <div className="movie__year">{releaseDate}</div> 
            </>
            : <>
            <div className="movie__img--skeleton"></div>
            <div className="skeleton movie__title--skeleton"></div>
             </>
            }
            
            
          </div>
    )
}

export default Movie;