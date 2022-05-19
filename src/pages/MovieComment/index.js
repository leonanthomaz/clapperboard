import React, { useState, useEffect,useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY } from "../../api/tmdb";
import axios from "axios";
import { MovieCommentMain, 
    MovieCommentContainer,
    MovieCommentPoster,
    MovieCommentInfo,
    MovieCommentBox,
    MovieCommentBoxUser,
 } from "./MovieCommentStyles";
import { IMAGES_API } from "../../api/tmdb";

const MovieComment = () => {
    let {id} = useParams();
    const [ list, setList ] = useState([]);
    const [ openInfo, setOpenInfo ] = useState(true)
    const [ openComment, setOpenComment ] = useState(true)

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

      const handleOpenInfo = () => {
        setOpenInfo(!openInfo)
      }

      const handleOpenComment = () => {
        setOpenComment(!openComment)
      }


    return (
        <>

        <MovieCommentMain ref={body} style={{ backgroundImage: `url(${list.backdrop_path ? IMAGES_API + list.backdrop_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"})`}}>
            <MovieCommentContainer >
                <MovieCommentBox>
                    <h2>{list.title}</h2>
                    {/* <img src={list.backdrop_path ? IMAGES_API + list.backdrop_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  alt={list.title}  style={{cursor: 'pointer'}}   />      */}
                    <MovieCommentPoster>
                        <img src={list.poster_path ? IMAGES_API + list.poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  alt={list.title}   /> 
                        <div className="btn-comment-info-group">
                            <a className="btn-comment-info" href="#ficha" onClick={handleOpenInfo}>Ficha</a> 
                            <a className="btn-comment-info" href="#comentarios" onClick={handleOpenComment}>Comentários</a> 
                        </div>
                          
                    </MovieCommentPoster>
                </MovieCommentBox>
            </MovieCommentContainer>
        </MovieCommentMain>
        <MovieCommentInfo>
            <div className={openInfo ? 'hidden' : 'info' }>
                <h1>Ficha técnica</h1>
                <h4>Orçamento: U$<span>{list.budget}</span>,00</h4>
                <h4>Site: <span>{list.homepage}</span></h4>
                <h4>Título original: <span>{list.original_title}</span></h4>
                <h4>Receita: U$<span>{list.revenue}</span>,00</h4>
                <h4>Tempo de duração: <span>{list.runtime}</span></h4>
                <h4>Status: <span>{list.status}</span></h4>
                <h4>Média de votos: <span>{list.vote_average}</span></h4>
                <h4>Contagem de votos: <span>{list.vote_count}</span></h4>
            </div>
        </MovieCommentInfo>

        <MovieCommentBoxUser>
        <div className={openComment ? 'hidden' : 'info-comment-box'}>
            <h1>Comentários</h1>
            <div className="info-user">
                <div className="avatar">
                    <img src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png" alt="" />
                </div>
                <h4>Leonan</h4>
            </div>
            <div className="info-comment">
                
                    <div className="spoiler">Contém Spoiler</div>
                    <div className="comment">Muito bom o filme</div>
                    <span className="date-comment">19-05-1990</span>
            </div>
        </div>
        </MovieCommentBoxUser>

        </>
    )
}

export default MovieComment;