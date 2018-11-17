const initialState = {
    data : [],
    loadingMovie : true,
    movieArray : [],
    loading : true
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SETDATA'){
        return{
            ...state,
            loadingMovie : action.loadingMovie,
            data : action.value
        }
    }
    if(action.type === 'SETMOVIES'){
        return{
            ...state,
            movieArray : action.value,
            loading : action.loading
        }
    }
    if(action.type === 'ADDMOVIES'){
        let newArray = state.movieArray.concat(action.value);
        return{
            ...state,
            movieArray :newArray,
        }
    }
    return state;
}

export default reducer;