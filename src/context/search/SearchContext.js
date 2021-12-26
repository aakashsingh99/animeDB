import { createContext, useReducer } from "react";
import { searchReducer } from "./SearchReducer";

const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const initialState = {
        animes: [],
        loading: false,
        anime: {}
    }

    const [state, dispatch] = useReducer(searchReducer, initialState);

    const fetchAnimes = async (searchTerm) => {
        dispatch({type: 'SET_LOADING'})
        const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`);
        const data = await response.json();
        dispatch({
            type: 'FETCH_ANIMES',
            payload: data.results
        })
    }

    const getAnimeData = async (mal_id) => {
        dispatch({type: 'SET_LOADING'})
        const response = await fetch(`https://api.jikan.moe/v3/anime/${mal_id}`);
        const data = await response.json();
        console.log(data)
        dispatch({
            type: 'GET_ANIME',
            payload: data
        })
    }

    return (
        <SearchContext.Provider
            value={{
                animes: state.animes,
                loading: state.loading,
                fetchAnimes,
                anime: state.anime,
                getAnimeData
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContext;