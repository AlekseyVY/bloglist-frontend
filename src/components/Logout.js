import {notify} from "../reducers/notificationReducer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {user} from "../reducers/usersReducer";
import Button from "@material-ui/core/Button";

const Logout = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.user)

    const handleLogout = () => {
        window.localStorage.clear()
        dispatch(notify((`User: ${users.username} logged off`), 5))
        dispatch(user(null))
    }

    return (
        <Button variant={'contained'} color={'primary'} style={{marginLeft: 5}} onClick={() => handleLogout()}>logout</Button>
    )
}

export default Logout
