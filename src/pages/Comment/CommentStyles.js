import styled from 'styled-components'

export const CommentMain = styled.div`

.hidden{
    display: none;
    transition: all ease 0.5s;
}

.info-comment-box{
    max-width: 500px;
    margin: auto;
    margin: 5px;
    padding: 10px;

}

.info-user{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    max-width: 100px;

    .avatar{
    border-radius: 100%;
    flex-grow: 1;
    flex-wrap: nowrap;
    
    img{
        max-width: 50px;
        border-radius: 100%;
    }
}
}


.info-comment{
    flex-grow: 0;
    flex-wrap: wrap;
    max-width: 500px;

    .spoiler{
        color: red;
    }
    .comment{
    }
    span{
        font-size: 0.8rem;
        color: gray;
    }
    
}

`;