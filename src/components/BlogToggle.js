import React, {useState} from 'react'
import blogServices from '../services/blogs'


const BlogToggle = ({blog, render}) => {
    const [visible, setVisible] = useState(false)
    const [likes, setLikes] = useState(blog.likes)
    const visionShow = {display: visible ? '' : 'none'}
    const visionHide = {display: visible ? 'none' : ''}
    const buttonText = () => {
        if(visible){
            return (
                <div>hide</div>
            )
        }
        return (
            <div>view</div>
        )
    }

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    const handleLikes = async () => {
        setLikes(likes + 1)
        let updateObject = {
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: likes + 1
        }
        const propObj = {
            updateObject: updateObject,
            id: blog.id
        }
        await blogServices.update(propObj)
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        await blogServices.remove(blog.id)
        render()
    }

    return (
        <div style={blogStyle}>
            <div style={visionHide}>
                {blog.title} by {blog.author} <button onClick={toggleVisibility}>{buttonText()}</button>
            </div>
            <div style={visionShow}>
                <div>{blog.title} <button onClick={toggleVisibility}>{buttonText()}</button></div>
                <div>{blog.url}</div>
                <div>{likes} <button onClick={handleLikes}>like</button></div>
                <div>{blog.author}</div>
                <div>
                    <button onClick={handleDelete}>remove</button>
                </div>
            </div>
        </div>
    )
}

export default BlogToggle
