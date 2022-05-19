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


  .loader {
    border: 5px solid #ff0000; /* Vermelho e cinza*/
    border-top: 5px solid #504c4c; /*  */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    margin-top: 50px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .movie-title-box{
    text-align: center;
  }

  .movie-box{
    display: grid;
    grid-template-columns: 300px 300px 300px;    
    grid-gap: 10px;    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    transition: all ease 0.8s;

    img{
        width: 100%;
    }

    @media (max-width: 760px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            max-width: 300px;
        }

    }

  }

  .modal{
    overflow: hidden;
    border: none;
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
      margin-top: 10px;
      border-radius: 15px;
      transition: all ease 1s;
  }

  .active{
    display: block;
    border: 2px solid white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 15px;
    transition: all ease 1s;
  }
  

  .movie-cast-main{
    display: block;
    margin-top: 10px;

    .movie-icon-close-sinopse{
          display: flex;
          float: right;
          cursor: pointer;
          font-size: 1.5rem;
      }
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
      border: 2px solid white;
      border-radius: 10px;
      max-width: 200px;
      background-color: #504c4c;

      img{
        border-radius: 10px;
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
        font-size: 2rem;
        float: right;
    }

    

    .btn-modal-info-group{
      display: flex;
      justify-content: center;
      margin-top: 10px;

      a{
        color: white;
        text-decoration: none;
      }

    }

    .btn-modal-info{
      cursor: pointer;
      border: 2px solid white;
      max-width: 200px;
      display: flex;
      justify-content: center;
      padding: 10px;
      margin-top: 10px;
      transition: all ease 0.5s;
      border-radius: 10px;
      margin: 5px;
      text-align: center;
      font-size: 1rem;

      

      @media (max-width: 760px){
        width: 70%;
        max-width: 100px;
      }
    }

    .btn-modal-info:hover{
      background-color: #ff0000;
      transition: all ease 0.5s;

    }
    

`;
 
export default GlobalStyle;