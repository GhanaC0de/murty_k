import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchPosts = () => {
    return async dispatch => {
        dispatch({
            type: "FETCH_USERS"
        })
        try{
            const response = await axios.get(BASE_URL)
            const posts = await response.data
            dispatch({
                type:"FETCH_SUCCESS",
                payload: posts
            })
        }catch(e){
            dispatch({
                type:"FETCH_FAIL",
                payload: e
            })
        }
    }
}

const initialState = {
    totalPosts: [],
    isLoading: false,
    error: null
}

const postsReducer = (state= initialState,action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, isLoading: true}
        case 'FETCH_SUCCESS':
            return {...state,totalPosts:action.payload}
        case 'FETCH_FAIL':
            return {...state,error: action.payload,isLoading: false}
        default:
            return state;
    }
}

export default postsReducer;