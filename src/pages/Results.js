import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/search';
import Animelist from '../components/Animelist';
import Header from '../components/Header';
import './Results.css'

const Results = () => {
    const search = useContext(SearchContext);
    //To choose if or not to render
    const [dataExists, setDataExists] = useState(true);
    // const [animeListData, setAnimeListData] = useState([])

    useEffect(()=>{
        if(search.animeData === undefined){
            try{
                search.setData(JSON.parse(localStorage.getItem('AnimeDBsearchData')));
                setDataExists(true);
                // setAnimeListData(search.animeData)
            } catch(error){
                console.log(`!ERR: ${error}`);
                setDataExists(false);
            }
        }
    }, [search]);

    return (
        <div className='results-wrapper'>
            <Header />
            <h2 className='search-term'>
                Search results for '{search.inputData}'
            </h2>
            <div>
                {(dataExists && <Animelist animeResults={search.animeData} />) || <h1>'No Search Results'</h1>}
            </div>
        </div>
    )
}

export default Results
