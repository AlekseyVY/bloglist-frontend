
const initialState = {
    username: '',
    password: '',
    user: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'USERNAME':
            state.username = action.data
            return state
        case 'PASSWORD':
            state.password = action.data
            return state
        case 'USER':
            state.user = action.data
            return state
        case 'USER_LOGOUT':
            state.user = action.data
            return state
        default:
            return state
    }
}

export const user = (props) => {
    return async dispatch => {
        dispatch({
            type: 'USER',
            data: props
        })
    }
}

export const usernameX = (props) => {
    return async dispatch => {
        dispatch({
            type: 'USERNAME',
            data: props
        })
    }
}

export const passwordX = (props) => {
    return async dispatch => {
        dispatch({
            type: 'PASSWORD',
            data: props
        })
    }
}

export default reducer
