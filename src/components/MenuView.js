import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import BlogList from "./BlogList";
import UserList from "./UserList";
import ConditionalLogin from "./ConditionalLogin";
import UserView from "./UserView";
import BlogView from "./BlogView";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const MenuView = () => {
    const style = {
        display: 'inline',
        marginLeft: 10,
    }
    const ulStyle = {
        paddingTop: 5,
        paddingBottom: 5
    }

    return (
            <Router>
                <AppBar position={'static'}>
                    <Toolbar>
                        <Button color={'inherit'} component={Link} to={'/userView'}>Users</Button>
                        <Button color={'inherit'}component={Link} to={'/blogView'}>Blogs</Button>
                        <ConditionalLogin />
                    </Toolbar>
                </AppBar>
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
