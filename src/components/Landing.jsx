import React, { useState } from "react";
import UndrawCinema from "../assets/Undraw_cinema.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";



const Landing = () => {
  const [searchFast, setSearchFast] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/movies/search/${searchFast}`);
  }

  function onSearchKeyDown(key) {
    if (key === "Enter") {
      handleSearch();
    }
  }

  return (
    <section id="landing"> 
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Worldwide most sorted after online movie platform</h1>
            <h2>Discover your favorite <span className="purple">exciting movie!</span></h2>
            <div className="search">
            <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search for movies..." className="search__input" 
              value={searchFast}
              onChange={(e) => setSearchFast(e.target.value)}
              onKeyDown={(e) => onSearchKeyDown(e.key)}
            />
            <Link to="/movies" onClick={handleSearch} className="btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            </form>
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