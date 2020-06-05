import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'



const BlogToggle = ({blog}) => {
    return (
        <div>
            <ul>
                <Link to={`/blogs/${blog.id}`}><li>{blog.title}</li></Link>
            </ul>
        </div>
    )
}

BlogToggle.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogToggle
