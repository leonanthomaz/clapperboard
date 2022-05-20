import styled from "styled-components";

export const SearchInputContainer = styled.div`
margin: auto;
margin-top: 10px;
text-align: center;
`;

export const Input = styled.input`
width: 300px;
height: 30px;

@media (max-width: 760px){
    height: 25px; 
}
`;


export const Icon = styled.div`
display: flex;
justify-content: center;
margin-left: 270px;
margin-top: -23px;
color: black;
`;