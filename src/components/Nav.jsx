import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faTimes } from '@fortawesome/free-solid-svg-icons';
import Movielogo from '../assets/Movielogo.jpg';
import { Link } from 'react-router-dom';



const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

    return (
      <nav>
        <div className="nav__container">
          <Link to="/">
            <img src={Movielogo} alt="Movie Logo" className="logo" />
          </Link>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link">Home</Link>
              <Link to="/movies" className="nav__link">Find Movies</Link>
              <Link to="/contact" className="nav__link">Contact</Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
               <FontAwesomeIcon icon={faGrip} />
            </button>
          </ul>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
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
              <span className="menu__link btn__contact">Contact</span>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;