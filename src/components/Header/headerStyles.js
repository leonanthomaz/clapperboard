import styled from "styled-components";

export const HeaderBar = styled.header`

header {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: #3b3b3b;
    transition: all ease 0.5s;
}

.black{
    background-color: #141414;
    height: 80px;
}

header img{
    width: 200px;
    margin-top: 20px;
    margin-right: 25px;
}

input{
    width: 300px;
    height: 20px;
}

@media (max-width: 760px){
    input{
    width: 150px;
    height: 15px;
    }
    header img{
        width: 150px;
        margin-top: 20px;
        margin-right: 5px;
    }
}



`;