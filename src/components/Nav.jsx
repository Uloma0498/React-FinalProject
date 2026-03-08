import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faTimes } from '@fortawesome/free-solid-svg-icons';
import Movielogo from '../assets/Movielogo.jpg';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
      <nav>
        <div className="nav__container">
          <Link to="/">
            <img src={Movielogo} alt="Movie Logo" className="logo" />
          </Link>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link">Home</Link>
              <Link to="/movies" className="nav__link">Find Your Movies</Link>
              <Link to="/contact" className="nav__link">Contact</Link>
            </li>
            <button className="btn__menu">
               <FontAwesomeIcon icon={faGrip} />
            </button>
          </ul>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/home" className="menu__link">Home</Link>
            </li>
            <li className="menu__list">
              <Link to="/find-movies" className="menu__link">Find Movies</Link>
            </li>
            <li className="menu__list">
              <Link to="/contact" className="menu__link">Contact</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;