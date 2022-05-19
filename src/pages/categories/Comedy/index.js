import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import Movie from "../../Movie";
import Guide from "../../../components/Guide";

const Comedy = () => {
    const { comedyMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <h2 className="movie-title-box">Comédia</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {comedyMovies.map((movie) => {
                    return (
                            <div key={movie.id}>
                                <Movie {...movie} key={movie.id} id={movie.id} />
                            </div>
                        )
                    } 
                )}
            </div>
        }
        </>
    );
}

export default Comedy;