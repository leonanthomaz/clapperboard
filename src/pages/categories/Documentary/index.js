import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import MovieModal from "../../MovieModal";
import Guide from "../../../components/Guide";

const Documentary = () => {
    const { documentaryMovies, loading } = useContext(MoviesContext)

    return (
        <>
        <Guide/>
        <h2 className="movie-title-box">Documentario</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {documentaryMovies.map((movie) => {
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

export default Documentary;