import React from 'react'
import './AnimeCard.css'

const AnimeCard = ({data}) => {

    return (
        <div className='anime-card'>
            <a className='title-link' href={data.url} target='_blank' rel='noopener noreferrer'>
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
            </a>
        </div>
    )
}

export default AnimeCard
