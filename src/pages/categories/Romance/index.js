import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import MovieModal from "../../MovieModal";
import Guide from "../../../components/Guide";

const Romance = () => {
    const { romanceMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <h2 className="movie-title-box">Romance</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {romanceMovies.map((movie) => {
                    return (
                            <div key={movie.id}>
                                <MovieModal {...movie} key={movie.id} id={movie.id} />
                            </div>
                        )
                    } 
                )}
            </div>
        }
        </>
    );
}

export default Romance;