import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import Movie from "../../Movie";
import Guide from "../../../components/Guide";

const Action = () => {
    const { actionMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <hr/>
        <h2 className="movie-title-box">Ação</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {actionMovies.map((movie) => {
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

export default Action;