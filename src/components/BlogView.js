import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from 'react-router-dom'
import {comment, like} from "../reducers/blogsReducer";
import CommentView from "./CommentView";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";



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
                <p>{blog.likes} likes <Button variant={'contained'} color={'primary'}
                                              onClick={() => dispatch(like(blog))}>like</Button></p>
                <p>added by {user.name}</p>

                <form onSubmit={addComment}>
                    <TextField label={'comment'} type={'text'} value={commentX}
                               onChange={({target}) => setCommentX(target.value)}/>
                    <Button variant={'contained'} color={'primary'} type={'submit'} name={'comment'}>comment</Button>
                </form>
                <h4>Comments:</h4>
                {<CommentView/>}
            </div>
        )
}

export default BlogView
