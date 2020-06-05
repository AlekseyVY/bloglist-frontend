import React, { useEffect } from 'react'
import Toggable from "./components/Toggable";
import BlogForm from './components/BlogForm'
import BlogToggle from "./components/BlogToggle";
import { init } from "./reducers/blogsReducer";
import {useDispatch, useSelector} from "react-redux";
import AddBlog from "./components/AddBlog";
import  Logout from "./components/Logout";
import Login from "./components/Login";

const App = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const notification = useSelector(state => state.notification)
    const users = useSelector(state => state.users.user)

    const compare = (a, b) => {
        if(a.likes < b.likes){
            return 1
        } else if(a.likes > b.likes){
            return -1
        } else {
            return 0
        }
    }

  //Gets all blogs at component render
  useEffect(() => {
      dispatch(init())
  }, [dispatch])

    const blogFormRef = React.createRef()


    const blogForm = () => (
        <Toggable label={'add blog'} ref={blogFormRef}>
            <BlogForm createBlog={<AddBlog />}/>
        </Toggable>
    )


  return (
    <div>
        <div className={'notification'}>
        {notification !== '' && <h2>{notification}</h2>}
        </div>
      <h1>Login:</h1>
      {users === null ? <Login />
          :
      <div>
          <p>{users.username} logged in</p>
          <Logout />
          <h2>Add blogs to list:</h2>
          {blogForm()}
          <h2>Blogs:</h2>
          {blogs.sort(compare).map(blog =>
              <BlogToggle key={blog.id} blog={blog}/>
          )}
      </div>
      }
    </div>
  )
}

export default App
