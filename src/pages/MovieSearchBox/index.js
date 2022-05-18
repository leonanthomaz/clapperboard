import React, { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";
import Loader from '../../components/Spinner';
import Movie from "../Movie";
import { MovieSearchBoxMain } from "./MovieSearchBoxStyles";

const MovieDetails = () => {
    const { searchMovies, loading } = useContext(MoviesContext)
    
    return (
      <MovieSearchBoxMain>
        { loading ? <Loader/> : 
          searchMovies.map((movie) => {
              return (
                      <div className="search-grid" key={movie.id}>
                          <Movie {...movie} key={movie.id} id={movie.id} />
                      </div>
                  )
              } 
          )
        }
      </MovieSearchBoxMain>
    );
}

export default MovieDetails;