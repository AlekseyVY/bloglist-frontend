import React, {useState} from 'react'


const BlogToggle = ({blog}) => {
    const [visible, setVisible] = useState(false)
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

    return (
        <div style={blogStyle}>
            <div style={visionHide}>
                {blog.title} by {blog.author} <button onClick={toggleVisibility}>{buttonText()}</button>
            </div>
            <div style={visionShow}>
                <div>{blog.title} <button onClick={toggleVisibility}>{buttonText()}</button></div>
                <div>{blog.url}</div>
                <div>{blog.likes} <button>like</button></div>
                <div>{blog.author}</div>
            </div>
        </div>
    )
}

export default BlogToggle
