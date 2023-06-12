import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./postReducer";
import singlePostReducer from "./singlePostReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;