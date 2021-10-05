import {v1} from "uuid";

//Types
export type AuthorsState = {
    authors : {
        [key:string]:AuthorType
    }
}


export type AuthorType = {
    first_name: string
    last_name: string
}

//Initial State
const initialState: AuthorsState = {
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