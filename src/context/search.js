import { createContext, useState } from 'react';

const SearchContext = createContext();

//search, animeData, setData, singleData, setSingle ,inputData
export const SearchProvider = ({children}) => {
  const [animeData, setAnimeData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [singleData, setSingleData] = useState({});

  //fetch Anime Search Results
  const fetchSearchResults = async (searchTerm) => {
    const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`);
    const data = await response.json();

    setInputData(searchTerm);
    setAnimeData(data.results);
  }

  const fetchSingleResult = async (searchTerm) => {
    const response = await fetch(`https://api.jikan.moe/v3/anime/${searchTerm}`);
    const data = await response.json();

    setSingleData(data);
  }

  return(
      <SearchContext.Provider
        value={{
          inputData,
          fetchSearchResults,
          animeData,
          fetchSingleResult,
          singleData,
        }}      
      >
        {children}
      </SearchContext.Provider>
  )
}

export default SearchContext;