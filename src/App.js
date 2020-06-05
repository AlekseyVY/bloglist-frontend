import React from 'react'
import {useSelector} from "react-redux";
import  Logout from "./components/Logout";
import Login from "./components/Login";
import BlogList from "./components/BlogList";
import Notification from "./components/Notification";
import UserList from "./components/UserList";

const App = () => {
    const users = useSelector(state => state.users.user)

  return (
    <div>
        <Notification />
      <h1>Login:</h1>
      {users === null ? <Login />
          :
      <div>
          <p>{users.username} logged in</p>
          <Logout />
          <BlogList />
          <UserList />
      </div>
      }
    </div>
  )
}

export default App
