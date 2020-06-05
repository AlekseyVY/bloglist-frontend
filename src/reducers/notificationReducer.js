


const reducer = (state = '', action) => {
    switch(action.type) {
        case 'NOTIFY':
            return action.data
        default:
            return state
    }
}

export const notify = (content, time) => {
    return async dispatch => {
        dispatch({
            type: 'NOTIFY',
            data: content
        })
        clearTimeout()
        setTimeout(() => {
            dispatch({type: 'NOTIFY', data: ''})
        },time * 1000)
    }
}


export default reducer
