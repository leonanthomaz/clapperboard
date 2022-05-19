import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { API_KEY, 
        API_TRENDING, 
        API_BASE, 
        API_TOP, 
        API_COMEDY,
        API_ACTION,
        API_HORROR 
      } from "../api/tmdb";

//import apiConfig from "../api/apiConfig";

export const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {

  const [movies ,setMovies ] = useState([])

  const [popMovies ,setPopMovies ] = useState([]) 
  const [comedyMovies ,setComedyMovies ] = useState([])
  const [actionMovies ,setActionMovies ] = useState([])
  const [horrorMovies ,setHorrorMovies ] = useState([])
  const [searchMovies ,setSearchMovies ] = useState([''])  

  const [loading, setLoading] = useState(true);

  const [ text, setText ] = useState('');
  const [ boxSearch, setBoxSearch ] = useState(false)

  
  // useEffect(() => {
  //   axios.get(`https://api.themoviedb.org/3/movie/76341/?api_key=${API_KEY}&language=pt-BR`).then((response)=>{
  //       //console.log(response.data.results)
  //       setMovies(response.data.results)  
  //       setLoading(false);    
  //   })
  // }, []);


  useEffect(() => {
      axios.get(`${API_BASE}${API_TRENDING}${API_KEY}`).then((response)=>{
          //console.log(response.data.results)
          setMovies(response.data.results)  
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



    //Campo de busca
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=${text}`).then((response)=>{
      setSearchMovies(response.data.results)
      setBoxSearch(true) 
      setLoading(false); 
      })
    },[text])
    
    
  return (
    <MoviesContext.Provider value={{
      movies, 
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
