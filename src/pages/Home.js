import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { SearchContext } from '../context/search';


const Home = () => {
    const navigate = useNavigate();
    const searchAnime = useContext(SearchContext);

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
        setLoading(true);
        searchAnime.search(input).then((data) => {
            searchAnime.setData(data.results, input);
            setLoading(false);
            console.log(JSON.stringify(data.results));
            localStorage.setItem('AnimeDBsearchData', JSON.stringify(data.results));
            navigate('/results');
        });
    };

    return (
        <div className='home-wrapper'>
                <h1 className='welcome-text'>
                    <h1 className='animeDB-logo'>
                        AnimeDB
                    </h1>
                    <div className='typewriter'>
                        Search Anime from MyAnimeList!
                    </div>
                </h1>
                <form className='input-form'>
                    <input className='in-search' size='40' type='text' value={input} placeholder='Type here...' 
                        onChange={(e) => setInput(e.target.value)}    
                    />
                    <button className='btn-search' type='submit' 
                        onClick={handleSearch} disabled={!input}
                    >
                            Search
                    </button>
                </form>
                {loading && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        </div>
    )
}

export default Home
