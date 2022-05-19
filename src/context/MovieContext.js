import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { API_KEY, 
        API_TRENDING, 
        API_BASE, 
        API_TOP, 
        API_COMEDY,
        API_ACTION,
        API_HORROR,
        MOVIES_API
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
  const [searchMovies ,setSearchMovies ] = useState([''])  

  const [loading, setLoading] = useState(true);

  const [ text, setText ] = useState('');
  const [ boxSearch, setBoxSearch ] = useState(false)

  useEffect(() => {
    axios.get(MOVIES_API).then((response)=>{
        //console.log(response.data.results)
        setMovies(response.data.results)  
        setLoading(false);    
    })
  }, []);

  useEffect(() => {
      axios.get(`${API_BASE}${API_TRENDING}${API_KEY}`).then((response)=>{
          //console.log(response.data.results)
          setTrendMovies(response.data.results)  
          setLoading(false);    
      })
  }, []);

    useEffect(() => {
      axios.get(`${API_BASE}${API_TOP}${API_KEY}`).then((response)=>{
          //console.log(response.data.results)
          setPopMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    useEffect(() => {
          axios.get(`${API_BASE}${API_COMEDY}${API_KEY}`).then((response)=>{
          //console.log(response.data.results)
          setComedyMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    useEffect(() => {
      axios.get(`${API_BASE}${API_ACTION}${API_KEY}`).then((response)=>{
          //console.log(response.data.results)
          setActionMovies(response.data.results)  
          setLoading(false);    
      })
    }, []);

    useEffect(() => {
      axios.get(`${API_BASE}${API_HORROR}${API_KEY}`).then((response)=>{
          //console.log(response.data.results)
          setHorrorMovies(response.data.results)  
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

    // //Campo de busca
    // useEffect(()=>{
    //   axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=${text}`).then((response)=>{
    //   setSearchMovies(response.data.results)
    //   setBoxSearch(true) 
    //   setLoading(false) 
    //   })
    // },[text])
    
    
  return (
    <MoviesContext.Provider value={{
      movies,
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
      searchMovies,
      setSearchMovies, 
      boxSearch, setBoxSearch,
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
