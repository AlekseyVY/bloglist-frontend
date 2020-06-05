import React, {useEffect} from "react";
import {passwordX, user, usernameX} from "../reducers/usersReducer";
import blogService from "../services/blogs";
import loginService from "../services/login";
import {notify} from "../reducers/notificationReducer";
import {useDispatch, useSelector} from "react-redux";


const Login = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.users.username)
    const password = useSelector(state => state.users.password)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const userLogged = JSON.parse(loggedUserJSON)
            dispatch(user(userLogged))
            blogService.setToken(userLogged.token)
        }
    }, [dispatch])


    const handleLogin = async (event) => {
        event.preventDefault()
        setTimeout(async () => {
            try {
                const userLogin = await loginService.login({username, password})
                window.localStorage.setItem('loggedUser', JSON.stringify(userLogin))
                blogService.setToken(userLogin.token)
                dispatch(user(userLogin))
                dispatch(notify((`User: ${username} successfuly logged in`), 5))
                dispatch(usernameX(''))
                dispatch(passwordX(''))
            } catch (exception) {
                dispatch(notify((`UserName or Password are Incorrect. Access denied!`), 5))
            }
        }, 0)
    }
    const style = {
        display: 'inline',
        margin: 20
    }

//login form for logging in user with username and password
    return (
        <form onSubmit={handleLogin} style={style}>
            <>
                Username: <input style={{marginRight: 10}} id={'username'} type={'text'} name={'usernames'} onChange={({target}) => {
                dispatch(usernameX(target.value))
            }}/>
            </>
            <>
                Password: <input  id={'password'} type={'text'} name={'passwords'} onChange={({target}) => {
                dispatch(passwordX(target.value))
            }}/>
            </>
            <button style={{marginLeft: 20}} id={'login_button'} type={'submit'}>login</button>
        </form>
    )
}


export default Login
