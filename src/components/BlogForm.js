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
