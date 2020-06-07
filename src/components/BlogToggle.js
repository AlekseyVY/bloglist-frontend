import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
import TableCell from "@material-ui/core/TableCell";



const BlogToggle = ({blog}) => {
    return (
        <>
            <TableCell>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </TableCell>
            <TableCell>
                {blog.author}
            </TableCell>
        </>
    )
}

BlogToggle.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogToggle
