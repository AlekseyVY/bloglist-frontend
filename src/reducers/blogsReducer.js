import blogService from '../services/blogs'
import blogServices from "../services/blogs";


const reducer = (state = []  , action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        case 'ADD_NEW':
            return state.concat(action.data)
        case 'LIKE':
            const id = action.id
            const change = state.find(blog => blog.id === id)
            const changedBlog = {
                ...change,
                likes: change.likes + 1,
            }
            return state.map(b => b.id !== id ? b : changedBlog)
        case 'DELETE':
            return state.map(blog => blog)
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

export const like = (props) => {
    return async dispatch => {
        await blogService.update(props)
        dispatch({
            type: 'LIKE',
            id: props.id
        })
    }
}

export const remove = (props) => {
    return async dispatch => {
        await blogServices.remove(props)
        dispatch({
            type: 'DELETE'
        })
    }
}

export default reducer
