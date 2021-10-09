import { authorsActions } from "../authors/authorsReducer";
import { booksActions, booksReducer, BooksState } from "./booksReducer";

let startState: BooksState;


beforeEach(() => {



    const startState = {
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
})

test('Book should be deleted', () => {

    const action = booksActions.removeBook('4')
    const endState = booksReducer(startState, action)

    expect(endState.books.length).toBe(3)
})

test('Book should be deleted if an author is deleted', () => {

    const action = authorsActions.deleteAuthor('1')
    const endState = booksReducer(startState, action)

    expect(endState.books.length).toBe(2)
})