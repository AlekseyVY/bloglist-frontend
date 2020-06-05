import React, {useEffect} from 'react'
import Login from "./Login";
import Logout from "./Logout";
import {useDispatch, useSelector} from "react-redux";
import {allUsers} from "../reducers/usersReducer";
import {init} from "../reducers/blogsReducer";


const ConditionalLogin = () => {
    const users = useSelector(state => state.users.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allUsers())
    }, [dispatch])

    useEffect(() => {
        dispatch(init())
    }, [dispatch])

    return (
        <>
            {users === null ? <Login />
            :
                <>
                    {users.username} logged in
                    <Logout />
                </>
            }
        </>
    )
}

export default ConditionalLogin
