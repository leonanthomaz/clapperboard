import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background: #141414;
    color: white;
  }

  .movie-title-box{
    text-align: center;
  }

  .movie-box{
    display: grid;
    grid-template-columns: 250px 250px 250px;    
    grid-gap: 30px;    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    transition: all ease 1s;

    img{
        cursor: pointer;
        width: 100%;
        -webkit-transition: -webkit-transform .5s ease;
        transition: transform .5s ease; 
        box-shadow: 0.5rem 0.10rem 0.5rem 0.10rem black;
        transition: all ease 1s;

      }

    img:hover{
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      box-shadow: 0.5rem 0.10rem 0.5rem 0.10rem white;
    }

    @media (max-width: 760px){

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            max-width: 230px;
        }
    }
  
  }

  .modal{
    overflow: hidden;
    border: none;

    h1{
      text-align: center;
    }

    h3{
      margin-top: 10px;
    }
    

    .movie-poster{
       max-width: 500px;
       margin: auto; 
       border: 1px solid white; 
       border-radius: 5px;

       img{
        border-radius: 10px;
        width: 100%;
       }

       @media (max-width: 760px){
         width: 70%;
       }

    }
    .movie{
      img{
        cursor: pointer;
      }
    }

    .modal::-webkit-scrollbar { 
      display: none;
    }

    .modal-info{
      text-align: center;
      margin-top: 10px;
    }

    .movie_overview{
      padding: 10px;
      border-radius: 15px;
      transition: all ease 1s;
      font-size: 1rem;
    }

    .active{
      display: block;
    }

    .wrapper-cast{
        margin-top: 20px;

    }
    
    .movie-cast-main{
      display: block;
      margin-top: 10px;
      padding: 10px;

    }

    .movie-icon-close-sinopse{
      display: flex;
      justify-content: flex-end;
      float: right;
      cursor: pointer;
      font-size: 1.5rem;
      margin-right: 20px;
      margin-top: 20px;
  }

  .movie-cast{
      
      display: none;

      img{
        width: 100px;
      }
      transition: all ease 1s;

    }

    .movie-trailer{
      display: none;
    }

    .opentrailer{
      display: block;
    }
    
    .movie-cast2{
      border: 2px solid #d8d8d848;
      border-radius: 10px;
      max-width: 200px;
      background-color: #504c4c;
      box-shadow: 10px 5px 5px #d8d8d848;

      img{
        border-radius: 10px;
        box-shadow: 10px 5px 5px #d8d8d848;

      }
    }

    .opencast{
      display: grid;
      grid-template-columns: 200px 200px 200px;
      padding: 5px;
      grid-gap: 10px;    
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 50px;
      transition: all ease 0.8s;

    }

    .opencast img{
      padding: 5px;
    }

    @media (max-width: 760px){
      .movie-cast2{
        width: 300px;
      }
      
      .opencast{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

    .opencast img{
      padding: 5px;
    }
    }

    .movie-icon-close{
        cursor: pointer;
        font-size: 1.5rem;
        float: right;
    }

    .btn-modal-info-group{
      display: flex;
      justify-content: center;
      margin-top: 5px;

      a{
        color: white;
        text-decoration: none;
      }
    
    }

    .btn-modal-info{
      cursor: pointer;
      border: 2px solid white;
      padding: 5px 15px 5px;
      transition: all ease 0.5s;
      border-radius: 10px;
      margin: 5px;
      text-align: center;

      @media (max-width: 760px){
        padding: 5px 10px 0px;
        height: 30px;
        display: block;
      }
    }

    .btn-modal-info:hover{
      background-color: #ff0000;
      transition: all ease 0.5s;

    }

    
  }

  .login-register{
    margin-top: 100px;
  }
`;
 
export default GlobalStyle;