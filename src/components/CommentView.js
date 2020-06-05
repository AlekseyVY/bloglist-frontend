import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";



const CommentView = () => {
    const id = useParams().id
    const blogs = useSelector(state => state.blogs)
    const blog = blogs.find(blog => blog.id === id)

    return (
        <div>
            {blog.comment
                ? <ul>{blog.comment.map((com, id) => <li key={id}>{com}</li>)}</ul>
                : ''
            }
        </div>
    )
}

export default CommentView
