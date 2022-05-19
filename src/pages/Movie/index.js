import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal';
import { API_KEY, IMAGES_API } from '../../api/tmdb';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = ({ title, id, release_date, poster_path, backdrop_path, overview, vote_average ,vote_count}) => {

    const [ cast, setCast ] = useState()
    const [ openCast, setOpenCast ] = useState(true)
    const [ videos, setVideos ] = useState([])
    const [ openTrailer, setOpenTrailer ] = useState(true)


    const handleOpenCast = () => {
        setOpenCast(!openCast)
    }

    const handleOpenTrailer = () => {
        setOpenTrailer(!openTrailer)
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
      subtitle.style.color = '#f00';
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
          marginTop: '50px',
        },
    };

    return (
        <div>
        <div className="movie" >
            <img src={poster_path ? IMAGES_API + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  onClick={openModal}  alt={title}  style={{cursor: 'pointer'}}   />     
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
            <div className='modal' style={{overflow: 'hidden', fontSize: '1.2rem'}}>
                <div className='movie-icon-close'>
                    <i className="fa-solid fa-xmark" onClick={closeModal} ></i>
                </div>
                <h1 ref={(_subtitle) => (subtitle = _subtitle)} style={{fontSize: '2.2rem', textAlign: 'center', marginTop: '50px'}}>{title}</h1>
                <section >
                    <div className="movie-poster" style={{ maxWidth: '800px', margin: 'auto', border: '2px solid white', borderRadius: '10px'}}>
                        <img src={backdrop_path ? IMAGES_API + backdrop_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} alt={title} style={{borderRadius: '10px', width: '100%'}}/>
                    </div>
                </section>

                <div className='movie_overview'>
                    <h2>Sinopse:</h2>
                    {overview}
                </div>

                <div className='btn-modal-info-group'>
                    <div className='btn-modal-info' onClick={handleOpenCast}>Elenco</div>
                    <div className='btn-modal-info' onClick={handleOpenTrailer}>Trailers</div>
                    <Link to={`/movie/${id}`} className='btn-modal-info'>
                            Ver mais
                    </Link>                    
                </div>

                <div className='movie-cast-main'>
                    <div className='movie-icon-close-sinopse'>
                        {openCast ? '' : <i className="fa-solid fa-xmark" onClick={handleOpenCast} ></i>}
                    </div>
                    <div className={openCast ? 'movie-cast' : 'movie-cast opencast'}>
                        { cast ? cast.map((item)=>{
                            return(
                                <div className='movie-cast2'>
                                    <img src={item.profile_path ? `https://image.tmdb.org/t/p/w92/`+item.profile_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} alt={item.name} width={92} />
                                    <h4 className="nome">{item.name}</h4>
                                    <h6 className="personagem"><i>{item.character}</i></h6>
                                </div>
                            )
                        })
                        : ''}
                    </div>
                </div>

                <div className={openTrailer ? 'movie-trailer' : 'movie-trailer opentrailer'}>
                    {videos ?  videos.map((video)=>{
                            let url = `https://www.youtube.com/watch?v=${video.key}`
                            return(
                                <div className=''>
                                 <a href={url}>{video.name}</a>
                                </div>
                            )
                        }) : '<h4>Nenhum trailer encontrado! :( </h4>'
                    }
                </div>

            </div>
        </Modal>
        </div>
    )
}

export default Movie;