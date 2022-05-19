import React, { useState, useEffect,useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY } from "../../api/tmdb";
import axios from "axios";
import { MovieCommentMain, 
    MovieCommentContainer,
    MovieCommentPoster,
    MovieCommentInfo,
    MovieCommentBox,
 } from "./MovieCommentStyles";
import { IMAGES_API } from "../../api/tmdb";

const MovieComment = () => {
    let {id} = useParams();
    const [ list, setList ] = useState([]);

    useEffect(()=>{
        let filme = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;
        axios.get(filme).then((response)=>{
            //console.log(response.data)
            setList(response.data)
        })
      }, [])

      const body = useRef()

      useEffect(()=>{
          if(body.current.scrollHeight > body.current.offsetHeight){
              body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
          }
      }, []);


    return (
        <>

        <MovieCommentMain ref={body} style={{ backgroundImage: `url(${list.backdrop_path ? IMAGES_API + list.backdrop_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"})`}}>
            <MovieCommentContainer >
                <MovieCommentBox>
                    {/* <img src={list.backdrop_path ? IMAGES_API + list.backdrop_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  alt={list.title}  style={{cursor: 'pointer'}}   />      */}
                    <MovieCommentPoster>
                        <img src={list.poster_path ? IMAGES_API + list.poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  alt={list.title}   />     
                    </MovieCommentPoster>
                </MovieCommentBox>
            </MovieCommentContainer>
        </MovieCommentMain>
        <MovieCommentInfo>
            <h1>{list.title}</h1>
            <h4>Orçamento: U$<span>{list.budget}</span>,00</h4>
            <h4>Site: <span>{list.homepage}</span></h4>
            <h4>Título original: <span>{list.original_title}</span></h4>
            <h4>Receita: U$<span>{list.revenue}</span>,00</h4>
            <h4>Tempo de duração: <span>{list.runtime}</span></h4>
            <h4>Status: <span>{list.status}</span></h4>
            <h4>Média de votos: <span>{list.vote_average}</span></h4>
            <h4>Contagem de votos: <span>{list.vote_count}</span></h4>
            
        </MovieCommentInfo>

        </>
    )
}

export default MovieComment;