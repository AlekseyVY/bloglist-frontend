import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import {like} from "../reducers/blogsReducer";



const BlogView = () => {
    const id = useParams().id
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const users = useSelector(state => state.users.users)
    const blog = blogs.find(blog => blog.id === id)
    const userId = blog.user
    const user = users.find(user => user.id === userId)
    return (
        <div>
            <h3>{blog.title}</h3>
            <p>{blog.likes} likes <button onClick={() => dispatch(like(blog))}>like</button></p>
            <p>added by {user.name}</p>
        </div>
    )
}

export default BlogView
