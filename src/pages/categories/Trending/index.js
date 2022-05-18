import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import Movie from "../../Movie";
import Guide from "../../../components/Guide";

const Trending = () => {
    const { popMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <hr/>
        <h2 className="movie-title-box">Top 10</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {popMovies.map((movie) => {
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

export default Trending;