import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {booksReducer} from "./reducers/booksReducer";
import {authorsReducer} from "./reducers/authorsReducer";


const rootReducer = combineReducers({
    books:booksReducer,
    authors:authorsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;