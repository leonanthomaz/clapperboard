import styled from "styled-components";

export const MovieSearchBoxMain = styled.div`

    display: grid;
    grid-template-columns: 200px 200px 200px;    
    grid-gap: 10px;    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    transition: all ease 1s;

    img{
        width: 200px;
        height: 200px;
        transition: all ease 1s;

    }


    @media (max-width: 760px){
        grid-template-columns: 100px 100px 100px;    
        img{
            width: 100px;
            height: 100px;
        }
    }
`;