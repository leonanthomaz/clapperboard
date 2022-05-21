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
    }
    .comment{
    }
    span{
        font-size: 0.8rem;
        color: gray;
    }
    
}

`;

export const CommentForm = styled.form`
border: 2px solid white;
padding: 15px;
font-variant: small-caps;
text-align: center;

select{
    border: 2px solid red;
    width: 60px;
    text-align: center;
}

input{
    margin: 10px;
    width: 50%;
    height: 20px;
}

textarea{
    margin: 10px;
    width: 50%;
    height: 100px;
}

.btn-send-comment{
    margin: 10px;
    border: 1px solid red;
    padding: 5px;
    width: 100px;
    background-color: red;
    transition: all ease 0.5s;
    cursor: pointer;
}

.btn-send-comment:hover{
    background-color: white;
    color: red;
    transition: all ease 0.5s;
}
`;