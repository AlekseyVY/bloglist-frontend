import React from 'react'
import { useSelector} from "react-redux";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import UserView from "./UserView";


const UserList = () => {
    const users = useSelector(state => state.users.users)


    return (
        <div>
            Users:
            <ul>
                <Router>
                {!users ? '' : users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link> have {user.blogs.length} blogs.</li>)}
                    <Switch>
                        <Route path={'/users/:id'}>
                            <UserView />
                        </Route>
                    </Switch>
            </Router>
            </ul>
        </div>
    )
}

export default UserList
