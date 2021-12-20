import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="App-header-wrapper">
              <div className='App-header'>
                        <a href='/'>
                            <h1>
                                {'<'} AnimeDB
                            </h1>
                        </a>
              </div>
        </header>
    )
}

export default Header
