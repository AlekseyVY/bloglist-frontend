import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Toggable from "./components/Toggable";
import BlogForm from './components/BlogForm'
import BlogToggle from "./components/BlogToggle";

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState(null)
    const [render, setRender] = useState(false)


  //Gets all blogs at component render
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [render])

    useEffect(() => {
       const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const blogFormRef = React.createRef()

  const handleLogin = async (event) => {
    event.preventDefault()
      try {
        const user = await loginService.login({username, password})

          window.localStorage.setItem('loggedUser', JSON.stringify(user))
          blogService.setToken(user.token)
          setUser(user)
          setNotification(`User: ${username} successfuly logged in`)
          setTimeout(() => {
              setNotification(null)
          }, 5000)
          setUsername('')
          setPassword('')
      } catch (exception) {
        setNotification(`UserName or Password are Incorrect. Access denied!`)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
      }
  }

  //login form for logging in user with username and password
  const loginForm = () => (
      <form onSubmit={handleLogin}>
        <div>
          Username: <input type={'text'} value={username} name={'Username'} onChange={({target}) => setUsername(target.value)}/>
        </div>
        <div>
          Password: <input type={'text'} value={password} name={'Password'} onChange={({target}) => setPassword(target.value)}/>
        </div>
        <button type={'submit'}>login</button>
      </form>
  )
    //logout function that clears local storage and sets user to null
    const logout = () => {
        window.localStorage.clear()
        setNotification(`User: ${user.username} logged off`)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
        setUser(null)
    }

    const addBlog = async (blogObject) => {
        blogFormRef.current.toggleVisibility()
        const result = await blogService.create(blogObject)
        blogs.concat(result)
        setNotification(`new Blog: ${blogObject.title} by ${blogObject.author} at ${blogObject.url} successfully added to list.`)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
        setRender(!render)
    }

    const blogForm = () => (
        <Toggable label={'add blog'} ref={blogFormRef}>
            <BlogForm createBlog={addBlog}/>
        </Toggable>
    )


  return (
    <div>
        <div className={'notification'}>
        {notification !== null && <h2>{notification}</h2>}
        </div>
      <h1>Login:</h1>
      {user === null ? loginForm()
          :
      <div>
          <p>{user.name} logged in</p>
          <br/>
          <button onClick={() => logout()}>logout</button>
          <br/>
          <h2>Add blogs to list:</h2>
          {blogForm()}
          <br/>
          <h2>Blogs:</h2>
          {blogs.map(blog =>
              <BlogToggle key={blog.id} blog={blog} />
          )}
      </div>
      }
    </div>
  )
}

export default App
