import styled from 'styled-components';

export const MovieCommentMain = styled.div`

padding-bottom: 200px;
background-repeat: no-repeat;
background-size: auto;
background-position: center;
`;

export const MovieCommentContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

@media (max-width: 850px){
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
`;

export const MovieCommentBox = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 850px){
    display: flex;
    justify-content: center;
    flex-direction: column;
}
`;

export const MovieCommentPoster = styled.div`

max-width: 300px;
max-height: 300px;
padding-bottom: 40px;

img{
    width: 100%;
    margin-right: 0px;
    border: 3px solid white;
}

@media (max-width: 850px){
    width: 80%;
    margin: 0px;
}

`;

export const MovieCommentTitle = styled.div`
    font-size: 2rem;
`;


export const MovieCommentInfo = styled.div`
    h1{
        text-align: center;
    }

    display: block;
    flex-direction: row;
    background-color: black;
    border: 2px solid white;
    margin: 10px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;

    @media (max-width: 850px){
        /* display: none; */
    }
`;




