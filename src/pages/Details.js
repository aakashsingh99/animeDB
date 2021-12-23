import React, {useContext} from 'react'
import DetailView from '../components/DetailView';
import Header from '../components/Header';
import SearchContext from '../context/search';

const Details = () => {
    const {singleData} = useContext(SearchContext);

    console.log(singleData)

    return (
        <div className='details-wrapper'>
            <Header/>
            {singleData && <DetailView data={singleData}/>}
        </div>
    )
}

export default Details
