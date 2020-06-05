import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from 'react-router-dom'
import {comment, like} from "../reducers/blogsReducer";
import CommentView from "./CommentView";



const BlogView = () => {
    const [commentX, setCommentX] = useState('')
    const id = useParams().id
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const users = useSelector(state => state.users.users)
    const blog = blogs.find(blog => blog.id === id)
    const userId = blog.user
    const user = users.find(user => user.id === userId)

    const addComment = async (event) => {
        event.preventDefault()
        const commentObject = {
            comment: commentX,
            id: id
        }
        dispatch(comment(commentObject))
        setCommentX('')
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <Link to={blog.url}>{blog.url}</Link>
            <p>{blog.likes} likes <button onClick={() => dispatch(like(blog))}>like</button></p>
            <p>added by {user.name}</p>

            <form onSubmit={addComment}>
                <input type={'text'} value={commentX} onChange={({target}) =>  setCommentX(target.value)}/>
                <button type={'submit'} name={'comment'}>comment</button>
            </form>
            <h4>Comments:</h4>
            {<CommentView />}
        </div>
    )
}

export default BlogView
