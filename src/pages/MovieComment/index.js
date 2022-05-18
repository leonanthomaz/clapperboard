import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../api/tmdb";
import axios from "axios";
import { MovieCommentMain, MovieCommentContainer } from "./MovieCommentStyles";
import { MOVIES_API } from "../../api/tmdb";

const MovieComment = () => {
    let {id} = useParams();
    const [ list, setList ] = useState([]);

    useEffect(()=>{
        let filme = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;
        axios.get(filme).then((response)=>{
            console.log(response.data)
            setList(response.data)
        })
      }, [])


    return (
        <MovieCommentMain>
            <MovieCommentContainer>
                <img src={list.poster_path ? MOVIES_API + list.poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  alt={list.title}  style={{cursor: 'pointer'}}   />     
                <h1>{list.title}</h1>
                orçamento<p>{list.budget}</p>
                <p>{list.homepage}</p>
                <p>{list.original_title}</p>
                <p>{list.overview}</p>
                receita<p>{list.revenue}</p>
                tempo de duração<p>{list.runtime}</p>
                status <p>{list.status}</p>
                media de votos<p>{list.vote_average}</p>
                contagem de votos<p>{list.vote_count}</p>
            </MovieCommentContainer>
                
        </MovieCommentMain>
    )
}

export default MovieComment;