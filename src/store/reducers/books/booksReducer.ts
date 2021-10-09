import {v1} from "uuid";
import {InferActionsType} from "../../../models/InterActionsType";
import {AuthorEvents, AuthorsActionsType} from "../authors/authorsReducer";


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
    REMOVE_BOOK = 'REMOVE_BOOK'
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
        case BooksEvent.REMOVE_BOOK:
            const copyState = {...state, books: [...state.books].map(el => ({ ...el }))}
            return {...copyState, books:copyState.books.filter(b=>b.id !== action.payload)}
        case AuthorEvents.DELETE_AUTHOR:

        default:
            return state
    }
}

//ActionsType
export type BooksActionsType = InferActionsType<typeof booksActions>


// Actions
export const booksActions = {
    removeBook: (id:string) => {
        return {
            type: BooksEvent.REMOVE_BOOK,
            payload: id
        } as const
    }
}
