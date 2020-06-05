import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import BlogList from "./BlogList";
import UserList from "./UserList";
import ConditionalLogin from "./ConditionalLogin";
import UserView from "./UserView";
import BlogView from "./BlogView";

const MenuView = () => {
    const style = {
        display: 'inline',
        marginLeft: 10,
    }
    const ulStyle = {
        backgroundColor: 'grey',
        paddingTop: 5,
        paddingBottom: 5
    }

    return (
            <Router>
                <ul style={ulStyle}>
                        <li style={style}><Link to={'/userView'}>Users</Link></li>
                        <li style={style}><Link to={'/blogView'}>Blogs</Link></li>
                        <li style={style}><ConditionalLogin /></li>
                </ul>
                <Switch>
                    <Route path={'/userView'}><UserList /></Route>
                    <Route path={'/blogView'}><BlogList /></Route>
                    <Route path={'/blogs/:id'}><BlogView /></Route>
                    <Route exact path={'/users/:id'}><UserView /></Route>
                    <Route path={'/'}><h1>Blog App</h1></Route>
                </Switch>
            </Router>
    )
}

export default MenuView
