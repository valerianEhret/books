const initialState = {

}


export const booksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'Test':
            return {...state}
        default:
            return state
    }
}