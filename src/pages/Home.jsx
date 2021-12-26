import React from 'react'
import Search from '../components/searchBar/Search'
import Results from './Results'
import './Home.css'

const Home = () => {
    return (
        <div className='home-wrapper'>
            <Search/>
            <Results/>
        </div>
    )
}

export default Home
