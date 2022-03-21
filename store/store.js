import linkReducer from "./linkReducer";
import { combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    linkReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))