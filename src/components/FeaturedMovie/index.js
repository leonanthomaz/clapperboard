import React from "react";
import './FeaturedMovie.css';

const FeaturedMovie = ({item}) => {
    //console.log(item);

    //pegando a data
    let firstDate = new Date(item.first_air_date);

    //manipulando o gênero
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    //reavaliando description
    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200 + '...');
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured_vertical">
                <div className="featured_horizontal">
                    <div className="featured_name">{item.original_name}</div>
                    <div className="featured_info">
                        <div className="featured_points"> {item.vote_average} Pontos </div>
                        <div className="featured_year">{firstDate.getFullYear()}</div>
                        <div className="featured_seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured_description">{item.overview}</div>
                    <div className="featured_buttons">
                    <a href={`/watch/${item.id}`} className="featured_buttons_watch">▶ Assistir</a>
                    <a href={`/list/add/${item.id}`} className="featured_buttons_list">+ Mais</a>
                    </div>
                    <div className="featured_genres"><strong>Gênero: </strong>{genres.join(', ')}</div>
                </div>
            </div>
            
        </section>
    );
}

export default FeaturedMovie;