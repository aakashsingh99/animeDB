import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <a className="github-link" 
                href='https://github.com/aakashsingh99/animeDB'
                target='_blank' rel="noreferrer"
            >
                    Github ➦
            </a>
            <a className="api-used"
                href='https://jikan.moe/'
                target='_blank' rel='noreferrer'
            >
                API ➦
            </a>
        </div>
    )
}

export default Footer
