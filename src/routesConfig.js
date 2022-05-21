import React, { useState, useEffect } from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
 } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import MovieModal from './pages/MovieModal';
import MovieComment from './pages/MovieComment';

import Top from './pages/categories/Top';
import Trending from './pages/categories/Trending';
import Comedy from './pages/categories/Comedy';
import Action from './pages/categories/Action';
import Horror from './pages/categories/Horror';
import Romance from './pages/categories/Romance';
import Documentary from './pages/categories/Documentary';

import Login from './pages/Login';
import Register from './pages/Register';

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
                <Route path='/' element={<Home/>}/>
                
                <Route path='/top' exact element={<Top/>}/>
                
                <Route path='/movie' element={<MovieModal/>}/>
                <Route path='/movie/:id' element={<MovieComment/>}/>
                
                <Route path='/trending' element={<Trending/>}/>
                <Route path='/comedy' element={<Comedy/>}/>
                <Route path='/action' element={<Action/>}/>
                <Route path='/horror' element={<Horror/>}/>
                <Route path='/romance' element={<Romance/>}/>
                <Route path='/documentary' element={<Documentary/>}/>

                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>

            </Routes>
         </Router>
     )
 }

 export default RouterPages;
