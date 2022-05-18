export const API_BASE = 'https://api.themoviedb.org/3';
export const API_KEY = "c35a79063e85af522c0e447284bf9dbd";
export const API_TRENDING = '/trending/all/week?language=pt-BR&api_key=';
export const API_TOP = '/movie/top_rated?language=pt-BR&api_key=';

export const API_COMEDY = '/discover/movie?with_genres=35&language=pt-BR&api_key=';
export const API_ACTION = '/discover/movie?with_genres=28&language=pt-BR&api_key=';
export const API_HORROR = '/discover/movie?with_genres=27&language=pt-BR&api_key=';
export const API_ROMANCE = '/discover/movie?with_genres=10749&language=pt-BR&api_key=';
export const API_DOCUMENTARY = '/discover/movie?with_genres=99&language=pt-BR&api_key=';

//export const CAST = 'http://api.themoviedb.org/3/movie/{id}/casts?api_key={api_key}';

export const IMAGES_API = 'https://image.tmdb.org/t/p/w1280' 
export const MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=`


//export const GENERAL_API = `https://api.themoviedb.org/3/movie/discover?api_key=${API_KEY}&language=pt-BR&page=`
//export const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=pt-BR`
//export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=`
//export const API_TRENDING = `${API_BASE}/trending/all/week?language=pt-BR&api_key=${API_KEY}`;
//export const API_SEARCH_OLD = `${API_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${text}&page=1&include_adult=false`;
//let filme = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;
