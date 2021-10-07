import { v1 } from "uuid";
import { authorsActions, authorsReducer, AuthorsState } from "./authorsReducer";

let startState: AuthorsState;

beforeEach(() => {

  const startState = {
    authors: {
      [v1()]: {
        first_name: 'George',
        last_name: 'Martin'
      },
      [v1()]: {
        first_name: 'John Ronald Reuel',
        last_name: 'Tolkien'
      },
      [v1()]: {
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


test('Status should be changed', () => {

  const action = authorsActions.setAuthorStatus('success')
  const endState = authorsReducer(startState, action)

  expect(endState.status).toBe('success')
})