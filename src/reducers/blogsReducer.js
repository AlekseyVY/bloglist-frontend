import blogService from '../services/blogs'


const reducer = (state = []  , action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        case 'ADD_NEW':
            return state.concat(action.data)
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

export const addNew = (props) => {
    return async dispatch => {
        const newBlog = await blogService.create(props)
        dispatch({
            type: 'ADD_NEW',
            data: newBlog
        })
    }
}

export default reducer
