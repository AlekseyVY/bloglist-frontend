import React, {useState} from 'react'



const BlogForm = ({createBlog}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')



    const addBlog = async (event) => {
        event.preventDefault()
        createBlog({
            title: title,
            author: author,
            url: url,
            likes: 0
        })
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (
        <div>
            <form onSubmit={addBlog}>
                <div>
                    Title: <input type='text' value={title} name='Title' onChange={({target}) => setTitle(target.value)}/>
                </div>
                <div>
                    Author: <input type={'text'} value={author} name={'Author'} onChange={({target}) => {setAuthor(target.value)}}/>
                </div>
                <div>
                    Url: <input type={'text'} value={url} name={'Url'} onChange={({target}) => {setUrl(target.value)}}/>
                </div>
                <button type={'submit'}>add Blog</button>
            </form>
        </div>
    )
}

export default BlogForm