import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years.', genre: 'Drama', showDetails: false },
    { title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.', genre: 'Crime', showDetails: false },
    { title: 'The Dark Knight', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', genre: 'Action', showDetails: false },
    { title: 'Pulp Fiction', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.', genre: 'Crime', showDetails: false },
    { title: 'The Lord of the Rings: The Return of the King', description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', genre: 'Fantasy', showDetails: false },
  ]);

  const [showAllMovies, setShowAllMovies] = useState(true);

  // Toggle the showDetails property of a specific movie
  const toggleDetails = (index) => {
    setMovies(movies.map((movie, i) => 
      i === index ? { ...movie, showDetails: !movie.showDetails } : movie
    ));
  };

  // Remove a specific movie from the list
  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  // Toggle between showing all movies and only 'Action' genre
  const toggleView = () => {
    setShowAllMovies(!showAllMovies);
  };

  // Determine which movies to display based on the view toggle
  const displayedMovies = showAllMovies ? movies : movies.filter(movie => movie.genre === 'Action');

  return (
    <div>
      <h2>Favorite Movies</h2>
      {/* Toggle view button */}
      <button onClick={toggleView}>
        {showAllMovies ? 'Show Only Action Movies' : 'Show All Movies'}
      </button>
      <ul>
        {displayedMovies.map((movie, index) => (
          <li key={index}>
            <div 
              className="movie-title"
              onClick={() => toggleDetails(index)}  // Toggle movie details on click
            >
              {movie.title}
            </div>
            {movie.showDetails && <p>{movie.description}</p>}  {/* Conditionally render movie details */}
            <button onClick={() => removeMovie(index)}>Remove</button>  {/* Remove movie on click */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
