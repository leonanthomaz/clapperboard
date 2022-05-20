import React, { useState, useEffect } from "react";
import FormComment from "../../components/FormComment";
import { CommentMain } from "./CommentStyles";
import api from "../../api/apiBackend";

const Comment = ({openComment, handleOpenComment}) =>{
    const [ listComment, setListComment ] = useState([]);

    useEffect(()=>{
        api.get('post/get').then((response)=>{
            //console.log(responseComment.data)
            setListComment(response.data)
        }).catch((err)=>{
            console.log(err)
        })
      }, [])


    return (
        <>
        <CommentMain >
            <div className={openComment ? 'hidden' : 'info-comment-box'}>
                <h1>Comentários</h1>
                <FormComment/>
                <div className="info-user">
                    <div className="avatar">
                        <img src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png" alt="" />
                    </div>
                <div className="info-comment">
                        {listComment.map((c, index)=>{
                            return (
                                <>
                                <h4>{c.name}</h4>
                                <h5>{c.movieId}</h5>
                                <div className="spoiler">{c.spoiler === 'yes' ? 'Contém Spoiler' : 'Sem Spoiler'}</div>
                                <div className="title">{c.title}</div>
                                <div className="comment">{c.comment}</div>
                                <span className="date-comment">{c.date}</span>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </CommentMain>
        </>
    )
}

export default Comment;