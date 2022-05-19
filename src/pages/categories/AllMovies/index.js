import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../../context/MovieContext";
import Loader from '../../../components/Spinner';
import Movie from "../../Movie";
import Guide from "../../../components/Guide";
import axios from "axios";
import { MOVIES_API } from '../../../api/tmdb';

const AllMovies = () => {
    const { movies, setMovies, loading , setLoading } = useContext(MoviesContext)
    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        getMovies(MOVIES_API)
    });

    const getMovies = async () => {
        const numberList =  Array(10).fill(2).map((v,i)=>i+2);
        const bigData =[]
        numberList.map( async (num) => {
            const moviesJson = await axios(MOVIES_API+num);
            const res = moviesJson.data.results;
            res.forEach((json) => {
              bigData.push(json)
              if(bigData.length === 200 ) {
                setAllMovies(bigData)
              }
            })
        })  
    
        setTimeout(()=> {
            setLoading(false);
        },3000)
    }

    return (
        <>
        <Guide/>
        <hr/>
        <h2 className="movie-title-box">Todos os filmes</h2>
        { loading ? <Loader/> : 
            
            <div className="movie-box">
                {allMovies.map((movie) => {
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

export default AllMovies;