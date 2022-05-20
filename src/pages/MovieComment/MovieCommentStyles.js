import styled from 'styled-components';

export const MovieCommentMain = styled.div`

background-repeat: no-repeat;
background-size: auto;
background-position: center;
`;

export const MovieCommentContainer = styled.div`
    background-color: #4242427e;

    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

@media (max-width: 760px){
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
`;

export const MovieCommentBox = styled.div`
display: flex;
margin: auto;
justify-content: center;
flex-direction: column;
align-items: center;

    .btn-comment-info-group{
      display: flex;
      justify-content: center;
      margin-top: 10px;

      a{
        color: white;
        text-decoration: none;
      }

    }

    .btn-comment-info{
      cursor: pointer;
      border: 2px solid white;
      max-width: 300px;
      display: flex;
      justify-content: center;
      padding: 7px;
      transition: all ease 0.5s;
      border-radius: 10px;
      margin: 5px;
      text-align: center;
      font-size: 1rem;
    
      background-color: red;
      
      @media (max-width: 760px){
        width: 70%;
        max-width: 100px;
      }
    }
    .btn-comment-info:hover{
        background-color: black;
    }

    .btn-comment-info:active{
        background-color: yellow;
    }

h2{
    font-size: 2rem;
    color: white;
    padding: 10px;
    /* -webkit-text-stroke: 0.5px white; */
    font-weight: 900;
    background-color: #292929ad;
    border-radius: 10px;
}

@media (max-width: 760px){

    h2{
        font-size: 1.5rem;
        color: white;
        text-align: center;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
}
`;

export const MovieCommentPoster = styled.div`

max-width: 220px;
max-height: 220px;
padding-bottom: 100px;

img{
    width: 100%;
    margin-right: 0px;
    border: 3px solid white;
}

@media (max-width: 760px){
    max-width: 200px;
    max-height: 200px;
    padding-bottom: 100px;
}

`;

export const MovieCommentTitle = styled.div`
    font-size: 2rem;
`;


export const MovieCommentInfo = styled.div`

    .info{
        display:  block;
        margin-top: 80px;
        transition: all ease 0.5s;
        flex-direction: row;
        background-color: black;
        border: 2px solid white;
        margin: 10px;
        margin-top: 10px;
        padding: 10px;
        border-radius: 20px;
    }

    .hidden{
        display: none;
        transition: all ease 0.5s;
    }

    h1{
        text-align: center;
    }

    @media (max-width: 760px){
        /* display: none; */
    }
`;

export const MovieCommentBoxUser = styled.div`

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




