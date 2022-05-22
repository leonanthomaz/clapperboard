import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { API_KEY, 
        API_TRENDING, 
        API_TOP, 
        API_COMEDY,
        API_ACTION,
        API_HORROR,
        API_ROMANCE,
        API_DOCUMENTARY,
        MOVIES_API,
      } from "../api/tmdb";

//import apiConfig from "../api/apiConfig";

export const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {

  const [movies ,setMovies ] = useState([])

  const [trendMovies ,setTrendMovies ] = useState([]) 
  const [popMovies ,setPopMovies ] = useState([]) 
  const [comedyMovies ,setComedyMovies ] = useState([])
  const [actionMovies ,setActionMovies ] = useState([])
  const [horrorMovies ,setHorrorMovies ] = useState([])
  const [romanceMovies ,setRomanceMovies ] = useState([])
  const [documentaryMovies ,setDocumentaryMovies ] = useState([])

  const [searchMovies ,setSearchMovies ] = useState([''])
  
  const [genres, setGenres] = useState([])

  const [loading, setLoading] = useState(true);

  const [ text, setText ] = useState('');
  const [ boxSearch, setBoxSearch ] = useState(false)
  const [ closeSearch, setCloseSearch ] = useState(false)

  useEffect(() => {
    axios.get(MOVIES_API).then((response)=>{
        //console.log(response.data.results)
        setMovies(response.data.results)  
        setLoading(false); 
    })
  }, []);

  useEffect(() => {
      axios.get(API_TRENDING).then((response)=>{
          //console.log(response.data.results)
          setTrendMovies(response.data.results)  
          setLoading(false);    
      })
  }, []);

    useEffect(() => {
      axios.get(API_TOP).then((response)=>{
          //console.log(response.data.results)
          setPopMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    useEffect(() => {
          axios.get(API_COMEDY).then((response)=>{
          //console.log(response.data.results)
          const list = response.data.results
          // let genero = genre_ids.map((e, i, a) => e)
          // console.log(genero.filter(e=>e === 35))
          // console.log(list)
          setComedyMovies(list)  
          setLoading(false);    
      })
    }, []);

  
    useEffect(() => {
      axios.get(API_ACTION).then((response)=>{
          //console.log(response.data.results)
          const list = response.data.results
          setActionMovies(list)
          setLoading(false); 
      })
    }, []);


    useEffect(() => {
      axios.get(API_HORROR).then((response)=>{
          //console.log(response.data.results)
          setHorrorMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    useEffect(() => {
      axios.get(API_ROMANCE).then((response)=>{
          //console.log(response.data.results)
          setRomanceMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    useEffect(() => {
      axios.get(API_DOCUMENTARY).then((response)=>{
          //console.log(response.data.results)
          setDocumentaryMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    const getSearch = async () => {
      let URL_SEARCH = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=${text}`;
      let URL_INIT = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=all`;
      const search = await axios(text ? URL_SEARCH : URL_INIT )
      setSearchMovies(search.data.results)
      setBoxSearch(true) 
      setLoading(false) 
    }
    useEffect(()=>{
      getSearch()
    },[text])
    
  return (
    <MoviesContext.Provider value={{
      movies,
      genres,
      setGenres,
      trendMovies, 
      setTrendMovies,  
      popMovies, 
      setPopMovies, 
      comedyMovies, 
      setComedyMovies,
      actionMovies,
      setActionMovies,
      horrorMovies,
      setHorrorMovies,
      romanceMovies,
      setRomanceMovies,
      documentaryMovies,
      setDocumentaryMovies,
      searchMovies,
      setSearchMovies, 
      boxSearch, setBoxSearch,
      closeSearch, setCloseSearch,
      setMovies, 
      loading, 
      setLoading, 
      text, 
      setText}}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
