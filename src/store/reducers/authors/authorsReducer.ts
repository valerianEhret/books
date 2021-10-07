import {v1} from "uuid";
import {AppThunkType} from "../../store";

//Types
export type AuthorsState = {
    authors : {
        [key:string]:AuthorType
    },
    isLoading: boolean,
    status: StatusType
}


export type AuthorType = {
    first_name: string
    last_name: string
}

export type StatusType = 'success' | 'idle' | 'error'

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
    },
    isLoading: false,
    status: 'idle'

}

//AuthorEvents

export enum AuthorEvents {
    ADD_AUTHOR = 'ADD_AUTHOR',
    SET_AUTHOR_STATUS = 'SET_AUTHOR_STATUS',
    SET_AUTHOR_IS_LOADING = 'SET_AUTHOR_IS_LOADING',
    DELETE_AUTHOR = 'DELETE_AUTHOR',

}



//Reducer
export const authorsReducer = (state = initialState, action: AuthorsActions) => {
    switch (action.type) {
        case  AuthorEvents.ADD_AUTHOR:
            const id = v1()
            return {
                ...state, authors:{
                    ...state.authors,
                    [id]:{
                        first_name:action.payload.firstName,
                        last_name:action.payload.lastName
                    }
                }
            }
        case AuthorEvents.DELETE_AUTHOR:
            const stateCopy = {...state, authors: {...state.authors}}
            delete stateCopy.authors[action.payload]
            return stateCopy

        case  AuthorEvents.SET_AUTHOR_STATUS:
            return {...state, status:action.payload}
        case  AuthorEvents.SET_AUTHOR_IS_LOADING:
            return {...state, isLoading:action.payload}
        default:
            return {...state}
    }
}

//Actions


export const authorsActions = {
    addAuthor:(payload:{firstName:string, lastName:string}) => {
        return {
            type: AuthorEvents.ADD_AUTHOR,
            payload
        } as const
    },
    setAuthorStatus: (payload:StatusType) =>{
        return {
            type: AuthorEvents.SET_AUTHOR_STATUS,
            payload
        } as const
    },
    setAuthorIsLoading:(payload:boolean) => {
        return {
            type: AuthorEvents.SET_AUTHOR_IS_LOADING,
            payload
        } as const
    },
    deleteAuthor:(payload:string)=>{
        return {
            type: AuthorEvents.DELETE_AUTHOR,
            payload
        } as const
    }
}
//ActionsType
export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AuthorsActions = InferActionsType<typeof authorsActions>

//Thunk
export const addAuthorTC = (payload:{ lastName: string, firstName: string }):AppThunkType => (dispatch) => {
    try {
        dispatch(authorsActions.setAuthorIsLoading(true))
        dispatch(authorsActions.addAuthor(payload))
        dispatch(authorsActions.setAuthorStatus('success'))
    } catch (e) {
        console.log('Error', e)
    } finally {
        dispatch(authorsActions.setAuthorIsLoading(false))
        dispatch(authorsActions.setAuthorStatus('idle'))
    }

}