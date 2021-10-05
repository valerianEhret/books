import {v1} from "uuid";


export type BooksState = {
    books: Array<BookType>
}

export type BookType = {
    id: string
    title: string
    created_at: string
    year: string
}



const initialState = {
    books: [
        {
            id: v1(),
            title: 'Game of Thrones',
            created_at: '2021-10-05',
            year: '1996-08-01'
        },
        {
            id: v1(),
            title: 'Clash of Kings',
            created_at: '2021-10-05',
            year: '1999-02-01'
        },
        {
            id: v1(),
            title: 'The Return of the King',
            created_at: '2021-10-05',
            year: '1955-10-20'
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