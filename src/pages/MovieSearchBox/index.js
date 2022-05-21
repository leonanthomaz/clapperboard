import React, { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";
import Loader from '../../components/Spinner';
import MovieModal from "../MovieModal";
import { MovieSearchBoxMain } from "./MovieSearchBoxStyles";

const MovieDetails = () => {
    const { searchMovies, loading } = useContext(MoviesContext)
    
    return (
      <MovieSearchBoxMain>
        { loading ? <Loader/> : 
          searchMovies.map((movie) => {
              return (
                      <div className="search-grid" key={movie.id}>
                          <MovieModal {...movie} key={movie.id} id={movie.id} />
                      </div>
                  )
              } 
          )
        }
      </MovieSearchBoxMain>
    );
}

export default MovieDetails;