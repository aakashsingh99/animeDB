export const searchReducer = (state, action) => {
    switch(action.type){
        case 'FETCH_ANIMES':
            return {
                ...state,
                animes: action.payload,
                loading: false
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'GET_ANIME':
            return {
                ...state,
                anime: action.payload,
                loading: false
            }
        default:
            return state;
    }
}