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

test('Book should be added', () => {

    const newBook = {title:'Test', author_id:'1', year: '01-01-2001', created_at: '01-01-1901'}

    const action = booksActions.addBook('1')
    const endState = booksReducer(startState, action)

    expect(endState.books.length).toBe(5)
})

test('Status should be changed', () => {

  const action = booksActions.setStatus('success')
  const endState = booksReducer(startState, action)

  expect(endState.status).toBe('success')
})


test('isLoading should be changed', () => {

  const action = booksActions.setIsLoading(true)
  const endState = booksReducer(startState, action)

  expect(endState.isLoading).toBe(true)
})

test('book should be changed', () => {
    const book = {
        id: '2',
        year: '1992-11-12',
        title: 'test',
        authorID: '1243'
    }
    const action = booksActions.changeBook({...book})
    const endState = booksReducer(startState, action)

    const {title,year,author_id } = endState.books.filter(el => el.id === book.id)[0]


    expect(endState.books.length).toBe(5)
    expect(title).toBe(book.title)
    expect(year).toBe(book.year)
    expect(author_id).toBe(book.authorID)

})