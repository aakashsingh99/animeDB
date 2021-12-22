import React, { useContext } from 'react';
import SearchContext from '../context/search';
import Animelist from '../components/Animelist';
import Header from '../components/Header';
import './Results.css'

const Results = () => {
    const {animeData, inputData} = useContext(SearchContext);

    return (
        <div className='results-wrapper'>
            <Header />
            <h2 className='search-term'>
                Search results for '{inputData}'
            </h2>
            <div>
                {animeData ? <Animelist animeResults={animeData} /> : <h1>'No Search Results'</h1>}
            </div>
        </div>
    )
}

export default Results
