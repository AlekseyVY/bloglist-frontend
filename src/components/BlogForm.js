import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addNew} from "../reducers/blogsReducer";



const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()



    const addBlog = async (event) => {
        event.preventDefault()
        const blogObject = {
            title: title,
            author: author,
            url: url,
            likes: 0
        }
        dispatch(addNew(blogObject))
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (
        <div>
            <form onSubmit={addBlog}>
                <div>
                    Title: <input id={'title'} type='text' value={title} name='Title' onChange={({target}) => setTitle(target.value)}/>
                </div>
                <div>
                    Author: <input id={'author'} type={'text'} value={author} name={'Author'} onChange={({target}) => {setAuthor(target.value)}}/>
                </div>
                <div>
                    Url: <input id={'url'} type={'text'} value={url} name={'Url'} onChange={({target}) => {setUrl(target.value)}}/>
                </div>
                <button id={'submit_blog'} type={'submit'}>add Blog</button>
            </form>
        </div>
    )
}

export default BlogForm
