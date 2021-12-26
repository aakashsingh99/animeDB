import React from 'react'
import { Link } from 'react-router-dom'

import './AnimeCard.css'

const AnimeCard = ({data}) => {

    return (
        <div className='anime-card'>
            <Link to={`/detail/${data.mal_id}`}>
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
            </Link>
        </div>
    )
}

export default AnimeCard
