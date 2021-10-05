import {v1} from "uuid";

//Types
export type AuthorsState = {
    authors : Array<AuthorType>
}

export type AuthorType = {
    id: string,
    first_name: string,
    last_name: string
}

//Initial State
const initialState: AuthorsState = {
    authors: [
        {
            id: v1(),
            first_name: 'George',
            last_name: 'Martin'
        },
        {
            id: v1(),
            first_name: 'John Ronald Reuel',
            last_name: 'Tolkien'
        },
        {
            id: v1(),
            first_name: 'Joanne',
            last_name: 'Rowling'
        },
    ]
}

//Reducer
export const authorsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Test':
            return {...state}
        default:
            return state
    }
}