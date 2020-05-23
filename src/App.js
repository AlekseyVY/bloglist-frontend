import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [notification, setNotification] = useState(null)


  //Gets all blogs at component render
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [blogs])

    useEffect(() => {
       const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

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

    const addBlog = async (event) => {
        event.preventDefault()
        const blogObject = {
            title: title,
            author: author,
            url: url,
            likes: 0
        }
        const result = await blogService.create(blogObject)
        console.log(result)
        blogs.concat(result)
        setNotification(`new Blog: ${title} by ${author} at ${url} successfully added to list.`)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    const noteForm = () => (
        <form onSubmit={addBlog}>
            <div>
                Title: <input type='text' value={title} name='Title' onChange={({target}) => setTitle(target.value)}/>
            </div>
            <div>
                Author: <input type={'text'} value={author} name={'Author'} onChange={({target}) => {setAuthor(target.value)}}/>
            </div>
            <div>
                Url: <input type={'text'} value={url} name={'Url'} onChange={({target}) => {setUrl(target.value)}}/>
            </div>
            <button type={'submit'}>add Blog</button>
        </form>
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
          {noteForm()}
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
