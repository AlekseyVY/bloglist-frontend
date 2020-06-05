import blogService from '../services/blogs'

const reducer = (state = []  , action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        default:
            return state
    }
}

export const init = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INIT',
            data: blogs
        })
    }
}

export default reducer
