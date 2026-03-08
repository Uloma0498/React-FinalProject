import React from 'react';
import Movielogo from '../assets/Movielogo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Movielogo} className="footer__logo-img" alt="Movie App Logo" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/home" className="footer__link">Home</Link>
            <Link to="/movies" className="footer__link">Find Movies</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Movies
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;