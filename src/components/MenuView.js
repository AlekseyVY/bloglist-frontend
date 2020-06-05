import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import BlogList from "./BlogList";
import UserList from "./UserList";
import ConditionalLogin from "./ConditionalLogin";

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
        <div>
            <Router>
                <ul style={ulStyle}>
                        <li style={style}><Link to={'/userView'}>Users</Link></li>
                        <li style={style}><Link to={'/blogView'}>Blogs</Link></li>
                        <li style={style}><ConditionalLogin /></li>
                </ul>
                <Switch>
                    <Route path={'/userView'}><UserList /></Route>
                    <Route path={'/blogView'}><BlogList /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MenuView
