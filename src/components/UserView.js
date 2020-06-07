import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const UserView = () => {
    const users = useSelector(state => state.users.users)
    const id = useParams().id
    const user = users.find(user => user.id === id)

    return (
        <>
            <TableCell>
                <h2>{user.name} added blogs:</h2>
            </TableCell>
            <TableCell>
                {user.blogs.map((blog, id) => <TableRow key={id}>{blog.title}</TableRow>)}
            </TableCell>
        </>
    )
}

export default UserView
