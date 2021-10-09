import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {booksReducer} from "./reducers/books/booksReducer";
import {AuthorsActionsType, authorsReducer} from "./reducers/authors/authorsReducer";



const rootReducer = combineReducers({
    books:booksReducer,
    authors:authorsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//type of all Thunk creators
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AuthorsActionsType>


export type AppRootStateType = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>