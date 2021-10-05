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

//AuthorEvents

export enum AuthorEvents {
    ADD_AUTHOR = 'ADD_AUTHOR'
}



//Reducer
export const authorsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case  AuthorEvents.ADD_AUTHOR:
            return {...state}
        default:
            return state
    }
}

//Actions


export const authorActions = {
    addAuthor:(payload:{firstName:string, lastName:string}) => {
        return {
            type: AuthorEvents.ADD_AUTHOR,
            payload
        } as const
    },
}