import {v1} from "uuid";
import {InferActionsType} from "../../../models/InterActionsType";
import {AuthorEvents, AuthorsActionsType} from "../authors/authorsReducer";
import {AppThunkType} from "../../store";


export type BooksState = {
    books: Array<BookType>
    status: StatusType
    isLoading: boolean
}

export type BookType = {
    id: string
    title: string
    author_id: string
    created_at: string
    year: string
}

export type StatusType = 'success' | 'idle' | 'error'

export enum BooksEvent {
    REMOVE_BOOK = 'REMOVE_BOOK',
    ADD_BOOK = 'ADD_BOOK',
    SET_IS_LOADING = 'BOOK/SET_IS_LOADING',
    SET_STATUS = 'BOOK/SET_STATUS',
}


const initialState = {
    books: [
        {
            id: '1',
            title: 'Game of Thrones',
            author_id: '1',
            created_at: '2021-10-05',
            year: '1996-08-01'
        },
        {
            id: '2',
            title: 'Clash of Kings',
            author_id: '1',
            created_at: '2021-10-05',
            year: '1999-02-01'
        },
        {
            id: '3',
            title: 'The Return of the King',
            author_id: '2',
            created_at: '2021-10-05',
            year: '1955-10-20'
        },
        {
            id: '4',
            title: 'Philosophers Stone',
            author_id: '3',
            created_at: '2021-10-05',
            year: '1997-01-01'
        }
    ],
    status: 'idle',
    isLoading: false
}


export const booksReducer = (state = initialState, action: BooksActionsType | AuthorsActionsType) => {
    switch (action.type) {
        case BooksEvent.REMOVE_BOOK: {
            const copyState = {...state, books: [...state.books].map(el => ({ ...el }))}
            return {...copyState, books:copyState.books.filter(b=>b.id !== action.payload)}
        }
        case AuthorEvents.DELETE_AUTHOR: {
            const copyState = {...state, books: [...state.books].map(el => ({...el}))}
            return {...copyState, books:copyState.books.filter( el => el.author_id !== action.payload)}
        }
        case BooksEvent.ADD_BOOK: {
            const newBookId = v1()
            const newBook: BookType = {
                ...action.payload, id: newBookId
            }
            return {state, books: [...state.books, newBook]}
        }
        case BooksEvent.SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case BooksEvent.SET_STATUS: {
            return {...state, status: action.payload}
        }

        default:
            return state
    }
}

//ActionsType
export type BooksActionsType = InferActionsType<typeof booksActions>


// Actions
export const booksActions = {
    removeBook: (id: string) => {
        return {
            type: BooksEvent.REMOVE_BOOK,
            payload: id
        } as const
    },
    addBook: (payload: { title: string, author_id: string, year: string, created_at: string }) => {
        return {
            type: BooksEvent.ADD_BOOK,
            payload
        } as const
    },
    setIsLoading: (payload: boolean) => {
        return {
            type: BooksEvent.SET_IS_LOADING,
            payload
        } as const
    },
    setStatus: (payload: StatusType) => {
        return {
            type: BooksEvent.SET_STATUS,
            payload
        } as const
    }

}
//Thunk

export const addBookTC = ( payload :{title:string, author_id:string, year: string, created_at: string}  ): AppThunkType =>
    (dispatch) => {
    dispatch(booksActions.setIsLoading(true))
    try {
        dispatch(booksActions.addBook(payload))
        dispatch(booksActions.setStatus('success'))
    } catch(e) {
        console.log('Error: ', e)
    } finally {
        dispatch(booksActions.setIsLoading(false))
        dispatch(booksActions.setStatus('idle'))
    }
}