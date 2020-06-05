import React from 'react'
import Login from "./Login";
import Logout from "./Logout";
import {useSelector} from "react-redux";


const ConditionalLogin = () => {
    const users = useSelector(state => state.users.user)

    return (
        <div>
            {users === null ? <Login />
            :
                <div>
                    <p>{users.username} logged in</p>
                    <Logout />
                </div>
            }
        </div>
    )
}

export default ConditionalLogin
