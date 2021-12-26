import React, {useContext} from 'react'
import AnimeCard from '../components/animeCard/AnimeCard'
import SearchContext from '../context/search/SearchContext'

import './Results.css'

const Results = () => {
    const {animes, loading} = useContext(SearchContext)

    if(loading) return(
        <div className='results-wrapper'>
            <h4>Loading...</h4>
        </div>
    )

    return (
        <div className='results-wrapper'>
                {animes?.length > 0 && (animes.map(anime => (<AnimeCard key={anime.mal_id} data={anime}/>)))}
        </div>
    )
}

export default Results
