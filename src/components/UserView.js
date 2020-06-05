import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom'
import {useSelector} from "react-redux";


const UserView = () => {
    const users = useSelector(state => state.users.users)
    const id = useParams().id
    const user = users.find(user => user.id === id)

    return (
        <div>
            <h3>{user.name}</h3>
            <h5>added blogs</h5>
            <ul>
                {user.blogs.map((blog, id) => <li key={id}>{blog.title}</li>)}
            </ul>
        </div>
    )
}

export default UserView
