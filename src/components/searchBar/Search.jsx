import React, {useState, useContext} from 'react'
import SearchContext from '../../context/search/SearchContext';

import './Search.css'

const Search = () => {
    const { fetchAnimes } = useContext(SearchContext);
    const [text, setText] = useState('');
    const [toggle, setToggle] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text === ''){
            alert('Please Enter a Value');
        } else {
            fetchAnimes(text);
            setToggle(false);
            setText('')
        }
    }

    return (
        <div className={toggle ? "search-wrapper" : "search-wrapper-bar"}>
            <h1 className={toggle ? "animedb" : "animedb-bar"}>AnimeDB</h1>
            <div className="search-box">
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input type="text" className="search" 
                            size="30"
                            placeholder='Search Anime'
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <button type="submit" className="btn-search">Go</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search
