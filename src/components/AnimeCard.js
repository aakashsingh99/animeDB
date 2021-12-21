import React, {useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/search';

import './AnimeCard.css'

const AnimeCard = ({data}) => {
    const navigate = useNavigate();
    const search = useContext(SearchContext);

    const handler = (event) => {
        event.preventDefault();
        fetch(`https://api.jikan.moe/v3/anime/${data.mal_id}`)
        .then((response) => response.json())
        .then((d) => {
          search.setSingle(d);
          console.log(d);
          localStorage.setItem('singleAnimeData', JSON.stringify(d));
          navigate('/details');
        });
    }

    return (
        <div className='anime-card' onClick={handler}>
            {/* <a className='title-link' href={data.url} target='_blank' rel='noopener noreferrer'> */}
                <div className='card-image'>
                    <img src={data.image_url} alt="Avatar"></img>
                </div>
                <div className='card-text-container'>
                        <h3 className="title">
                            {data.title}
                        </h3>
                    <hr/>
                    <div className='details'>
                        <div className='episodes'> <strong>Episodes:</strong> {data.episodes}</div>
                        <div className='mal-score'> <strong>MAL Score:</strong> {data.score}</div>
                    </div>
                </div>
            {/* </a> */}
        </div>
    )
}

export default AnimeCard
