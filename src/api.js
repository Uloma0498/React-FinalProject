export const API_KEY = "2cc30c4d";

export const fetchMovies = async (searchTerm) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

export const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};