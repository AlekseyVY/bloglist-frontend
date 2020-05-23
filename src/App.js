import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)


  //Gets all blogs at component render
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

    useEffect(() => {
       const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [user])

  const handleLogin = async (event) => {
    event.preventDefault()
      try {
        const user = await loginService.login({username, password})

          window.localStorage.setItem('loggedUser', JSON.stringify(user))
          blogService.setToken(user.token)
          setUser(user)
          setUsername('')
          setPassword('')
      } catch (exception) {
        console.log(exception)
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
    const logout = () => {
        window.localStorage.clear()
        setUser(null)
    }

  return (
    <div>
      <h1>Login:</h1>
      {user === null ? loginForm()
          :
      <div>
          <p>{user.name} logged in</p>
          <br/>
          <button onClick={() => logout()}>logout</button>
          <br/>
          <h2>Blogs:</h2>
          {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
          )}
      </div>
      }
    </div>
  )
}

export default App
