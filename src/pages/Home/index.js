import React, { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";
import { HomeMain } from "./homeStyles";

import Loader from '../../components/Spinner';
import Movie from "../Movie";
import SearchInput from "../../components/Search";
import Guide from "../../components/Guide";
import MovieSearchBox from "../MovieSearchBox";

const Home = () => {
    const { movies, loading, text, setText } = useContext(MoviesContext)

    return (
        <HomeMain>
        <Guide/>
        <div>
            <SearchInput value={text} onChange={(str)=>setText(str)} />
            { text === '' ? '' : <MovieSearchBox />}
        </div>
        {
            loading ? <Loader/> : 
            
            <div className="movie-box">
                {movies.map((movie, index) => {
                    return (
                            <div key={index}>
                                <Movie {...movie} key={movie.id} />
                            </div>
                        )
                    } 
                )}
            </div>
        }
        </HomeMain>
    );
}

export default Home;