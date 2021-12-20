import React from 'react'
import AnimeCard from './AnimeCard'
import './Animelist.css'

const Animelist = ({animeResults}) => {
    return (
        <div className='animelist-wrapper'>
            {animeResults.map(anime => 
                    <AnimeCard key={anime.mal_id} data={anime}/>
            )}
        </div>
    )
}

export default Animelist
