import {v1} from "uuid";


export type BooksState = {
    books: Array<BookType>
}

export type BookType = {
    id: string
    title: string
    author_id: string
    created_at: string
    year: string
}



const initialState = {
    books: [
        {
            id: v1(),
            title: 'Game of Thrones',
            author_id: '1',
            created_at: '2021-10-05',
            year: '1996-08-01'
        },
        {
            id: v1(),
            title: 'Clash of Kings',
            author_id: '1',
            created_at: '2021-10-05',
            year: '1999-02-01'
        },
        {
            id: v1(),
            title: 'The Return of the King',
            author_id: '2',
            created_at: '2021-10-05',
            year: '1955-10-20'
        },
        {
            id: v1(),
            title: 'Philosophers Stone',
            author_id: '3',
            created_at: '2021-10-05',
            year: '1997-01-01'
        },
    ]
}


export const booksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Test':
            return {...state}
        default:
            return state
    }
}