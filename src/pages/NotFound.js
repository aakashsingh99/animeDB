import React from 'react'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='error-message'>
               <div className='err404'>404: Not found</div>
               <a href='/' className='goback'>Go Back</a>
            </div>
        </div>
    )
}

export default NotFound
