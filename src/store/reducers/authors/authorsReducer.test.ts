

beforeEach( () => {startState = {
authors: {
        '1': {
            first_name: 'George',
            last_name: 'Martin'
        },
        '2':{
            first_name: 'John Ronald Reuel',
            last_name: 'Tolkien'
        },
        '3':{
            first_name: 'Joanne',
            last_name: 'Rowling'
        }
    }
}})


test('Author should be added', () => {
    const newAuthor = {
        first_name: 'Isaac',
        last_name: 'Asimov'
    }

    const action = authorActions.addAuthor(newAuthor)
    const endState = authorsReducer(startState, action)

    expect(keys.length).toBe(4)
})