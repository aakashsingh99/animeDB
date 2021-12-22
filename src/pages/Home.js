import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';

import './Home.css'
import SearchContext from '../context/search';

const Home = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {fetchSearchResults, inputData, /*setInputData*/} = useContext(SearchContext);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        await fetchSearchResults(input);
        //setInputData(input)
        navigate('/results');
    };

    return (
        <div className='home-wrapper'>
                <div className='welcome-text'>
                    <h1 className='animeDB-logo'>
                        AnimeDB
                    </h1>
                    <div className='typewriter'>
                        Search Anime from MyAnimeList!
                    </div>
                </div>
                <form className='input-form'>
                    <input className='in-search' size='40' type='text' value={input} placeholder='Type here...' 
                        onChange={(e) => setInput(e.target.value)}    
                    />
                    {inputData}
                    <button className='btn-search' type='submit' 
                        onClick={handleSearch} disabled={!input}
                    >
                            Search
                    </button>
                </form>
                {loading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        </div>
    )
}

export default Home
