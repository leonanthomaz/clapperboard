import React, { useState } from "react";
import FormComment from "../../components/FormComment";
import { CommentMain } from "./CommentStyles";

const Comment = ({openComment, handleOpenComment}) =>{
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
                    <h4>Leonan</h4>
                </div>
                <div className="info-comment">
                    
                    <div className="spoiler">Contém Spoiler</div>
                    <div className="comment">Muito bom o filme</div>
                    <span className="date-comment">19-05-1990</span>
                </div>
            </div>
        </CommentMain>
        </>
    )
}

export default Comment;