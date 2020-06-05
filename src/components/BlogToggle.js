import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {like, remove} from "../reducers/blogsReducer";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import BlogView from "./BlogView";


const BlogToggle = ({blog}) => {
    const [visible, setVisible] = useState(false)
    const visionShow = {display: visible ? '' : 'none'}
    const visionHide = {display: visible ? 'none' : ''}
    const dispatch = useDispatch()

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


    const handleDelete = async (event) => {
        event.preventDefault()
        dispatch(remove(blog.id))
    }

/*
    return (
        <div style={blogStyle}>
            <div style={visionHide} className={'visibleBlogPart'}>
                <Router>
                    <Link to={`/blogs/${blog.id}`}>{blog.name}</Link>
                </Router>
                {blog.title} by {blog.author} <button id={'view'} onClick={toggleVisibility}>{'view'}</button>
            </div>
            <div style={visionShow} className={'invisibleBlogPart'}>
                <div>{blog.title} <button onClick={toggleVisibility}>{'hide'}</button></div>
                <div>{blog.url}</div>
                <div>{blog.likes} <button id={'like'} onClick={() => dispatch(like(blog))}>like</button></div>
                <div>{blog.author}</div>
                <div>
                    <button id={'remove'} onClick={handleDelete}>remove</button>
                </div>
            </div>
        </div>
    )
    */
    return (
        <div>
        <Router>
            <ul>
                <Link to={`/blogs/${blog.id}`}><li>{blog.title}</li></Link>
            </ul>
            <Switch>
                <Route path={'/blogs/:id'}><BlogView /></Route>
            </Switch>
        </Router>
        </div>
    )
}

BlogToggle.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogToggle
