import React, { useState, useEffect } from "react";
import { CommentMain, CommentForm } from "./CommentStyles";
import api from "../../api/apiBackend";

const Comment = ({movieId, openComment}) =>{
    const [ listComment, setListComment ] = useState([]);
    const [ values, setValues ] = useState('')
    const userId = '123'

    //console.log(values)

    const handleChangeValue = (e) => {
        setValues(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const handleSendComment = () => {
        api.post('post/insert',{
            movieId: movieId,
            userId: userId,
            spoiler: values.spoiler,
            stars: values.stars,
            title: values.title,
            comment: values.comment
        }).then((response)=>{
            console.log('Enviado com sucesso!', response)
        }).then((err)=>{
            console.log('erro!', err)
        })
    }

    useEffect(()=>{
        api.get('post/get').then((response)=>{
            //console.log(response.data)
            //console.log(response.data.map(e=>e.movieId))
            console.log(response.data)
            setListComment(response.data)
            // if(response.data.map(e=>e.movieId) === movieId){
            //     setListComment(response.data)
            // }
        }).catch((err)=>{
            console.log(err)
        })
      }, [])


    return (
        <>
        <CommentMain >
            <h3>Comentários: </h3>
            <CommentForm>
                <input name="movieId" type='hidden' value={movieId} />
                <label>Contém spoiler? </label>
                <select name="spoiler" onChange={handleChangeValue}><br/>
                    <option value='yes'>Sim</option>
                    <option value='no'>Não</option>
                </select><br/>
                <label>Quantas estrelas este filme merece? </label>
                <select name="stars" onChange={handleChangeValue}><br/>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select><br/>
                <label>Titulo:</label><br/>
                <input type='text' name="title" onChange={handleChangeValue} /><br/>
                <label>Comentário:</label><br/>
                <textarea type='text' name="comment" onChange={handleChangeValue} placeholder="Deixe seu comentário..." /><br/>
                <button className="btn-send-comment" onClick={handleSendComment} type='submit'>Enviar</button>
            </CommentForm>
            <div className={openComment ? 'hidden' : 'info-comment-box'}>                    
                <div className="info-user">
                    <div className="info-comment">
                        {listComment.map((c, index)=>{
                            if(movieId == c.movieId){
                                return (
                                    <div key={index}>
                                        <div className="avatar">
                                            <img src={c.avatar ? `${c.avatar}`: "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"} alt="avatar" />
                                        </div>
                                        <h4 className="user-name">{c.name}</h4> 
                                        <div className="spoiler">Contém spoiler? <div>{c.spoiler === "yes" ? <span style={{color: 'red'}}>Contém Spoiler</span> : <span style={{color: 'green'}}>Não Contém Spoiler</span>}</div></div>
                                        <h5>Nota: {c.stars}</h5>
                                        <div className="title"><i>{c.title}</i></div>
                                        <div className="comment">{c.comment}</div>
                                        <span className="date-comment">{c.date}</span>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </CommentMain>
        </>
    )
}

export default Comment;