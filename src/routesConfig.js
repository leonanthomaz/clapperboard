import React, { useState, useEffect } from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
 } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Trending from './pages/categories/Trending';
import Comedy from './pages/categories/Comedy';
import Action from './pages/categories/Action';
import Horror from './pages/categories/Horror';

 const RouterPages = () => {

    //definindo faixa principal
    const [blackHeader, setBlackHeader] = useState();

    useEffect(() => {
        const scrollLinstener = () => {
        if(window.scrollY > 10){
            setBlackHeader(true);
        }else{
            setBlackHeader(false);
        }
        }
        window.addEventListener('scroll', scrollLinstener);
        return () => {
        window.removeEventListener('scroll', scrollLinstener);
        }
    }, []);

     return (
         <Router>
            <Header black={blackHeader} />
            <Routes>  
                <Route path='/' exact element={<Home/>}/>
                <Route path='/movie' element={<Movie/>}/>
                <Route path='/trending' element={<Trending/>}/>
                <Route path='/comedy' element={<Comedy/>}/>
                <Route path='/action' element={<Action/>}/>
                <Route path='/horror' element={<Horror/>}/>
            </Routes>
            <Footer/>
         </Router>
     )
 }

 export default RouterPages;
