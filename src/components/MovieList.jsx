
import PropTypes from 'prop-types'

import data from '../film.json'

import filterMovie from '../utils/filterMovie'

import './MovieList.css'
import Movie from './Movie';

const MovieList = ({ input }) => {
    const filteredMovies = filterMovie(data, input);
    
  return (
    <>
  {filteredMovies.length > 0 ? (
    <div className='movie-list'>
        {filteredMovies.map((movie, index) => (
            <Movie key={index} movie={movie}/>
        ))}
    </div>
  ) : (
  <p>No movie exists</p>
  )}
  </>
  );
};

MovieList.propTypes = {
    input: PropTypes.string.isRequired
};

export default MovieList;