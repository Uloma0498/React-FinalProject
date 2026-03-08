import React from "react";
import UndrawCinema from "../assets/Undraw_cinema.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Worldwide most sorted after online movie platform</h1>
            <h2>Discover your favorite <span className="purple">exciting movie!</span></h2>
            <div className="search">
            <input type="text" placeholder="Search for movies..." className="search__input" />
            <Link to="/home" className="btn">
              <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </Link>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawCinema} alt="Movie" />
          </figure>
        </div>
      </header>
    </section>

  )
}

export default Landing;