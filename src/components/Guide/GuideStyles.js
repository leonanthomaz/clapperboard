import styled from "styled-components";

export const GuideMain = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid white;
    margin: 5px;
    margin-top: 100px;

   a{
       color: white;
       text-decoration: none;
       padding: 7px;
       border: 2px solid red;
       border-radius: 10px;
       transition: all ease 0.5s;

   }

   a:hover{
       background-color: red;
       transition: all ease 0.5s;

   }

   .btn-link{
       margin: 5px;
   }

   @media (max-width: 760px){
       a{
           max-width: 70%;
           font-size: 70%;
       }
   }
`;
