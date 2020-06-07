import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addNew} from "../reducers/blogsReducer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



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
                <>
                    Title: <TextField label={'title'} id={'title'} type='text' value={title} name='Title' onChange={({target}) => setTitle(target.value)}/>
                </>
                <>
                    Author: <TextField label={'author'} id={'author'} type={'text'} value={author} name={'Author'} onChange={({target}) => {setAuthor(target.value)}}/>
                </>
                <>
                    Url: <TextField label={'url'} id={'url'} type={'text'} value={url} name={'Url'} onChange={({target}) => {setUrl(target.value)}}/>
                </>
                <div>
                <Button variant={'contained'} color={'primary'} id={'submit_blog'} type={'submit'}>add Blog</Button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm
