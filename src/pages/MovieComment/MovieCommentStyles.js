import styled from 'styled-components';

export const MovieCommentMain = styled.div`

*{
    margin: 5px;
}

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

    align-items: center;
    

@media (max-width: 760px){
    flex-direction: column;
}

`;

export const MovieCommentBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    margin-top: 20px;

    @media (max-width: 760px){
        width: 50%;
        flex-direction: column;
        min-width: 300px;

    }

    @media (max-width: 450px){
        width: 70%;
    }

    h2{
        font-size: 2rem;
        color: white;
        padding: 10px;
        /* -webkit-text-stroke: 0.5px white; */
        font-weight: 900;
        background-color: #292929ad;
        border-radius: 10px;
        text-align: center;

    }

    @media (max-width: 760px){

        h2{
            font-size: 1.5rem;
            color: white;
            text-align: center;
        }
    }
`;

export const MovieCommentPoster = styled.div`
float: left;
max-width: 250px;

img{
    width: 100%;
    border: 3px solid white;
}

@media (max-width: 760px){
    min-width: 200px; 

    img{
        display: none;
    }
}

`;

export const MovieCommentInfo = styled.div`
    background-color: #252525cb;
    float: right;
    padding: 20px;
    border-radius: 10px;
    color: gray;
    text-align: center;
    
    a{
        color: white;
        text-decoration: none;
    }
    span{
        color: white;
    }

    @media (max-width: 760px){
        /* display: none; */
        padding: 30px 20px;
    }
`;




