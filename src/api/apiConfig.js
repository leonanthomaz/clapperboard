// import { API_BASE, API_KEY } from "./tmdb"

// const basicFetch = async (endpoint) => {
//     const req = await fetch(`${API_BASE}${endpoint}`)
//     const json = await req.json()
//     console.log(json)
//     return json
// }

// export default {
//     getHomeList: async () => {
//         return [
//             {
//                 slug: 'originals',
//                 title: 'Originais do Netflix',
//                 items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'trending',
//                 title: 'Recomendados para você',
//                 items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'toprated',
//                 title: 'Em alta',
//                 items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'action',
//                 title: 'Ação',
//                 items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'comedy',
//                 title: 'Comédia',
//                 items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'horror',
//                 title: 'Terror',
//                 items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'romance',
//                 title: 'Romance',
//                 items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
//             },
//             {
//                 slug: 'docomentary',
//                 title: 'Documentário',
//                 items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
//             },
//         ]
//     },
//     getMovieInfo: async (MovieId, type) => {
//         let Info = {};
//         if(MovieId){
//             switch(type){
//                 case 'movie':
//                     Info = await basicFetch(`/movie/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
//                     break;
//                 case 'tv':
//                     Info = await basicFetch(`/tv/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
//                     break;
//                     default:
//                         Info = null;
//                     break;
//                 }
//         }
//         return Info;
//     }
// }
