import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {allUsers} from "../reducers/usersReducer";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'


const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    useEffect(() => {
        dispatch(allUsers())
    }, [dispatch])
    console.log(users)

    return (
        <div>
            Users:
            <ul>
                <Router>
                {!users ? '' : users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link> have {user.blogs.length} blogs.</li>)}
                    <Switch>
                        <Route path={'/users/:id'}>

                        </Route>
                    </Switch>
            </Router>
            </ul>
        </div>
    )
}

export default UserList
