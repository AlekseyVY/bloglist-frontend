import React from 'react'
import Login from "./Login";
import Logout from "./Logout";
import {useSelector} from "react-redux";



const ConditionalLogin = () => {
    const users = useSelector(state => state.users.user)


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
