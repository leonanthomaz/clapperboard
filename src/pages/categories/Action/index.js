import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import MovieModal from "../../MovieModal";
import Guide from "../../../components/Guide";

const Action = () => {
    const { actionMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <h2 className="movie-title-box">Ação</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {actionMovies.map((movie, index) => {
                        return (
                            <div key={index}>
                                <MovieModal {...movie} key={movie.id} />
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