import React from 'react'
import './DetailView.css'

const DetailView = ({data}) => {
    return (
        <div className='detail-view'>
            <div className='detail-header'>
                <div className='detail-image'>
                    <img src={data.image_url} alt="Avatar"></img>
                </div>
                <div className='detail-title-wrapper'>
                    <h1 className='detail-title'>
                        {data.title}
                    </h1>
                    <div className='detail-snapshot'>
                        <h3>
                            MAL score: {data.score}
                        </h3>
                        <h3>
                            Episodes: {data.episodes}                        
                        </h3>
                        <div>
                            {data.airing ? 'Airing' : 'Finished Airing'}
                        </div>
                        <div>
                            {/* //Todo: Issue: data.aired.from ERROR */}
                            {/* Aired on: {data.aired.from.toString().split('-')[0]} */}
                        </div>
                        <a href={data.url} target='_blank' rel='noopener noreferrer'>
                            Goto MAL
                        </a>
                    </div>
                </div>
            </div>
            <div className='synopsis'>
                <div>
                    <strong>Synopsis:</strong><br/>
                    {data.synopsis}
                </div >
            </div>
        </div>
    )
}

export default DetailView
