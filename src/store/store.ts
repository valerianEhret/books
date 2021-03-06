import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {BooksActionsType, booksReducer} from "./reducers/books/booksReducer";
import {AuthorsActionsType, authorsReducer} from "./reducers/authors/authorsReducer";




const rootReducer = combineReducers({
    books:booksReducer,
    authors:authorsReducer
})


let preloadedState
const persistedStateString = localStorage.getItem('app-state')
if (persistedStateString) {
    preloadedState = JSON.parse(persistedStateString)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));

type ActionsType =
    | AuthorsActionsType
    | BooksActionsType

//type of all Thunk creators
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>


export type AppRootStateType = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>




store.subscribe( ()=>{
    // при изменении стейта это код будет отрабатываться
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
} )

