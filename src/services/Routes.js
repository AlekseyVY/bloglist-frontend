import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogView from "../components/BlogView";


const Routers = () => {

    return (
        <Router>
            <Switch>
                <Route exact path={'/blogs/:id'} component={BlogView}/>
            </Switch>
        </Router>
    )
}

export default Routers
