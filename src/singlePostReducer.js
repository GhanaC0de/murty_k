import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const fetchSinglePost = (id) => {
    return async dispatch => {
        dispatch({
            type: 'FETCH_SINGLE_USER'
        })
        try{
            const response = await axios.get(BASE_URL + id)
            const post = response.data
            dispatch({
                type: "FETCH_SINGLE_USER_SUCCESS",
                payload:post
            })
        }catch(e){
            dispatch({
                type: "FETCH_SINGLE_USER_FAIL",
                payload:e
            })
        }
    }
}

const initialState = {
    post:[]
}

const singlePostReducer = (state=initialState,action) => {
    switch(action.type){
        case "FETCH_SINGLE_USER":
            return{
                ...state,
            }
        case "FETCH_SINGLE_USER_SUCCESS":
            return{
                ...state,post:action.payload
            }
        default:
            return state
    }
}

export default singlePostReducer;