import React from 'react'
import { useSelector} from "react-redux";
import {Link} from 'react-router-dom'


const UserList = () => {
    const users = useSelector(state => state.users.users)


    return (
        <div>
            Users:
            <ul>
                {!users ? '' : users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link> have {user.blogs.length} blogs.</li>)}
            </ul>
        </div>
    )
}

export default UserList
