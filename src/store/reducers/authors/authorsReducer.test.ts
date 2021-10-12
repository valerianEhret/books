import { v1 } from "uuid";
import { authorsActions, authorsReducer, AuthorsState } from "./authorsReducer";

let startState: AuthorsState;

beforeEach(() => {



  const startState = {
    authors: {
      '1': {
        id: '1',
        first_name: 'George',
        last_name: 'Martin'
      },
      '2': {
        id: '2',
        first_name: 'John Ronald Reuel',
        last_name: 'Tolkien'
      },
      '3': {
        id: '3',
        first_name: 'Joanne',
        last_name: 'Rowling'
      }
    },
    isLoading: false,
    status: 'idle'
  }
})


test('Author should be added', () => {
  const newAuthor = {
    lastName: 'Asimov',
    firstName: ' Isaac'
  }
  const action = authorsActions.addAuthor(newAuthor)
  const endState = authorsReducer(startState, action)

  const keys = Object.keys(endState.authors)

  expect(keys.length).toBe(4)
})

test('Author should be deleted', () => {

  const action = authorsActions.deleteAuthor('2')
  const endState = authorsReducer(startState, action)

  const keys = Object.keys(endState.authors)

  expect(keys.length).toBe(2)
})


test('Status should be changed', () => {

  const action = authorsActions.setAuthorStatus('success')
  const endState = authorsReducer(startState, action)

  expect(endState.status).toBe('success')
})


test('isLoading should be changed', () => {

  const action = authorsActions.setAuthorIsLoading(true)
  const endState = authorsReducer(startState, action)

  expect(endState.isLoading).toBe(true)
})

test('Author should be changed', () => {

    const changedAuthor = {
        id: '3',
        lastName: 'Asimov',
        firstName: 'Isaac'
    }

    const action = authorsActions.setAuthor(changedAuthor)
    const endState = authorsReducer(startState, action)


    expect(endState.authors[changedAuthor.id].first_name).toBe(changedAuthor.firstName)
    expect(endState.authors[changedAuthor.id].last_name).toBe(changedAuthor.lastName)
})