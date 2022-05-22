import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { API_KEY, IMAGES_API } from '../../api/tmdb';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comment from '../Comment';

const MovieModal = ({ title, id, genres_ids, poster_path, backdrop_path, overview}) => {

    const [ cast, setCast ] = useState()
    const [ openCast, setOpenCast ] = useState(true)
    const [ videos, setVideos ] = useState([])
    const [ openTrailer, setOpenTrailer ] = useState(true)
    const [ user, setUser ] = useState(true)

    const handleOpenCast = () => {
        setOpenCast(!openCast)
        if(setOpenTrailer(true)){
            openTrailer(false)
        }
    }

    const handleOpenTrailer = () => {
        setOpenTrailer(!openTrailer)
        if(setOpenCast(true)){
            openCast(false)
        }
    }


    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`).then((response)=>{
          //console.log(response.data.cast)
          setCast(response.data.cast)  
      })
    }, []);


      useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos`).then((response)=>{
            //console.log(response.data.cast)
            //console.log(response.data.videos.results)
            setVideos(response.data.videos.results)  
        })
      }, []);
      
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#ff0000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          color: 'white',
          backgroundColor: '#141414',
          marginTop: '60px',
        },
    };


    return (
        <>
            <div className="movie" >
                <img src={poster_path ? IMAGES_API + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  onClick={openModal}  alt={title}   />     
            </div>
        
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                //className={"modal"}
                style={customStyles}
                ariaHideApp={false}
                //portalClassName="modal"

            >
                <div className='modal'>
                    <div className='movie-icon-close'>
                        <i className="fa-solid fa-xmark" onClick={closeModal} ></i>
                    </div>
                    <h1 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h1>
                    <section >
                        <div className="movie-poster">
                            <img src={backdrop_path ? IMAGES_API + backdrop_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} alt={title}/>
                        </div>
                    </section>

                    <div>
                        
                    </div>

                    <div className='movie_overview'>
                        <h3>Sinopse:</h3>
                        { overview ? overview : <h5>Sinopse não encontrada... :C </h5>}
                    </div>

                    <div className='btn-modal-info-group'>
                        <div className='btn-modal-info' onClick={handleOpenCast}>Elenco</div>
                        <div className='btn-modal-info' onClick={handleOpenTrailer}>Trailers</div>
                        {user ? <Link to={`/movie/${id}`} className='btn-modal-info'>
                                Mais +
                        </Link> : ''}                   
                    </div>

                    <div className='wrapper-cast'>
                        <div className='movie-icon-close-sinopse'>
                            {openCast  ? '' : <i className="fa-solid fa-xmark" onClick={handleOpenCast} ></i>}
                        </div>
                        <div className='movie-cast-main'>
                            
                            <div className={openCast ? 'movie-cast' : 'movie-cast opencast'}>
                                { cast && cast.length !== 0 ? cast.map((item, index)=>{
                                    return(
                                        <div key={index} className='movie-cast2'>
                                            <img src={item.profile_path ? `https://image.tmdb.org/t/p/w92/`+item.profile_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} alt={item.name} width={92} />
                                            <h4 className="nome">{item.name}</h4>
                                            <h6 className="personagem"><i>{item.character}</i></h6>
                                        </div>
                                    )
                                })
                                : <h5>Não encontrado...</h5>}
                            </div>
                        </div>
                    </div>
                    

                    <div className={openTrailer ? 'movie-trailer' : 'movie-trailer opentrailer'}>

                        {videos && videos.length !== 0 ? videos.map((video, index)=>{
                                let url = `https://www.youtube.com/watch?v=${video.key}`                              
                                return(
                                    <div className='btn-modal-info-group' key={index}>
                                    <a href={url}>{video.name}</a>
                                    </div>
                                )
                            }) : <h5>Nenhum vídeo encontrado...</h5>
                        }

                    </div>

                    <Comment movieId={id}/>

                </div>
            </Modal>
        </>
    )
}

export default MovieModal;