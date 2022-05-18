import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import Movie from "../../Movie";
import Guide from "../../../components/Guide";

const Horror = () => {
    const { horrorMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <hr/>
        <h2 className="movie-title-box">Terror</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {horrorMovies.map((movie) => {
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

export default Horror;