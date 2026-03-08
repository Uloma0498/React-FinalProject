import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import { movies } from './data';
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact render={() => <Movies movies={movies} />} />
        <Route path="/movies/:id" render={() => <MovieDetails movies={movies} />} />
        <Footer />
      </div>
    </Router>           
  );
}

export default App;
