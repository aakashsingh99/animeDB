import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import SearchContext from '../context/search/SearchContext'
import './Detail.css'

const Detail = () => {
    const { anime, getAnimeData } = useContext(SearchContext);
    
    const params = useParams()
    
    useEffect(() => {
        getAnimeData(params.mal_id)
    }, [params.mal_id])

    return (
        <div className='detail-view'>
            <div className='detail-header'>
                <div className='detail-image'>
                    <img src={anime.image_url} alt="Avatar"></img>
                </div>
                <div className='detail-title-wrapper'>
                    <h1 className='detail-title'>
                        {anime.title}
                    </h1>
                    <div className='detail-snapshot'>
                        <h3>
                            MAL score: {anime.score}
                        </h3>
                        <h3>
                            Episodes: {anime.episodes}                        
                        </h3>
                        <div>
                            {anime.airing ? 'Airing' : 'Finished Airing'}
                        </div>
                        <div>
                            {/* //Todo: Issue: anime.aired.from ERROR */}
                            {/* Aired on: {anime.aired.from.toString().split('-')[0]} */}
                        </div>
                        <a href={anime.url} target='_blank' rel='noopener noreferrer'>
                            Goto MAL
                        </a>
                    </div>
                </div>
            </div>
            <div className='synopsis'>
                <div>
                    <strong>Synopsis:</strong><br/>
                    {anime.synopsis}
                </div >
            </div>
        </div>
    )
}

export default Detail
