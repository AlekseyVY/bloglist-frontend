import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import BlogList from "./BlogList";
import UserList from "./UserList";

const MenuView = () => {

    return (
        <div>
            <Router>
                <Link to={'/userView'}><h3>Users</h3></Link>
                <Link to={'/blogView'}><h3>Blogs</h3></Link>
                <Switch>
                    <Route path={'/userView'}><UserList /></Route>
                    <Route path={'/blogView'}><BlogList /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MenuView
