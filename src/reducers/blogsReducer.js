import blogService from '../services/blogs'



const blogsReducer = (state = []  , action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
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

export default blogsReducer
