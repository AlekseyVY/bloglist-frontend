import React from 'react'
import { useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const UserList = () => {
    const users = useSelector(state => state.users.users)


    return (
        <div>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow hover={true}>
                {!users ? '' : users.map(user => <TableCell key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link> have {user.blogs.length} blogs.</TableCell>)}
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserList
