import React, {useContext, useEffect, useState} from 'react'
import DetailView from '../components/DetailView';
import Header from '../components/Header';
import SearchContext from '../context/search';

const Details = () => {
    const search = useContext(SearchContext);
    //To choose if or not to render
    const [dataExists, setDataExists] = useState(true);

    useEffect(()=>{
        if(search.singleData === undefined){
            try{
                search.setSingle(JSON.parse(localStorage.getItem('singleAnimeData')));
                setDataExists(true);
            } catch(error){
                console.log(`!ERR: ${error}`);
                setDataExists(false);
            }
        }
    }, [search]);

    return (
        <div className='details-wrapper'>
            <Header/>
            {dataExists && <DetailView data={search.singleData}/>}
        </div>
    )
}

export default Details
