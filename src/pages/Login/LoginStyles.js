import styled from 'styled-components';

export const LoginMain = styled.div`

.login-body{
    padding: 20px;
    margin-top: 50px;
    color: red;
}

.login-box-main{
    margin: auto;
    max-width: 500px;
    height: 300px;
    box-shadow: 0.4em 0.3em 0.7em red; 
    border-radius: 10px; 
}

.login-box{
    flex-direction: column;
    display: flex;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
}

.label-float{
    position: relative;
    padding-top: 13px;
    color: red;
}
  
.label-float input{
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    width: 300px;
    padding: 10px;
    font-size: 16px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;
}
  
  .label-float input:focus{
    border: 2px solid red;
  }
  
  .label-float input::placeholder{
    color:transparent;
  }
  
  .label-float label{
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
  }
  
  .label-float input:required:invalid + label:before{
    content: '*';
  }
  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label{
    font-size: 13px;
    top: 0;
    color: red;
}

@media (max-width: 760px){
    .login-box-main{
        box-shadow: 0;
    }

    .label-float input{
        width: 250px;
    }
}

`;